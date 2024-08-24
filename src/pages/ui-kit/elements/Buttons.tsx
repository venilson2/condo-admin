import { ComponentContainerCard, PageBreadcrumb2 } from '@/components'
import { colorVariants, extendedColorVariants } from '@/constant'
import { toSentenceCase } from '@/utils'
import {
	Button,
	ButtonGroup,
	Col,
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
	Row,
} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ButtonExamples = () => {
	return (
		<ComponentContainerCard
			title="Examples"
			description="Bootstrap includes six predefined button styles, each serving its own semantic purpose."
		>
			<div className="button-items">
				{colorVariants.map((color, idx) => (
					<Button type="button" key={idx} variant={color} className={'me-2'}>
						{toSentenceCase(color)}
					</Button>
				))}
				<Button variant="light" type="button">
					Light
				</Button>
				<Button variant="link" type="button">
					Link
				</Button>
			</div>
		</ComponentContainerCard>
	)
}

const OutlineButtons = () => {
	return (
		<ComponentContainerCard
			title="Outline buttons"
			description="Bootstrap includes six predefined button styles, each serving its own semantic purpose."
		>
			<div className="button-items">
				{extendedColorVariants.map((color, idx) => (
					<Button
						variant={`outline-${color}`}
						type="button"
						key={idx}
						className="me-2"
					>
						{toSentenceCase(color)}
					</Button>
				))}
			</div>
		</ComponentContainerCard>
	)
}

const IconButtons = () => {
	return (
		<ComponentContainerCard
			title="Icon Examples"
			description="Bootstrap includes six predefined button styles, each serving its own semantic purpose."
		>
			<div className="button-items">
				<Button variant="primary" type="button" className="me-2">
					<i className="mdi mdi-check-all me-2" />
					Primary
				</Button>
				<Button variant="secondary" type="button">
					<i className="mdi mdi-alert-outline me-2" />
					Secondary
				</Button>
			</div>
		</ComponentContainerCard>
	)
}

const OutlineIconButtons = () => {
	return (
		<ComponentContainerCard
			title="Outline Icon Examples"
			description="Bootstrap includes six predefined button styles, each serving its own semantic purpose."
		>
			<div className="button-items">
				<Button variant="outline-primary" className="me-2">
					<i className="mdi mdi-send me-2" />
					Primary
				</Button>
				<Button variant="outline-secondary">
					<i className="mdi mdi-power me-2" />
					Secondary
				</Button>
			</div>
		</ComponentContainerCard>
	)
}

const RoundButtons = () => {
	return (
		<ComponentContainerCard
			title="Round Buttons Examples"
			description="Bootstrap includes six predefined button styles, each serving its own semantic purpose."
		>
			<div className="button-items">
				<Button variant="primary" type="button" className="btn-round me-2">
					Primary
				</Button>
				<Button variant="secondary" type="button" className="btn-round">
					Secondary
				</Button>
			</div>
		</ComponentContainerCard>
	)
}

const RoundedOutlineButtons = () => {
	return (
		<ComponentContainerCard
			title="Rounded Outline Buttons Examples"
			description="Bootstrap includes six predefined button styles, each serving its own semantic purpose."
		>
			<div className="button-items">
				<Button
					variant="outline-primary"
					type="button"
					className="btn-round me-2"
				>
					Primary
				</Button>
				<Button variant="outline-secondary" type="button" className="btn-round">
					Secondary
				</Button>
			</div>
		</ComponentContainerCard>
	)
}

const SoftButtons = () => {
	return (
		<ComponentContainerCard
			title="Soft Buttons Examples"
			description="Bootstrap includes six predefined button styles, each serving its own semantic purpose."
		>
			<div className="button-items">
				<Button variant="soft-primary" type="button" className="me-2">
					Primary
				</Button>
				<Button variant="soft-secondary" type="button">
					Secondary
				</Button>
			</div>
		</ComponentContainerCard>
	)
}

