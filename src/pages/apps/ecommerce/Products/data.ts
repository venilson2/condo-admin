import product1 from '@/assets/images/products/01.png'
import product2 from '@/assets/images/products/02.png'
import product3 from '@/assets/images/products/03.png'
import product4 from '@/assets/images/products/04.png'
import product5 from '@/assets/images/products/05.png'
import product6 from '@/assets/images/products/06.png'
import product7 from '@/assets/images/products/02.png'

export type ProductType = {
	name: string
	category: string
	price: number
	sellPrice: number
	offer: string
	image: string
	ribbon: string
	ribbonColor: string
	ribbonClass: string
}

export const allProducts: ProductType[] = [
	{
		name: 'Fever Gun',
		category: 'Electric',
		offer: '50% off',
		price: 99,
		sellPrice: 49,
		image: product5,
		ribbon: 'ribbon1',
		ribbonColor: 'rib1-primary',
		ribbonClass: 'rib1-primary',
	},
	{
		name: 'N95 Mask',
		category: 'Covid Safety',
		offer: '50% off',
		price: 18,
		sellPrice: 9,
		image: product4,
		ribbon: 'ribbon1',
		ribbonColor: 'rib1-primary',
		ribbonClass: 'rib1-primary',
	},
	{
		name: 'Imported VR Box',
		category: 'Entertainment',
		offer: '50% off',
		price: 99,
		sellPrice: 39,
		image: product3,
		ribbon: 'ribbon1',
		ribbonColor: 'rib1-primary',
		ribbonClass: 'rib1-primary',
	},
	{
		name: 'New Colorful Shoes',
		category: 'Fashion & Life Style',
		offer: '50% off',
		price: 99,
		sellPrice: 39,
		image: product2,
		ribbon: 'ribbon1',
		ribbonColor: 'rib1-primary',
		ribbonClass: 'rib1-primary',
	},
	{
		name: 'Hand Bag',
		category: 'Fashion & Life Style',
		offer: '50% off',
		price: 99,
		sellPrice: 69,
		image: product6,
		ribbon: 'ribbon1',
		ribbonColor: 'rib1-primary',
		ribbonClass: 'rib1-primary',
	},
	{
		name: 'White Table Camera',
		category: 'Security',
		offer: '50% off',
		price: 249,
		sellPrice: 120,
		image: product1,
		ribbon: 'ribbon1',
		ribbonColor: 'rib1-primary',
		ribbonClass: 'rib1-primary',
	},
	{
		name: 'New Colorful Shoes',
		category: 'Fashion & Life Style',
		offer: '50% off',
		price: 99,
		sellPrice: 39,
		image: product2,
		ribbon: 'ribbon1',
		ribbonColor: 'rib1-primary',
		ribbonClass: 'rib1-primary',
	},
	{
		name: 'Unique Blue Bag',
		category: 'Life Style',
		offer: '50% off',
		price: 49,
		sellPrice: 20,
		image: product7,
		ribbon: 'ribbon1',
		ribbonColor: 'rib1-primary',
		ribbonClass: 'rib1-primary',
	},
]
