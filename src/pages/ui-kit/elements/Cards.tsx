import { PageBreadcrumb2 } from '@/components'
import {
	Card,
	CardBody,
	CardGroup,
	CardHeader,
	CardTitle,
	Col,
	Nav,
	NavItem,
	NavLink,
	Row,
} from 'react-bootstrap'
import { Link } from 'react-router-dom'

import small4 from '@/assets/images/small/img-4.jpg'
import metricaLogo from '@/assets/images/small/ex-card.png'
import btcImage from '@/assets/images/widgets/btc.png'
import avatar7 from '@/assets/images/users/user-7.jpg'

const Card1 = () => {
	return (
		<Card>
			<img
				className="card-img-top img-fluid bg-light-alt"
				src={small4}
				alt="Card image cap"
			/>
			<CardHeader>
				<Row className="align-items-center">
					<Col>
						<CardTitle as="h4">Card title</CardTitle>
					</Col>
					<Col xs="auto" className="col-auto">
						<img className="rounded-circle" src={avatar7} height={24} />
						<span className="badge badge-outline-light">30 May 2020</span>
					</Col>
				</Row>
			</CardHeader>
			<CardBody>
				<p className="card-text text-muted ">
					Some quick example text to build on the card title and make up the
					bulk of the card's content.
				</p>
				<Link to="#" className="btn btn-de-primary btn-sm">
					Go somewhere
				</Link>
			</CardBody>
		</Card>
	)
}

const Card2 = () => {
	return (
		<Card>
			<CardHeader>
				<h4 className="card-title">Card Body</h4>
			</CardHeader>
			<CardBody>
				<div className="card-body border">
					<p className="card-subtitle font-14 mb-2">
						This is the card subtitle
					</p>
					<p className="card-text text-muted">
						Some quick example text the bulk of the card's content. It is a long
						established fact that a reader will be distracted by the readable
						content.
					</p>
				</div>
			</CardBody>
		</Card>
	)
}

const Card3 = () => {
	return (
		<Card>
			<CardHeader>
				<CardTitle as="h4">Titles, text, and links</CardTitle>
			</CardHeader>
			<CardBody>
				<h6 className="card-subtitle font-14 mb-2 font-weight-normal">
					This is the card subtitle
				</h6>
				<p className="card-text text-muted">
					Some quick example text to build on the card title and make up the
					bulk of the card's content.
				</p>
				<Link to="#" className="card-link text-primary">
					Card link
				</Link>
				<Link to="#" className="card-link text-primary">
					Another link
				</Link>
			</CardBody>
		</Card>
	)
}

const Card4 = () => {
	return (
		<Card>
			<div className="card-header">
				<h4 className="card-title">Kitchen sink</h4>
			</div>
			<div className="card-body pb-0">
				<p className="mb-0 text-muted font-13">
					Some quick example text to build on the card title and make up the
					bulk of the card's content.
				</p>
			</div>
			<ul className="list-group list-group-flush">
				<li className="list-group-item">Cras justo odio</li>
			</ul>
			<div className="card-body">
				<Link to="" className="card-link">
					Card link
				</Link>
				<Link to="" className="card-link">
					Another link
				</Link>
			</div>
		</Card>
	)
}

const Card5 = () => {
	return (
		<Card>
			<CardHeader className="bg-primary">
				<CardTitle as="h4" className="text-white">
					Header - Primary
				</CardTitle>
			</CardHeader>
			<CardBody>
				<p className="card-text text-muted">
					Some quick example text to build on the card title and make up the
					bulk of the card's content.
				</p>
			</CardBody>
			<p className="card-footer bg-light-alt m-0">Footer - 2020 Metrica</p>
		</Card>
	)
}

const Card6 = () => {
	return (
		<Card>
			<CardBody>
				<blockquote className="card-bodyquote mb-0">
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
						posuere erat a amet, consectetur adipiscing elit ante.
					</p>
					<footer className="blockquote-footer font-14">
						Someone famous in <cite title="Source Title">Source Title</cite>
					</footer>
				</blockquote>
			</CardBody>
		</Card>
	)
}