const SquareButtons = () => {
	return (
		<ComponentContainerCard
			title="Square Buttons Examples"
			description="Bootstrap includes six predefined button styles, each serving its own semantic purpose."
		>
			<div className="button-items">
				<Button
					variant="outline-primary"
					type="button"
					className="btn-square me-2"
				>
					Primary
				</Button>
				<Button
					variant="outline-secondary"
					type="button"
					className="btn-square"
				>
					secondary
				</Button>
			</div>
		</ComponentContainerCard>
	)
}

const OutlineBorderButtons = () => {
	return (
		<ComponentContainerCard
			title="Outline Border Buttons Examples"
			description="Fancy custom Outline Border Buttons in only square style."
		>
			<div className="button-items">
				<Button
					variant="primary"
					type="button"
					className="btn-square btn-outline-dashed me-2"
				>
					Primary
				</Button>
				<Button
					variant="secondary"
					type="button"
					className="btn-square btn-outline-dashed"
				>
					Secondary
				</Button>
			</div>
		</ComponentContainerCard>
	)
}

const SkewButtons = () => {
	return (
		<ComponentContainerCard
			title="Skew Buttons Examples"
			description="Fancy custom Skew Buttons."
		>
			<div className="button-items">
				<Button
					variant="outline-primary"
					type="button"
					className="btn-square btn-skew me-2"
				>
					<span>Primary</span>
				</Button>
				<Button
					variant="outline-secondary"
					type="button"
					className="btn-square btn-skew"
				>
					<span>Secondary</span>
				</Button>
			</div>
		</ComponentContainerCard>
	)
}

const ButtonWithTag = () => {
	return (
		<ComponentContainerCard
			title="Buttons With Different Tag"
			description="Bootstrap includes six predefined button styles, each serving its own semantic purpose."
		>
			<div className="button-items">
				<Button variant="primary" className="me-2" type="submit">
					Button
				</Button>
				<input
					className="btn btn-secondary me-2"
					type="submit"
					defaultValue="Submit"
				/>
				<input
					className="btn btn-warning me-2"
					type="button"
					defaultValue="Input"
				/>
				<input
					className="btn btn-dark me-2"
					type="reset"
					defaultValue="Reset"
				/>
				<Link className="btn btn-light" to="#" role="button">
					Link
				</Link>
			</div>
		</ComponentContainerCard>
	)
}

const DisabledButtons = () => {
	return (
		<ComponentContainerCard
			title="Disabled Buttons Examples"
			description="Make buttons look inactive by adding the disabled boolean attribute to any <button> element."
		>
			<div className="button-items">
				<Button variant="primary" type="button" className="me-2" disabled>
					Disable
				</Button>
				<Button variant="outline-secondary" type="button" disabled>
					Disable
				</Button>
			</div>
		</ComponentContainerCard>
	)
}

const ButtonSizes = () => {
	return (
		<ComponentContainerCard
			title="Buttons Sizes Examples"
			description="New extra larger or smaller buttons added.btn-xl or .btn-sm for additional sizes."
		>
			<div className="button-items">
				<Button variant="primary" size="lg" type="button">
					Large button
				</Button>
				<Button variant="primary">Default button</Button>
				<Button variant="secondary" size="sm">
					Small button
				</Button>
				<Button variant="secondary" type="button" className="btn-xs">
					Extra Small
				</Button>
			</div>
		</ComponentContainerCard>
	)
}

