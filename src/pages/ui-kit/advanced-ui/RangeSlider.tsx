import { useState } from 'react'
import { PageBreadcrumb2 } from '@/components'
import {
	Card,
	CardBody,
	CardHeader,
	CardTitle,
	Col,
	Row,
} from 'react-bootstrap'
import Nouislider from 'nouislider-react'

const RangeSlider = () => {
	const timestamp = (str: any) => {
		return new Date(str).getTime()
	}

	const [skipingStep, setSkipingStep] = useState([20.0, 90.0])
	const handleSkippingSteps = (e: any) => {
		setSkipingStep(e)
	}

	const [selectedValue, setSelectedValue] = useState([10, 30])
	const handleSliderChange = (values: any) => {
		setSelectedValue(values)
	}

	const handleOptionChange = (event: any) => {
		if (selectedValue[1] >= Math.round(event.target.value)) {
			setSelectedValue([Math.round(event.target.value), selectedValue[1]])
		}
	}

	const handleInputChange = (event: any) => {
		if (selectedValue[0] <= Math.round(event.target.value)) {
			setSelectedValue([selectedValue[0], Math.round(event.target.value)])
		}
	}

	const [verticalSliderValue, setVerticalSliderValue] = useState<any>([
		1450, 2050, 2350, 3000,
	])
	const handleVerticalSlider = (event: any) => {
		setVerticalSliderValue(event)
	}

	return (
		<>
			<PageBreadcrumb2 title="UI-slider" appName="Advanced UI" />
			<Row>
				<Col xs={12}>
					<Card>
						<CardHeader>
							<CardTitle>UI-slider</CardTitle>
							<p className="text-muted mb-0">
								Cool, comfortable, responsive and easily customizable range
								slider
							</p>
						</CardHeader>
						<CardBody>
							<Row>
								<Col lg="6" className="mb-3">
									<div className="p-3">
										<h6 className="mb-3 mt-0">Default Slider</h6>
										<Nouislider range={{ min: 0, max: 100 }} start={[50]} />
									</div>
								</Col>
								<Col lg="6" className="mb-3">
									<div className="p-3">
										<h6 className="mb-3 mt-0">
											Only showing tooltips when sliding handles
										</h6>
										<Nouislider
											range={{ min: 0, max: 100 }}
											start={[20, 80]}
											connect={true}
											tooltips={true}
										/>
									</div>
								</Col>
							</Row>
							<Row>
								<Col lg="6" className="mb-3">
									<div className="p-3">
										<h6 className="mb-3 mt-0">Using HTML5 input elements</h6>
										<Nouislider
											range={{ min: -20, max: 40 }}
											start={selectedValue}
											connect={true}
											className="mb-3"
											onSlide={handleSliderChange}
										/>
										<Row>
											<Col xs="3">
												<select
													className="form-select"
													id="input-select"
													value={selectedValue[0]}
													onChange={handleOptionChange}
												>
													{new Array(61).fill(0).map((_, index) => (
														<option key={index + 1} value={index - 20}>
															{index - 20}
														</option>
													))}
												</select>
											</Col>
											<Col xs="3">
												<input
													type="number"
													className="form-control"
													min={-20}
													max={40}
													step={1}
													value={selectedValue[1]}
													id="input-number"
													onChange={handleInputChange}
												/>
											</Col>
										</Row>
									</div>
								</Col>
								<Col lg="6" className="mb-3">
									<div className="p-3">
										<h6 className="mb-3 mt-0">Working with dates</h6>
										<Nouislider
											range={{
												min: timestamp('2010'),
												max: timestamp('2016'),
											}}
											step={7 * 24 * 60 * 60 * 1000}
											start={[timestamp('2011'), timestamp('2015')]}
											className="mb-2"
										/>
									</div>
								</Col>
							</Row>
							<Row>
								<Col lg="6" className="mb-3">
									<div className="p-3">
										<h6 className="mb-3 mt-0">Skipping steps</h6>
										<Nouislider
											range={{
												min: 0,
												'10%': 10,
												'20%': 20,
												'30%': 30,
												'50%': 50,
												'60%': 60,
												'70%': 70,
												'90%': 90,
												max: 100,
											}}
											start={[20, 90]}
											snap={true}
											className="mb-2"
											onSlide={handleSkippingSteps}
										/>
										<span
											className="example-val d-block fw-semibold"
											id="skip-value-lower"
										>
											{Number(skipingStep[0]).toFixed(0)}{' '}
										</span>
										<span
											className="example-val d-block fw-semibold"
											id="skip-value-upper"
										>
											{Number(skipingStep[1]).toFixed(0)}{' '}
										</span>
									</div>
								</Col>
								<Col lg="6" className="mb-3">
									<div className="p-3">
										<h6 className="mb-3 mt-0">
											Moving the slider by clicking pips
										</h6>
										<Nouislider
											range={{ min: 0, max: 100 }}
											start={[50]}
											pips={{ mode: 'count', values: 5 }}
										/>
									</div>
								</Col>
							</Row>
							<Row>
								<Col lg="6" className="mb-3">
									<div className="p-3">
										<h6 className="mb-3 mt-0">Vertical slider</h6>
										<Nouislider
											range={{ min: 1300, max: 3250 }}
											start={verticalSliderValue}
											step={150}
											style={{
												height: '400px',
												marginLeft: '300px',
											}}
											orientation="vertical"
											direction="rtl"
											behaviour="top-drag"
											pips={{
												mode: 'steps',
												stepped: true,
												density: 4,
											}}
											connect={true}
											onSlide={handleVerticalSlider}
										/>

										<div
											style={{
												textAlign: 'center',
												fontSize: 12,
											}}
											className="mt-5"
										>
											<span id="range-value-4">
												{' '}
												{Number(verticalSliderValue[3]).toFixed(0)}-{' '}
											</span>
											<span id="range-diff-3" style={{ color: '#227afb' }}>
												{' '}
												{Number(verticalSliderValue[3]) -
													Number(verticalSliderValue[2])}
												-{' '}
											</span>
											<span id="range-value-3">
												{' '}
												{Number(verticalSliderValue[2]).toFixed(0)}-{' '}
											</span>
											<span id="range-diff-2" style={{ color: '#227afb' }}>
												{' '}
												{Number(verticalSliderValue[2]) -
													Number(verticalSliderValue[1])}
												-{' '}
											</span>
											<span id="range-value-2">
												{' '}
												{Number(verticalSliderValue[1]).toFixed(0)}-{' '}
											</span>
											<span id="range-diff-1" style={{ color: '#227afb' }}>
												{' '}
												{Number(verticalSliderValue[1]) -
													Number(verticalSliderValue[0])}
												-{' '}
											</span>
											<span id="range-value-1">
												{' '}
												{Number(verticalSliderValue[0]).toFixed(0)}{' '}
											</span>
										</div>
									</div>
								</Col>
								<Col lg="6" className="mb-3">
									<div className="p-3">
										<h6 className="mb-3 mt-0">Soft limits</h6>
										<Nouislider
											range={{ min: 0, max: 100 }}
											start={[50]}
											pips={{
												mode: 'values',
												values: [20, 80],
												density: 4,
											}}
											tooltips={true}
										/>
									</div>
								</Col>
							</Row>
						</CardBody>
					</Card>
				</Col>
			</Row>
		</>
	)
}

export default RangeSlider
