import { ComponentContainerCard } from '@/components'
import { Image } from 'react-bootstrap'
import { browserReports } from '../data'

const BrowserReports = () => {
	return (
		<ComponentContainerCard title="Browser Used & Traffic Reports">
			<div className="table-responsive browser_users">
				<table className="table mb-0">
					<thead className="thead-light">
						<tr>
							<th className="border-top-0">Browser</th>
							<th className="border-top-0">Sessions</th>
							<th className="border-top-0">Bounce Rate</th>
							<th className="border-top-0">Transactions</th>
						</tr>
					</thead>
					<tbody>
						{browserReports.map((report, idx) => {
							return (
								<tr key={idx}>
									<td>
										<Image
											src={report.browser.image}
											height={16}
											className="me-2"
										/>
										{report.browser.name}
									</td>
									<td>
										{report.session.state}
										<small className="text-muted">
											({report.session.change}%)
										</small>
									</td>
									<td> {report.bounceRate}%</td>
									<td>
										{report.Transaction.state}
										<small className="text-muted">
											({report.Transaction.change}%)
										</small>
									</td>
								</tr>
							)
						})}
					</tbody>
				</table>
			</div>
		</ComponentContainerCard>
	)
}

export default BrowserReports
