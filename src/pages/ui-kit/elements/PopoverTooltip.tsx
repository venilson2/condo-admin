import { ComponentContainerCard, PageBreadcrumb2 } from '@/components'
import {
	Button,
	Col,
	OverlayTrigger,
	Popover,
	PopoverBody,
	PopoverHeader,
	Row,
	Tooltip,
	OverlayProps,
	Image,
} from 'react-bootstrap'
import type { Placement } from 'react-bootstrap/esm/types'
import logoSM from '@/assets/images/logo-sm.png'

interface PopoverDirection {
	placement: OverlayProps['placement']
}

const placements: Placement[] = ['top', 'right', 'bottom', 'left']
const PopoversExample = () => {
	return (
		<ComponentContainerCard
			title="Popovers Example"
			description="Add small overlay content, like those found in iOS, to any element for housing secondary information."
		>
			<div className="button-items">
				{placements.map((placement, idx) => {
					return (
						<OverlayTrigger
							key={idx}
							placement={placement}
							trigger="click"
							overlay={
								<Popover>
									<PopoverBody>
										Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
									</PopoverBody>
								</Popover>
							}
						>
							<button type="button" className="btn btn-primary">
								Popover on {placement}
							</button>
						</OverlayTrigger>
					)
				})}
				<OverlayTrigger
					placement="right"
					trigger="focus"
					overlay={
						<Popover>
							<PopoverHeader>Dismissible popover</PopoverHeader>
							<PopoverBody>
								And here's some amazing content. It's very engaging. Right?
							</PopoverBody>
						</Popover>
					}
				>
					<button tabIndex={0} className="btn btn-danger" role="button">
						Dismissible popover
					</button>
				</OverlayTrigger>
			</div>
		</ComponentContainerCard>
	)
}

const BootstrapTooltips = () => {
	return (
		<ComponentContainerCard
			title="Bootstrap Tooltips"
			description="Hover over the links below to see tooltips:"
		>
			<div className="button-items">
				{placements.map((placement, idx) => {
					return (
						<OverlayTrigger
							key={idx}
							trigger="hover"
							placement={placement}
							overlay={<Tooltip>Tooltip on top</Tooltip>}
						>
							<button
								type="button"
								className="btn btn-primary"
								title="Tooltip on top"
							>
								Tooltip on {placement}
							</button>
						</OverlayTrigger>
					)
				})}
				<OverlayTrigger
					trigger="hover"
					placement="top"
					overlay={
						<Tooltip className="custom-tooltip">
							This top tooltip is themed via CSS variables.
						</Tooltip>
					}
				>
					<Button variant="primary">Custom Tooltip</Button>
				</OverlayTrigger>
			</div>
		</ComponentContainerCard>
	)
}

const PlacementTooltip = () => {
	const directions: PopoverDirection[] = [
		{ placement: 'top' },
		{ placement: 'bottom' },
		{ placement: 'left' },
		{ placement: 'right' },
		{ placement: 'left-start' },
		{ placement: 'top-end' },
	]
	return (
		<ComponentContainerCard
			title="Placement"
			description="The default tippy tooltip looks like this when given no options. It has a nifty backdrop filling animation!"
		>
			<div className="button-items">
				{(directions || []).map((direction, idx) => (
					<OverlayTrigger
						key={idx}
						placement={direction.placement}
						overlay={
							<Tooltip id={`tooltip-${direction.placement}`}>
								Tooltip on <strong>{direction.placement}</strong>.
							</Tooltip>
						}
					>
						<Button variant="outline-primary tippy-btn">
							Tooltip on {direction.placement}
						</Button>
					</OverlayTrigger>
				))}
			</div>
		</ComponentContainerCard>
	)
}

const HTMLTags = () => {
	return (
		<ComponentContainerCard
			title="HTML"
			description="Tooltips can contain HTML, allowing you to craft awesome interactive popovers."
		>
			<OverlayTrigger
				placement="top"
				overlay={
					<Tooltip>
						<div id="feature__html">
							<div style={{ padding: '20px' }}>
								<Image width={50} src={logoSM} alt="" />
								<h5>
									Look! The Dastone logo is inside a <strong>Dastone</strong>.
								</h5>
								<Button
									variant="outline-primary"
									size="sm"
									className="tippy-btn"
								>
									Close
								</Button>
							</div>
						</div>
					</Tooltip>
				}
			>
				<Button variant="outline-primary" className="tippy-btn">
					HTML Templates
				</Button>
			</OverlayTrigger>
		</ComponentContainerCard>
	)
}

const PopoverTooltip = () => {
	return (
		<>
			<PageBreadcrumb2 appName="UI Kit" title="Popover & Tooltips" />

			<Row>
				<Col>
					<PopoversExample />
				</Col>
			</Row>
			<Row>
				<Col>
					<BootstrapTooltips />
				</Col>
			</Row>
			<Row>
				<Col>
					<PlacementTooltip />
				</Col>
			</Row>
			<Row>
				<Col>
					<HTMLTags />
				</Col>
			</Row>
		</>
	)
}

export default PopoverTooltip
