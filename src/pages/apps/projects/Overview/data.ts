import type { Project, ProjectStatusType } from './types'

import avatar2 from '@/assets/images/users/user-2.jpg'
import avatar3 from '@/assets/images/users/user-3.jpg'
import avatar4 from '@/assets/images/users/user-4.jpg'
import avatar5 from '@/assets/images/users/user-5.jpg'
import avatar6 from '@/assets/images/users/user-6.jpg'
import avatar8 from '@/assets/images/users/user-8.jpg'

import projectLogo3 from '@/assets/images/widgets/project3.jpg'
import projectLogo2 from '@/assets/images/widgets/project2.jpg'
import projectLogo1 from '@/assets/images/widgets/project1.jpg'

export const allProjects: Project[] = [
	{
		name: 'Product Devlopment',
		client: {
			name: ' Kevin J. Heal',
			image: avatar2,
		},
		startDate: '20/3/2021',
		deadLine: '5/5/2021',
		status: 'Active',
		progress: 92,
	},
	{
		name: 'New Office Building',
		client: {
			name: 'Frank M. Lyons',
			image: avatar3,
		},
		startDate: '11/6/2021',
		deadLine: '15/7/2021',
		status: 'Pending',
		progress: 0,
	},
	{
		name: 'Website & Blog',
		client: {
			name: ' Hyman M. Cross',
			image: avatar4,
		},
		startDate: '21/6/2021',
		deadLine: '3/7/2021',
		status: 'Pending',
		progress: 0,
	},
	{
		name: 'Market Research',
		client: {
			name: 'Angelo E. Butler',
			image: avatar5,
		},
		startDate: '30/4/2021',
		deadLine: '1/6/2021',
		status: 'Active',
		progress: 78,
	},
	{
		name: 'Export Marketing',
		client: {
			name: 'Robert C. Golding',
			image: avatar6,
		},
		startDate: '20/3/2021',
		deadLine: '5/5/2021',
		status: 'Active',
		progress: 45,
	},
	{
		name: 'Website & Blog',
		client: {
			name: 'Phillip T. Morse',
			image: avatar8,
		},
		startDate: '8/4/2021',
		deadLine: '2/6/2021',
		status: 'Complete',
		progress: 100,
	},
]

export const projectStatus: ProjectStatusType[] = [
	{
		projectName: 'Payment App',
		client: 'Kevin J. Heal',
		logo: projectLogo3,
		startDate: '02 June 2021',
		deadline: '31 Oct 2021',
		day: 35,
		progress: 34,
		variant: 'warning',
	},
	{
		projectName: 'Banking',
		client: 'Hyman M. Cross',
		logo: projectLogo2,
		startDate: '15 Nov 2021',
		deadline: '28 Fab 2021',
		day: 35,
		progress: 15,
		variant: 'primary',
	},
	{
		projectName: 'Transfer Money',
		client: 'Kevin J. Heal',
		logo: projectLogo1,
		startDate: '01 Jan 2021',
		deadline: '15 Mar 2021',
		day: 2,
		progress: 100,
		variant: 'danger',
	},
]
