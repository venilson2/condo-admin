import { PageBreadcrumb2 } from '@/components'
import {
	Card,
	CardBody,
	Carousel,
	CarouselItem,
	Col,
	Row,
} from 'react-bootstrap'

import small1 from '@/assets/images/small/img-1.jpg'
import small2 from '@/assets/images/small/img-2.jpg'
import small3 from '@/assets/images/small/img-3.jpg'
import small4 from '@/assets/images/small/img-4.jpg'
import small5 from '@/assets/images/small/img-5.jpg'
import small6 from '@/assets/images/small/img-6.jpg'

const Carousel1 = () => {
	return (
		<Card>
			<CardBody>
				<Row>
					<Col lg={5} className="offset-lg-1 align-self-center">
						<div className="p-5">
							<span className="bg-soft-pink p-2 rounded">Mannat Themes</span>
							<h1 className="my-4 font-weight-bold">
								Manage Your Work With{' '}
								<span className="text-primary">Metrica</span>.
							</h1>
							<p className="font-14 text-muted">
								Metrica is a Bootstrap 4 admin dashboard, It is fully responsive
								and included awesome features to help build web applications
								fast and easy.
							</p>
							<button type="button" className="btn btn-de-primary">
								Get Started
							</button>
						</div>
					</Col>
					<Col lg={5} className="offset-lg-1 text-center">
						<Carousel
							controls={false}
							indicators={false}
							id="carouselExampleSlidesOnly"
							className="carousel slide"
							data-bs-ride="carousel"
						>
							<CarouselItem className="active">
								<img src={small2} className="d-block w-100" alt="..." />
							</CarouselItem>
							<CarouselItem>
								<img src={small1} className="d-block w-100" alt="..." />
							</CarouselItem>
							<CarouselItem>
								<img src={small3} className="d-block w-100" alt="..." />
							</CarouselItem>
						</Carousel>
					</Col>
				</Row>
			</CardBody>
		</Card>
	)
}

const Carousel2 = () => {
	return (
		<Card>
			<CardBody>
				<Row>
					<Col lg={5} className="text-center">
						<Carousel
							indicators={false}
							id="carouselExampleControls"
							className="slide"
						>
							<CarouselItem className="active">
								<img src={small4} className="d-block w-100" alt="..." />
							</CarouselItem>
							<CarouselItem>
								<img src={small5} className="d-block w-100" alt="..." />
							</CarouselItem>
							<CarouselItem>
								<img src={small6} className="d-block w-100" alt="..." />
							</CarouselItem>
						</Carousel>
					</Col>
					<Col lg={5} className="offset-lg-1 align-self-center">
						<div className="p-5">
							<span className="bg-soft-pink p-2 rounded">Mannat Themes</span>
							<h1 className="my-4 font-weight-bold">
								Manage Your Work With{' '}
								<span className="text-primary">Metrica</span>.
							</h1>
							<p className="font-14 text-muted">
								Metrica is a Bootstrap 4 admin dashboard, It is fully responsive
								and included awesome features to help build web applications
								fast and easy.
							</p>
							<button type="button" className="btn btn-de-primary">
								Get Started
							</button>
						</div>
					</Col>
				</Row>
			</CardBody>
		</Card>
	)
}

const Carousel3 = () => {
	return (
		<Card>
			<CardBody>
				<Row>
					<Col lg={5} className="offset-lg-1 align-self-center">
						<div className="p-5">
							<span className="bg-soft-pink p-2 rounded">Mannat Themes</span>
							<h1 className="my-4 font-weight-bold">
								Manage Your Work With{' '}
								<span className="text-primary">Metrica</span>.
							</h1>
							<p className="font-14 text-muted">
								Metrica is a Bootstrap 4 admin dashboard, It is fully responsive
								and included awesome features to help build web applications
								fast and easy.
							</p>
							<button type="button" className="btn btn-de-primary">
								Get Started
							</button>
						</div>
					</Col>
					<Col lg={5} className="offset-lg-1 text-center">
						<Carousel
							id="carouselExampleIndicators"
							className="slide"
							data-bs-ride="carousel"
						>
							<CarouselItem className="active">
								<img src={small5} className="d-block w-100" alt="..." />
							</CarouselItem>
							<CarouselItem>
								<img src={small4} className="d-block w-100" alt="..." />
							</CarouselItem>
							<CarouselItem>
								<img src={small2} className="d-block w-100" alt="..." />
							</CarouselItem>
						</Carousel>
					</Col>
				</Row>
			</CardBody>
		</Card>
	)
}

const Carousel4 = () => {
	return (
		<Card>
			<CardBody>
				<Row>
					<Col lg={5} className="text-center">
						<Carousel
							indicators={false}
							fade
							id="carouselExampleFade"
							className="slide "
							data-bs-ride="carousel"
						>
							<CarouselItem className="active">
								<img src={small6} className="d-block w-100" alt="..." />
							</CarouselItem>
							<CarouselItem>
								<img src={small1} className="d-block w-100" alt="..." />
							</CarouselItem>
							<CarouselItem>
								<img src={small3} className="d-block w-100" alt="..." />
							</CarouselItem>
						</Carousel>
					</Col>
					<Col lg={5} className="offset-lg-1 align-self-center">
						<div className="p-5">
							<span className="bg-soft-pink p-2 rounded">Mannat Themes</span>
							<h1 className="my-4 font-weight-bold">
								Manage Your Work With{' '}
								<span className="text-primary">Metrica</span>.
							</h1>
							<p className="font-14 text-muted">
								Metrica is a Bootstrap 4 admin dashboard, It is fully responsive
								and included awesome features to help build web applications
								fast and easy.
							</p>
							<button type="button" className="btn btn-de-primary">
								Get Started
							</button>
						</div>
					</Col>
				</Row>
			</CardBody>
		</Card>
	)
}

const Carousels = () => {
	return (
		<>
			<PageBreadcrumb2 appName="UI Kit" title="Carousels" />
			<Row>
				<Col xs={12}>
					<Carousel1 />
				</Col>
			</Row>
			<Row>
				<Col xs={12}>
					<Carousel2 />
				</Col>
			</Row>
			<Row>
				<Col xs={12}>
					<Carousel3 />
				</Col>
			</Row>
			<Row>
				<Col xs={12}>
					<Carousel4 />
				</Col>
			</Row>
		</>
	)
}

export default Carousels
