import { Card, CardBody } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import type { BlogType } from '../data'

const BlogCard = ({ blog }: { blog: BlogType }) => {
	const { avatar, date, image, name, title, type } = blog
	return (
		<Card>
			<CardBody>
				<div className="blog-card">
					<img src={image} className="img-fluid rounded" />
					<span className="badge badge-purple px-3 py-2 bg-soft-primary fw-semibold mt-3">
						{type}
					</span>
					<h4 className="my-3">
						<Link to="">{title}</Link>
					</h4>
					<p className="text-muted">
						The standard chunk of Lorem Ipsum used since the 1500s is reproduced
						below for those interested. Cum sociis natoque penatibus et magnis.
					</p>
					<hr className="hr-dashed" />
					<div className="d-flex justify-content-between">
						<div className="meta-box">
							<div className="media">
								<img src={avatar} className="thumb-sm rounded-circle me-2" />
								<div className="media-body align-self-center text-truncate">
									<h6 className="m-0 mb-1 text-dark">{name}</h6>
									<ul className="p-0 list-inline mb-0">
										<li className="list-inline-item">{date}</li>
										<li className="list-inline-item">
											by <Link to="">admin</Link>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="align-self-center">
							<Link to="#" className="text-dark">
								Read more <i className="fas fa-long-arrow-alt-right" />
							</Link>
						</div>
					</div>
				</div>
			</CardBody>
		</Card>
	)
}

export default BlogCard
