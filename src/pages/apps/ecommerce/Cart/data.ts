import product1 from '@/assets/images/products/01.png'
import product4 from '@/assets/images/products/04.png'
import product6 from '@/assets/images/products/06.png'
import product7 from '@/assets/images/products/02.png'

type ProductType = {
	name: string
	description: string
	image: string
	price: number
	quantity: number
	total: number
}

const products: ProductType[] = [
	{
		name: 'Reebok Shoes',
		description: 'size-08 (Model 2019)',
		image: product1,
		price: 99,
		quantity: 2,
		total: 198,
	},
	{
		name: 'Red Morden Chair',
		description: 'size-06 (Model 2019)',
		image: product4,
		price: 75,
		quantity: 2,
		total: 150,
	},
	{
		name: 'Lava Purse',
		description: 'Pure Lether 100%(Model 2019)',
		image: product6,
		price: 49,
		quantity: 1,
		total: 49,
	},
	{
		name: 'Important Chair',
		description: 'size-07 (Model 2019)',
		image: product7,
		price: 99,
		quantity: 1,
		total: 99,
	},
]

export { products }
