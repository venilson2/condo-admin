import { Link } from 'react-router-dom'
import SimpleBar from 'simplebar-react'
import AppMenu from './Menu'
import { getMenuItems } from '@/common'

import logoDark from '@/assets/images/logo-dark.png'
import logoSM from '@/assets/images/logo-sm.png'
import logoImg from '@/assets/images/logo.png'

const LeftSidebar = () => {
	return (
		<div className="left-sidenav">
			<div className="brand">
				<Link to="/" className="logo">
					<div className="d-flex gap-1 justify-content-center">
						<span>
							<img src={logoSM} alt="logo-small" className="logo-sm" />
						</span>
						<span>
							<img
								src={logoImg}
								alt="logo-large"
								className="logo-lg logo-light"
							/>
							<img
								src={logoDark}
								alt="logo-large"
								className="logo-lg logo-dark"
							/>
						</span>
					</div>
				</Link>
			</div>

			<SimpleBar className="menu-content h-100">
				<AppMenu menuItems={getMenuItems()} />


			</SimpleBar>
		</div>
	)
}

export default LeftSidebar
