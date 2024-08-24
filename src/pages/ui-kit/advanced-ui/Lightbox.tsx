import {
	ComponentContainerCard,
	GlightBox,
	PageBreadcrumb2,
} from '@/components'
import { Col, Image, Row } from 'react-bootstrap'

import smallImg1 from '@/assets/images/small/img-1.jpg'
import smallImg2 from '@/assets/images/small/img-2.jpg'
import smallImg3 from '@/assets/images/small/img-3.jpg'
import smallImg4 from '@/assets/images/small/img-4.jpg'

const SingleImageLightbox = () => {
	return (
		<ComponentContainerCard
			title="Single Image Lightbox"
			description="Simple popups lightbox"
		>
			<GlightBox href={smallImg1} className="image-popup-vertical-fit">
				<Image src={smallImg1} alt="" className="img-fluid" />
			</GlightBox>
		</ComponentContainerCard>
	)
}

const LightboxGallery = () => {
	return (
		<ComponentContainerCard
			title="Lightbox Gallery"
			description="You may put any HTML content in each gallery item."
		>
			<div className="popup-gallery d-flex">
				<GlightBox href={smallImg2} title="The Cleaner">
					<Image src={smallImg2} alt="" className="img-fluid" />
				</GlightBox>
				<GlightBox href={smallImg3} title="The Cleaner">
					<Image src={smallImg3} alt="" className="img-fluid" />
				</GlightBox>
				<GlightBox href={smallImg4} title="The Cleaner">
					<Image src={smallImg4} alt="" className="img-fluid" />
				</GlightBox>
			</div>
		</ComponentContainerCard>
	)
}

const VideoAndMapLightbox = () => {
	return (
		<ComponentContainerCard
			title="Popup With Video And Map"
			description="In this example lightboxes are automatically disabled on small screen size and default behavior of link is triggered."
		>
			<div className="button-items">
				<GlightBox
					className="btn btn-outline-primary popup-youtube"
					href="http://www.youtube.com/watch?v=0O2aH4XLbto"
				>
					Open YouTube video
				</GlightBox>
				<GlightBox
					className="btn btn-outline-primary popup-vimeo"
					href="https://vimeo.com/45830194"
				>
					Open Vimeo video
				</GlightBox>
				<GlightBox
					className="btn btn-outline-primary popup-gmaps"
					href="https://maps.google.com/maps?q=221B+Baker+Street,+London,+United+Kingdom&hl=en&t=v&hnear=221B+Baker+St,+London+NW1+6XE,+United+Kingdom"
				>
					Open Google Map
				</GlightBox>
			</div>
		</ComponentContainerCard>
	)
}

const Lightbox = () => {
	return (
		<>
			<PageBreadcrumb2 title="Lightbox" appName="Advance UI" />
			<Row>
				<Col lg={6}>
					<SingleImageLightbox />
				</Col>
				<Col lg={6}>
					<LightboxGallery />
					<VideoAndMapLightbox />
				</Col>
			</Row>
		</>
	)
}

export default Lightbox
