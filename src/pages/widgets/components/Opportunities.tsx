import {
	Button,
	Card,
	CardBody,
	CardHeader,
	CardTitle,
	Col,
	FormControl,
	Image,
	Row,
} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { OpportunitiesData } from '../data'

const Opportunities = () => {
	return (
		<Card>
			<CardHeader>
				<Row className="align-items-center">
					<Col className="col">
						<CardTitle as="h4">Opportunities</CardTitle>
					</Col>
					<div className="col-auto">
						<Button size="sm" variant="outline-light" className="px-3">
							+ Add New
						</Button>
					</div>
				</Row>
			</CardHeader>
			<CardBody className="p-0">
				<form className="row row-cols-lg-auto g-0 align-items-center p-3 mb-1 bg-light-alt">
					<div className="col-12 mt-0 me-1">
						<div className="input-group">
							<FormControl
								type="search"
								className="form-control-sm"
								id="inlineFormSearch"
								placeholder="Search"
							/>
						</div>
					</div>
					<div className="col-12 mt-0 me-1">
						<label className="visually-hidden" htmlFor="status-select">
							Sort By
						</label>
						<select className="form-select form-select-sm" id="status-select">
							<option defaultChecked>All</option>
							<option value={1}>Hot</option>
							<option value={2}>Cold</option>
							<option value={3}>In Progress</option>
							<option value={4}>Lost</option>
							<option value={5}>Won</option>
						</select>
					</div>

					<div className="col-12 mt-0">
						<Button size="sm" variant="soft-primary">
							<i className="fas fa-search me-1"></i>search
						</Button>
					</div>
				</form>
			</CardBody>
			<CardBody>
				<ul className="list-group custom-list-group mb-n1">
					{OpportunitiesData.map((opportunity, idx) => {
						return (
							<li
								className="list-group-item align-items-center d-flex justify-content-between"
								key={idx}
							>
								<div className="media">
									<Image
										className="d-flex align-self-center me-3 rounded-circle"
										src={opportunity.logo}
										alt=""
										height="36"
									/>
									<div className="media-body align-self-center">
										<h6 className="mt-0 mb-1">{opportunity.title}</h6>
										<ul className="list-inline mb-0 text-muted">
											<li className="list-inline-item me-2">
												<span>
													<i className="fas fa-map-marker-alt me-2 text-secondary font-14"></i>
												</span>
												{opportunity.location}
											</li>
											<li className="list-inline-item me-2">
												<span>
													<i className="far fa-envelope me-2 text-secondary font-14"></i>
												</span>
												{opportunity.email}
											</li>
										</ul>
									</div>
								</div>
								<div className="align-self-center">
									<Link to="#">
										<i className="las la-pen text-secondary font-16"></i>
									</Link>
									<Link to="#">
										<i className="las la-trash-alt text-secondary font-16"></i>
									</Link>
								</div>
							</li>
						)
					})}
				</ul>
			</CardBody>
		</Card>
	)
}

export default Opportunities
