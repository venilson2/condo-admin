import { ComponentContainerCard } from '@/components'
import { Link } from 'react-router-dom'
import { trafficReports } from '../data'

const TrafficReports = () => {
	return (
		<ComponentContainerCard title="Browser Used & Traffic Reports">
			<div className="table-responsive browser_users">
				<table className="table mb-0">
					<thead className="thead-light">
						<tr>
							<th className="border-top-0">Channel</th>
							<th className="border-top-0">Sessions</th>
							<th className="border-top-0">Prev.Period</th>
							<th className="border-top-0">% Change</th>
						</tr>
					</thead>
					<tbody>
						{trafficReports.map((report, idx) => {
							return (
								<tr key={idx}>
									<td>
										<Link to="" className="text-primary">
											{report.channel}
										</Link>
									</td>
									<td>
										{report.session.state}
										<small className="text-muted">
											({report.session.change}%)
										</small>
									</td>
									<td>
										{report.prevPeriod.state}
										<small className="text-muted">
											({report.prevPeriod.change}%)
										</small>
									</td>
									<td>
										{report.variant == 'danger' && '-'}
										{report.change}%{' '}
										{report.variant == 'danger' ? (
											<i className={`fas fa-caret-down text-danger font-16`} />
										) : (
											<i className="fas fa-caret-up text-success font-16" />
										)}
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

export default TrafficReports
