import { FiActivity, FiBriefcase, FiClock, FiUsers } from 'react-icons/fi'

import logo4 from '@/assets/images/small/atom.svg'
import logo3 from '@/assets/images/small/blocks.svg'
import logo2 from '@/assets/images/small/cobweb.svg'
import logo1 from '@/assets/images/small/rgb.svg'

import browser1 from '@/assets/images/browser_logo/chrome.png'
import browser3 from '@/assets/images/browser_logo/in-explorer.png'
import browser2 from '@/assets/images/browser_logo/micro-edge.png'
import browser4 from '@/assets/images/browser_logo/opera.png'
import type {
	BrowserReport,
	PageViews,
	StatisticType,
	TrafficReport,
} from './types'

const statisticsData: StatisticType[] = [
	{
		title: 'Sessions',
		state: '24k',
		icon: FiUsers,
		subTitle: 'New Sessions Today',
		change: '8.5',
		variant: 'success',
	},
	{
		title: 'Avg.Sessions',
		state: '00:18',
		icon: FiClock,
		subTitle: 'Weekly Avg.Sessions',
		change: '1.5',
		variant: 'success',
	},
	{
		title: 'Bounce Rate',
		state: '$2400',
		icon: FiActivity,
		subTitle: 'Bounce Rate Weekly',
		change: '35',
		variant: 'danger',
	},
	{
		title: 'Goal Completions',
		state: '85000',
		icon: FiBriefcase,
		subTitle: 'Completions Weekly',
		change: '10.5',
		variant: 'success',
	},
]

const pageViews: PageViews[] = [
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

const trafficReports: TrafficReport[] = [
	{
		channel: 'Organic search',
		session: {
			state: 10853,
			change: 52,
		},
		prevPeriod: {
			state: 566,
			change: 92,
		},
		change: 52.8,
		variant: 'success',
	},
	{
		channel: 'Direct',
		session: {
			state: 2545,
			change: 47,
		},
		prevPeriod: {
			state: 498,
			change: 81,
		},
		change: 17.2,
		variant: 'danger',
	},
	{
		channel: 'Referal',
		session: {
			state: 1836,
			change: 38,
		},
		prevPeriod: {
			state: 455,
			change: 74,
		},
		change: 41.12,
		variant: 'success',
	},
	{
		channel: 'Email',
		session: {
			state: 1958,
			change: 31,
		},
		prevPeriod: {
			state: 361,
			change: 61,
		},
		change: 8.24,
		variant: 'danger',
	},
	{
		channel: 'Social',
		session: {
			state: 1566,
			change: 26,
		},
		prevPeriod: {
			state: 299,
			change: 49,
		},
		change: 29.33,
		variant: 'success',
	},
]

const browserReports: BrowserReport[] = [
	{
		browser: {
			name: 'Chrome',
			image: browser1,
		},
		session: {
			state: 10853,
			change: 52,
		},
		bounceRate: 52.8,
		Transaction: {
			state: 566,
			change: 92,
		},
	},
	{
		browser: {
			name: 'Microsoft Edge',
			image: browser2,
		},
		session: {
			state: 2545,
			change: 47,
		},
		bounceRate: 47.54,
		Transaction: {
			state: 498,
			change: 81,
		},
	},
	{
		browser: {
			name: 'Internet-Explorer',
			image: browser3,
		},
		session: {
			state: 1836,
			change: 38,
		},
		bounceRate: 41.12,
		Transaction: {
			state: 455,
			change: 74,
		},
	},
	{
		browser: {
			name: 'Opera',
			image: browser4,
		},
		session: {
			state: 1958,
			change: 31,
		},
		bounceRate: 36.82,
		Transaction: {
			state: 361,
			change: 61,
		},
	},
	{
		browser: {
			name: 'Chrome',
			image: browser1,
		},
		session: {
			state: 10853,
			change: 52,
		},
		bounceRate: 52.8,
		Transaction: {
			state: 566,
			change: 92,
		},
	},
]

export { browserReports, pageViews, statisticsData, trafficReports }