const Card7 = () => {
	return (
		<Card>
			<CardHeader>
				<h4 className="card-title">List Group</h4>
			</CardHeader>
			<CardBody>
				<ul className="list-group list-group-flush border">
					<li className="list-group-item">Cras justo odio</li>
					<li className="list-group-item">Dapibus ac facilisis in</li>
					<li className="list-group-item">Vestibulum at eros</li>
				</ul>
			</CardBody>
		</Card>
	)
}

const Card8 = () => {
	return (
		<Card className="mb-3">
			<Row className="no-gutters">
				<Col md={3} className="align-self-center text-center">
					<img height={80} src={btcImage} alt="Card image" />
				</Col>
				<Col md={9}>
					<CardHeader>
						<Row className="align-items-center">
							<Col>
								<h4 className="card-title">Card title</h4>
							</Col>
							<Col xs="auto">
								<img className="rounded-circle" src={btcImage} height={24} />
								<span className="badge badge-outline-light">30 May 2020</span>
							</Col>
						</Row>
					</CardHeader>
					<CardBody>
						<p className="card-text">
							This is a wider card with supporting text below as a natural
							lead-in er card with supporting text below as a natural lead-in to
							additional content.
						</p>
						<p className="card-text">
							<small className="text-muted">Last updated 3 mins ago</small>
						</p>
					</CardBody>
				</Col>
			</Row>
		</Card>
	)
}

const Card9 = () => {
	return (
		<Card className="text-center">
			<CardHeader>
				<Nav defaultActiveKey="1" className="nav-tabs card-header-tabs">
					<NavItem>
						<NavLink eventKey="1">Active</NavLink>
					</NavItem>
					<NavItem>
						<NavLink eventKey="2">Link</NavLink>
					</NavItem>
					<NavItem>
						<NavLink
							eventKey="3"
							className="disabled"
							tabIndex={-1}
							aria-disabled="true"
						>
							Disabled
						</NavLink>
					</NavItem>
				</Nav>
			</CardHeader>
			<CardBody>
				<h5 className="card-title mb-2">Special title treatment</h5>
				<p className="card-text">
					With supporting text below as a natural lead-in to additional content.
				</p>
				<Link to="#" className="btn btn-de-primary btn-sm">
					Go somewhere
				</Link>
			</CardBody>
		</Card>
	)
}

const Card10 = () => {
	return (
		<Card className="mb-3">
			<Row className="no-gutters">
				<Col md={9}>
					<CardHeader>
						<Row className="align-items-center">
							<Col>
								<h4 className="card-title">Card title</h4>
							</Col>
							<Col xs="auto">
								<img className="rounded-circle" src={avatar7} height={24} />
								<span className="badge badge-outline-light">30 May 2020</span>
							</Col>
						</Row>
					</CardHeader>
					<CardBody>
						<p className="card-text">
							This is a wider card with supporting text below as a natural
							lead-in er card with supporting text below as a natural lead-in to
							additional content.
						</p>
						<p className="card-text">
							<small className="text-muted">Last updated 3 mins ago</small>
						</p>
					</CardBody>
				</Col>
				<Col md={3} className="align-self-center text-center">
					<img height={80} src={btcImage} alt="Card image" />
				</Col>
			</Row>
		</Card>
	)
}

const SpecialTitleCard1 = () => {
	return (
		<Card>
			<CardHeader>
				<h4 className="card-title">Special title treatment</h4>
			</CardHeader>
			<CardBody>
				<p className="card-text text-muted ">
					With supporting text below as a natural lead-in to additional content.
				</p>
				<Link to="" className="btn btn-de-primary btn-sm">
					Go somewhere
				</Link>
			</CardBody>
		</Card>
	)
}

