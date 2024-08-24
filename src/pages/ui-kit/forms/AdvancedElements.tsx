import { PageBreadcrumb2 } from '@/components'
import { useState } from 'react'
import {
	Button,
	Card,
	CardBody,
	CardHeader,
	CardTitle,
	Col,
	Row,
} from 'react-bootstrap'
import Select from 'react-select'
import CreatableSelect from 'react-select/creatable'
import { SketchPicker } from 'react-color'
import MaskedInput from 'react-text-mask'
import Flatpickr from 'react-flatpickr'

//style
import 'flatpickr/dist/themes/material_blue.css'

const ReactSelectElement = () => {
	return (
		<Row>
			<Col xs="12">
				<Card>
					<CardHeader>
						<CardTitle>React Select</CardTitle>
						<p className="text-muted mb-0">
							Select is a React replacement for select boxes. It supports
							searching, remote data sets, and infinite scrolling of results.
						</p>
					</CardHeader>
					<CardBody>
						<Row>
							<Col md="4">
								<label className="mb-3">Default Select</label>
								<Select
									defaultValue={{
										value: 'value-1',
										label: 'Value 1',
									}}
									options={[
										{ value: 'value-1', label: 'Value 1' },
										{ value: 'value-2', label: 'Value 2' },
										{ value: 'value-3', label: 'Value 3' },
									]}
								/>
							</Col>
							<Col md="4">
								<label className="mb-3">Multi Select</label>
								<Select
									isMulti
									placeholder="Select an option"
									options={[
										{ value: 'value-1', label: 'Value 1' },
										{ value: 'value-2', label: 'Value 2' },
										{ value: 'value-3', label: 'Value 3' },
									]}
								/>
							</Col>
							<Col md="4">
								<label className="mb-3">Taggable Select</label>
								<CreatableSelect
									isMulti
									placeholder="Enter a tag..."
									options={[
										{ value: 'value-1', label: 'Value 1' },
										{ value: 'value-2', label: 'Value 2' },
										{ value: 'value-3', label: 'Value 3' },
									]}
								/>
							</Col>
						</Row>
					</CardBody>
				</Card>
			</Col>
		</Row>
	)
}

const ReactColorElement = () => {
	const [colorSketch, setColorSketch] = useState('rgba(0, 85, 34, 1)')
	const [colorSketch1, setColorSketch1] = useState('rgba(0, 136, 255, 1)')
	const [colorSketch2, setColorSketch2] = useState('rgba(247, 248, 249, 1)')

	const [displaySketch, setDisplaySketch] = useState<boolean>(false)
	const [displaySketch1, setDisplaySketch1] = useState<boolean>(false)
	const [displaySketch2, setDisplaySketch2] = useState<boolean>(false)

	const handleSketch = () => {
		setDisplaySketch(!displaySketch)
	}

	const handleSketch1 = () => {
		setDisplaySketch1(!displaySketch1)
	}

	const handleSketch2 = () => {
		setDisplaySketch2(!displaySketch2)
	}

	const onSwatchHoverSketch = (color: any) => {
		const format = `rgba(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, ${color.rgb.a})`
		setColorSketch(format)
	}

	const onSwatchHoverSketch1 = (color: any) => {
		const format = `rgba(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, ${color.rgb.a})`
		setColorSketch1(format)
	}

	const onSwatchHoverSketch2 = (color: any) => {
		const format = `rgba(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, ${color.rgb.a})`
		setColorSketch2(format)
	}
	return (
		<Col lg="6">
			<Card>
				<CardHeader>
					<CardTitle>React Color</CardTitle>
					<p className="text-muted mb-0">
						React Color is a React library for creating user-centric color
						pickers.
					</p>
				</CardHeader>
				<CardBody>
					<Row>
						<Col md="4">
							<div
								className="color-input cursor-pointer border border-1"
								onClick={handleSketch}
							>
								<i
									style={{
										height: '35px',
										width: '245px',
										background: colorSketch,
										display: 'block',
									}}
								/>
							</div>

							{displaySketch ? (
								<div className="m-4">
									<SketchPicker
										color={colorSketch}
										width="160px"
										onChangeComplete={onSwatchHoverSketch}
									/>
								</div>
							) : null}
						</Col>
						<Col md="4">
							<div
								className="color-input cursor-pointer border border-1"
								onClick={handleSketch1}
							>
								<i
									style={{
										height: '35px',
										width: '245px',
										background: colorSketch1,
										display: 'block',
									}}
								/>
							</div>

							{displaySketch1 ? (
								<div className="m-4">
									<SketchPicker
										color={colorSketch1}
										width="160px"
										onChangeComplete={onSwatchHoverSketch1}
									/>
								</div>
							) : null}
						</Col>
						<Col md="4">
							<div
								className="color-input cursor-pointer border border-1"
								onClick={handleSketch2}
							>
								<i
									style={{
										height: '35px',
										width: '245px',
										background: colorSketch2,
										display: 'block',
									}}
								/>
							</div>

							{displaySketch2 ? (
								<div className="m-4">
									<SketchPicker
										color={colorSketch2}
										width="160px"
										onChangeComplete={onSwatchHoverSketch2}
									/>
								</div>
							) : null}
						</Col>
					</Row>
				</CardBody>
			</Card>
		</Col>
	)
}

