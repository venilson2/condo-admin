import { FiCheckCircle, FiShoppingCart, FiUser } from 'react-icons/fi'
import { NotificationType } from './types'

import user4 from '@/assets/images/users/user-4.jpg'
import user5 from '@/assets/images/users/user-5.jpg'

/**
 * for subtraction minutes
 */
function subtractHours(date: Date, minutes: number) {
	date.setMinutes(date.getMinutes() - minutes)
	return date
}

const notifications: NotificationType[] = [
	{
		title: 'Your order is placed',
		description: 'Dummy text of the printing and industry.',
		createdAt: subtractHours(new Date(), 2),
		icon: FiShoppingCart,
	},
	{
		title: 'Meeting with designers',
		description: 'It is a long established fact that a reader.',
		createdAt: subtractHours(new Date(), 10),
		image: user4,
	},
	{
		title: 'UX 3 Task complete.',
		description: 'Dummy text of the printing.',
		createdAt: subtractHours(new Date(), 40),
		icon: FiUser,
	},
	{
		title: 'Your order is placed',
		description: 'It is a long established fact that a reader.',
		createdAt: subtractHours(new Date(), 60),
		image: user5,
	},
	{
		title: 'Payment Successfull',
		description: 'Dummy text of the printing.',
		createdAt: subtractHours(new Date(), 120),
		icon: FiCheckCircle,
	},
]

export { notifications }
