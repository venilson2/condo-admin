import user2 from '@/assets/images/users/user-2.jpg'
import user3 from '@/assets/images/users/user-3.jpg'
import user4 from '@/assets/images/users/user-4.jpg'
import user6 from '@/assets/images/users/user-6.jpg'
import user5 from '@/assets/images/users/user-5.jpg'
import user7 from '@/assets/images/users/user-7.jpg'
import user8 from '@/assets/images/users/user-8.jpg'
import user10 from '@/assets/images/users/user-10.jpg'

export type ProjectType = {
	id: number
	title: string
	date: string
	progress: number
	task: string
	comment: number
	variant: string
	images: string[]
}

type FileType = {
	icon: string
	name: string
	variant: string
	date: string
	size: number
}

export type FileCategoryType = {
	title: string
	files: FileType[]
}

type AlertType = {
	title: string
	text?: string
	variant: string
	timer?: number
}
const projects1Data: ProjectType[] = [
	{
		id: 1,
		title: 'Organic Farming',
		date: 'june 06',
		progress: 15,
		task: '15/100',
		comment: 3,
		variant: 'success',
		images: [user3, user5, user7],
	},
	{
		id: 2,
		title: 'Transfer money',
		date: 'june 06',
		progress: 50,
		task: '25/50',
		comment: 7,
		variant: 'secondary',
		images: [user3, user5, user7],
	},
	{
		id: 3,
		title: 'Mobile Account Setting',
		date: 'june 06',
		progress: 100,
		task: '128/128',
		comment: 13,
		variant: 'success',
		images: [user2, user4, user6],
	},
]
const projects2Data: ProjectType[] = [
	{
		id: 1,
		title: 'Book My World',
		date: 'june 08',
		progress: 95,
		task: '82/90',
		comment: 11,
		variant: 'danger',
		images: [user3, user5, user7],
	},
	{
		id: 2,
		title: 'Body Care',
		date: 'june 18',
		progress: 37,
		task: '55/150',
		comment: 8,
		variant: 'info',
		images: [user3, user5, user7],
	},
	{
		id: 3,
		title: 'New GPS System',
		date: 'june 18',
		progress: 100,
		task: '01/80',
		comment: 0,
		variant: 'info',
		images: [user10, user8, user6],
	},
]

const projects: FileCategoryType[] = [
	{
		title: 'Projects',
		files: [
			{
				name: 'Admin_Panel',
				date: '06 March 2021',
				icon: 'file-alt',
				variant: 'primary',
				size: 5,
			},
			{
				name: 'Ecommerce.pdf',
				date: '15 March 2021',
				icon: 'file-code',
				variant: 'danger',
				size: 8,
			},
			{
				name: 'Payment_app.zip',
				date: '11 April 2021',
				icon: 'file-archive',
				variant: 'warning',
				size: 10,
			},
			{
				name: 'App_landing_001',
				date: '06 March 2021 ',
				icon: 'file',
				variant: 'secondary',
				size: 5,
			},
		],
	},
	{
		title: 'Freelancing Projects',
		files: [
			{
				name: 'Admin_Panel',
				date: '06 March 2021',
				icon: 'file-alt',
				variant: 'primary',
				size: 5,
			},
			{
				name: 'Ecommerce.pdf',
				date: '15 March 2021',
				icon: 'file-code',
				variant: 'info',
				size: 8,
			},
		],
	},
]

const pdfFiles: FileCategoryType[] = [
	{
		title: 'PDF Files',
		files: [
			{
				name: 'Admin_Panel',
				date: '06 March 2021',
				icon: 'file-pdf',
				variant: 'info',
				size: 5,
			},
			{
				name: 'Ecommerce.pdf',
				date: '15 March 2021',
				icon: 'file-pdf',
				variant: 'danger',
				size: 8,
			},
			{
				name: 'Payment_app.zip',
				date: '11 April 2021',
				icon: 'file-pdf',
				variant: 'warning',
				size: 10,
			},
			{
				name: 'App_landing_001...',
				date: '06 March 2021 ',
				icon: 'file-pdf',
				variant: 'secondary',
				size: 5,
			},
		],
	},
]

const documents: FileCategoryType[] = [
	{
		title: 'Documents',
		files: [
			{
				name: 'Adharcard_update',
				date: '06 March 2021',
				icon: 'file-pdf',
				variant: 'info',
				size: 5,
			},
			{
				name: 'Pancard',
				date: '15 March 2021',
				icon: 'file-pdf',
				variant: 'danger',
				size: 8,
			},
			{
				name: 'ICICI_statment',
				date: '11 April 2021',
				icon: 'file-pdf',
				variant: 'warning',
				size: 10,
			},
			{
				name: 'March_Invoice',
				date: '06 March 2021 ',
				icon: 'file-pdf',
				variant: 'secondary',
				size: 5,
			},
		],
	},
	{
		title: 'Company Documents',
		files: [
			{
				name: 'Adharcard_update',
				date: '06 March 2021',
				icon: 'file-pdf',
				variant: 'success',
				size: 5,
			},
			{
				name: 'Pancard',
				date: '15 March 2021',
				icon: 'file-pdf',
				variant: 'pink',
				size: 8,
			},
			{
				name: 'ICICI_statment',
				date: '11 April 2021',
				icon: 'file-pdf',
				variant: 'purple',
				size: 10,
			},
		],
	},
	{
		title: 'Personal Documents',
		files: [
			{
				name: 'Adharcard_update',
				date: '06 March 2021',
				icon: 'file-pdf',
				variant: 'blue',
				size: 5,
			},
			{
				name: 'Pancard',
				date: '15 March 2021',
				icon: 'file-pdf',
				variant: 'dark',
				size: 8,
			},
		],
	},
]

const iconAlerts: AlertType[] = [
	{
		title: 'Your work has been saved',
		timer: 1500,
		variant: 'success',
	},
	{
		title: 'Oops...',
		text: 'Something went wrong!',
		variant: 'error',
	},
	{
		title: 'Oops...',
		text: 'Icon warning!',
		variant: 'warning',
	},
	{
		title: 'Oops...',
		text: 'Icon Info!',
		variant: 'info',
	},
]

export {
	projects1Data,
	projects2Data,
	projects,
	pdfFiles,
	documents,
	iconAlerts,
}
