import logo1 from '@/assets/images/widgets/project1.jpg'
import logo2 from '@/assets/images/widgets/project2.jpg'
import logo3 from '@/assets/images/widgets/project3.jpg'

export type ProjectType = {
	name: string
	clientName: string
	logo: string
	budget: string
	usedBudget: string
	variant: string
}

const allProject: ProjectType[] = [
	{
		name: 'Banking',
		clientName: 'Hyman M. Cross',
		logo: logo2,
		budget: '56,800',
		usedBudget: '22,100',
		variant: 'pink',
	},
	{
		name: 'Transfer money',
		clientName: 'Jack Z Jackson',
		logo: logo1,
		budget: '33,100',
		usedBudget: '61,800',
		variant: 'success',
	},
	{
		name: 'Organic Farming',
		clientName: 'Hyman M. Cross',
		logo: logo3,
		budget: '56,800',
		usedBudget: '24,500',
		variant: 'primary',
	},
	{
		name: 'Book My World',
		clientName: 'Hyman M. Cross',
		logo: logo1,
		budget: '82,000',
		usedBudget: '16,800',
		variant: 'warning',
	},
	{
		name: 'New GPS System',
		clientName: 'Hyman M. Cross',
		logo: logo3,
		budget: '35,200',
		usedBudget: '27,200',
		variant: 'pink',
	},
	{
		name: 'Body Care',
		clientName: 'Hyman M. Cross',
		logo: logo2,
		usedBudget: '36,900',
		budget: '28,500',
		variant: 'info',
	},
]

export { allProject }
