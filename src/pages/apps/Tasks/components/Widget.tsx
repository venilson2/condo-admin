import user4 from '@/assets/images/users/user-4.jpg'
import { Card, CardBody, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Widget = () => {
	return (
		<Col lg={4}>
			<Card>
				<CardBody>
					<div className="text-center">
						<img className="me-3 rounded-circle thumb-xl" src={user4} alt="" />
						<div className="">
							<h5 className="mb-0">Robert Marshall</h5>
							<small className="text-muted">Project Manager</small>
							<ul className="list-unstyled list-inline my-1">
								<li className="list-inline-item me-0">
									<i className="mdi mdi-star text-warning font-18"></i>
								</li>
								<li className="list-inline-item me-0">
									<i className="mdi mdi-star text-warning font-18"></i>
								</li>
								<li className="list-inline-item me-0">
									<i className="mdi mdi-star text-warning font-18"></i>
								</li>
								<li className="list-inline-item me-0">
									<i className="mdi mdi-star text-warning font-18"></i>
								</li>
								<li className="list-inline-item me-0">
									<i className="mdi mdi-star-half text-warning font-18"></i>
								</li>
							</ul>
						</div>
						<p className="text-muted px-3">
							Contrary to popular belief, Lorem Ipsum is not simply random text.
							It has roots in a piece of classical Latin.
						</p>
						<div className="mb-3">
							<Link to="#" className="me-3 text-warning">
								2843 Followers
							</Link>
							<Link to="#" className=" text-warning">
								295 Following
							</Link>
						</div>
						<button type="button" className="btn btn-sm btn-soft-primary">
							More Detail
						</button>
					</div>
				</CardBody>
			</Card>
		</Col>
	)
}

export default Widget
