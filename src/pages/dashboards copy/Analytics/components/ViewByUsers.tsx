import { ComponentContainerCard } from '@/components'
import { Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { pageViews } from '../data'

const ViewByUsers = () => {
	return (
		<ComponentContainerCard
			title="Pages View by Users"
			label="Today"
			menuItems={['Today', 'Yesterday', 'Last Week']}
		>
			<ul className="list-group custom-list-group">
				{pageViews.map((page, idx) => {
					return (
						<li
							key={idx}
							className="list-group-item align-items-center d-flex justify-content-between"
						>
							<div className="media">
								<Image
									src={page.logo}
									height={30}
									className="me-3 align-self-center rounded"
									alt="..."
								/>
								<div className="media-body align-self-center">
									<h6 className="m-0">{page.name}</h6>
									<p className="mb-0 text-muted">{page.subName}</p>
								</div>
							</div>
							<div className="align-self-center">
								<Link to="#" className="btn btn-sm btn-soft-primary">
									{page.view} <i className="las la-external-link-alt font-15" />
								</Link>
							</div>
						</li>
					)
				})}
			</ul>
		</ComponentContainerCard>
	)
}

export default ViewByUsers
