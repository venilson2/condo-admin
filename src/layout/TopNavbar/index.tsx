import { FiMenu } from 'react-icons/fi'
import { Button, NavLink } from 'react-bootstrap'
import { useThemeContext } from '@/context'
import { Notifications, ProfileDropdown, SearchBar } from './components'
import { notifications } from './data'

const TopNavbar = () => {
	const { settings, updateSideNavMode } = useThemeContext()

	const handleLeftMenuCallBack = () => {
		if (settings.sideNavMode == 'default') {
			updateSideNavMode('sm')
		} else {
			updateSideNavMode('default')
		}
	}

	return (
		<>
			<div className="topbar">
				<nav className="navbar-custom">
					<ul className="list-unstyled topbar-nav float-end mb-0">
						<SearchBar />
						<Notifications notifications={notifications} />
						<ProfileDropdown />
					</ul>
					<ul className="list-unstyled topbar-nav mb-0">
						<li>
							<button
								className="nav-link button-menu-mobile"
								onClick={handleLeftMenuCallBack}
							>
								<FiMenu className="align-self-center topbar-icon" />
							</button>
						</li>
						<li className="creat-btn">
							<NavLink>
								<Button variant="soft-primary" size="sm" role="button">
									<i className="fas fa-plus me-2"></i>New Task
								</Button>
							</NavLink>
						</li>
					</ul>
				</nav>
			</div>
		</>
	)
}

export default TopNavbar
