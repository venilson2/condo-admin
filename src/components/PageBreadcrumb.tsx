import { Col, Row } from 'react-bootstrap'
import { PageMetaData } from '.'
import { Link } from 'react-router-dom'

import { FiCalendar, FiDownload } from 'react-icons/fi'

interface PageTitleProps {
	subName: string
	title: string
}

const PageBreadcrumb = ({ title, subName }: PageTitleProps) => {
	return (
		<>
			<PageMetaData title={title} />
			<Row className="row">
				<Col sm={12}>
					<div className="page-title-box">
						<Row>
							<Col>
								<h4 className="page-title">{title}</h4>
								<ol className="breadcrumb">
									<li className="breadcrumb-item">
										<Link to="#">Dastone</Link>
									</li>
									<li className="breadcrumb-item active">{subName}</li>
								</ol>
							</Col>
							<div className="col-auto align-self-center d-flex gap-1">
								<Link
									to="#"
									className="btn btn-sm btn-outline-primary"
									id="Dash_Date"
								>
									<span className="ay-name" id="Day_Name">
										Today:
									</span>
									&nbsp;
									<span className="" id="Select_date">
										Jan 11
									</span>
									<FiCalendar className="align-self-center icon-xs ms-1" />
								</Link>
								<Link to="#" className="btn btn-sm btn-outline-primary">
									<FiDownload className="align-self-center icon-xs" />
								</Link>
							</div>
						</Row>
					</div>
				</Col>
			</Row>
		</>
	)
}

export default PageBreadcrumb
