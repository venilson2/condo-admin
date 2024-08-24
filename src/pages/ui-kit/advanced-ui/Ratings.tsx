import { ComponentContainerCard, PageBreadcrumb2 } from '@/components'
import {
	Rating,
	RoundedStar,
	Star,
	StickerStar,
	ThinRoundedStar,
	ThinStar,
} from '@smastrom/react-rating'
import { Button, Col, Row } from 'react-bootstrap'

// css
import '@smastrom/react-rating/style.css'
import { useState } from 'react'

const DefaultStarRating = () => {
	const [rating, setRating] = useState(3)
	return (
		<ComponentContainerCard
			title="Default star rating"
			description="SimpleStarRating Examples."
		>
			<Rating
				value={rating}
				onChange={setRating}
				style={{ maxWidth: '200px' }}
			/>
		</ComponentContainerCard>
	)
}

const ReadOnlyRating = () => {
	return (
		<ComponentContainerCard
			title="Read Only rating"
			description="Read Only Examples."
		>
			<Rating value={2} readOnly style={{ maxWidth: '200px' }} />
		</ComponentContainerCard>
	)
}

const DisabledRating = () => {
	return (
		<ComponentContainerCard
			title="Disabled rating"
			description="Disabled Rating Examples."
		>
			<Rating value={0} isDisabled style={{ maxWidth: '200px' }} />
		</ComponentContainerCard>
	)
}

const HighlightOnlyRating = () => {
	const [rating, setRating] = useState(3)
	return (
		<ComponentContainerCard
			title="Highlight only selected rating"
			description="Highlight only selected Examples."
		>
			<Rating
				value={rating}
				onChange={setRating}
				highlightOnlySelected
				style={{ maxWidth: '200px' }}
			/>
		</ComponentContainerCard>
	)
}

const ResetButtonRating = () => {
	const [rating, setRating] = useState(3)
	return (
		<ComponentContainerCard
			title="Reset Button rating"
			description="Rating With Reset Button"
		>
			<div className="d-inline-flex align-items-center gap-5">
				<Rating
					value={rating}
					onChange={setRating}
					style={{ maxWidth: '200px' }}
				/>
				<Button variant="danger" size="sm" onClick={() => setRating(0)}>
					Reset
				</Button>
			</div>
		</ComponentContainerCard>
	)
}

const StarStyles = () => {
	const [rating, setRating] = useState(3)
	const includedShapesStyles = [
		Star,
		ThinStar,
		RoundedStar,
		ThinRoundedStar,
		StickerStar,
	].map((itemShapes) => ({
		itemShapes,
		activeFillColor: '#f59e0b',
		inactiveFillColor: '#ffedd5',
	}))

	return (
		<ComponentContainerCard
			title="Star Styles"
			description="Star Styles Example"
		>
			{includedShapesStyles.map((itemStyles, idx) => (
				<Rating
					key={`shape_${idx}`}
					value={rating}
					onChange={setRating}
					itemStyles={itemStyles}
					style={{ maxWidth: '200px' }}
				/>
			))}
		</ComponentContainerCard>
	)
}

const Ratings = () => {
	return (
		<>
			<PageBreadcrumb2 appName="Advanced UI" title="Star Rating" />
			<Row>
				<Col lg={6}>
					<DefaultStarRating />
				</Col>
				<Col lg={6}>
					<ReadOnlyRating />
				</Col>
				<Col lg={6}>
					<DisabledRating />
				</Col>
				<Col lg={6}>
					<HighlightOnlyRating />
				</Col>
				<Col lg={6}>
					<ResetButtonRating />
				</Col>
				<Col lg={6}>
					<StarStyles />
				</Col>
			</Row>
		</>
	)
}

export default Ratings
