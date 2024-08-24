import product1 from '@/assets/images/products/01.png'
import product2 from '@/assets/images/products/02.png'
import product3 from '@/assets/images/products/03.png'
import product4 from '@/assets/images/products/04.png'
import product5 from '@/assets/images/products/05.png'
import product6 from '@/assets/images/products/06.png'

type ProductType = {
	name: string
	description: string
	category: string
	image: string
	pics: number
	price: number
	status: 'Stock' | 'Sold'
	availableColor: string[]
}

export const allProducts: ProductType[] = [
	{
		name: 'Apple Watch',
		description: 'Size-05 (Model 2021)',
		category: 'Sports',
		image: product4,
		pics: 32,
		price: 39,
		status: 'Stock',
		availableColor: ['success', 'danger', 'info', 'dark', 'warning'],
	},
	{
		name: 'Morden Chair',
		description: 'Size-Mediam (Model 2021)',
		category: 'Interior',
		image: product1,
		pics: 10,
		price: 99,
		status: 'Sold',
		availableColor: ['success', 'danger', 'info'],
	},
	{
		name: 'Reebok Shoes',
		description: 'size-08 (Model 2021)',
		category: 'Footwear',
		image: product5,
		pics: 24,
		price: 49,
		status: 'Stock',
		availableColor: ['success', 'danger', 'info', 'dark', 'warning'],
	},
	{
		name: 'Cosco Vollyboll',
		description: 'size-04 (Model 2021)',
		category: 'Sports',
		image: product6,
		pics: 8,
		price: 49,
		status: 'Stock',
		availableColor: ['success', 'dark'],
	},
	{
		name: 'Royal Purse',
		description: 'Pure Lether 100%',
		category: 'Life Style',
		image: product4,
		pics: 52,
		price: 89,
		status: 'Stock',
		availableColor: ['success', 'danger', 'info', 'dark', 'warning'],
	},
	{
		name: 'New Modern Chair',
		description: 'size-05 (Model 2021)',
		category: 'Interior',
		image: product3,
		pics: 6,
		price: 20,
		status: 'Stock',
		availableColor: ['success', 'dark', 'warning'],
	},
	{
		name: 'Important Chair',
		description: 'size-05 (Model 2021)',
		category: 'Interior',
		image: product2,
		pics: 32,
		price: 39,
		status: 'Stock',
		availableColor: ['success', 'danger', 'info', 'dark', 'warning'],
	},
	{
		name: 'Nivya Footboll',
		description: 'Size-05 (Model 2021)',
		category: 'Sports',
		image: product2,
		pics: 32,
		price: 39,
		status: 'Stock',
		availableColor: ['success', 'danger', 'info', 'dark', 'warning'],
	},
	{
		name: 'Green Morden Chair',
		description: 'Size-Mediam (Model 2021)',
		category: 'Interior',
		image: product1,
		pics: 10,
		price: 99,
		status: 'Sold',
		availableColor: ['success', 'danger', 'info'],
	},
	{
		name: 'Bata Shoes',
		description: 'size-08 (Model 2021)',
		category: 'Footwear',
		image: product1,
		pics: 24,
		price: 49,
		status: 'Stock',
		availableColor: ['success', 'danger', 'info', 'dark', 'warning'],
	},
]
