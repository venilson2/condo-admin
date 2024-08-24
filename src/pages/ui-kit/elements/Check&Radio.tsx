import { ComponentContainerCard, PageBreadcrumb2 } from '@/components'
import { Col, Row } from 'react-bootstrap'

const DefaultCheck = () => {
	return (
		<ComponentContainerCard
			title="Basic"
			description="Supports bootstrap brand colors: <code>.checkbox-primary</code>, <code>.checkbox-info</code> etc."
		>
			<div className="checkbox">
				<input id="checkbox0" type="checkbox" />
				<label htmlFor="checkbox0">Default</label>
			</div>
			<div className="checkbox checkbox-primary">
				<input id="checkbox2" type="checkbox" defaultChecked />
				<label htmlFor="checkbox2">Primary</label>
			</div>
			<div className="checkbox checkbox-success">
				<input id="checkbox3" type="checkbox" />
				<label htmlFor="checkbox3">Success</label>
			</div>
			<div className="checkbox checkbox-info">
				<input id="checkbox4" type="checkbox" />
				<label htmlFor="checkbox4">Info</label>
			</div>
			<div className="checkbox checkbox-warning">
				<input id="checkbox5" type="checkbox" defaultChecked />
				<label htmlFor="checkbox5">Warning</label>
			</div>
			<div className="checkbox checkbox-danger">
				<input id="checkbox6" type="checkbox" defaultChecked />
				<label htmlFor="checkbox6">Danger</label>
			</div>
			<div className="checkbox checkbox-purple">
				<input id="checkbox6a" type="checkbox" />
				<label htmlFor="checkbox6a">Purple</label>
			</div>

			<div className="checkbox checkbox-pink">
				<input id="checkbox6b" type="checkbox" defaultChecked />
				<label htmlFor="checkbox6b">Pink</label>
			</div>

			<div className="checkbox checkbox-dark">
				<input id="checkbox6c" type="checkbox" />
				<label htmlFor="checkbox6c">Inverse</label>
			</div>
		</ComponentContainerCard>
	)
}

const CircledCheck = () => {
	return (
		<ComponentContainerCard
			title="Circled"
			description="<code>.checkbox-circle</code> for roundness."
		>
			<div className="checkbox checkbox-circle">
				<input id="checkbox7" type="checkbox" />
				<label htmlFor="checkbox7">Simply Rounded</label>
			</div>
			<div className="checkbox checkbox-info checkbox-circle">
				<input id="checkbox8" type="checkbox" defaultChecked />
				<label htmlFor="checkbox8">Info</label>
			</div>
			<div className="checkbox checkbox-primary checkbox-circle">
				<input id="checkbox-9" type="checkbox" />
				<label htmlFor="checkbox-9">Primary</label>
			</div>
			<div className="checkbox checkbox-success checkbox-circle">
				<input id="checkbox-10" type="checkbox" defaultChecked />
				<label htmlFor="checkbox-10">Success</label>
			</div>
			<div className="checkbox checkbox-warning checkbox-circle">
				<input id="checkbox-11" type="checkbox" />
				<label htmlFor="checkbox-11">Warning</label>
			</div>
			<div className="checkbox checkbox-danger checkbox-circle">
				<input id="checkbox-12" type="checkbox" defaultChecked />
				<label htmlFor="checkbox-12">Danger</label>
			</div>

			<div className="checkbox checkbox-purple checkbox-circle">
				<input id="checkbox-13" type="checkbox" defaultChecked />
				<label htmlFor="checkbox-13">Purple</label>
			</div>

			<div className="checkbox checkbox-pink checkbox-circle">
				<input id="checkbox-14" type="checkbox" />
				<label htmlFor="checkbox-14">Pink</label>
			</div>

			<div className="checkbox checkbox-inverse checkbox-circle">
				<input id="checkbox-15" type="checkbox" defaultChecked />
				<label htmlFor="checkbox-15">Inverse</label>
			</div>
		</ComponentContainerCard>
	)
}

const WithoutLabel = () => {
	return (
		<ComponentContainerCard
			title="Without Label"
			description="Checkboxes without label text <code>.checkbox-single</code>"
		>
			<div className="checkbox checkbox-single mb-2">
				<input type="checkbox" id="singleCheckbox1" value="option1" />
				<label></label>
			</div>
			<div className="checkbox checkbox-primary checkbox-single">
				<input
					type="checkbox"
					id="singleCheckbox2"
					value="option2"
					defaultChecked
				/>
				<label></label>
			</div>
		</ComponentContainerCard>
	)
}

