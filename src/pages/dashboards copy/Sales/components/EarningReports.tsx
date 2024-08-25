import { ComponentContainerCard } from '@/components'
import { EarningReportData } from '../data'

const EarningReports = () => {
	return (
		<ComponentContainerCard title="Browser Used & Traffic Reports">
			<div className="table-responsive">
				<table className="table mb-0">
					<thead className="table-light">
						<tr>
							<th className="border-top-0">Date</th>
							<th className="border-top-0">Item Count</th>
							<th className="border-top-0">Text</th>
							<th className="border-top-0">Earnings</th>
						</tr>
					</thead>
					<tbody>
						{EarningReportData.map((report, idx) => {
							return (
								<tr key={idx}>
									<td>{report.date}</td>
									<td>{report.itemCount}</td>
									<td className="text-danger">{report.text}</td>
									<td>{report.earnings}</td>
								</tr>
							)
						})}
					</tbody>
				</table>
			</div>
		</ComponentContainerCard>
	)
}

export default EarningReports
