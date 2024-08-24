import type {
	TicketType,
	CallWidgetType,
	PageViewsType,
	OrderChannelType,
	OpportunitiesType,
} from './types'

import logo1 from '@/assets/images/small/img-1.jpg'
import logo2 from '@/assets/images/small/img-2.jpg'
import logo3 from '@/assets/images/small/img-3.jpg'
import logo4 from '@/assets/images/small/img-4.jpg'

import oppo1 from '@/assets/images/widgets/opp-1.png'
import oppo2 from '@/assets/images/widgets/opp-2.png'
import oppo3 from '@/assets/images/widgets/opp-3.png'
import { FiLock, FiPackage, FiTag, FiZap } from 'react-icons/fi'

const ticketData: TicketType[] = [
	{
		title: 'New Tickets',
		count: 155,
		icon: FiTag,
	},
	{
		title: 'Open Tickets',
		count: 101,
		icon: FiPackage,
	},
	{
		title: 'On Hold',
		count: 15,
		icon: FiZap,
	},
	{
		title: 'Unassigned',
		count: 88,
		icon: FiLock,
	},
]

const callData: CallWidgetType[] = [
	{
		icon: 'phone',
		calltime: '0m:27s',
		title: 'Avg.Speed of answer',
		description: 'It is a long established fact that a reader.',
	},
	{
		icon: 'phone',
		calltime: '4m:30s',
		title: 'Time to Resolved Complaint',
		description: 'It is a long established fact that a reader.',
	},
]

const pageViewsData: PageViewsType[] = [
	{
		name: 'Dastone - Admin Dashboard',
		subName: 'analytic-index.html',
		logo: logo1,
		view: '4.3k',
	},
	{
		name: 'Metrica Simple- Admin Dashboard',
		subName: 'sales-index.html',
		logo: logo2,
		view: '4.3k',
	},
	{
		name: 'Crovex - Admin Dashboard',
		subName: 'helpdesk-index.html',
		logo: logo3,
		view: '2.9k',
	},
	{
		name: 'Annex - Admin Dashboard',
		subName: 'calendar.html',
		logo: logo4,
		view: '1.6k',
	},
]

const OrderChannelData: OrderChannelType[] = [
	{
		logo: logo1,
		title: 'Amazon',
		profitLoss: '+4.8',
		profitLossClass: 'success',
		progress: 42,
	},
	{
		logo: logo2,
		title: 'Flipkart',
		profitLoss: '-0.8',
		profitLossClass: 'danger',
		progress: 28,
	},
	{
		logo: logo3,
		title: 'Facebook',
		profitLoss: '+2.1',
		profitLossClass: 'success',
		progress: 18,
	},
	{
		logo: logo4,
		title: 'Instagram',
		profitLoss: '-1.1',
		profitLossClass: 'danger',
		progress: 12,
	},
]

const OpportunitiesData: OpportunitiesType[] = [
	{
		logo: oppo1,
		title: 'Starbucks coffee',
		location: 'Seattle, Washington',
		email: 'Ernest@Webster.com',
	},
	{
		logo: oppo2,
		title: 'Mc Donald',
		location: 'Seattle, Washington',
		email: 'Ernest@Webster.com',
	},
	{
		logo: oppo3,
		title: 'Life Good',
		location: 'Seattle, Washington',
		email: 'Ernest@Webster.com',
	},
	{
		logo: oppo1,
		title: 'Starbucks coffee',
		location: 'Seattle, Washington',
		email: 'Ernest@Webster.com',
	},
]

export {
	ticketData,
	callData,
	pageViewsData,
	OrderChannelData,
	OpportunitiesData,
}