const CheckAndRadioButtons = () => {
	return (
		<ComponentContainerCard
			title="Check And Radio Buttons"
			description="Bootstrap’s checkbox or radio style button."
		>
			<div
				className="btn-group mb-2 mb-lg-0"
				role="group"
				aria-label="Basic checkbox toggle button group"
			>
				<input
					type="checkbox"
					className="btn-check"
					id="btncheck1"
					autoComplete="off"
				/>
				<label className="btn btn-outline-primary" htmlFor="btncheck1">
					Checkbox 1
				</label>
				<input
					type="checkbox"
					className="btn-check"
					id="btncheck2"
					autoComplete="off"
				/>
				<label className="btn btn-outline-primary" htmlFor="btncheck2">
					Checkbox 2
				</label>
				<input
					type="checkbox"
					className="btn-check"
					id="btncheck3"
					autoComplete="off"
				/>
				<label className="btn btn-outline-primary" htmlFor="btncheck3">
					Checkbox 3
				</label>
			</div>
			<div
				className="btn-group float-end"
				role="group"
				aria-label="Basic radio toggle button group"
			>
				<input
					type="radio"
					className="btn-check"
					name="btnradio"
					id="btnradio1"
					autoComplete="off"
					defaultChecked
				/>
				<label className="btn btn-outline-secondary" htmlFor="btnradio1">
					Radio 1
				</label>
				<input
					type="radio"
					className="btn-check"
					name="btnradio"
					id="btnradio2"
					autoComplete="off"
				/>
				<label className="btn btn-outline-secondary" htmlFor="btnradio2">
					Radio 2
				</label>
				<input
					type="radio"
					className="btn-check"
					name="btnradio"
					id="btnradio3"
					autoComplete="off"
				/>
				<label className="btn btn-outline-secondary" htmlFor="btnradio3">
					Radio 3
				</label>
			</div>
		</ComponentContainerCard>
	)
}

const ButtonWithIcons = () => {
	return (
		<ComponentContainerCard
			title="Only Icon Buttons Examples"
			description="A button variant for using only icons.Add .btn-icon-square"
		>
			<div className="button-items">
				<button type="button" className="btn btn-primary btn-icon-square-sm">
					<i className="fab fa-facebook-f" />
				</button>
				<button type="button" className="btn btn-info btn-icon-square-sm">
					<i className="fab fa-twitter" />
				</button>
				<button type="button" className="btn btn-pink btn-icon-square-sm">
					<i className="fab fa-dribbble" />
				</button>
			</div>
		</ComponentContainerCard>
	)
}

const CircleButtonWithIcons = () => {
	return (
		<ComponentContainerCard
			title="Icon Circle Buttons Examples"
			description="A button variant for using only icons.Add .btn-icon-circle"
		>
			<div className="button-items">
				<Button
					variant="outline-info"
					type="button"
					className="btn-icon-circle btn-icon-circle-sm"
				>
					<i className="fab fa-skype" />
				</Button>
				<Button
					variant="outline-danger"
					type="button"
					className="btn-icon-circle btn-icon-circle-sm"
				>
					<i className="fab fa-pinterest" />
				</Button>
				<Button
					variant="outline-dark"
					type="button"
					className="btn-icon-circle btn-icon-circle-sm"
				>
					<i className="fab fa-github" />
				</Button>
			</div>
		</ComponentContainerCard>
	)
}

const BlockButtons = () => {
	return (
		<ComponentContainerCard
			title="Block Buttons Examples"
			description="Create block level buttons—those that span the full width of a parent—by adding .d-grid."
		>
			<div className="d-grid gap-2">
				<Button variant="secondary" type="button">
					Block level button
				</Button>
				<Button variant="outline-purple" size="lg" type="button">
					Block level button
				</Button>
			</div>
		</ComponentContainerCard>
	)
}

