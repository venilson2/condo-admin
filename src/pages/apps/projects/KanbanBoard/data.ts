import avatar1 from '@/assets/images/users/user-1.jpg'
import avatar2 from '@/assets/images/users/user-2.jpg'
import avatar3 from '@/assets/images/users/user-3.jpg'
import avatar4 from '@/assets/images/users/user-4.jpg'
import avatar5 from '@/assets/images/users/user-5.jpg'
import avatar6 from '@/assets/images/users/user-6.jpg'
import avatar7 from '@/assets/images/users/user-7.jpg'
import avatar8 from '@/assets/images/users/user-8.jpg'
import avatar9 from '@/assets/images/users/user-9.jpg'
import avatar10 from '@/assets/images/users/user-10.jpg'

export interface TaskTypes {
	id: number
	title: string
	status: string
	comments: number
	userAvatar: {
		id: string
		isImage: boolean
		image: string
	}[]
}

const tasks: TaskTypes[] = [
	{
		id: 1,
		title: 'iOS App home page',
		status: 'Todo',
		comments: 74,
		userAvatar: [
			{
				id: '1',
				isImage: true,
				image: avatar1,
			},
			{
				id: '2',
				isImage: true,
				image: avatar3,
			},
		],
	},
	{
		id: 2,
		title: 'Topnav layout design',
		status: 'Todo',
		comments: 28,
		userAvatar: [
			{
				id: '5',
				isImage: true,
				image: avatar2,
			},
			{
				id: '6',
				isImage: true,
				image: avatar4,
			},
		],
	},
	{
		id: 3,
		title: 'Invite user to a project',
		status: 'Todo',
		comments: 68,
		userAvatar: [
			{
				id: '7',
				isImage: true,
				image: avatar5,
			},
			{
				id: '8',
				isImage: true,
				image: avatar6,
			},
		],
	},
	{
		id: 4,
		title: 'Write a release note',
		status: 'Inprogress',
		comments: 17,
		userAvatar: [
			{
				id: '10',
				isImage: true,
				image: avatar7,
			},
			{
				id: '11',
				isImage: true,
				image: avatar8,
			},
		],
	},
	{
		id: 5,
		title: 'Enable analytics tracking',
		status: 'Inprogress',
		comments: 48,
		userAvatar: [
			{
				id: '12',
				isImage: true,
				image: avatar10,
			},
			{
				id: '14',
				isImage: true,
				image: avatar9,
			},
		],
	},
	{
		id: 6,
		title: 'Kanban board design',
		status: 'CodeReview',
		comments: 65,
		userAvatar: [
			{
				id: '15',
				isImage: true,
				image: avatar2,
			},
			{
				id: '16',
				isImage: true,
				image: avatar4,
			},
		],
	},
	{
		id: 7,
		title: 'Code HTML email template',
		status: 'CodeReview',
		comments: 106,
		userAvatar: [
			{
				id: '18',
				isImage: true,
				image: avatar1,
			},
			{
				id: '19',
				isImage: true,
				image: avatar10,
			},
			{
				id: '20',
				isImage: true,
				image: avatar5,
			},
		],
	},
	{
		id: 8,
		title: 'Brand logo design',
		status: 'CodeReview',
		comments: 95,
		userAvatar: [
			{
				id: '23',
				isImage: true,
				image: avatar1,
			},
		],
	},
	{
		id: 9,
		title: 'Improve animation loader',
		status: 'CodeReview',
		comments: 39,
		userAvatar: [
			{
				id: '24',
				isImage: true,
				image: avatar2,
			},
			{
				id: '25',
				isImage: true,
				image: avatar4,
			},
		],
	},
	{
		id: 10,
		title: 'Dashboard design',
		status: 'Done',
		comments: 287,
		userAvatar: [
			{
				id: '26',
				isImage: true,
				image: avatar1,
			},
			{
				id: '27',
				isImage: true,
				image: avatar3,
			},
			{
				id: '28',
				isImage: true,
				image: avatar8,
			},
		],
	},
	{
		id: 11,
		title: 'Mobile Account Setting',
		status: 'NewProject',
		comments: 3,
		userAvatar: [
			{
				id: '29',
				isImage: true,
				image: avatar9,
			},
			{
				id: '30',
				isImage: true,
				image: avatar1,
			},
		],
	},
	{
		id: 12,
		title: 'Mobile Account Setting',
		status: 'NewProject',
		comments: 6,
		userAvatar: [
			{
				id: '31',
				isImage: true,
				image: avatar9,
			},
		],
	},
	{
		id: 13,
		title: 'Mobile Account Setting',
		status: 'NewProject',
		comments: 3,
		userAvatar: [
			{
				id: '32',
				isImage: true,
				image: avatar8,
			},
			{
				id: '33',
				isImage: true,
				image: avatar1,
			},
		],
	},
	{
		id: 14,
		title: 'Mobile Account Setting',
		status: 'NewProject',
		comments: 3,
		userAvatar: [
			{
				id: '34',
				isImage: true,
				image: avatar4,
			},
			{
				id: '35',
				isImage: true,
				image: avatar1,
			},
		],
	},
	{
		id: 15,
		title: 'Dashboard design',
		status: 'Done',
		comments: 87,
		userAvatar: [
			{
				id: '36',
				isImage: true,
				image: avatar1,
			},
			{
				id: '37',
				isImage: true,
				image: avatar3,
			},
		],
	},
]

export { tasks }
