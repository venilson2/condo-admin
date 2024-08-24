import { Suspense, lazy, type ReactNode, useEffect } from 'react'
import { Preloader } from '@/components'
import { useThemeContext } from '@/context'
import { useViewPort } from '@/hooks'
const TopNavbar = lazy(() => import('./TopNavbar'))
const Footer = lazy(() => import('./Footer'))
const LeftSideBar = lazy(() => import('./LeftSidebar'))

const Layout = ({ children }: { children: ReactNode }) => {
	const { updateSideNavMode } = useThemeContext()

	const { width } = useViewPort()

	useEffect(() => {
		if (document.body && width <= 1024) {
			!document.body.classList.contains('enlarge-menu-all') &&
				document.body.classList.add('enlarge-menu-all')
		}
		return () => {
			document.body.classList.contains('enlarge-menu-all') &&
				document.body.classList.remove('enlarge-menu-all')
		}
	}, [width])

	useEffect(() => {
		if (width < 1324) {
			updateSideNavMode('sm')
		} else if (width >= 1324) {
			updateSideNavMode('default')
		}
	}, [width])
	return (
		<Suspense fallback={<div />}>
			<Suspense>
				<LeftSideBar />
			</Suspense>
			<div className="page-wrapper">
				<Suspense fallback={<div />}>
					<TopNavbar />
				</Suspense>
				<div className="page-content">
					<div className="container-fluid">
						<Suspense fallback={<Preloader />}>{children}</Suspense>
					</div>
					<Suspense fallback={<div />}>
						<Footer />
					</Suspense>
				</div>
			</div>
		</Suspense>
	)
}

export default Layout
