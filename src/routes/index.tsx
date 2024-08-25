import { lazy } from 'react'
import { Navigate, RouteProps } from 'react-router-dom'

//Dashboard
const Dashboard = lazy(() => import('@/pages/dashboard'))

// Condo Management
const Contracts = lazy(() => import('@/pages/condo-management/administrative/contracts'))
const Notifications = lazy(() => import('@/pages/condo-management/administrative/notifications'))
const Services = lazy(() => import('@/pages/condo-management/administrative/services'))
const SpaceReservations = lazy(() => import('@/pages/condo-management/administrative/space-reservations'))

const Login = lazy(() => import('@/pages/authentication/Login'))
const Register = lazy(() => import('@/pages/authentication/Register'))
const RecoverPW = lazy(() => import('@/pages/authentication/RecoverPW'))
const Lockscreen = lazy(() => import('@/pages/authentication/LockScreen'))
const Error404 = lazy(() => import('@/pages/authentication/Error404'))
const Error500 = lazy(() => import('@/pages/authentication/Error500'))

export type RoutesProps = {
	path: RouteProps['path']
	name: string
	element: RouteProps['element']
}

const dashboardRoutes: RoutesProps[] = [
	{
		path: '/',
		name: 'Home Page',
		element: <Navigate to="/dashboard" />,
	},
	{
		path: '/dashboard',
		name: 'Dashboard',
		element: <Dashboard />,
	},
]

const condominiummManagementRoutes: RoutesProps[] = [
	{
		path: '/condo-management/administrative/contracts',
		name: 'Contracts',
		element: <Contracts />,
	},
	{
		path: '/condo-management/administrative/notifications',
		name: 'Notifications',
		element: <Notifications />,
	},
	{
		path: '/condo-management/administrative/services',
		name: 'Services',
		element: <Services />,
	},
	{
		path: '/condo-management/administrative/space-reservations',
		name: 'Space Reservations',
		element: <SpaceReservations />
	}
]


const authRoutes: RoutesProps[] = [
	{
		path: '/auth/login',
		name: 'Login',
		element: <Login />,
	},
	{
		path: '/auth/register',
		name: 'Register',
		element: <Register />,
	},
	{
		path: '/auth/recover-pw',
		name: 'Recover PW',
		element: <RecoverPW />,
	},
	{
		path: '/auth/lock-screen',
		name: 'Lockscreen',
		element: <Lockscreen />,
	},
	{
		path: '/auth/auth-404',
		name: '404 Error',
		element: <Error404 />,
	},
	{
		path: '/auth/auth-500',
		name: '500 Error',
		element: <Error500 />,
	},
	{
		path: '*',
		name: '404 Error',
		element: <Error404 />,
	},
]

const allAdminRoutes = [
	...dashboardRoutes,
	...condominiummManagementRoutes
]

const allBlankRoutes = [...authRoutes]

export { allAdminRoutes, allBlankRoutes }