const ButtonGroups = () => {
	return (
		<ComponentContainerCard
			title="Button Group Examples"
			description="Group a series of buttons together on a single line with the button group, and super-power them with JavaScript."
		>
			<Row>
				<Col lg={6}>
					<div className="mb-3">
						<ButtonGroup vertical>
							<Button variant="primary">Button 1</Button>
							<Button variant="primary">Button 2</Button>
							<Dropdown>
								<DropdownToggle
									as={'button'}
									type="button"
									className="btn btn-primary"
									data-toggle="dropdown"
									aria-expanded="false"
								>
									{' '}
									Button 3 <span className="caret" />{' '}
								</DropdownToggle>
								<DropdownMenu>
									<DropdownItem href="#">Dropdown link</DropdownItem>
									<DropdownItem href="#">Dropdown link</DropdownItem>
								</DropdownMenu>
							</Dropdown>
						</ButtonGroup>
					</div>
				</Col>
				<Col lg={6}>
					<div className="mb-3">
						<ButtonGroup role="group" aria-label="Basic example">
							<Button variant="outline-secondary" type="button">
								<i className="fa fa-align-left" />
							</Button>
							<Button variant="outline-secondary" type="button">
								<i className="fa fa-align-center" />
							</Button>
							<Button variant="outline-secondary" type="button">
								<i className="fa fa-align-right" />
							</Button>
						</ButtonGroup>
					</div>
					<div className="mb-3">
						<ButtonGroup aria-label="Basic example" role="group">
							<Button variant="outline-secondary">
								<i className="mdi mdi-play" />
							</Button>
							<Button variant="outline-primary" className="active">
								<i className="mdi mdi-pause" />
							</Button>
							<Button variant="outline-secondary">
								<i className="mdi mdi-stop" />
							</Button>
						</ButtonGroup>
					</div>
					<div className="mb-3">
						<ButtonGroup role="group" aria-label="Basic example">
							<Button variant="outline-secondary">Left</Button>
							<Button variant="outline-secondary">Middle</Button>
							<Button variant="outline-secondary">Right</Button>
						</ButtonGroup>
					</div>
					<div className="mb-3">
						<ButtonGroup className="me-1">
							<Button variant="outline-secondary">1</Button>
							<Button variant="outline-secondary">2</Button>
							<Button variant="outline-primary" className="active">
								3
							</Button>
							<Button variant="outline-secondary">4</Button>
						</ButtonGroup>
						<ButtonGroup className="me-1">
							<Button variant="outline-secondary">5</Button>
							<Button variant="outline-primary" className="active">
								6
							</Button>
							<Button variant="outline-secondary">7</Button>
						</ButtonGroup>
						<ButtonGroup>
							<Button variant="outline-secondary">8</Button>
						</ButtonGroup>
					</div>
				</Col>
			</Row>
		</ComponentContainerCard>
	)
}

const Buttons = () => {
	return (
		<>
			<PageBreadcrumb2 appName="UI Kit" title="Buttons" />
			<Row>
				<Col lg={6}>
					<ButtonExamples />
				</Col>
				<Col lg={6}>
					<OutlineButtons />
				</Col>
			</Row>
			<Row>
				<Col lg={6}>
					<IconButtons />
				</Col>
				<Col lg={6}>
					<OutlineIconButtons />
				</Col>
			</Row>
			<Row>
				<Col lg={6}>
					<RoundButtons />
				</Col>
				<Col lg={6}>
					<RoundedOutlineButtons />
				</Col>
			</Row>
			<Row>
				<Col lg={6}>
					<SoftButtons />
				</Col>
				<Col lg={6}>
					<SquareButtons />
				</Col>
			</Row>
			<Row>
				<Col lg={6}>
					<OutlineBorderButtons />
				</Col>
				<Col lg={6}>
					<SkewButtons />
				</Col>
			</Row>
			<Row>
				<Col lg={6}>
					<ButtonWithTag />
				</Col>
				<Col lg={6}>
					<DisabledButtons />
				</Col>
			</Row>
			<Row>
				<Col lg={6}>
					<ButtonSizes />
				</Col>
				<Col lg={6}>
					<CheckAndRadioButtons />
				</Col>
			</Row>
			<Row>
				<Col lg={6}>
					<ButtonWithIcons />
				</Col>
				<Col lg={6}>
					<CircleButtonWithIcons />
				</Col>
			</Row>
			<Row>
				<Col lg={6}>
					<BlockButtons />
				</Col>
				<Col lg={6}>
					<ButtonGroups />
				</Col>
			</Row>
		</>
	)
}

export default Buttons
