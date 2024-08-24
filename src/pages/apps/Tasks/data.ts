import type { TasksType } from './types'

//Import Images
import user1 from '@/assets/images/users/user-1.jpg'
import user2 from '@/assets/images/users/user-2.jpg'
import user4 from '@/assets/images/users/user-4.jpg'
import user5 from '@/assets/images/users/user-5.jpg'
import user6 from '@/assets/images/users/user-6.jpg'
import user7 from '@/assets/images/users/user-7.jpg'
import user8 from '@/assets/images/users/user-8.jpg'
import user9 from '@/assets/images/users/user-9.jpg'
import user10 from '@/assets/images/users/user-10.jpg'

const TaskData: TasksType[] = [
	{
		iconColor: 'success',
		title: 'Organic Farming',
		description:
			'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.',
		timeCount: '01:33',
		timeRequired: '9:30',
		date: 'June 06',
		progress: 15,
		progressColor: 'secondary',
		images: [user1, user5, user7],
		taskComplete: 15,
		requiredTasks: 100,
		messages: 3,
	},
	{
		iconColor: 'danger',
		title: 'Book My World',
		description:
			'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.',
		timeCount: '10:33',
		timeRequired: '9:30',
		date: 'June 08',
		progress: 95,
		progressColor: 'secondary',
		images: [user9, user5, user7],
		taskComplete: 82,
		requiredTasks: 90,
		messages: 11,
	},
	{
		iconColor: 'secondary',
		title: 'Transfer money',
		description:
			'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.',
		timeCount: '01:33',
		timeRequired: '9:30',
		date: 'June 06',
		progress: 50,
		progressColor: 'secondary',
		images: [user2, user5, user7],
		taskComplete: 25,
		requiredTasks: 50,
		messages: 7,
	},
	{
		iconColor: 'info',
		title: 'Body Care',
		description:
			'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.',
		timeCount: '01:33',
		timeRequired: '9:30',
		date: 'June 18',
		progress: 37,
		progressColor: 'secondary',
		images: [user8, user5, user7],
		taskComplete: 55,
		requiredTasks: 150,
		messages: 8,
	},
	{
		iconColor: 'success',
		title: 'Mobile Account Setting',
		description:
			'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.',
		timeCount: '01:20',
		timeRequired: '1:30',
		date: 'June 06',
		progress: 100,
		progressColor: 'success',
		images: [user2, user4, user6],
		taskComplete: 95,
		requiredTasks: 95,
		messages: 13,
	},
	{
		iconColor: 'info',
		title: 'New GPS System',
		description:
			'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.',
		timeCount: '01:33',
		timeRequired: '9:30',
		date: 'June 18',
		progress: 1,
		progressColor: 'secondary',
		images: [user10, user8, user6],
		taskComplete: 1,
		requiredTasks: 80,
		messages: 3,
	},
]

export { TaskData }
