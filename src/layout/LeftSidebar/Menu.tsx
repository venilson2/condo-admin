import { Fragment, useCallback, useEffect, useState } from 'react'
import { Collapse } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'

import {
	findAllParent,
	findMenuItem,
	getMenuItemFromURL,
} from '@/common/helpers/menu'
import { MenuItemType } from '@/common/menu'
import clsx from 'clsx'

type SubMenus = {
	item: MenuItemType
	linkClassName?: string
	subMenuClassNames?: string
	activeMenuItems?: Array<string>
	toggleMenu?: (item: MenuItemType, status: boolean) => void
	className?: string
}

const MenuItemWithChildren = ({
	item,
	linkClassName,
	subMenuClassNames,
	activeMenuItems,
	toggleMenu,
}: SubMenus) => {
	const [open, setOpen] = useState<boolean>(activeMenuItems!.includes(item.key))

	useEffect(() => {
		setOpen(activeMenuItems!.includes(item.key))
	}, [activeMenuItems, item])

	const toggleMenuItem = () => {
		const status = !open
		setOpen(status)
		if (toggleMenu) toggleMenu(item, status)
		return false
	}

	const Icon = item.icon

	return (
		<li className={clsx(activeMenuItems?.includes(item.key) && 'mm-active')}>
			<Link
				to=""
				aria-expanded={open}
				data-menu-key={item.key}
				onClick={toggleMenuItem}
				className={clsx(activeMenuItems?.includes(item.key) && 'active')}
			>
				{Icon && (
					<span>
						<Icon size={18} className="menu-icon align-self-center" />
					</span>
				)}
				<span> {item.label}</span>
				{!item.badge ? (
					<span className="menu-arrow">
						<i className="mdi mdi-chevron-right"></i>
					</span>
				) : (
					<span className={`badge bg-${item.badge.variant} ms-auto`}>
						{item.badge.text}
					</span>
				)}
			</Link>
			<Collapse in={open}>
				<div>
					<ul className={`nav-second-level ${subMenuClassNames}`}>
						{(item.children || []).map((child, idx) => {
							return (
								<Fragment key={idx}>
									{child.children ? (
										<MenuItemWithChildren
											item={child}
											linkClassName={
												activeMenuItems!.includes(child.key) ? 'active' : ''
											}
											activeMenuItems={activeMenuItems}
											subMenuClassNames="sub-menu"
										/>
									) : (
										<MenuItem
											item={child}
											className={clsx(
												'nav-item',
												activeMenuItems!.includes(child.key) ? 'active' : ''
											)}
											linkClassName={clsx(
												linkClassName,
												activeMenuItems!.includes(child.key) ? 'active' : ''
											)}
										/>
									)}
								</Fragment>
							)
						})}
					</ul>
				</div>
			</Collapse>
		</li>
	)
}

const MenuItem = ({ item, className, linkClassName }: SubMenus) => {
	return (
		<li className={className}>
			<MenuItemLink item={item} className={linkClassName} />
		</li>
	)
}

const MenuItemLink = ({ item, className }: SubMenus) => {
	const Icon = item.icon
	return (
		<Link
			to={item.url!}
			target={item.target}
			className={`${className}`}
			data-menu-key={item.key}
		>
			{Icon ? (
				<Icon size={18} className="menu-icon align-self-center" />
			) : (
				<i className="ti-control-record" />
			)}
			{item.label}
			{item.badge && (
				<span className={`badge bg-${item.badge.variant} ms-auto`}>
					{item.badge.text}
				</span>
			)}
		</Link>
	)
}

/**
 * Renders the application menu
 */
type AppMenuProps = {
	menuItems: MenuItemType[]
}

const AppMenu = ({ menuItems }: AppMenuProps) => {
	const { pathname } = useLocation()

	const [activeMenuItems, setActiveMenuItems] = useState<MenuItemType['key'][]>(
		[]
	)

	/**
	 * activate the menuitems
	 */
	const activeMenu = useCallback(() => {
		const trimmedURL = pathname?.replaceAll('', '')
		const matchingMenuItem = getMenuItemFromURL(menuItems, trimmedURL)
		if (matchingMenuItem) {
			const activeMt = findMenuItem(menuItems, matchingMenuItem.key)
			if (activeMt)
				setActiveMenuItems([
					activeMt.key,
					...findAllParent(menuItems, activeMt),
				])
		}
	}, [pathname, menuItems])

	useEffect(() => {
		if (menuItems && menuItems.length > 0) activeMenu()
	}, [activeMenu, menuItems])

	return (
		<ul className="metismenu left-sidenav-menu" id="main-side-menu">
			{(menuItems || []).map((item, idx) => {
				return (
					<Fragment key={idx}>
						{item.isTitle ? (
							<Fragment>
								{item.isTitle && idx !== 0 && (
									<hr className="hr-dashed hr-menu" />
								)}
								<li className={clsx('menu-label', idx === 0 ? 'mt-0' : 'my-2')}>
									{item.label}
								</li>
							</Fragment>
						) : (
							<>
								{item.children ? (
									<MenuItemWithChildren
										item={item}
										subMenuClassNames=""
										activeMenuItems={activeMenuItems}
										linkClassName="nav-link"
									/>
								) : (
									<MenuItem
										item={item}
										linkClassName="nav-link"
										className={clsx(
											'nav-item',
											activeMenuItems!.includes(item.key) ? 'active' : ''
										)}
									/>
								)}
							</>
						)}
					</Fragment>
				)
			})}
		</ul>
	)
}

export default AppMenu
