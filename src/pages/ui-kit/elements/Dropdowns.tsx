import { ComponentContainerCard, PageBreadcrumb2 } from '@/components'
import { colorVariants } from '@/constant'
import { toSentenceCase } from '@/utils'
import {
	Button,
	ButtonGroup,
	Col,
	Dropdown,
	DropdownDivider,
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
	Row,
} from 'react-bootstrap'

const DropdownVariants = () => {
	return (
		<ComponentContainerCard
			title="Variant"
			description="The best part is you can do this with any button variant, too:"
		>
			<div className="button-items d-flex  gap-1 flex-wrap">
				{colorVariants.map((color, idx) => {
					return (
						<Dropdown key={idx}>
							<DropdownToggle type="button" className={`btn btn-${color}`}>
								{toSentenceCase(color)} <i className="mdi mdi-chevron-down" />
							</DropdownToggle>
							<DropdownMenu>
								<DropdownItem href="">Action</DropdownItem>
								<DropdownItem href="">Another action</DropdownItem>
								<DropdownItem href="">Something else here</DropdownItem>
								<DropdownDivider />
								<DropdownItem href="">Separated link</DropdownItem>
							</DropdownMenu>
						</Dropdown>
					)
				})}
				<Dropdown>
					<DropdownToggle type="button" className={'btn btn-light'}>
						Light
						<i className="mdi mdi-chevron-down" />
					</DropdownToggle>
					<DropdownMenu>
						<DropdownItem href="">Action</DropdownItem>
						<DropdownItem href="">Another action</DropdownItem>
						<DropdownItem href="">Something else here</DropdownItem>
						<DropdownDivider />
						<DropdownItem href="">Separated link</DropdownItem>
					</DropdownMenu>
				</Dropdown>
			</div>
		</ComponentContainerCard>
	)
}

const DropdownOutline = () => {
	return (
		<ComponentContainerCard
			title="Dropdown Outline"
			description="The best part is you can do this with any button variant, too:"
		>
			<div className="button-items  d-flex  gap-1 flex-wrap">
				{colorVariants.map((color, idx) => {
					return (
						<Dropdown key={idx}>
							<DropdownToggle type="button" variant={`outline-${color}`}>
								{toSentenceCase(color)} <i className="mdi mdi-chevron-down" />
							</DropdownToggle>
							<DropdownMenu>
								<DropdownItem href="">Action</DropdownItem>
								<DropdownItem href="">Another action</DropdownItem>
								<DropdownItem href="">Something else here</DropdownItem>
								<DropdownDivider />
								<DropdownItem href="">Separated link</DropdownItem>
							</DropdownMenu>
						</Dropdown>
					)
				})}

				<Dropdown>
					<DropdownToggle type="button" className={'btn btn-outline-light'}>
						Light
						<i className="mdi mdi-chevron-down" />
					</DropdownToggle>
					<DropdownMenu>
						<DropdownItem href="">Action</DropdownItem>
						<DropdownItem href="">Another action</DropdownItem>
						<DropdownItem href="">Something else here</DropdownItem>
						<DropdownDivider />
						<DropdownItem href="">Separated link</DropdownItem>
					</DropdownMenu>
				</Dropdown>
			</div>
		</ComponentContainerCard>
	)
}

const SplitButtonDropdowns = () => {
	return (
		<ComponentContainerCard
			title="Split Button Dropdowns"
			description="The best part is you can do this with any button variant, too:"
		>
			<div className="button-items">
				<Dropdown as={ButtonGroup} className="me-1">
					<Button variant="primary" className="me-0">
						Primary
					</Button>
					<DropdownToggle split variant="primary">
						<span className="sr-only">Toggle Dropdown</span>{' '}
						<i className="mdi mdi-chevron-down" />
					</DropdownToggle>
					<DropdownMenu>
						<DropdownItem href="">Action</DropdownItem>
						<DropdownItem href="">Another action</DropdownItem>
						<DropdownItem href="">Something else here</DropdownItem>
						<DropdownDivider />
						<DropdownItem href="">Separated link</DropdownItem>
					</DropdownMenu>
				</Dropdown>
				<Dropdown as={ButtonGroup}>
					<Button variant="secondary" className="me-0">
						Secondary
					</Button>
					<DropdownToggle split variant="secondary">
						<span className="sr-only">Toggle Dropdown</span>{' '}
						<i className="mdi mdi-chevron-down" />
					</DropdownToggle>
					<DropdownMenu>
						<DropdownItem href="">Action</DropdownItem>
						<DropdownItem href="">Another action</DropdownItem>
						<DropdownItem href="">Something else here</DropdownItem>
						<DropdownDivider />
						<DropdownItem href="">Separated link</DropdownItem>
					</DropdownMenu>
				</Dropdown>
			</div>
		</ComponentContainerCard>
	)
}

