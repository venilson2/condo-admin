import type { IconType } from 'react-icons'
import {
	FiGrid,
	FiLayers,
	FiHome,
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
		label: '',
		isTitle: true,
	},
	{
		key: 'dashboard',
		label: 'Dashboard',
		isTitle: false,
		url: '/dashboard',
		icon: FiHome,
	},
	{
		key: 'condominium_management',
		icon: FiLayers,
		label: 'Gestão do Condominio',
		isTitle: false,
		children: [
			{
				key: 'Administrative',
				label: 'Administrativo',
				url: '/dashboards/Administrative',
				parentKey: 'condominium_management-admin',
				children: [
					{
						key: 'admin-contracts',
						label: 'Contratos',
						url: '/dashboards/administrative/contracts',
						parentKey: 'condominium_management-admin',
					},
					{
						key: 'admin-services',
						label: 'Serviços',
						url: '/dashboards/administrative/services',
						parentKey: 'condominium_management-admin',
					},
					{
						key: 'admin-space_reservations',
						label: 'Reservas de Espaços',
						url: '/dashboards/administrative/space-reservations',
						parentKey: 'condominium_management-admin',
					},
					{
						key: 'admin-circulars',
						label: 'Circulares',
						url: '/dashboards/administrative/circulars',
						parentKey: 'condominium_management-admin',
					},
					{
						key: 'admin-notifications',
						label: 'Notificações',
						url: '/dashboards/administrative/notifications',
						parentKey: 'condominium_management-admin',
					},
					{
						key: 'admin-assets',
						label: 'Patrimônios',
						url: '/dashboards/administrative/assets',
						parentKey: 'condominium_management-admin',
					}
				]
			},
			{
				key: 'financial',
				label: 'Financeiro',
				url: '/dashboards/financial',
				parentKey: 'condominium_management-financial',
				children: []
			},
			{
				key: 'residents',
				label: 'Moradores',
				url: '/dashboards/residents',
				parentKey: 'condominium_management-residents',
				children: []
			},
			{
				key: 'concierge',
				label: 'Portaria',
				url: '/dashboards/concierge',
				parentKey: 'condominium_management-concierge',
				children: []
			},
		],
	},
]
