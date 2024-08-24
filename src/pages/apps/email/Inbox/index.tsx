import { PageBreadcrumb2 } from '@/components'
import { Col, Row } from 'react-bootstrap'
import EmailLeftSidebar from './components/EmailLeftSidebar'
import EmailRightSidebar from './components/EmailRightSidebar'

const Inbox = () => {
	return (
		<>
			<PageBreadcrumb2 title="Inbox" appName="Apps" />
			<Row>
				<Col xs="12">
					<EmailLeftSidebar />
					<EmailRightSidebar />
				</Col>
			</Row>
		</>
	)
}

export default Inbox
