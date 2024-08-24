import type { ProjectType, PortfolioType } from './types'

import project1 from '@/assets/images/widgets/project1.jpg'
import project2 from '@/assets/images/widgets/project2.jpg'
import project3 from '@/assets/images/widgets/project3.jpg'
import project4 from '@/assets/images/widgets/project4.jpg'

import dastyle from '@/assets/images/dashboards/dastyle.jpg'
import metrica from '@/assets/images/dashboards/metrica.jpg'
import crovex from '@/assets/images/dashboards/crovex.jpg'
import frogetor from '@/assets/images/dashboards/frogetor.jpg'

const ProjectData: ProjectType[] = [
	{
		image: project2,
		title: 'Body Care',
		client: 'Hyman M. Cross',
		budget: '26,100',
	},
	{
		image: project4,
		title: 'Book My World',
		client: 'Johnson M. delly',
		budget: '71,100',
	},
	{
		image: project3,
		title: 'Banking',
		client: 'Hyman M. Cross',
		budget: '56,700',
	},
	{
		image: project1,
		title: 'Transfer money',
		client: 'Jack Z Jackson',
		budget: '48,200',
	},
	{
		image: project2,
		title: 'Body Care',
		client: 'Hyman M. Cross',
		budget: '26,100',
	},
	{
		image: project4,
		title: 'Book My World',
		client: 'Johnson M. delly',
		budget: '71,100',
	},
	{
		image: project3,
		title: 'Banking',
		client: 'Hyman M. Cross',
		budget: '56,700',
	},
	{
		image: project1,
		title: 'Transfer money',
		client: 'Jack Z Jackson',
		budget: '48,200',
	},
]

const PortfolioData: PortfolioType[] = [
	{
		image: dastyle,
		title: 'Dastyle',
		description:
			'Dastyle is a Bootstrap 4 admin dashboard,It is fully responsive and included awesome features to help build web applications fast and easy.',
	},
	{
		image: metrica,
		title: 'Book My World',
		description:
			'Metrica is a Bootstrap 4 admin dashboard,It is fully responsive and included awesome features to help build web applications fast and easy.',
	},
	{
		image: crovex,
		title: 'Banking',
		description:
			'Crovex is a Bootstrap 4 admin dashboard,It is fully responsive and included awesome features to help build web applications fast and easy.',
	},
	{
		image: frogetor,
		title: 'Transfer money',
		description:
			'Frogetor is a Bootstrap 4 admin dashboard,It is fully responsive and included awesome features to help build web applications fast and easy.',
	},
	{
		image: metrica,
		title: 'Body Care',
		description:
			'Metrica is a Bootstrap 4 admin dashboard,It is fully responsive and included awesome features to help build web applications fast and easy.',
	},
	{
		image: dastyle,
		title: 'Book My World',
		description:
			'Dastyle is a Bootstrap 4 admin dashboard,It is fully responsive and included awesome features to help build web applications fast and easy.',
	},
	{
		image: crovex,
		title: 'Banking',
		description:
			'Crovex is a Bootstrap 4 admin dashboard,It is fully responsive and included awesome features to help build web applications fast and easy.',
	},
	{
		image: frogetor,
		title: 'Transfer money',
		description:
			'Frogetor is a Bootstrap 4 admin dashboard,It is fully responsive and included awesome features to help build web applications fast and easy.',
	},
]

export { ProjectData, PortfolioData }
