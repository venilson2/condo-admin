import { ComponentContainerCard, PageBreadcrumb, Spinner } from '@/components'
import { extendedColorVariants } from '@/constant'
import { Button, Col, Row } from 'react-bootstrap'

const BorderedSpinners = () => {
	return (
		<ComponentContainerCard
			title="Border Spinner"
			description="Use the border spinners for a lightweight loading indicator."
		>
			<Spinner />
		</ComponentContainerCard>
	)
}

const GrowingSpinner = () => {
	return (
		<ComponentContainerCard
			title="Growing Spinner"
			description="If you don’t fancy a border spinner, switch to the grow spinner. While it doesn’t technically spin, it does repeatedly grow!"
		>
			<Spinner type="grow" />
		</ComponentContainerCard>
	)
}

const ColorsSpinners = () => {
	return (
		<ComponentContainerCard
			title="Colors"
			description="You can use any of our text color utilities on the standard spinner."
		>
			{(extendedColorVariants || []).map((color, idx) => {
				return <Spinner key={idx} className="me-1" color={color} />
			})}
		</ComponentContainerCard>
	)
}

const ColorGrowingSpinners = () => {
	return (
		<ComponentContainerCard
			title="Color Growing spinner"
			description="Here it is in blue, along with the supported variants."
		>
			{(extendedColorVariants || []).map((color, idx) => {
				return <Spinner key={idx} type="grow" className="me-1" color={color} />
			})}
		</ComponentContainerCard>
	)
}

const AlignmentSpinner = () => {
	return (
		<ComponentContainerCard
			title="Alignment"
			description="Use flexbox utilities, float utilities, or text alignment utilities to place spinners exactly where you need them in any situation."
		>
			<div className="d-flex justify-content-center">
				<Spinner />
			</div>
		</ComponentContainerCard>
	)
}

const PlacementSpinners = () => {
	return (
		<ComponentContainerCard
			title="Placement"
			description="Use flexbox utilities,float utilities, or text alignmentutilities to place spinners exactly where you need them in any situation."
		>
			<div className="d-flex align-items-center">
				<strong>Loading...</strong>
				<Spinner className="ms-auto" />
			</div>
		</ComponentContainerCard>
	)
}

const SpinnersSizes = () => {
	const sizes: ('md' | 'sm')[] = ['md', 'sm']
	return (
		<ComponentContainerCard
			title="Size"
			description="Add .spinner-border-sm and .spinner-grow-sm .thumb-md to make a smaller spinner that can quickly be used within other components."
		>
			<Row>
				{(sizes || []).map((size, idx) => {
					return (
						<Col lg={4} key={idx}>
							<Spinner
								className="text-primary me-1"
								color="primary"
								size={size}
							/>
							<Spinner className="text-secondary" type="grow" size={size} />
						</Col>
					)
				})}
				<Col lg={4}>
					<div
						className="spinner-border spinner-border-sm me-1"
						role="status"
					/>
					<div className="spinner-grow spinner-grow-sm" role="status" />
				</Col>
			</Row>
		</ComponentContainerCard>
	)
}

const ButtonSpinners = () => {
	return (
		<ComponentContainerCard
			title="Buttons spinners"
			description="Use spinners within buttons to indicate an action is currently processing or taking place. You may also swap the text out of the spinner element and utilize button text as needed."
		>
			<Row>
				<Col lg={6}>
					<Button variant="primary" disabled className="me-1">
						<Spinner className="spinner-border-sm" tag="span" color="white" />{' '}
						<span className="visually-hidden">Loading...</span>
					</Button>

					<Button variant="primary" disabled>
						<Spinner
							className="spinner-border-sm me-1"
							tag="span"
							color="white"
						/>
						Loading...
					</Button>
				</Col>

				<Col lg={6}>
					<Button variant="primary" disabled className="me-1">
						<Spinner
							className="spinner-grow-sm"
							tag="span"
							color="white"
							type="grow"
						/>{' '}
						<span className="visually-hidden">Loading...</span>
					</Button>

					<Button variant="primary" disabled>
						<Spinner
							className="spinner-grow-sm me-1"
							tag="span"
							color="white"
							type="grow"
						></Spinner>
						Loading...
					</Button>
				</Col>
			</Row>
		</ComponentContainerCard>
	)
}

const CustomSpinners = () => {
	return (
		<ComponentContainerCard
			title="Custom spinners"
			description="you can use custom border spinner, only add .spinner-border-custom-1 /2 /3."
		>
			<Spinner className="spinner-border-custom-1 me-1" />
			<Spinner color="secondary" className="spinner-border-custom-2 me-1" />
			<Spinner
				color="success"
				className="spinner-border-custom-3 border-success me-1"
			/>
			<Spinner color="warning" className="spinner-border-custom-4 me-1" />
			<Spinner
				color="info"
				className="spinner-border-custom-5 border-info me-1"
			/>
		</ComponentContainerCard>
	)
}

const CustomIconSpinners = () => {
	return (
		<ComponentContainerCard
			title="Custom spinners"
			description="you can use custom border spinner, only add .spinner-border-custom-1 /2 /3."
		>
			<Row>
				<Col md={3}>
					<div className="text-center">
						<i className="la la-spinner text-primary la-spin progress-icon-spin" />
					</div>
				</Col>
				<Col md={3}>
					<div className="text-center">
						<i className="la la-refresh text-secondary la-spin progress-icon-spin" />
					</div>
				</Col>
				<Col md={3}>
					<div className="text-center">
						<i className="la la-sun-o text-warning la-spin progress-icon-spin" />
					</div>
				</Col>
				<Col md={3}>
					<div className="text-center">
						<i className="la la-cog la-spin progress-icon-spin" />
					</div>
				</Col>
			</Row>
		</ComponentContainerCard>
	)
}

const Spinners = () => {
	return (
		<>
			<PageBreadcrumb subName="UI Kit" title="Spinners" />
			<Row>
				<Col lg={6}>
					<BorderedSpinners />
				</Col>
				<Col lg={6}>
					<GrowingSpinner />
				</Col>
			</Row>
			<Row>
				<Col lg={6}>
					<ColorsSpinners />
				</Col>
				<Col lg={6}>
					<ColorGrowingSpinners />
				</Col>
			</Row>

			<Row>
				<Col lg={6}>
					<AlignmentSpinner />
				</Col>
				<Col lg={6}>
					<PlacementSpinners />
				</Col>
			</Row>
			<Row>
				<Col lg={6}>
					<SpinnersSizes />
				</Col>
				<Col lg={6}>
					<ButtonSpinners />
				</Col>
			</Row>
			<Row>
				<Col lg={6}>
					<CustomSpinners />
				</Col>
				<Col lg={6}>
					<CustomIconSpinners />
				</Col>
			</Row>
		</>
	)
}

export default Spinners
