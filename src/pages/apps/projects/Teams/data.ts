import avatar1 from '@/assets/images/users/user-1.jpg'
import avatar2 from '@/assets/images/users/user-2.jpg'
import avatar4 from '@/assets/images/users/user-4.jpg'
import avatar5 from '@/assets/images/users/user-5.jpg'
import avatar9 from '@/assets/images/users/user-9.jpg'
import avatar10 from '@/assets/images/users/user-10.jpg'

import logo1 from '@/assets/images/widgets/project1.jpg'
import logo2 from '@/assets/images/widgets/project2.jpg'
import logo3 from '@/assets/images/widgets/project3.jpg'

export type TeamType = {
	name: string
	leaderName: string
	image: string
	projectLogo: string
	variant: string
}

export const allTeams: TeamType[] = [
	{
		name: 'UI/UX Design Team',
		leaderName: 'Marnie Flowers',
		image: avatar10,
		projectLogo: logo2,
		variant: 'warning',
	},
	{
		name: 'Web Design Team',
		leaderName: 'Willie Miller',
		image: avatar5,
		projectLogo: logo1,
		variant: 'purple',
	},
	{
		name: 'Frontend Developer Team',
		leaderName: 'Jason Haston',
		image: avatar9,
		projectLogo: logo3,
		variant: 'pink',
	},
	{
		name: 'UI/UX Design Team',
		leaderName: 'Marnie Flowers',
		image: avatar4,
		projectLogo: logo3,
		variant: 'primary',
	},
	{
		name: 'Web Design Team',
		leaderName: 'Willie Miller',
		image: avatar2,
		projectLogo: logo2,
		variant: 'info',
	},
	{
		name: 'Frontend Developer Team',
		leaderName: 'Jason Haston',
		image: avatar1,
		projectLogo: logo1,
		variant: 'success',
	},
]
