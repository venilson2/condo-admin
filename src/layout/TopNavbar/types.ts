import type { IconType } from 'react-icons'

export type NotificationType = {
	title: string
	description: string
	createdAt: Date
	icon?: IconType
	image?: string
}
