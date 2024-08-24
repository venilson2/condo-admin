type TimelineType = {
	title: string
	description: string
	time: string
	icon: string
	tags?: string[]
}

type Timeline2Type = {
	title: string
	description: string
	date: string
	year: string
}

export const timelineData1: TimelineType[] = [
	{
		title: 'Task finished',
		description:
			'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.',
		time: '10 Min ago',
		icon: 'check-circle',
	},
	{
		title: 'Task Overdue',
		description:
			'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.',
		time: '50 Min ago',
		icon: 'user-clock',
		tags: ['Design', 'HTML'],
	},
	{
		title: 'New Task',
		description:
			'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.',
		time: '10 hours ago',
		icon: 'clipboard-check',
	},
	{
		title: 'New Comment',
		description:
			'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.',
		time: 'Yesterday',
		icon: 'comment-dots',
	},
	{
		title: 'New Lead Miting',
		description:
			'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.',
		time: '14 Nov 2019',
		icon: 'user-friends',
	},
]

export const timelineData2: Timeline2Type[] = [
	{
		title: 'Highest Account Value',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mattis justo id pulvinar suscipit.',
		date: '14 Feb 2019',
		year: 'Feb 2019',
	},
	{
		title: 'Monthly Report',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mattis justo id pulvinar suscipit.',
		date: '26 Jan 2018',
		year: 'Jan 2018',
	},
	{
		title: 'Second Trade',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mattis justo id pulvinar suscipit.',
		date: '1 April 2018',
		year: 'April 2018',
	},
	{
		title: 'April 2018',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mattis justo id pulvinar suscipit.',
		date: '15 Aug 2017',
		year: 'Aug 2017',
	},
	{
		title: 'First Trade',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mattis justo id pulvinar suscipit.',
		date: '24 Dec 2017',
		year: 'Dec 2017',
	},
]