const SplitOutlineButtonDropdowns = () => {
	return (
		<ComponentContainerCard
			title="Split Outline Button Dropdowns"
			description="The best part is you can do this with any button variant, too:"
		>
			<div className="button-items">
				<Dropdown as={ButtonGroup} className="me-1">
					<Button variant="outline-primary" className="me-0">
						Primary
					</Button>
					<DropdownToggle split variant="outline-primary">
						<span className="sr-only">Toggle Dropdown</span>{' '}
						<i className="mdi mdi-chevron-down" />
					</DropdownToggle>
					<DropdownMenu>
						<DropdownItem href="">Action</DropdownItem>
						<DropdownItem href="">Another action</DropdownItem>
						<DropdownItem href="">Something else here</DropdownItem>
						<DropdownDivider />
						<DropdownItem href="">Separated link</DropdownItem>
					</DropdownMenu>
				</Dropdown>
				<Dropdown as={ButtonGroup}>
					<Button variant="outline-secondary" className="me-0">
						Secondary
					</Button>
					<DropdownToggle split variant="outline-secondary">
						<span className="sr-only">Toggle Dropdown</span>{' '}
						<i className="mdi mdi-chevron-down" />
					</DropdownToggle>
					<DropdownMenu>
						<DropdownItem href="">Action</DropdownItem>
						<DropdownItem href="">Another action</DropdownItem>
						<DropdownItem href="">Something else here</DropdownItem>
						<DropdownDivider />
						<DropdownItem href="">Separated link</DropdownItem>
					</DropdownMenu>
				</Dropdown>
			</div>
		</ComponentContainerCard>
	)
}

const RoundedDropdowns = () => {
	return (
		<ComponentContainerCard
			title="Variant Rounded Circle"
			description="The best part is you can do this with any button variant, too:"
		>
			<div className="button-items d-flex gap-1 ">
				<Dropdown>
					<DropdownToggle variant="primary" type="button" className="btn-round">
						Primary
						<i className="mdi mdi-chevron-down" />
					</DropdownToggle>
					<DropdownMenu>
						<DropdownItem href="">Action</DropdownItem>
						<DropdownItem href="">Another action</DropdownItem>
						<DropdownItem href="">Something else here</DropdownItem>
						<DropdownDivider />
						<DropdownItem href="">Separated link</DropdownItem>
					</DropdownMenu>
				</Dropdown>
				<Dropdown>
					<DropdownToggle variant="secondary" className="btn-round">
						Secondary
						<i className="mdi mdi-chevron-down" />
					</DropdownToggle>
					<DropdownMenu>
						<DropdownItem href="">Action</DropdownItem>
						<DropdownItem href="">Another action</DropdownItem>
						<DropdownItem href="">Something else here</DropdownItem>
						<DropdownDivider />
						<DropdownItem href="">Separated link</DropdownItem>
					</DropdownMenu>
				</Dropdown>
			</div>
		</ComponentContainerCard>
	)
}

