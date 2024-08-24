import avatar2 from '@/assets/images/users/user-2.jpg'
import avatar3 from '@/assets/images/users/user-3.jpg'
import avatar4 from '@/assets/images/users/user-4.jpg'
import avatar5 from '@/assets/images/users/user-5.jpg'
import avatar6 from '@/assets/images/users/user-6.jpg'
import avatar7 from '@/assets/images/users/user-7.jpg'
import avatar8 from '@/assets/images/users/user-8.jpg'
import avatar9 from '@/assets/images/users/user-9.jpg'

export interface ChatUser {
	id?: number
	name?: string
	avatar: string
	lastMessage?: string
	totalUnread?: number
	lastMessageOn?: string
	status?: string
}

export interface ChatMessage {
	id: number
	from: ChatUser
	to: ChatUser
	message: {
		// type: string;
		value: any
	}
	sendOn?: string
}

const users: ChatUser[] = [
	{
		id: 1,
		name: 'Brandon Smith',
		avatar: avatar2,
		lastMessage: 'How are you today?',
		totalUnread: 3,
		lastMessageOn: '4:30am',
		status: 'success',
	},
	{
		id: 2,
		name: 'Maria C',
		avatar: avatar5,
		lastMessage: "Hey! a reminder for tomorrow's meeting?",
		totalUnread: 0,
		lastMessageOn: '5:30am',
		status: 'success',
	},
	{
		id: 3,
		name: 'Dominic A',
		avatar: avatar6,
		lastMessage: "Are we going to have this week's planning meeting?",
		totalUnread: 2,
		lastMessageOn: 'Thu',
		status: 'secondary',
	},
	{
		id: 4,
		name: 'Ronda D',
		avatar: avatar9,
		lastMessage: 'Please check these design assets..',
		totalUnread: 0,
		lastMessageOn: 'Wed',
		status: 'secondary',
	},
	{
		id: 5,
		name: 'Michael H',
		avatar: avatar6,
		lastMessage: 'Are you free for 15 mins? I would like to discuss something',
		totalUnread: 6,
		lastMessageOn: 'Tue',
		status: 'secondary',
	},
	{
		id: 6,
		name: 'Thomas R',
		avatar: avatar7,
		lastMessage: "Let's have meeting today between me, you and Tony...",
		totalUnread: 0,
		lastMessageOn: 'Tue',
		status: 'success',
	},
	{
		id: 7,
		name: 'Thomas J',
		avatar: avatar8,
		lastMessage: 'Howdy?',
		totalUnread: 0,
		lastMessageOn: 'Tue',
		status: 'secondary',
	},
	{
		id: 8,
		name: 'Rikcy J',
		avatar: avatar3,
		lastMessage: 'Are you interested in learning?',
		totalUnread: 28,
		lastMessageOn: 'Mon',
		status: 'secondary',
	},
]

const messages: ChatMessage[] = []

const defaultTo = {
	id: 9,
	name: 'Tosha Minner',
	avatar: avatar4,
}

for (const user of users) {
	messages.push(
		{
			id: 1,
			message: {
				// type: "text",
				value: 'Hello!',
			},
			to: defaultTo,
			from: user,
			sendOn: '10:00',
		},
		{
			id: 2,
			message: {
				// type: "text",
				value: 'Hi, How are you? What about our next meeting?',
			},
			to: user,
			from: defaultTo,
			sendOn: '10:01',
		},
		{
			id: 3,
			message: {
				// type: "text",
				value: 'Yeah everything is fine',
			},
			to: defaultTo,
			from: user,
			sendOn: '10:01',
		},
		{
			id: 4,
			message: {
				// type: "text",
				value: 'Awesome!',
			},
			to: user,
			from: defaultTo,
			sendOn: '10:02',
		},
		{
			id: 5,
			message: {
				// type: "text",
				value: "Let's have it today if you are free",
			},
			to: defaultTo,
			from: user,
			sendOn: '10:03',
		},
		{
			id: 6,
			message: {
				// type: "text",
				value: 'Sure thing! let me know if 2pm works for you',
			},
			to: user,
			from: defaultTo,
			sendOn: '10:03',
		},
		{
			id: 7,
			message: {
				// type: "text",
				value:
					'Sorry, I have another meeting scheduled at 2pm. Can we have it at 3pm instead?',
			},
			to: defaultTo,
			from: user,
			sendOn: '10:04',
		},
		{
			id: 8,
			message: {
				// type: "text",
				value:
					'We can also discuss about the presentation talk format if you have some extra mins',
			},
			to: defaultTo,
			from: user,
			sendOn: '10:04',
		},
		{
			id: 9,
			message: {
				// type: "text",
				value:
					"3pm it is. Sure, let's discuss about presentation format, it would be great to finalize today. I am attaching the last year format and assets here..",
			},
			to: user,
			from: defaultTo,
			sendOn: '10:05',
		},
		{
			id: 10,
			message: {
				// type: "file",
				value:
					'We can also discuss about the presentation talk format if you have some extra mins',
			},
			to: user,
			from: defaultTo,
			sendOn: '10:05',
		}
	)
}

export { users, messages }
