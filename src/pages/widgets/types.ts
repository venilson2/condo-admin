import { IconType } from 'react-icons'

export type TicketType = {
	title: string
	count: number
	icon: IconType
}

export type CallWidgetType = {
	icon: string
	calltime: string
	title: string
	description: string
}

export type PageViewsType = {
	logo: string
	name: string
	subName: string
	view: string
}

export type OrderChannelType = {
	logo: string
	title: string
	profitLoss: string
	profitLossClass: string
	progress: number
}

export type OpportunitiesType = {
	logo: string
	title: string
	location: string
	email: string
}