const InlineCheckboxes = () => {
	return (
		<ComponentContainerCard
			title="Inline Checkboxes"
			description="Inline checkboxes examples"
		>
			<div className="checkbox form-check-inline">
				<input type="checkbox" id="inlineCheckbox1" value="option1" />
				<label htmlFor="inlineCheckbox1"> Inline One </label>
			</div>
			<div className="checkbox checkbox-success form-check-inline">
				<input
					type="checkbox"
					id="inlineCheckbox2"
					value="option1"
					defaultChecked
				/>
				<label htmlFor="inlineCheckbox2"> Inline Two </label>
			</div>
			<div className="checkbox checkbox-pink form-check-inline">
				<input type="checkbox" id="inlineCheckbox3" value="option1" />
				<label htmlFor="inlineCheckbox3"> Inline Three </label>
			</div>
		</ComponentContainerCard>
	)
}

const Disabled = () => {
	return (
		<ComponentContainerCard
			title="Disabled"
			description="Disabled state also supported."
		>
			<div className="checkbox">
				<input id="checkbox9" type="checkbox" disabled />
				<label htmlFor="checkbox9">Can't check this</label>
			</div>
			<div className="checkbox checkbox-custom">
				<input id="checkbox10" type="checkbox" disabled defaultChecked />
				<label htmlFor="checkbox10">This too</label>
			</div>
			<div className="checkbox checkbox-warning checkbox-circle">
				<input id="checkbox110" type="checkbox" disabled defaultChecked />
				<label htmlFor="checkbox110">And this</label>
			</div>
			<div className="checkbox checkbox-pink">
				<input id="checkbox13" type="checkbox" disabled defaultChecked />
				<label htmlFor="checkbox13">This too</label>
			</div>
		</ComponentContainerCard>
	)
}

const BasicRadio = () => {
	return (
		<ComponentContainerCard
			title="Basic Radio Examples"
			description="Supports bootstrap brand colors: <code>.radio-primary</code>, <code>.radio-danger</code> etc."
		>
			<div className="radio">
				<input
					type="radio"
					name="radio"
					id="radio1"
					value="option1"
					defaultChecked
				/>
				<label htmlFor="radio1">Default</label>
			</div>
			<div className="radio radio-primary">
				<input type="radio" name="radio" id="radio3" value="option3" />
				<label htmlFor="radio3">Primary</label>
			</div>
			<div className="radio radio-success">
				<input type="radio" name="radio" id="radio4" value="option4" />
				<label htmlFor="radio4">Success</label>
			</div>
			<div className="radio radio-info">
				<input type="radio" name="radio" id="radio5" value="option5" />
				<label htmlFor="radio5">Info</label>
			</div>
			<div className="radio radio-danger">
				<input type="radio" name="radio" id="radio6" value="option6" />
				<label htmlFor="radio6">Danger</label>
			</div>
			<div className="radio radio-warning">
				<input type="radio" name="radio" id="radio7" value="option7" />
				<label htmlFor="radio7">Warning</label>
			</div>
			<div className="radio radio-purple">
				<input type="radio" name="radio" id="radio8" value="option8" />
				<label htmlFor="radio8">Purple</label>
			</div>
			<div className="radio radio-pink">
				<input type="radio" name="radio" id="radio9" value="option9" />
				<label htmlFor="radio9">Pink</label>
			</div>
		</ComponentContainerCard>
	)
}

