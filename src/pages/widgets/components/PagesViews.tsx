import { ComponentContainerCard } from '@/components'
import { Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { pageViewsData } from '../data'

const PagesViews = () => {
	return (
		<ComponentContainerCard
			title="Pages View by Users"
			label="Today"
			menuItems={['Today', 'Yesterday', 'Last Week']}
		>
			<ul className="list-group custom-list-group">
				{pageViewsData.map((page, idx) => {
					return (
						<li
							key={idx}
							className="list-group-item align-items-center d-flex justify-content-between"
						>
							<div className="media">
								<Image
									src={page.logo}
									height="40"
									className="me-3 align-self-center rounded"
									alt="..."
								/>
								<div className="media-body align-self-center">
									<h6 className="m-0">{page.name}</h6>
									<Link to="#" className="font-12 text-primary">
										{page.subName}
									</Link>
								</div>
							</div>
							<div className="align-self-center">
								<span className="text-muted mb-n2">{page.view}</span>
							</div>
						</li>
					)
				})}
			</ul>
		</ComponentContainerCard>
	)
}

export default PagesViews