const CustomTouchSpinElement = () => {
	const [step, setStep] = useState<number>(0)

	// CustomTouchSpin

	const TouchSpinCountPlus = () => {
		setStep(step + 1)
	}
	const TouchSpinCountMinus = () => {
		if (step) {
			setStep(step - 1)
		}
	}
	return (
		<Col lg="6">
			<Card>
				<CardHeader>
					<CardTitle>Custom Touch Spin</CardTitle>
					<p className="text-muted mb-0">Custom Touch Spin only React.</p>
				</CardHeader>
				<CardBody>
					<div className="input-group qty-icons w-25">
						<Button variant="primary" onClick={TouchSpinCountMinus}>
							-
						</Button>
						<input
							type="number"
							className="form-control"
							min={0}
							name="quantity"
							value={step}
							style={{ pointerEvents: 'none' }}
							readOnly
						/>
						<Button variant="primary" onClick={TouchSpinCountPlus}>
							+
						</Button>
					</div>
				</CardBody>
			</Card>
		</Col>
	)
}

const ReactFlatpickerElement = () => {
	return (
		<Col lg="6">
			<Card>
				<CardHeader>
					<CardTitle>React Flatpicker</CardTitle>
					<p className="text-muted mb-0">
						A React Flatpicker remake of datepicker for React frameworks.
					</p>
				</CardHeader>
				<CardBody>
					<Row>
						<Col md="6">
							<label className="mb-3">Default Datepicker</label>
							<Flatpickr
								className="form-control mb-3"
								options={{ dateFormat: 'd M, Y' }}
							/>
							<label className="mb-3">Date Range Picker</label>
							<div className="input-group" id="DateRange">
								<Flatpickr
									className="form-control mb-3"
									options={{
										dateFormat: 'd M, Y',
										mode: 'range',
									}}
								/>
							</div>
						</Col>
						<Col md="6">
							<label className="mb-3">Inline Datepicker</label>
							<Flatpickr
								className="form-control mb-3"
								options={{ dateFormat: 'd M, Y', inline: true }}
							/>
						</Col>
					</Row>
				</CardBody>
			</Card>
		</Col>
	)
}

const ReactTextMaskElement = () => {
	const [inputValue, setInputValue] = useState()

	const maskUpperCase = (e: any) => {
		const latter = e.target.value.toUpperCase()
		setInputValue(latter)
	}
	return (
		<Col lg="6">
			<Card>
				<CardHeader>
					<CardTitle>React Text Mask</CardTitle>
					<p className="text-muted mb-0">
						A React Text Mask remake of React frameworks.
					</p>
				</CardHeader>
				<CardBody>
					<div className="mb-2">
						<label className="mb-2">
							RegExp (Russian postal code){' '}
							<span className="desc ms-2 font-11 text-muted">
								/^[1-6]\d{'{'}0,5{'}'}$/
							</span>
						</label>
						<MaskedInput
							className="form-control"
							mask={[/[1-6]/, /\d/, /\d/, /\d/, /\d/, /\d/]}
						/>
					</div>
					<div className="mb-2">
						<label className="mb-2">
							Type here against mask{' '}
							<span className="desc ms-2 font-11 text-muted">
								+{'{'}7{'}'}(000)000-00-00
							</span>
						</label>
						<MaskedInput
							className="form-control"
							mask={[
								'+',
								'{',
								'',
								'}',
								'(',
								/[1-9]/,
								/\d/,
								/\d/,
								')',
								/\d/,
								/\d/,
								/\d/,
								'-',
								/\d/,
								/\d/,
								'-',
								/\d/,
								/\d/,
							]}
						/>
					</div>
					<div className="mb-2">
						<label className="mb-2">Mask in overwrite and autofix modes</label>
						<MaskedInput
							className="form-control"
							placeholder="dd.mm.yyyy"
							mask={[
								/[0-3]/,
								/[0-9]/,
								'.',
								/[0-1]/,
								/[1-9]/,
								'.',
								/[1-2]/,
								/\d/,
								/\d/,
								/\d/,
							]}
						/>
					</div>
					<div className="mb-2">
						<label className="mb-2">Type to uppercase</label>
						<input
							id="uppercase-mask"
							type="text"
							className="form-control"
							value={inputValue}
							onChange={(e) => maskUpperCase(e)}
						/>
					</div>
					<div>
						<label className="mb-2">Date and time</label>
						<MaskedInput
							className="form-control"
							placeholder="dd.mm.yyyy hh:mm"
							mask={[
								/[1-2]/,
								/\d/,
								/\d/,
								/\d/,
								'/',
								/[0-1]/,
								/[1-9]/,
								'/',
								/[1-2]/,
								/\d/,
								' ',
								/[0-2]/,
								/\d/,
								':',
								/[0-5]/,
								/\d/,
							]}
						/>
					</div>
				</CardBody>
			</Card>
		</Col>
	)
}

const AdvancedElements = () => {
	return (
		<>
			<PageBreadcrumb2 title="Form Advanced" appName="Forms" />
			<ReactSelectElement />
			<Row>
				<ReactColorElement />
				<CustomTouchSpinElement />
			</Row>
			<Row>
				<ReactFlatpickerElement />
				<ReactTextMaskElement />
			</Row>
		</>
	)
}

export default AdvancedElements