const RoundedOutlineDropdowns = () => {
	return (
		<ComponentContainerCard
			title="Outline Rounded Circle Dropdowns"
			description="The best part is you can do this with any button variant, too:"
		>
			<div className="button-items d-flex gap-1 ">
				<Dropdown>
					<DropdownToggle
						variant="outline-primary"
						type="button"
						className="btn-round"
					>
						Primary
						<i className="mdi mdi-chevron-down" />
					</DropdownToggle>
					<DropdownMenu>
						<DropdownItem href="">Action</DropdownItem>
						<DropdownItem href="">Another action</DropdownItem>
						<DropdownItem href="">Something else here</DropdownItem>
						<DropdownDivider />
						<DropdownItem href="">Separated link</DropdownItem>
					</DropdownMenu>
				</Dropdown>
				<Dropdown>
					<DropdownToggle variant="outline-secondary" className="btn-round">
						Secondary
						<i className="mdi mdi-chevron-down" />
					</DropdownToggle>
					<DropdownMenu>
						<DropdownItem href="">Action</DropdownItem>
						<DropdownItem href="">Another action</DropdownItem>
						<DropdownItem href="">Something else here</DropdownItem>
						<DropdownDivider />
						<DropdownItem href="">Separated link</DropdownItem>
					</DropdownMenu>
				</Dropdown>
			</div>
		</ComponentContainerCard>
	)
}

const SoftDropdowns = () => {
	return (
		<ComponentContainerCard
			title="Soft Dropdown Examples"
			description="The best part is you can do this with any button variant, too:"
		>
			<div className="button-items d-flex gap-1 ">
				<Dropdown>
					<DropdownToggle variant="soft-primary" type="button">
						Primary
						<i className="mdi mdi-chevron-down" />
					</DropdownToggle>
					<DropdownMenu>
						<DropdownItem href="">Action</DropdownItem>
						<DropdownItem href="">Another action</DropdownItem>
						<DropdownItem href="">Something else here</DropdownItem>
						<DropdownDivider />
						<DropdownItem href="">Separated link</DropdownItem>
					</DropdownMenu>
				</Dropdown>
				<Dropdown>
					<DropdownToggle variant="soft-secondary">
						Secondary
						<i className="mdi mdi-chevron-down" />
					</DropdownToggle>
					<DropdownMenu>
						<DropdownItem href="">Action</DropdownItem>
						<DropdownItem href="">Another action</DropdownItem>
						<DropdownItem href="">Something else here</DropdownItem>
						<DropdownDivider />
						<DropdownItem href="">Separated link</DropdownItem>
					</DropdownMenu>
				</Dropdown>
			</div>
		</ComponentContainerCard>
	)
}

const SquareDropdowns = () => {
	return (
		<ComponentContainerCard
			title="Square Dropdowns Examples"
			description="The best part is you can do this with any button variant, too:"
		>
			<div className="button-items d-flex gap-1 ">
				<Dropdown>
					<DropdownToggle
						variant="outline-primary"
						className="btn-square"
						type="button"
					>
						Primary
						<i className="mdi mdi-chevron-down" />
					</DropdownToggle>
					<DropdownMenu>
						<DropdownItem href="">Action</DropdownItem>
						<DropdownItem href="">Another action</DropdownItem>
						<DropdownItem href="">Something else here</DropdownItem>
						<DropdownDivider />
						<DropdownItem href="">Separated link</DropdownItem>
					</DropdownMenu>
				</Dropdown>
				<Dropdown>
					<DropdownToggle variant="outline-secondary" className="btn-square">
						Secondary
						<i className="mdi mdi-chevron-down" />
					</DropdownToggle>
					<DropdownMenu>
						<DropdownItem href="">Action</DropdownItem>
						<DropdownItem href="">Another action</DropdownItem>
						<DropdownItem href="">Something else here</DropdownItem>
						<DropdownDivider />
						<DropdownItem href="">Separated link</DropdownItem>
					</DropdownMenu>
				</Dropdown>
			</div>
		</ComponentContainerCard>
	)
}

const OutlineBorderDropdowns = () => {
	return (
		<ComponentContainerCard
			title="Outline Border Dropdowns Examples"
			description="The best part is you can do this with any button variant, too:"
		>
			<div className="button-items d-flex gap-1 ">
				<Dropdown>
					<DropdownToggle
						variant="primary"
						className="btn-square btn-outline-dashed"
						type="button"
					>
						Primary
						<i className="mdi mdi-chevron-down" />
					</DropdownToggle>
					<DropdownMenu>
						<DropdownItem href="">Action</DropdownItem>
						<DropdownItem href="">Another action</DropdownItem>
						<DropdownItem href="">Something else here</DropdownItem>
						<DropdownDivider />
						<DropdownItem href="">Separated link</DropdownItem>
					</DropdownMenu>
				</Dropdown>
				<Dropdown>
					<DropdownToggle
						variant="secondary"
						className="btn-square btn-outline-dashed"
					>
						Secondary
						<i className="mdi mdi-chevron-down" />
					</DropdownToggle>
					<DropdownMenu>
						<DropdownItem href="">Action</DropdownItem>
						<DropdownItem href="">Another action</DropdownItem>
						<DropdownItem href="">Something else here</DropdownItem>
						<DropdownDivider />
						<DropdownItem href="">Separated link</DropdownItem>
					</DropdownMenu>
				</Dropdown>
			</div>
		</ComponentContainerCard>
	)
}

