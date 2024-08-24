import { ComponentContainerCard, PageBreadcrumb2 } from '@/components'
import { Col, Row } from 'react-bootstrap'
import { timelineData1, timelineData2 } from './data'
import { Link } from 'react-router-dom'

const Timeline1 = () => {
	return (
		<ComponentContainerCard title="Timeline">
			<div className="slimscroll activity-scroll">
				<div className="activity">
					{timelineData1.map((timeline, idx) => {
						return (
							<div key={idx} className="activity-info">
								<div className="icon-info-activity">
									<i className={`las la-${timeline.icon} bg-soft-primary`} />
								</div>
								<div className="activity-info-text">
									<div className="d-flex justify-content-between align-items-center">
										<h6 className="m-0 w-75">{timeline.title}</h6>
										<span className="text-muted d-block">{timeline.time}</span>
										&nbsp;
									</div>
									<p className="text-muted mt-3">
										{timeline.description}
										<Link to="#" className="text-info">
											[more info]
										</Link>
									</p>
									{timeline.tags && (
										<div className="d-flex gap-1 align-items-center">
											{timeline.tags.map((tag, idx) => (
												<span key={idx} className="badge badge-soft-secondary">
													{tag}
												</span>
											))}
										</div>
									)}
								</div>
							</div>
						)
					})}
				</div>
			</div>
		</ComponentContainerCard>
	)
}

const Timeline2 = () => {
	return (
		<ComponentContainerCard title="Timeline">
			<div className="main-timeline mt-3">
				{timelineData2.map((timeline, idx) => {
					return (
						<div key={idx} className="timeline">
							<span className="timeline-icon" />
							<span className="year">{timeline.year}</span>
							<div className="timeline-content">
								<h5 className="title">{timeline.title}</h5>
								<span className="post">{timeline.date}</span>
								<p className="description">{timeline.description}</p>
							</div>
						</div>
					)
				})}
			</div>
		</ComponentContainerCard>
	)
}

const Timeline = () => {
	return (
		<>
			<PageBreadcrumb2 title="Timeline" appName="Pages" />
			<Row>
				<Col lg={4}>
					<Timeline1 />
				</Col>
				<Col lg={8}>
					<Timeline2 />
				</Col>
			</Row>
		</>
	)
}

export default Timeline
