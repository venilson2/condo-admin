import small1 from '@/assets/images/small/img-1.jpg'
import small2 from '@/assets/images/small/img-2.jpg'
import small3 from '@/assets/images/small/img-3.jpg'
import small6 from '@/assets/images/small/img-6.jpg'

import user1 from '@/assets/images/users/user-1.jpg'
import user3 from '@/assets/images/users/user-3.jpg'
import user4 from '@/assets/images/users/user-4.jpg'
import user5 from '@/assets/images/users/user-5.jpg'
import user8 from '@/assets/images/users/user-8.jpg'

export type BlogType = {
	title: string
	type: string
	image: string
	name: string
	date: string
	avatar: string
}

export const blogs: BlogType[] = [
	{
		title: 'There are many variations of passages of Lorem',
		type: 'Photography',
		image: small1,
		name: 'Donald Gardner',
		date: '26 mar 2020',
		avatar: user5,
	},
	{
		title: 'The standard chunk of Lorem Ipsum used since',
		type: 'Fruit',
		image: small2,
		name: 'Susan Brady',
		date: '01 Feb 2020',
		avatar: user4,
	},
	{
		title: 'Contrary to popular belief, Lorem Ipsum is',
		type: 'Safari',
		image: small3,
		name: 'Brandon Perez',
		date: '15 March 2020',
		avatar: user3,
	},
	{
		title: 'Many desktop publishing packages web',
		type: 'Food',
		image: small3,
		name: 'Jen Harting',
		date: '12 Dec 2020',
		avatar: user4,
	},
	{
		title: "words which don't look even slightly",
		type: 'Drink',
		image: small3,
		name: 'Charles Woodall',
		date: '26 June 2020',
		avatar: user1,
	},
	{
		title: 'It is a long established fact that a reader will be',
		type: 'Fashion',
		image: small6,
		name: 'Donald Gardner',
		date: '26 mars 2020',
		avatar: user8,
	},
]