const SkewDropdowns = () => {
	return (
		<ComponentContainerCard
			title="Skew Dropdowns Examples"
			description="The best part is you can do this with any button variant, too:"
		>
			<div className="button-items d-flex gap-1 ">
				<Dropdown>
					<DropdownToggle
						variant="outline-primary"
						className="btn-skew btn-square"
						type="button"
					>
						Primary
						<i className="mdi mdi-chevron-down" />
					</DropdownToggle>
					<DropdownMenu>
						<DropdownItem href="">Action</DropdownItem>
						<DropdownItem href="">Another action</DropdownItem>
						<DropdownItem href="">Something else here</DropdownItem>
						<DropdownDivider />
						<DropdownItem href="">Separated link</DropdownItem>
					</DropdownMenu>
				</Dropdown>
				<Dropdown>
					<DropdownToggle
						variant="outline-secondary"
						className="btn-skew btn-square"
					>
						Secondary
						<i className="mdi mdi-chevron-down" />
					</DropdownToggle>
					<DropdownMenu>
						<DropdownItem href="">Action</DropdownItem>
						<DropdownItem href="">Another action</DropdownItem>
						<DropdownItem href="">Something else here</DropdownItem>
						<DropdownDivider />
						<DropdownItem href="">Separated link</DropdownItem>
					</DropdownMenu>
				</Dropdown>
			</div>
		</ComponentContainerCard>
	)
}

const SizingDropdowns = () => {
	return (
		<ComponentContainerCard
			title="Sizing Dropdowns Examples"
			description="Button dropdowns work with buttons of all sizes, including default and split dropdown buttons."
		>
			<div className="button-items d-flex gap-1 align-items-center">
				<Dropdown>
					<DropdownToggle variant="primary" className="btn-lg" type="button">
						Large
						<i className="mdi mdi-chevron-down" />
					</DropdownToggle>
					<DropdownMenu>
						<DropdownItem href="">Action</DropdownItem>
						<DropdownItem href="">Another action</DropdownItem>
						<DropdownItem href="">Something else here</DropdownItem>
						<DropdownDivider />
						<DropdownItem href="">Separated link</DropdownItem>
					</DropdownMenu>
				</Dropdown>
				<Dropdown>
					<DropdownToggle variant="primary" type="button">
						Default
						<i className="mdi mdi-chevron-down" />
					</DropdownToggle>
					<DropdownMenu>
						<DropdownItem href="">Action</DropdownItem>
						<DropdownItem href="">Another action</DropdownItem>
						<DropdownItem href="">Something else here</DropdownItem>
						<DropdownDivider />
						<DropdownItem href="">Separated link</DropdownItem>
					</DropdownMenu>
				</Dropdown>
				<Dropdown>
					<DropdownToggle variant="secondary" className="btn-sm" type="button">
						Small
						<i className="mdi mdi-chevron-down" />
					</DropdownToggle>
					<DropdownMenu>
						<DropdownItem href="">Action</DropdownItem>
						<DropdownItem href="">Another action</DropdownItem>
						<DropdownItem href="">Something else here</DropdownItem>
						<DropdownDivider />
						<DropdownItem href="">Separated link</DropdownItem>
					</DropdownMenu>
				</Dropdown>
				<Dropdown>
					<DropdownToggle variant="secondary" className="btn-xs" type="button">
						Small
						<i className="mdi mdi-chevron-down" />
					</DropdownToggle>
					<DropdownMenu>
						<DropdownItem href="">Action</DropdownItem>
						<DropdownItem href="">Another action</DropdownItem>
						<DropdownItem href="">Something else here</DropdownItem>
						<DropdownDivider />
						<DropdownItem href="">Separated link</DropdownItem>
					</DropdownMenu>
				</Dropdown>
			</div>
		</ComponentContainerCard>
	)
}

