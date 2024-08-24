import { PageBreadcrumb2 } from '@/components'
import ProfileInfo from './components/ProfileInfo'
import ProfileTask from './components/ProfileTask'

const Profile = () => {
	return (
		<>
			<PageBreadcrumb2 appName="Pages" title="Profile" />
			<ProfileInfo />
			<ProfileTask />
		</>
	)
}

export default Profile
