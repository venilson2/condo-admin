export type EmailsType = {
	id: number
	title: string
	subject: string
	teaser: string
	category?: 'Freelance' | 'Support' | 'Social' | 'Family' | 'Friends'
	date: string
	checked?: boolean
}

export const emails: EmailsType[] = [
	{
		id: 1,
		title: 'Peter, me (3)',
		subject: 'Hello',
		teaser:
			'Trip home from 🎉 Colombo has been arranged, then Jenna will come get me from Stockholm. :)',
		date: 'Mar 6',
	},
	{
		id: 2,
		title: 'me, Susanna (7)',
		subject:
			"Since you asked... and i'm inconceivably bored at the train station",
		teaser:
			"Alright thanks. I'll have to re-book that somehow, i'll get back to you.",
		category: 'Freelance',
		date: 'Mar 6',
	},
	{
		id: 3,
		title: 'Web Support Dennis',
		subject: 'Re: New mail settings',
		teaser: 'Will you answer him asap?',
		date: 'Mar 7',
	},
	{
		id: 4,
		title: 'me, Peter (2)',
		subject: 'Off on Thursday',
		teaser:
			'Eff that place, you might as well stay here with us instead! Sent from my iPhone 4 &gt; 4 mar 2014 at 5:55 pm',
		category: 'Support',
		date: 'Mar 4',
	},
	{
		id: 5,
		title: 'Medium',
		subject: "This Week's Top Stories",
		teaser:
			'Our top pick for you on Medium this week The Man Who Destroyed America’s Ego',
		category: 'Social',
		date: 'Feb 28',
	},
	{
		id: 6,
		title: 'Death to Stock',
		subject: '🎁 Montly High-Res Photos',
		teaser:
			"To create this month's pack, we hosted a party with local musician Jared Mahone here in Columbus, Ohio.",
		date: 'Feb 28',
	},
	{
		id: 7,
		title: 'Randy, me (5)',
		subject: 'Last pic over my village',
		teaser:
			"Yeah i'd like that! Do you remember the video you showed me of your train ride between Colombo and Kandy? The one with the mountain view? I would love to see that one again!",
		category: 'Family',
		date: '5:01 am',
		checked: true,
	},
	{
		id: 8,
		title: 'Andrew Zimmer',
		subject: 'Mochila Beta: Subscription Confirmed',
		teaser:
			"You've been confirmed! Welcome to the ruling class of the inbox. For your records, here is a copy of the information you submitted to us...",
		date: 'Mar 8',
	},
	{
		id: 9,
		title: 'Infinity HR',
		subject: 'Sveriges Hetaste sommarjobb',
		teaser:
			'Hej Nicklas Sandell! Vi vill bjuda in dig till "First tour 2014", ett rekryteringsevent som erbjuder jobb på 16 semesterorter iSverige.',
		date: 'Mar 8',
	},
	{
		id: 10,
		title: 'Revibe',
		subject: 'Weekend on Revibe',
		teaser:
			"Today's Friday and we thought maybe you want some music inspiration for the weekend. Here are some trending tracks and playlists we think you should give a listen!",
		category: 'Friends',
		date: 'Feb 27',
	},
	{
		id: 11,
		title: 'Erik, me (5)',
		subject: 'Regarding our meeting',
		teaser: "That's great, see you on Thursday!",
		date: 'Feb 24',
	},
	{
		id: 12,
		title: 'KanbanFlow',
		subject: "Task assigned: Clone ARP's website",
		teaser: 'You have been assigned 💥 a task by Alex@Work on the board Web.',
		category: 'Social',
		date: 'Feb 24',
	},
	{
		id: 13,
		title: 'Tobias Berggren',
		subject: "Let's go fishing!",
		teaser:
			"Hey, You wanna join me and Fred at the lake tomorrow? It'll be awesome.",
		date: 'Feb 23',
	},
	{
		id: 14,
		title: 'Charukaw, me (7)',
		subject: 'Hey man',
		teaser: "Nah man sorry i don't. Should i get it?",
		date: 'Feb 23',
	},
	{
		id: 15,
		title: 'me, Peter (5)',
		subject: 'Home again!',
		teaser: "That's just perfect! See you tomorrow.",
		category: 'Support',
		date: 'Feb 21',
		checked: true,
	},
	{
		id: 16,
		title: 'Stack Exchange',
		subject: '1 new items in your Stackexchange inbox',
		teaser:
			'The following items were added to your Stack Exchange global inbox since you last checked it.',
		date: 'Feb 21',
	},
	{
		id: 17,
		title: 'Google Drive Team',
		subject: 'You can now use your storage in Google Drive',
		teaser:
			'Hey Nicklas Sandell! Thank you for purchasing extra storage space in Google Drive.',
		date: 'Feb 20',
	},
	{
		id: 18,
		title: 'me, Susanna (11)',
		subject: 'Train/Bus',
		teaser:
			"Yes ok, great! I'm not stuck in Stockholm anymore, we're making progress.🏏",
		date: 'Feb 19',
	},
]