const SingleDropdowns = () => {
	return (
		<ComponentContainerCard
			title="Single Dropdowns Examples"
			description="The best part is you can do this with any button variant, too:"
		>
			<div className="button-items d-flex gap-1 ">
				<Dropdown>
					<DropdownToggle variant="outline-primary" type="button">
						{' '}
						Dropdown button
						<i className="mdi mdi-chevron-down" />
					</DropdownToggle>
					<DropdownMenu>
						<DropdownItem href="">Action</DropdownItem>
						<DropdownItem href="">Another action</DropdownItem>
						<DropdownItem href="">Something else here</DropdownItem>
					</DropdownMenu>
				</Dropdown>
				<Dropdown>
					<DropdownToggle variant="outline-secondary">
						Dropdown link
						<i className="mdi mdi-chevron-down" />
					</DropdownToggle>
					<DropdownMenu>
						<DropdownItem href="">Action</DropdownItem>
						<DropdownItem href="">Another action</DropdownItem>
						<DropdownItem href="">Something else here</DropdownItem>
					</DropdownMenu>
				</Dropdown>
			</div>
		</ComponentContainerCard>
	)
}

const DropupVariationDropdowns = () => {
	return (
		<ComponentContainerCard
			title="Dropup Variation Examples"
			description="Trigger dropdown menus above elements by adding .dropup to the parent element."
		>
			<div className="button-items d-flex gap-1 dropup align-items-center">
				<Dropdown placement="top">
					<DropdownToggle variant="primary" type="button">
						{' '}
						Dropup
						<i className="mdi mdi-chevron-up" />
					</DropdownToggle>
					<DropdownMenu>
						<DropdownItem href="">Action</DropdownItem>
						<DropdownItem href="">Another action</DropdownItem>
						<DropdownItem href="">Something else here</DropdownItem>
						<DropdownDivider />
						<DropdownItem href="">Separated link</DropdownItem>
					</DropdownMenu>
				</Dropdown>
				<Dropdown as={ButtonGroup} placement="top">
					<Button variant="secondary" className="me-0">
						Split dropup
					</Button>
					<DropdownToggle split variant="secondary">
						<span className="sr-only">Toggle Dropdown</span>{' '}
						<i className="mdi mdi-chevron-up" />
					</DropdownToggle>
					<DropdownMenu>
						<DropdownItem href="">Action</DropdownItem>
						<DropdownItem href="">Another action</DropdownItem>
						<DropdownItem href="">Something else here</DropdownItem>
						<DropdownDivider />
						<DropdownItem href="">Separated link</DropdownItem>
					</DropdownMenu>
				</Dropdown>
			</div>
		</ComponentContainerCard>
	)
}

const DropendVariationDropdowns = () => {
	return (
		<ComponentContainerCard
			title="Dropend Variation Examples"
			description="Trigger dropdown menus above elements by adding .dropup to the parent element."
		>
			<div className="button-items d-flex gap-1 dropup align-items-center">
				<Dropdown placement="right">
					<DropdownToggle variant="outline-primary" type="button">
						{' '}
						Dropend
						<i className="mdi mdi-chevron-right" />
					</DropdownToggle>
					<DropdownMenu>
						<DropdownItem href="">Action</DropdownItem>
						<DropdownItem href="">Another action</DropdownItem>
						<DropdownItem href="">Something else here</DropdownItem>
						<DropdownDivider />
						<DropdownItem href="">Separated link</DropdownItem>
					</DropdownMenu>
				</Dropdown>
				<Dropdown as={ButtonGroup} placement="right">
					<Button variant="outline-secondary" className="me-0">
						Split Dropend
					</Button>
					<DropdownToggle split variant="outline-secondary">
						<span className="sr-only">Toggle Dropdown</span>{' '}
						<i className="mdi mdi-chevron-right" />
					</DropdownToggle>
					<DropdownMenu>
						<DropdownItem href="">Action</DropdownItem>
						<DropdownItem href="">Another action</DropdownItem>
						<DropdownItem href="">Something else here</DropdownItem>
						<DropdownDivider />
						<DropdownItem href="">Separated link</DropdownItem>
					</DropdownMenu>
				</Dropdown>
			</div>
		</ComponentContainerCard>
	)
}

