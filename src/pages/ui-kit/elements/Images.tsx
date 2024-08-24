import { ComponentContainerCard, PageBreadcrumb2 } from '@/components'
import { Button, Col, Row } from 'react-bootstrap'

import small1 from '@/assets/images/widgets/1.jpg'
import user4 from '@/assets/images/users/user-4.jpg'
import user5 from '@/assets/images/users/user-5.jpg'
import user6 from '@/assets/images/users/user-6.jpg'
import user7 from '@/assets/images/users/user-7.jpg'
import user10 from '@/assets/images/users/user-10.jpg'

const ResponsiveImages = () => {
	return (
		<ComponentContainerCard
			title="Responsive images"
			description="Images in Bootstrap are made responsive with .img-fluid. max-width: 100%; and height: auto; are applied to the image so that it scales with the parent element."
		>
			<img src={small1} className="img-fluid" />
		</ComponentContainerCard>
	)
}

const ImageThumbnails = () => {
	return (
		<ComponentContainerCard
			title="Image thumbnails"
			description="You can use .img-thumbnailto give an image a rounded."
		>
			<div className="media">
				<img src={user4} className="img-thumbnail" />
				<div className="media-body align-self-center ms-3 text-truncate">
					<h3 className="my-0 fw-bold">Kathryn Money</h3>
					<p className="text-muted mb-2 font-13">UI &amp; UX Designer, Japan</p>
					<Button variant="de-primary" type="button" size="sm">
						Massage
					</Button>
				</div>
			</div>
		</ComponentContainerCard>
	)
}

const ImageRounded = () => {
	return (
		<ComponentContainerCard
			title="Image rounded"
			description="You can use .rounded to give an image a rounded."
		>
			<div className="media">
				<img src={user5} className="rounded" />
				<div className="media-body align-self-center ms-3 text-truncate">
					<h3 className="my-0 fw-bold">Anthony Stover</h3>
					<p className="text-muted mb-2 font-13">UI &amp; UX Designer, USA</p>
					<Button
						variant="de-primary"
						type="button"
						className="btn btn-sm btn-de-primary"
					>
						Massage
					</Button>
				</div>
			</div>
		</ComponentContainerCard>
	)
}

const ImageCircle = () => {
	return (
		<ComponentContainerCard
			title="Image circle"
			description="You can use .rounded-circleto give an image a circle."
		>
			<div className="media">
				<img src={user6} className="rounded-circle" />
				<div className="media-body align-self-center ms-3 text-truncate">
					<h3 className="my-0 fw-bold">Catherine Orman</h3>
					<p className="text-muted mb-2 font-13">UI &amp; UX Designer, India</p>
					<button type="button" className="btn btn-sm btn-de-primary">
						Massage
					</button>
				</div>
			</div>
		</ComponentContainerCard>
	)
}

const AligningImages = () => {
	return (
		<ComponentContainerCard
			title="Aligning images"
			description="You can use .float-end and .float-startto give an image position."
		>
			<img src={user4} className="rounded float-start" />
			<img src={user10} className="rounded float-end" />
		</ComponentContainerCard>
	)
}

const CenterImage = () => {
	return (
		<ComponentContainerCard
			title="Aligning images"
			description="You can use .d-block .mx-auto image center."
		>
			<img src={user7} className="rounded d-block mx-auto" />
		</ComponentContainerCard>
	)
}

const Images = () => {
	return (
		<>
			<PageBreadcrumb2 appName="UI Kit" title="Images" />
			<Row>
				<Col xs={12}>
					<ResponsiveImages />
				</Col>
			</Row>
			<Row>
				<Col lg={4}>
					<ImageThumbnails />
				</Col>
				<Col lg={4}>
					<ImageRounded />
				</Col>
				<Col lg={4}>
					<ImageCircle />
				</Col>
			</Row>
			<Row>
				<Col lg={6}>
					<AligningImages />
				</Col>
				<Col lg={6}>
					<CenterImage />
				</Col>
			</Row>
		</>
	)
}

export default Images
