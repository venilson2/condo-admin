import { PageBreadcrumb2 } from '@/components'
import { Row } from 'react-bootstrap'
import WidgetChart from './components/WidgetChart'
import Widget from './components/Widget'
import PaymentApp from './components/PaymentApp'
import TeamMembers from './components/TeamMembers'
import Task from './components/Task'

const Tasks = () => {
	return (
		<>
			<PageBreadcrumb2 appName="Apps" title="Tasks" />
			<Row>
				<WidgetChart />

				<Widget />

				<PaymentApp />

				<TeamMembers />
				<Task />
			</Row>
		</>
	)
}

export default Tasks