const MenuAlignmentDropdown = () => {
	return (
		<ComponentContainerCard
			title="Menu Alignment"
			description="Add .dropdown-menu-end to a .dropdown-menu to right align the dropdown menu."
		>
			<div className="button-items d-flex gap-1 dropup align-items-center">
				<Dropdown placement="right-end">
					<DropdownToggle variant="primary" type="button">
						{' '}
						Menu is right-aligned
						<i className="mdi mdi-chevron-down" />
					</DropdownToggle>
					<DropdownMenu>
						<DropdownItem href="">Action</DropdownItem>
						<DropdownItem href="">Another action</DropdownItem>
						<DropdownItem href="">Something else here</DropdownItem>
						<DropdownDivider />
						<DropdownItem href="">Separated link</DropdownItem>
					</DropdownMenu>
				</Dropdown>
			</div>
		</ComponentContainerCard>
	)
}

const DroStartVariationDropdowns = () => {
	return (
		<ComponentContainerCard
			title="Dropend Variation Examples"
			description="Trigger dropdown menus above elements by adding .dropup to the parent element."
		>
			<div className="button-items d-flex gap-1 dropup align-items-center">
				<Dropdown placement="left">
					<DropdownToggle variant="outline-primary" type="button">
						<i className="mdi mdi-chevron-left" /> Drostart
					</DropdownToggle>
					<DropdownMenu>
						<DropdownItem href="">Action</DropdownItem>
						<DropdownItem href="">Another action</DropdownItem>
						<DropdownItem href="">Something else here</DropdownItem>
						<DropdownDivider />
						<DropdownItem href="">Separated link</DropdownItem>
					</DropdownMenu>
				</Dropdown>
				<Dropdown as={ButtonGroup} placement="left">
					<DropdownToggle split variant="outline-secondary" className="me-0">
						<span className="sr-only">Toggle Dropdown</span>{' '}
						<i className="mdi mdi-chevron-left" />
					</DropdownToggle>
					<Button variant="outline-secondary">Split Drostart</Button>
					<DropdownMenu>
						<DropdownItem href="">Action</DropdownItem>
						<DropdownItem href="">Another action</DropdownItem>
						<DropdownItem href="">Something else here</DropdownItem>
						<DropdownDivider />
						<DropdownItem href="">Separated link</DropdownItem>
					</DropdownMenu>
				</Dropdown>
			</div>
		</ComponentContainerCard>
	)
}

const Dropdowns = () => {
	return (
		<>
			<PageBreadcrumb2 appName="UI Kit" title="Dropdowns" />
			<Row>
				<Col lg={6}>
					<DropdownVariants />
				</Col>
				<Col lg={6}>
					<DropdownOutline />
				</Col>
			</Row>
			<Row>
				<Col lg={6}>
					<SplitButtonDropdowns />
				</Col>
				<Col lg={6}>
					<SplitOutlineButtonDropdowns />
				</Col>
			</Row>
			<Row>
				<Col lg={6}>
					<RoundedDropdowns />
				</Col>
				<Col lg={6}>
					<RoundedOutlineDropdowns />
				</Col>
			</Row>
			<Row>
				<Col lg={6}>
					<SoftDropdowns />
				</Col>
				<Col lg={6}>
					<SquareDropdowns />
				</Col>
			</Row>
			<Row>
				<Col lg={6}>
					<OutlineBorderDropdowns />
				</Col>
				<Col lg={6}>
					<SkewDropdowns />
				</Col>
			</Row>
			<Row>
				<Col lg={6}>
					<SizingDropdowns />
				</Col>
				<Col lg={6}>
					<SingleDropdowns />
				</Col>
			</Row>
			<Row>
				<Col lg={6}>
					<DropupVariationDropdowns />
				</Col>
				<Col lg={6}>
					<DropendVariationDropdowns />
				</Col>
			</Row>
			<Row>
				<Col lg={6}>
					<MenuAlignmentDropdown />
				</Col>
				<Col lg={6}>
					<DroStartVariationDropdowns />
				</Col>
			</Row>
		</>
	)
}

export default Dropdowns
