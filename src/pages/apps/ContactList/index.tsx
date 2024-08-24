import { PageBreadcrumb2 } from '@/components'
import Contacts from './components/Contacts'

const ContactList = () => {
	return (
		<>
			<PageBreadcrumb2 title="Contacts" appName="Apps" />
			<Contacts />
		</>
	)
}

export default ContactList
