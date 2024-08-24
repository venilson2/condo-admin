import { ComponentContainerCard, PageBreadcrumb2 } from '@/components'
import React, { useState } from 'react'
import {
	Button,
	Col,
	Form,
	FormCheck,
	FormControl,
	FormLabel,
} from 'react-bootstrap'

interface Car {
	make: string
	model: string
	features: string[]
}

const Repeater = () => {
	const [cars, setCars] = useState<Car[]>([
		{ make: 'volkswagen', model: 'Beetle', features: [] },
		{ make: 'honda', model: 'Accord', features: [] },
	])

	const handleChange = (
		index: number,
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		const { name, value, type, checked }: any = e.target
		const newCars: any = [...cars]
		if (type === 'checkbox') {
			if (checked) {
				newCars[index][name].push(value)
			} else {
				const featureIndex = newCars[index][name].indexOf(value)
				newCars[index][name].splice(featureIndex, 1)
			}
		} else {
			newCars[index][name] = value
		}
		setCars(newCars)
	}

	const handleAddCar = () => {
		setCars([...cars, { make: '', model: '', features: [] }])
	}

	const handleDeleteCar = (index: number) => {
		const newCars = [...cars]
		newCars.splice(index, 1)
		setCars(newCars)
	}

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		console.log(cars)
		// Add your form submission logic here
	}
	return (
		<>
			<PageBreadcrumb2 title="Repeater" appName="Forms" />

			<ComponentContainerCard
				title="Default Repeater"
				description="An interface to add and remove a repeatable group of input elements."
			>
				<Form onSubmit={handleSubmit} className="form-horizontal well">
					<fieldset>
						<div className="repeater-default">
							<div data-repeater-list="car">
								{cars.map((car, index) => (
									<div key={index} data-repeater-item>
										<div className="form-group row d-flex align-items-end">
											<Col sm={4}>
												<Form.Label>Make</Form.Label>
												<Form.Control
													as="select"
													name={`car[${index}][make]`}
													value={car.make}
													onChange={(e: any) => handleChange(index, e)}
												>
													<option value="volkswagen">Volkswagen</option>
													<option value="honda">Honda</option>
													<option value="ford">Ford</option>
												</Form.Control>
											</Col>

											<Col sm={4}>
												<Form.Label>Model</Form.Label>
												<Form.Control
													type="text"
													name={`car[${index}][model]`}
													value={car.model}
													onChange={(e: any) => handleChange(index, e)}
												/>
											</Col>

											<Col sm={3}>
												<div className="form-check">
													<Form.Check
														type="checkbox"
														id={`customCheck${index + 1}`}
														label="Air Conditioning"
														name={`car[${index}][features][]`}
														value="ac"
														checked={car.features.includes('ac')}
														onChange={(e: any) => handleChange(index, e)}
													/>
												</div>
												<div className="form-check">
													<Form.Check
														type="checkbox"
														id={`customCheck${index + 2}`}
														label="Anti-Lock Brakes"
														name={`car[${index}][features][]`}
														value="abs"
														checked={car.features.includes('abs')}
														onChange={(e) => handleChange(index, e)}
													/>
												</div>
											</Col>

											<Col sm={1}>
												<Button
													variant="outline-danger"
													onClick={() => handleDeleteCar(index)}
												>
													<span className="far fa-trash-alt me-1"></span> Delete
												</Button>
											</Col>
										</div>
									</div>
								))}
							</div>
							<div className="form-group mb-0 row">
								<Col sm={12}>
									<Button variant="outline-secondary" onClick={handleAddCar}>
										<span className="fas fa-plus"></span> Add
									</Button>
									<Button type="submit" variant="outline-primary">
										Submit
									</Button>
								</Col>
							</div>
						</div>
					</fieldset>
				</Form>
			</ComponentContainerCard>

			<ComponentContainerCard
				title="Custom Show/Hide Repeater"
				description="An interface to add and remove a repeatable group of input elements."
			>
				<Form onSubmit={handleSubmit} className="form-horizontal well">
					<fieldset>
						<div className="repeater-custom-show-hide">
							<div data-repeater-list="car">
								{cars.map((car, index) => (
									<div key={index} data-repeater-item>
										<div className="form-group row  d-flex align-items-end">
											<Col sm={4}>
												<FormLabel>Make</FormLabel>
												<FormControl
													as="select"
													name={`car[${index}][make]`}
													value={car.make}
													onChange={(e: any) => handleChange(index, e)}
												>
													<option value="volkswagen">Volkswagen</option>
													<option value="honda">Honda</option>
													<option value="ford">Ford</option>
												</FormControl>
											</Col>

											<Col sm={4}>
												<FormLabel>Model</FormLabel>
												<FormControl
													type="text"
													name={`car[${index}][model]`}
													value={car.model}
													onChange={(e: any) => handleChange(index, e)}
												/>
											</Col>

											<Col sm={3}>
												<div className="form-check">
													<FormCheck
														type="checkbox"
														id={`customCheck-${index}-ac`}
														label="Air Conditioning"
														name={`car[${index}][features]`}
														value="ac"
														checked={car.features.includes('ac')}
														onChange={(e: any) => handleChange(index, e)}
													/>
												</div>
												<div className="form-check">
													<FormCheck
														type="checkbox"
														id={`customCheck-${index}-abs`}
														label="Anti-Lock Brakes"
														name={`car[${index}][features]`}
														value="abs"
														checked={car.features.includes('abs')}
														onChange={(e) => handleChange(index, e)}
													/>
												</div>
											</Col>

											<Col sm={1}>
												<Button
													variant="outline-danger"
													onClick={() => handleDeleteCar(index)}
												>
													<span className="far fa-trash-alt me-1"></span> Delete
												</Button>
											</Col>
										</div>
									</div>
								))}
							</div>
							<div className="form-group row mb-0">
								<Col sm={12} lassName="d-flex gap-1">
									<Button variant="outline-secondary" onClick={handleAddCar}>
										<span className="fa fa-plus"></span> Add
									</Button>
									<Button type="submit" variant="outline-primary">
										Submit
									</Button>
								</Col>
							</div>
						</div>
					</fieldset>
				</Form>
			</ComponentContainerCard>
		</>
	)
}

export default Repeater
