import { lazy } from 'react'
import { Navigate, RouteProps } from 'react-router-dom'

//Dashboards
const AnalyticsDashboard = lazy(() => import('@/pages/dashboards/Analytics'))
const SalesDashboard = lazy(() => import('@/pages/dashboards/Sales'))

//Apps
const Inbox = lazy(() => import('@/pages/apps/email/Inbox'))
const ReadEmail = lazy(() => import('@/pages/apps/email/ReadEmail'))
const Chat = lazy(() => import('@/pages/apps/Chat'))
const ContactList = lazy(() => import('@/pages/apps/ContactList'))
const FileManager = lazy(() => import('@/pages/apps/FileManager'))
const Invoice = lazy(() => import('@/pages/apps/Invoice'))
const Tasks = lazy(() => import('@/pages/apps/Tasks'))
const Overview = lazy(() => import('@/pages/apps/projects/Overview'))
const Project = lazy(() => import('@/pages/apps/projects/Project'))
const KanbanBoard = lazy(() => import('@/pages/apps/projects/KanbanBoard'))
const Teams = lazy(() => import('@/pages/apps/projects/Teams'))
const NewProject = lazy(() => import('@/pages/apps/projects/NewProject'))
const Products = lazy(() => import('@/pages/apps/ecommerce/Products'))
const ProductList = lazy(() => import('@/pages/apps/ecommerce/ProductList'))
const Cart = lazy(() => import('@/pages/apps/ecommerce/Cart'))
const Checkout = lazy(() => import('@/pages/apps/ecommerce/Checkout'))
const ProductDetail = lazy(() => import('@/pages/apps/ecommerce/ProductDetail'))
const Calendar = lazy(() => import('@/pages/apps/Calendar'))
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
		element: <Navigate to="/dashboards/analytics" />,
	},
	{
		path: '/dashboards/analytics',
		name: 'Dashboard',
		element: <AnalyticsDashboard />,
	},
	{
		path: '/dashboards/sales',
		name: 'Sales',
		element: <SalesDashboard />,
	},
]

const appsRoutes: RoutesProps[] = [
	{
		path: '/apps/email/inbox',
		name: 'Inbox',
		element: <Inbox />,
	},
	{
		path: '/apps/email/read',
		name: 'Read Email',
		element: <ReadEmail />,
	},
	{
		path: '/apps/chat',
		name: 'Chat',
		element: <Chat />,
	},
	{
		path: '/apps/calendar',
		name: 'Calendar',
		element: <Calendar />,
	},
	{
		path: '/apps/contact-list',
		name: 'Cantacts List',
		element: <ContactList />,
	},
	{
		path: '/apps/file-manager',
		name: 'File Manager',
		element: <FileManager />,
	},
	{
		path: '/apps/invoice',
		name: 'Invoice',
		element: <Invoice />,
	},
	{
		path: '/apps/tasks',
		name: 'Tasks',
		element: <Tasks />,
	},
	{
		path: '/apps/projects/overview',
		name: 'Overview',
		element: <Overview />,
	},
	{
		path: '/apps/projects/project',
		name: 'Project',
		element: <Project />,
	},
	{
		path: '/apps/projects/board',
		name: 'Project',
		element: <KanbanBoard />,
	},
	{
		path: '/apps/projects/teams',
		name: 'Teams',
		element: <Teams />,
	},
	{
		path: '/apps/projects/files',
		name: 'Teams',
		element: <FileManager />,
	},
	{
		path: '/apps/projects/new-project',
		name: 'New Project',
		element: <NewProject />,
	},
	{
		path: '/apps/ecommerce/products',
		name: 'Products',
		element: <Products />,
	},
	{
		path: '/apps/ecommerce/product-list',
		name: 'Product List',
		element: <ProductList />,
	},
	{
		path: '/apps/ecommerce/cart',
		name: 'Cart',
		element: <Cart />,
	},
	{
		path: '/apps/ecommerce/checkout',
		name: 'Checkout',
		element: <Checkout />,
	},
	{
		path: '/apps/ecommerce/product-detail',
		name: 'Product Detail',
		element: <ProductDetail />,
	},
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
	...appsRoutes,
]

const allBlankRoutes = [...authRoutes]

export { allAdminRoutes, allBlankRoutes }