const BasicRadioExamples = () => {
	return (
		<ComponentContainerCard
			title="Basic Radio Examples"
			description="Supports bootstrap brand colors: <code>.radio-primary</code>, <code>.radio-danger</code> etc."
		>
			<div className="radio">
				<input
					type="radio"
					name="radio1"
					id="radio11"
					value="option1"
					defaultChecked
				/>
				<label htmlFor="radio11">Default</label>
			</div>
			<div className="radio radio-primary">
				<input type="radio" name="radio3" id="radio13" value="option3" />
				<label htmlFor="radio13">Primary</label>
			</div>
			<div className="radio radio-success">
				<input
					type="radio"
					name="radio4"
					id="radio14"
					value="option4"
					defaultChecked
				/>
				<label htmlFor="radio14">Success</label>
			</div>
			<div className="radio radio-info">
				<input
					type="radio"
					name="radio5"
					id="radio15"
					value="option5"
					defaultChecked
				/>
				<label htmlFor="radio15">Info</label>
			</div>
			<div className="radio radio-danger">
				<input type="radio" name="radio6" id="radio16" value="option6" />
				<label htmlFor="radio16">Danger</label>
			</div>
			<div className="radio radio-warning">
				<input
					type="radio"
					name="radio7"
					id="radio17"
					value="option7"
					defaultChecked
				/>
				<label htmlFor="radio17">Warning</label>
			</div>
			<div className="radio radio-purple">
				<input type="radio" name="radio8" id="radio18" value="option8" />
				<label htmlFor="radio18">Purple</label>
			</div>
			<div className="radio radio-pink">
				<input
					type="radio"
					name="radio9"
					id="radio19"
					value="option9"
					defaultChecked
				/>
				<label htmlFor="radio19">Pink</label>
			</div>
		</ComponentContainerCard>
	)
}

const WithoutLabelRadio = () => {
	return (
		<ComponentContainerCard
			title="Without Label Radio"
			description="Supports bootstrap brand colors: <code>.radio-primary</code>, <code>.radio-danger</code> etc."
		>
			<div className="radio radio-single mb-2">
				<input
					type="radio"
					id="singleRadio1"
					value="option1.1"
					name="radioSingle1"
				/>
				<label></label>
			</div>
			<div className="radio radio-success radio-single">
				<input
					type="radio"
					id="singleRadio2"
					value="option2.1"
					name="radioSingle1"
					defaultChecked
				/>
				<label></label>
			</div>
		</ComponentContainerCard>
	)
}

const InlineRadios = () => {
	return (
		<ComponentContainerCard
			title="Inline Radios"
			description="Inline radios examples"
		>
			<div className="radio radio-info form-check-inline">
				<input
					type="radio"
					id="inlineRadio1"
					value="option1"
					name="radioInline"
					defaultChecked
				/>
				<label htmlFor="inlineRadio1"> Inline One </label>
			</div>
			<div className="radio form-check-inline">
				<input
					type="radio"
					id="inlineRadio2"
					value="option2"
					name="radioInline"
				/>
				<label htmlFor="inlineRadio2"> Inline Two </label>
			</div>
		</ComponentContainerCard>
	)
}

const DisabledRadios = () => {
	return (
		<ComponentContainerCard
			title="Disabled Radios"
			description="Disabled state also supported."
		>
			<div className="radio radio-primary">
				<input
					type="radio"
					name="radio31"
					id="radio51"
					value="option1"
					defaultChecked
					disabled
				/>
				<label htmlFor="radio51">Next</label>
			</div>
			<div className="radio">
				<input
					type="radio"
					name="radio41"
					id="radio61"
					value="option2"
					defaultChecked
					disabled
				/>
				<label htmlFor="radio61">One</label>
			</div>
			<div className="radio radio-warning">
				<input
					type="radio"
					name="radio51"
					id="radio71"
					value="option3"
					defaultChecked
					disabled
				/>
				<label htmlFor="radio71">Next</label>
			</div>
			<div className="radio radio-pink">
				<input
					type="radio"
					name="radio61"
					id="radio81"
					value="option4"
					defaultChecked
					disabled
				/>
				<label htmlFor="radio81">One</label>
			</div>
		</ComponentContainerCard>
	)
}

const CheckRadio = () => {
	return (
		<>
			<PageBreadcrumb2 appName="UI Kit" title="Check & Radio" />
			<Row>
				<Col lg={3}>
					<DefaultCheck />
				</Col>
				<Col lg={3}>
					<CircledCheck />
				</Col>
				<Col lg={3}>
					<WithoutLabel />
					<InlineCheckboxes />
				</Col>
				<Col lg={3}>
					<Disabled />
				</Col>
			</Row>

			<Row>
				<Col lg={3}>
					<BasicRadio />
				</Col>
				<Col lg={3}>
					<BasicRadioExamples />
				</Col>
				<Col lg={3}>
					<WithoutLabelRadio />
					<InlineRadios />
				</Col>
				<Col lg={3}>
					<DisabledRadios />
				</Col>
			</Row>
		</>
	)
}

export default CheckRadio
