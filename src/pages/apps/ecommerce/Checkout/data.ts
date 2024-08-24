import product1 from '@/assets/images/products/01.png'
import product4 from '@/assets/images/products/04.png'
import product6 from '@/assets/images/products/06.png'
import product7 from '@/assets/images/products/04.png'

type ProductType = {
	name: string
	image: string
	quantity: number
	total: number
}

export const orderSummery: ProductType[] = [
	{
		name: 'Reebok Shoes',
		image: product1,
		quantity: 2,
		total: 198,
	},
	{
		name: 'Night Lamp',
		image: product6,
		quantity: 2,
		total: 150,
	},
	{
		name: 'Lava Purse',
		image: product4,
		quantity: 1,
		total: 49,
	},
	{
		name: 'Important Chair',
		image: product7,
		quantity: 1,
		total: 99,
	},
]
