import { PageBreadcrumb } from '@/components'
import {
	Card,
	CardBody,
	CardHeader,
	CardTitle,
	Col,
	Row,
} from 'react-bootstrap'

import { CustomersDetailsType, customersDetails } from './data'

import { PageSize, Table } from '@/components'

const columns = [
	{
		Header: 'ID',
		accessor: 'id',
		defaultCanSort: true,
	},
	{
		Header: 'Name',
		accessor: 'name',
		defaultCanSort: true,
	},
	{
		Header: 'Ext.',
		accessor: 'ext',
		defaultCanSort: false,
	},
	{
		Header: 'City',
		accessor: 'city',
		defaultCanSort: true,
	},
	{
		Header: 'Start Date',
		accessor: 'startDate',
		defaultCanSort: true,
	},
	{
		Header: 'Completion',
		accessor: 'completion',
		defaultCanSort: true,
	},
]

const sizePerPageList: PageSize[] = [
	{
		text: '5',
		value: 5,
	},
	{
		text: '10',
		value: 10,
	},
	{
		text: '25',
		value: 25,
	},
	{
		text: 'All',
		value: customersDetails.length,
	},
]

const DataTables = () => {
	return (
		<>
			<PageBreadcrumb title="Datatables" subName="Tables" />
			<Row>
				<Col xs="12">
					<Card>
						<CardHeader>
							<CardTitle>Pagination &amp; Sort </CardTitle>
							<p className="text-muted mb-0">
								A simple example of table with pagination and column sorting
							</p>
						</CardHeader>
						<CardBody>
							<Table<CustomersDetailsType>
								columns={columns}
								data={customersDetails}
								pageSize={5}
								sizePerPageList={sizePerPageList}
								isSortable={true}
								pagination={true}
							/>
						</CardBody>
					</Card>
				</Col>
			</Row>
			<Row>
				<Col xs="12">
					<Card>
						<CardHeader>
							<CardTitle>Search</CardTitle>
							<p className="text-muted mb-0">A Table allowing search</p>
						</CardHeader>
						<CardBody>
							<Table<CustomersDetailsType>
								columns={columns}
								data={customersDetails}
								pageSize={5}
								sizePerPageList={sizePerPageList}
								isSortable={true}
								pagination={true}
								isSearchable={true}
							/>
						</CardBody>
					</Card>
				</Col>
			</Row>
			<Row>
				<Col xs="12">
					<Card>
						<CardHeader>
							<CardTitle>Multiple Row Selection</CardTitle>
							<p className="text-muted mb-0">
								This table allowing selection of multiple rows
							</p>
						</CardHeader>
						<CardBody>
							<Table<CustomersDetailsType>
								columns={columns}
								data={customersDetails}
								pageSize={5}
								sizePerPageList={sizePerPageList}
								isSortable={true}
								pagination={true}
								isSelectable={true}
							/>
						</CardBody>
					</Card>
				</Col>
			</Row>
			<Row>
				<Col xs="12">
					<Card>
						<CardHeader>
							<CardTitle>Expand Row</CardTitle>
							<p className="text-muted mb-0">
								Expand row to see more additional details
							</p>
						</CardHeader>
						<CardBody>
							<Table<CustomersDetailsType>
								columns={columns}
								data={customersDetails}
								pageSize={5}
								sizePerPageList={sizePerPageList}
								isSortable={true}
								pagination={true}
								isExpandable={true}
							/>
						</CardBody>
					</Card>
				</Col>
			</Row>
		</>
	)
}

export default DataTables
