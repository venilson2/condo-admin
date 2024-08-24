import small1 from '@/assets/images/widgets/p-1.png'
import small2 from '@/assets/images/widgets/p-2.png'
import small3 from '@/assets/images/widgets/p-3.png'
import small4 from '@/assets/images/widgets/p-4.png'

export type PricingType = {
	name: string
	price: string
	isPopular?: boolean
}
export type Pricing2Type = {
	name: string
	price: string
	image: string
	features: string[]
	isPopular?: boolean
}

const pricingPlans: PricingType[] = [
	{
		name: 'Basic Plan',
		price: '39.00',
	},
	{
		name: 'Premium Plan',
		price: '49.00',
		isPopular: true,
	},
	{
		name: 'Plus Plan',
		price: '69.00',
	},
	{
		name: 'Master Plan',
		price: '799.00',
	},
]

const pricingPlansData: Pricing2Type[] = [
	{
		name: 'Basic Plan',
		image: small1,
		price: '39.00',
		features: [
			'30GB Disk Space',
			'30 Email Accounts',
			'30GB Monthly Bandwidth',
			'06 Subdomains',
			'10 Domains',
		],
	},
	{
		name: 'Premium Plan',
		image: small2,
		price: '49.00',
		features: [
			'50GB Disk Space',
			'50 Email Accounts',
			'50GB Monthly Bandwidth',
			'10 Subdomains',
			'15 Domains',
		],
		isPopular: true,
	},
	{
		name: 'Plus Plan',
		image: small3,
		price: '69.00',
		features: [
			'80GB Disk Space',
			'80 Email Accounts',
			'80GB Monthly Bandwidth',
			'15 Subdomains',
			'20 Domains',
		],
	},
	{
		name: 'Master Plan',
		image: small4,
		price: '199.00',
		features: [
			'180GB Disk Space',
			'180 Email Accounts',
			'180GB Monthly Bandwidth',
			'50 Subdomains',
			'40 Domains',
		],
	},
]

export { pricingPlans, pricingPlansData }
