import type {
	WidgetType,
	EarningReportType,
	PopularProductsType,
} from './types'

import product1 from '@/assets/images/products/01.png'
import product2 from '@/assets/images/products/02.png'
import product4 from '@/assets/images/products/04.png'
import product5 from '@/assets/images/products/img-5.png'

const WidgetsData: WidgetType[] = [
	{
		title: 'WEEKLY SALES',
		count: '$24,500',
	},
	{
		title: 'ORDERS PLACED',
		count: '520',
	},
	{
		title: 'CONVERSION RATE',
		count: '82.8%',
	},
	{
		title: 'AVG. VALUE',
		count: '$80.5',
	},
]

const EarningReportData: EarningReportType[] = [
	{
		date: '01 January',
		itemCount: 50,
		text: '-$70',
		earnings: '$15,000',
	},
	{
		date: '02 January',
		itemCount: 25,
		text: '-',
		earnings: '$9,500',
	},
	{
		date: '03 January',
		itemCount: 65,
		text: '-$115',
		earnings: '$35,000',
	},
	{
		date: '04 January',
		itemCount: 20,
		text: '-',
		earnings: '$8,500',
	},
	{
		date: '05 January',
		itemCount: 40,
		text: '-$60',
		earnings: '$12,000',
	},
	{
		date: '06 January',
		itemCount: 45,
		text: '-$65',
		earnings: '$13,500',
	},
]

const PopularProductsData: PopularProductsType[] = [
	{
		product: {
			productImage: product1,
			productName: 'Dastone Camera EDM 5D(White)',
			productID: 'A3652',
		},

		price: {
			originalPrice: 70,
			discountPrice: 50,
		},
		sell: {
			originalPrice: 550,
			sellPrice: 450,
		},
		status: 'Stock',
	},
	{
		product: {
			productImage: product2,
			productName: 'Dastone Shoes Max-Zon',
			productID: 'A5002',
		},

		price: {
			originalPrice: 150,
			discountPrice: 99,
		},
		sell: {
			originalPrice: 900,
			sellPrice: 750,
		},
		status: 'Out of Stock',
	},
	{
		product: {
			productImage: product4,
			productName: 'Dastone Mask N99 [ISI]',
			productID: 'A6598',
		},

		price: {
			originalPrice: 250,
			discountPrice: 199,
		},
		sell: {
			originalPrice: 280,
			sellPrice: 220,
		},
		status: 'Stock',
	},
	{
		product: {
			productImage: product5,
			productName: 'Dastone Bag (Blue)',
			productID: 'A9547',
		},

		price: {
			originalPrice: 49,
			discountPrice: 40,
		},
		sell: {
			originalPrice: 1000,
			sellPrice: 500,
		},
		status: 'Out of Stock',
	},
]

export { WidgetsData, EarningReportData, PopularProductsData }