const SpecialTitleCard2 = () => {
	return (
		<Card className="text-center">
			<CardHeader>
				<h4 className="card-title">Special title treatment</h4>
			</CardHeader>
			<CardBody>
				<p className="card-text text-muted ">
					With supporting text below as a natural lead-in to additional content.
				</p>
				<Link to="#" className="btn btn-de-primary btn-sm">
					Go somewhere
				</Link>
			</CardBody>
		</Card>
	)
}

const SpecialTitleCard3 = () => {
	return (
		<Card className="text-end">
			<CardHeader>
				<h4 className="card-title">Special title treatment</h4>
			</CardHeader>
			<CardBody>
				<p className="card-text text-muted ">
					With supporting text below as a natural lead-in to additional content.
				</p>
				<Link to="#" className="btn btn-de-primary btn-sm">
					Go somewhere
				</Link>
			</CardBody>
		</Card>
	)
}

const CardsGroup = () => {
	return (
		<CardGroup className="mb-3">
			{Array.from(new Array(Math.floor(3))).map((_card, idx) => {
				return (
					<Card key={idx}>
						<img
							className="img-fluid bg-light-alt"
							src={metricaLogo}
							alt="Card image"
						/>
						<div className="card-header">
							<h4 className="card-title">Card Groups Example</h4>
						</div>
						<div className="card-body">
							<p className="card-text">
								This is a wider card supporting text below to content.
							</p>
							<p className="card-text">
								<small className="text-muted">Last updated 3 mins ago</small>
							</p>
						</div>
					</Card>
				)
			})}
		</CardGroup>
	)
}

const Card11 = () => {
	return (
		<Card className="mb-3">
			<Row className="g-0">
				<Col md={4} className="bg-light-alt align-self-center">
					<img src={metricaLogo} alt="..." className="img-fluid bg-light-alt" />
				</Col>
				<Col md={8}>
					<CardBody>
						<h5 className="card-title">Card title</h5>
						<p className="card-text mb-0">
							This is a wider card with supporting text below as a natural
							lead-in to additional content. This content is a little bit
							longer.
						</p>
						<p className="card-text mb-0">
							<small className="text-muted">Last updated 3 mins ago</small>
						</p>
					</CardBody>
				</Col>
			</Row>
		</Card>
	)
}

const CardWithImage = () => {
	return (
		<Card>
			<img src={metricaLogo} className="card-img-top bg-light-alt" alt="..." />
			<CardBody>
				<h5 className="card-title">Card title</h5>
				<p className="card-text">
					This is a longer card with supporting text below as a natural lead-in
					to additional content. This content is a little bit longer.
				</p>
			</CardBody>
		</Card>
	)
}

const Cards = () => {
	return (
		<>
			<PageBreadcrumb2 title="Cards" appName="UI Kit" />

			<Row>
				<Col md={6} lg={3}>
					<Card1 />
				</Col>
				<Col md={6} xl={3}>
					<Card2 />
					<Card3 />
				</Col>
				<Col md={6} xl={3}>
					<Card4 />
					<Card5 />
				</Col>
				<Col md={6} xl={3}>
					<Card6 />
					<Card7 />
				</Col>
			</Row>
			<Row>
				<Col lg={4}>
					<Card8 />
				</Col>
				<Col lg={4}>
					<Card9 />
				</Col>
				<Col lg={4}>
					<Card10 />
				</Col>
			</Row>
			<Row>
				<Col lg={4}>
					<SpecialTitleCard1 />
				</Col>
				<Col lg={4}>
					<SpecialTitleCard2 />
				</Col>
				<Col lg={4}>
					<SpecialTitleCard3 />
				</Col>
			</Row>
			<Row>
				<Col lg={6}>
					<CardsGroup />
					<Card11 />
				</Col>
				<Col lg={6}>
					<Row className="row-cols-1 row-cols-md-2 gx-3">
						{Array.from(new Array(Math.floor(4))).map((_card, idx) => {
							return (
								<Col key={idx}>
									<CardWithImage />
								</Col>
							)
						})}
					</Row>
				</Col>
			</Row>
		</>
	)
}

export default Cards
