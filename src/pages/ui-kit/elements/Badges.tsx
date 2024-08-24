import { ComponentContainerCard, PageBreadcrumb2 } from '@/components'
import { Badge, Button, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const BadgeExamples = () => {
	return (
		<ComponentContainerCard
			title="Badge Examples"
			description="Add any of the below mentioned modifier classes to change the appearance of a badge."
		>
			<div className="d-flex align-align-items-center gap-1">
				<Badge bg="primary">Primary</Badge>
				<Badge bg="secondary">Secondary</Badge>
				<Badge bg="success">Success</Badge>
				<Badge bg="danger">Danger</Badge>
				<Badge bg="warning">Warning</Badge>
				<Badge bg="info">Info</Badge>
				<Badge bg="light" className="text-dark">
					Light
				</Badge>
				<Badge bg="dark">Dark</Badge>
			</div>
		</ComponentContainerCard>
	)
}

const PillBadges = () => {
	return (
		<ComponentContainerCard
			title="Pill Badges Examples"
			description="Documentation and examples for badges, our small count and labeling component."
		>
			<div className="d-flex align-align-items-center gap-1">
				<Badge pill bg="primary">
					Primary
				</Badge>
				<Badge pill bg="secondary">
					Secondary
				</Badge>
				<Badge pill bg="success">
					Success
				</Badge>
				<Badge pill bg="danger">
					Danger
				</Badge>
				<Badge pill bg="warning">
					Warning
				</Badge>
				<Badge pill bg="info">
					Info
				</Badge>
				<Badge pill bg="light" className="text-dark">
					Light
				</Badge>
				<Badge pill bg="dark">
					Dark
				</Badge>
			</div>
		</ComponentContainerCard>
	)
}

const LinkBadges = () => {
	return (
		<ComponentContainerCard
			title="Links Badges Examples"
			description="Documentation and examples for badges, our small count and labeling component."
		>
			<div className="d-flex align-align-items-center gap-1">
				<Link to="" className="badge bg-primary">
					Primary
				</Link>
				<Link to="" className="badge bg-secondary">
					Secondary
				</Link>
				<Link to="" className="badge bg-success">
					Success
				</Link>
				<Link to="" className="badge bg-danger">
					Danger
				</Link>
			</div>
		</ComponentContainerCard>
	)
}

const LinksPillBadges = () => {
	return (
		<ComponentContainerCard
			title="Links Pill Badges Examples"
			description="Documentation and examples for badges, our small count and labeling component."
		>
			<div className="d-flex align-align-items-center gap-1">
				<Link to="" className="badge rounded-pill bg-primary">
					Primary
				</Link>
				<Link to="" className="badge rounded-pill bg-secondary">
					Secondary
				</Link>
				<Link to="" className="badge rounded-pill bg-success">
					Success
				</Link>
				<Link to="" className="badge rounded-pill bg-danger">
					Danger
				</Link>
			</div>
		</ComponentContainerCard>
	)
}

const SoftBadges = () => {
	return (
		<ComponentContainerCard
			title="Badges Soft Examples"
			description="Documentation and examples for badges, our small count and labeling component."
		>
			<div className="d-flex align-align-items-center gap-1">
				<Badge bg="soft-primary">Primary</Badge>
				<Badge bg="soft-secondary">Secondary</Badge>
				<Badge bg="soft-success">Success</Badge>
				<Badge bg="soft-danger">Danger</Badge>
				<Badge bg="soft-warning">Warning</Badge>
				<Badge bg="soft-info">Info</Badge>
				<Badge bg="soft-purple">Purple</Badge>
				<Badge bg="soft-dark">Dark</Badge>
			</div>
		</ComponentContainerCard>
	)
}

const SoftPillBadges = () => {
	return (
		<ComponentContainerCard
			title="Pill Badges Soft Examples"
			description="Documentation and examples for badges, our small count and labeling component."
		>
			<div className="d-flex align-align-items-center gap-1">
				<Badge pill bg="soft-primary">
					Primary
				</Badge>
				<Badge pill bg="soft-secondary">
					Secondary
				</Badge>
				<Badge pill bg="soft-success">
					Success
				</Badge>
				<Badge pill bg="soft-danger">
					Danger
				</Badge>
				<Badge pill bg="soft-warning">
					Warning
				</Badge>
				<Badge pill bg="soft-info">
					Info
				</Badge>
				<Badge pill bg="soft-pink">
					pink
				</Badge>
				<Badge pill bg="soft-dark">
					Dark
				</Badge>
			</div>
		</ComponentContainerCard>
	)
}

const OutlineBadges = () => {
	return (
		<ComponentContainerCard
			title="Outline Badges Examples"
			description="Documentation and examples for badges, our small count and labeling component."
		>
			<div className="d-flex align-align-items-center gap-1">
				<span className="badge badge-outline-primary">Primary</span>
				<span className="badge badge-outline-secondary">Secondary</span>
				<span className="badge badge-outline-success">Success</span>
				<span className="badge badge-outline-danger">Danger</span>
				<span className="badge badge-outline-warning">Warning</span>
				<span className="badge badge-outline-info">Info</span>
				<span className="badge badge-outline-purple">Purple</span>
				<span className="badge badge-outline-dark">Dark</span>
			</div>
		</ComponentContainerCard>
	)
}

const OutlinePillBadges = () => {
	return (
		<ComponentContainerCard
			title="Outline Pill Badges Examples"
			description="Documentation and examples for badges, our small count and labeling component."
		>
			<div className="d-flex align-align-items-center gap-1">
				<span className="badge rounded-pill badge-outline-primary">
					Primary
				</span>
				<span className="badge rounded-pill badge-outline-secondary">
					Secondary
				</span>
				<span className="badge rounded-pill badge-outline-success">
					Success
				</span>
				<span className="badge rounded-pill badge-outline-danger">Danger</span>
				<span className="badge rounded-pill badge-outline-warning">
					Warning
				</span>
				<span className="badge rounded-pill badge-outline-info">Info</span>
				<span className="badge rounded-pill badge-outline-pink">Pink</span>
				<span className="badge rounded-pill badge-outline-dark">Dark</span>
			</div>
		</ComponentContainerCard>
	)
}

const ButtonBadges = () => {
	return (
		<ComponentContainerCard
			title="Buttons Examples"
			description="Badges can be used as part of links or buttons to provide a counter."
		>
			<Button variant="primary" size="sm" type="button" className="me-1">
				Notifications{' '}
				<Badge bg="light" className="text-dark">
					4
				</Badge>
			</Button>
			<Button variant="secondary" size="sm" type="button">
				Notifications{' '}
				<Badge bg="light" className="text-dark">
					4
				</Badge>
			</Button>
		</ComponentContainerCard>
	)
}

const BadgesWithIconButton = () => {
	return (
		<ComponentContainerCard
			title="Buttons With Icon Examples"
			description="Badges can be used as part of links or buttons with icon to provide a counter."
		>
			<Button
				variant="soft-primary"
				className="btn-icon-circle btn-icon-circle-sm me-2 position-relative"
			>
				<i className="mdi mdi-bell font-16" />
				<span className="badge badge-dot online d-flex align-items-center position-absolute end-0 top-50" />
			</Button>
			<Button
				variant="soft-info"
				className="btn-icon-circle btn-icon-circle-sm me-2 position-relative"
			>
				<i className="mdi mdi-account font-16" />
				<span className="badge badge-dot offline d-flex align-items-center position-absolute end-0 top-50" />
			</Button>
			<Button
				variant="soft-warning"
				className="btn-icon-circle btn-icon-circle-sm me-2 position-relative"
			>
				<i className="mdi mdi-bell font-16" />
				<span className="badge badge-dot online d-flex align-items-center position-absolute end-0 top-50" />
			</Button>
			<Button
				variant="soft-danger"
				className="btn-icon-circle btn-icon-circle-sm position-relative"
			>
				<i className="mdi mdi-account font-16" />
				<span className="badge badge-dot offline d-flex align-items-center position-absolute end-0 top-50" />
			</Button>
		</ComponentContainerCard>
	)
}

const Badges = () => {
	return (
		<>
			<PageBreadcrumb2 appName="UI Kit" title="Badges" />
			<Row>
				<Col lg={6}>
					<BadgeExamples />
				</Col>
				<Col lg={6}>
					<PillBadges />
				</Col>
			</Row>
			<Row>
				<Col lg={6}>
					<LinkBadges />
				</Col>
				<Col lg={6}>
					<LinksPillBadges />
				</Col>
			</Row>
			<Row>
				<Col lg={6}>
					<SoftBadges />
				</Col>
				<Col lg={6}>
					<SoftPillBadges />
				</Col>
			</Row>
			<Row>
				<Col lg={6}>
					<OutlineBadges />
				</Col>
				<Col lg={6}>
					<OutlinePillBadges />
				</Col>
			</Row>
			<Row>
				<Col lg={6}>
					<ButtonBadges />
				</Col>
				<Col lg={6}>
					<BadgesWithIconButton />
				</Col>
			</Row>
		</>
	)
}

export default Badges
