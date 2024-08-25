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
		key: 'condo_management',
		icon: FiLayers,
		label: 'Gestão do Condominio',
		isTitle: false,
		children: [
			{
				key: 'Administrative',
				label: 'Administrativo',
				url: '/condo-management/Administrative',
				parentKey: 'condo_management-admin',
				children: [
					{
						key: 'admin-contracts',
						label: 'Contratos',
						url: '/condo-management/administrative/contracts',
						parentKey: 'condo_management-admin',
					},
					{
						key: 'admin-services',
						label: 'Serviços',
						url: '/condo-management/administrative/services',
						parentKey: 'condo_management-admin',
					},
					{
						key: 'admin-space_reservations',
						label: 'Reservas de Espaços',
						url: '/condo-management/administrative/space-reservations',
						parentKey: 'condo_management-admin',
					},
					{
						key: 'admin-notifications',
						label: 'Notificações',
						url: '/condo-management/administrative/notifications',
						parentKey: 'condo_management-admin',
					}
				]
			},
			{
				key: 'financial',
				label: 'Financeiro',
				url: '/condo-management/financial',
				parentKey: 'condo_management-financial',
				children: []
			},
			{
				key: 'residents',
				label: 'Moradores',
				url: '/condo-management/residents',
				parentKey: 'condo_management-residents',
				children: []
			},
			{
				key: 'concierge',
				label: 'Portaria',
				url: '/condo-management/concierge',
				parentKey: 'condo_management-concierge',
				children: []
			},
		],
	},
]
