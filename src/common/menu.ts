import type { IconType } from 'react-icons'
import {
	FiBox,
	FiFilePlus,
	FiGrid,
	FiHome,
	FiLayers,
	FiLock,
} from 'react-icons/fi'

export type MenuItemType = {
	key: string
	label: string
	isTitle?: boolean
	icon?: IconType
	url?: string
	parentKey?: string
	target?: string
	badge?: {
		variant: string
		text: string
	}
	children?: MenuItemType[]
}

export const VERTICAL_MENU_ITEMS: MenuItemType[] = [
	{
		key: 'main',
		label: 'Main',
		isTitle: true,
	},
	{
		key: 'dashboard',
		icon: FiHome,
		label: 'Dashboard',
		isTitle: false,
		children: [
			{
				key: 'ds-analytics',
				label: 'Analytics',
				url: '/dashboards/analytics',
				parentKey: 'dashboard',
			},
			{
				key: 'ds-sales',
				label: 'Sales',
				url: '/dashboards/sales',
				parentKey: 'dashboard',
			},
		],
	},
	{
		key: 'apps',
		icon: FiGrid,
		label: 'Apps',
		isTitle: false,
		children: [
			{
				key: 'apps-email',
				label: 'Email',
				isTitle: false,
				parentKey: 'apps',
				children: [
					{
						key: 'email-inbox',
						label: 'Inbox',
						url: '/apps/email/inbox',
						parentKey: 'apps-email',
					},
					{
						key: 'email-read',
						label: 'Read Email',
						url: '/apps/email/read',
						parentKey: 'apps-email',
					},
				],
			},
			{
				key: 'apps-chat',
				label: 'Chat',
				url: '/apps/chat',
				parentKey: 'apps',
			},
			{
				key: 'apps-contact-list',
				label: 'Contact List',
				url: '/apps/contact-list',
				parentKey: 'apps',
			},
			{
				key: 'apps-calendar',
				label: 'Calendar',
				url: '/apps/calendar',
				parentKey: 'apps',
			},
			{
				key: 'apps-file-manager',
				label: 'File Manager',
				url: '/apps/file-manager',
				parentKey: 'apps',
			},
			{
				key: 'apps-invoice',
				label: 'Invoice',
				url: '/apps/invoice',
				parentKey: 'apps',
			},
			{
				key: 'apps-tasks',
				label: 'Tasks',
				url: '/apps/tasks',
				parentKey: 'apps',
			},
			{
				key: 'apps-projects',
				label: 'Projects',
				isTitle: false,
				parentKey: 'apps',
				children: [
					{
						key: 'projects-overview',
						label: 'Overview',
						url: '/apps/projects/overview',
						parentKey: 'apps-overview',
					},
					{
						key: 'projects-project',
						label: 'Project',
						url: '/apps/projects/project',
						parentKey: 'apps-project',
					},
					{
						key: 'projects-board',
						label: 'Board',
						url: '/apps/projects/board',
						parentKey: 'apps-board',
					},
					{
						key: 'projects-teams',
						label: 'Teams',
						url: '/apps/projects/teams',
						parentKey: 'apps-teams',
					},
					{
						key: 'projects-files',
						label: 'Files',
						url: '/apps/projects/files',
						parentKey: 'apps-files',
					},
					{
						key: 'projects-new-project',
						label: 'New Project',
						url: '/apps/projects/new-project',
						parentKey: 'apps-projects',
					},
				],
			},
			{
				key: 'apps-ecommerce',
				label: 'Ecommerce',
				isTitle: false,
				parentKey: 'apps',
				children: [
					{
						key: 'ecommerce-products',
						label: 'Products',
						url: '/apps/ecommerce/products',
						parentKey: 'apps-ecommerce',
					},
					{
						key: 'ecommerce-product-list',
						label: 'Product List',
						url: '/apps/ecommerce/product-list',
						parentKey: 'apps-ecommerce',
					},
					{
						key: 'ecommerce-product-detail',
						label: 'Product Detail',
						url: '/apps/ecommerce/product-detail',
						parentKey: 'apps-ecommerce',
					},
					{
						key: 'ecommerce-cart',
						label: 'Cart',
						url: '/apps/ecommerce/cart',
						parentKey: 'apps-ecommerce',
					},
					{
						key: 'ecommerce-checkout',
						label: 'Checkout',
						url: '/apps/ecommerce/checkout',
						parentKey: 'apps-ecommerce',
					},
				],
			},
		],
	},
	{
		key: 'auth',
		icon: FiLock,
		label: 'Authentication',
		isTitle: false,
		children: [
			{
				key: 'auth-login',
				label: 'Log In',
				url: '/auth/login',
				parentKey: 'auth',
			},
			{
				key: 'auth-register',
				label: 'Register',
				url: '/auth/register',
				parentKey: 'auth',
			},
			{
				key: 'auth-re-password',
				label: 'Re Password',
				url: '/auth/recover-pw',
				parentKey: 'auth',
			},
			{
				key: 'auth-lock-screen',
				label: 'Lock Screen',
				url: '/auth/lock-screen',
				parentKey: 'auth',
			},
			{
				key: 'auth-error-404',
				label: 'Error 404',
				url: '/auth/auth-404',
				parentKey: 'auth',
			},
			{
				key: 'auth-error-500',
				label: 'Error 500',
				url: '/auth/auth-500',
				parentKey: 'auth',
			},
		],
	},
	{
		key: 'component',
		label: 'COMPONENTS & EXTRA',
		isTitle: true,
	},
	{
		key: 'ui',
		icon: FiBox,
		label: 'UI Kit',
		isTitle: false,
		children: [
			{
				key: 'ui-elements',
				label: 'UI Elements',
				isTitle: false,
				parentKey: 'ui',
				children: [
					{
						key: 'elements-alerts',
						label: 'Alerts',
						url: '/ui/elements/alerts',
						parentKey: 'ui-elements',
					},
					{
						key: 'elements-avatars',
						label: 'Avatars',
						url: '/ui/elements/avatars',
						parentKey: 'ui-elements',
					},
					{
						key: 'elements-buttons',
						label: 'Buttons',
						url: '/ui/elements/buttons',
						parentKey: 'ui-elements',
					},
					{
						key: 'elements-badges',
						label: 'Badges',
						url: '/ui/elements/badges',
						parentKey: 'ui-elements',
					},
					{
						key: 'elements-cards',
						label: 'Cards',
						url: '/ui/elements/cards',
						parentKey: 'ui-elements',
					},
					{
						key: 'elements-carousels',
						label: 'Carousels',
						url: '/ui/elements/carousels',
						parentKey: 'ui-elements',
					},
					{
						key: 'elements-check-radio',
						label: 'Check & Radio',
						url: '/ui/elements/check-radio',
						parentKey: 'ui-elements',
					},
					{
						key: 'elements-dropdowns',
						label: 'Dropdowns',
						url: '/ui/elements/dropdowns',
						parentKey: 'ui-elements',
					},
					{
						key: 'elements-grids',
						label: 'Grids',
						url: '/ui/elements/grids',
						parentKey: 'ui-elements',
					},
					{
						key: 'elements-images',
						label: 'Images',
						url: '/ui/elements/images',
						parentKey: 'ui-elements',
					},
					{
						key: 'elements-list',
						label: 'List',
						url: '/ui/elements/list',
						parentKey: 'ui-elements',
					},
					{
						key: 'elements-modals',
						label: 'Modals',
						url: '/ui/elements/modals',
						parentKey: 'ui-elements',
					},
					{
						key: 'elements-nav',
						label: 'Navs',
						url: '/ui/elements/navs',
						parentKey: 'ui-elements',
					},
					{
						key: 'elements-navbar',
						label: 'Navbar',
						url: '/ui/elements/navbar',
						parentKey: 'ui-elements',
					},
					{
						key: 'elements-offcanvas',
						badge: {
							text: 'New',
							variant: 'soft-success',
						},
						label: 'Offcanvas',
						url: '/ui/elements/offcanvas',
						parentKey: 'ui-elements',
					},
					{
						key: 'elements-paginations',
						label: 'Paginations',
						url: '/ui/elements/paginations',
						parentKey: 'ui-elements',
					},
					{
						key: 'elements-popover-tooltip',
						label: 'Popover & Tooltips',
						url: '/ui/elements/popover-tooltip',
						parentKey: 'ui-elements',
					},
					{
						key: 'elements-progress',
						label: 'Progress',
						url: '/ui/elements/progress',
						parentKey: 'ui-elements',
					},
					{
						key: 'elements-spinners',
						label: 'Spinners',
						url: '/ui/elements/spinners',
						parentKey: 'ui-elements',
					},
					{
						key: 'elements-tabs-accordions',
						label: 'Tabs & Accordions',
						url: '/ui/elements/tabs-accordions',
						parentKey: 'ui-elements',
					},
					{
						key: 'elements-toasts',
						label: 'Toasts',
						url: '/ui/elements/toasts',
						parentKey: 'ui-elements',
					},
					{
						key: 'elements-typography',
						label: 'Typography',
						url: '/ui/elements/typography',
						parentKey: 'ui-elements',
					},
					{
						key: 'elements-videos',
						label: 'Videos',
						url: '/ui/elements/videos',
						parentKey: 'ui-elements',
					},
				],
			},
			{
				key: 'ui-advanced',
				label: 'Advanced UI',
				isTitle: false,
				parentKey: 'ui',
				children: [
					{
						key: 'advanced-animation',
						label: 'Animation',
						url: '/ui/advanced/animation',
						parentKey: 'ui-advanced',
					},
					{
						key: 'advanced-clip-board',
						label: 'Clip Board',
						url: '/ui/advanced/clip-board',
						parentKey: 'ui-advanced',
					},
					{
						key: 'advanced-highlight',
						label: 'Highlight',
						url: '/ui/advanced/highlight',
						parentKey: 'ui-advanced',
					},
					{
						key: 'advanced-kanban',
						label: 'Kanban',
						url: '/ui/advanced/kanban',
						parentKey: 'ui-advanced',
					},
					{
						key: 'advanced-Lightbox',
						label: 'Lightbox',
						url: '/ui/advanced/lightbox',
						parentKey: 'ui-advanced',
					},
					{
						key: 'advanced-range-slider',
						label: 'Range Slider',
						url: '/ui/advanced/range-slider',
						parentKey: 'ui-advanced',
					},
					{
						key: 'advanced-ratings',
						label: 'Ratings',
						url: '/ui/advanced/ratings',
						parentKey: 'ui-advanced',
					},
					{
						key: 'advanced-ribbons',
						label: 'Ribbons',
						url: '/ui/advanced/ribbons',
						parentKey: 'ui-advanced',
					},
					{
						key: 'advanced-sweet-alerts',
						label: 'Sweet Alerts',
						url: '/ui/advanced/sweet-alerts',
						parentKey: 'ui-advanced',
					},
				],
			},
			{
				key: 'ui-forms',
				label: 'Forms',
				isTitle: false,
				parentKey: 'ui',
				children: [
					{
						key: 'forms-advance',
						label: 'Advance Elements',
						url: '/ui/forms/advance',
						parentKey: 'ui-forms',
					},
					{
						key: 'forms-elements',
						label: 'Basic Elements',
						url: '/ui/forms/elements',
						parentKey: 'ui-forms',
					},
					{
						key: 'forms-editors',
						label: 'Editors',
						url: '/ui/forms/editors',
						parentKey: 'ui-forms',
					},
					{
						key: 'forms-file-upload',
						label: 'File Upload',
						url: '/ui/forms/file-upload',
						parentKey: 'ui-forms',
					},
					{
						key: 'forms-repeater',
						label: 'Repeater',
						url: '/ui/forms/repeater',
						parentKey: 'ui-forms',
					},
					{
						key: 'forms-validation',
						label: 'Validation',
						url: '/ui/forms/validation',
						parentKey: 'ui-forms',
					},
					{
						key: 'forms-wizard',
						label: 'Wizard',
						url: '/ui/forms/wizard',
						parentKey: 'ui-forms',
					},
					{
						key: 'forms-x-editable',
						label: 'X Editable',
						url: '/ui/forms/xeditable',
						parentKey: 'ui-forms',
					},
				],
			},
			{
				key: 'ui-charts',
				label: 'Charts',
				isTitle: false,
				parentKey: 'ui',
				children: [
					{
						key: 'charts-apex',
						label: 'Apex',
						url: '/ui/charts/apex',
						parentKey: 'ui-charts',
					},
					{
						key: 'charts-chartjs',
						label: 'ChartjS',
						url: '/ui/charts/chartjs',
						parentKey: 'ui-charts',
					},
				],
			},
			{
				key: 'ui-tables',
				label: 'Tables',
				isTitle: false,
				parentKey: 'ui',
				children: [
					{
						key: 'tables-basic',
						label: 'Basic',
						url: '/ui/tables/basic',
						parentKey: 'ui-tables',
					},
					{
						key: 'tables-data-tables',
						label: 'Data Tables',
						url: '/ui/tables/datatables',
						parentKey: 'ui-tables',
					},
				],
			},
			{
				key: 'ui-icons',
				label: 'Icons',
				isTitle: false,
				parentKey: 'ui',
				children: [
					{
						key: 'icons-drip',
						label: 'Drip Icons',
						url: '/ui/icons/dripicon',
						parentKey: 'ui-icons',
					},
					{
						key: 'icons-feather',
						label: 'Feather',
						url: '/ui/icons/feather',
						parentKey: 'ui-icons',
					},
					{
						key: 'icons-fa',
						label: 'Font Awesome',
						url: '/ui/icons/fa',
						parentKey: 'ui-icons',
					},
					{
						key: 'icons-md',
						label: 'Material Design',
						url: '/ui/icons/md',
						parentKey: 'ui-icons',
					},
					{
						key: 'icons-themify',
						label: 'Themify',
						url: '/ui/icons/themify',
						parentKey: 'ui-icons',
					},
					{
						key: 'icons-typicons',
						label: 'Typicons',
						url: '/ui/icons/typicons',
						parentKey: 'ui-icons',
					},
				],
			},
			{
				key: 'ui-maps',
				label: 'Maps',
				isTitle: false,
				parentKey: 'ui',
				children: [
					{
						key: 'maps-google',
						label: 'Google Maps',
						url: '/ui/maps/google',
						parentKey: 'ui-maps',
					},
					{
						key: 'maps-leaflet',
						label: 'Leaflet Maps',
						url: '/ui/maps/leaflet',
						parentKey: 'ui-maps',
					},
					{
						key: 'maps-vector',
						label: 'Vector Maps',
						url: '/ui/maps/vector',
						parentKey: 'ui-maps',
					},
				],
			},
			{
				key: 'ui-email-templates',
				label: 'Email Templates',
				isTitle: false,
				parentKey: 'ui',
				children: [
					{
						key: 'email-templates-alert',
						label: 'Alert Email',
						url: '/ui/email-templates/alert',
						parentKey: 'ui-email-templates',
					},
					{
						key: 'email-templates-basic',
						label: 'Basic Action Email',
						url: '/ui/email-templates/basic',
						parentKey: 'ui-email-templates',
					},
					{
						key: 'email-templates-billing',
						label: 'Billing Email',
						url: '/ui/email-templates/billing',
						parentKey: 'ui-email-templates',
					},
				],
			},
		],
	},
	{
		key: 'widget',
		label: 'Widgets',
		badge: {
			text: 'New',
			variant: 'soft-success',
		},
		isTitle: false,
		url: '/widgets',
		icon: FiLayers,
	},
	{
		key: 'pages',
		icon: FiFilePlus,
		label: 'Pages',
		isTitle: false,
		children: [
			{
				key: 'pages-blogs',
				label: 'Blogs',
				url: '/pages/blogs',
				parentKey: 'pages',
			},
			{
				key: 'pages-faqs',
				label: 'FAQs',
				url: '/pages/faqs',
				parentKey: 'pages',
			},
			{
				key: 'pages-pricing',
				label: 'Pricing',
				url: '/pages/pricing',
				parentKey: 'pages',
			},
			{
				key: 'pages-profile',
				label: 'Profile',
				url: '/pages/profile',
				parentKey: 'pages',
			},
			{
				key: 'pages-starter-page',
				label: 'Starter Page',
				url: '/pages/starter',
				parentKey: 'pages',
			},
			{
				key: 'pages-timeline',
				label: 'Timeline',
				url: '/pages/timeline',
				parentKey: 'pages',
			},
			{
				key: 'pages-tree-view',
				label: 'Treeview',
				url: '/pages/treeview',
				parentKey: 'pages',
			},
		],
	},
]
