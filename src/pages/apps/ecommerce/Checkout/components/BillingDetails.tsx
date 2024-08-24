import {
	ComponentContainerCard,
	FormTextInput,
	SelectInput,
} from '@/components'
import {
	Accordion,
	AccordionBody,
	AccordionHeader,
	AccordionItem,
	Button,
	Col,
	Image,
	Row,
} from 'react-bootstrap'

import card2 from '@/assets/images/cards/card-2.png'
import paypal from '@/assets/images/brand-logo/paypal.png'
import { useForm } from 'react-hook-form'

const BillingDetails = () => {
	const { control } = useForm()
	return (
		<ComponentContainerCard title="Billing Details">
			<Accordion
				defaultActiveKey="1"
				flush
				id="accordionFlushExample"
				className="checkout-accordion"
			>
				<AccordionItem eventKey="1">
					<AccordionHeader className="mt-0 arrow-none">
						<div className="d-flex justify-content-between">
							<Image src={card2} height={30} />
							<span className="align-self-center ms-2 fw-semibold">
								Credit Card
							</span>
						</div>
					</AccordionHeader>
					<AccordionBody>
						<Row>
							<Col md={12}>
								<FormTextInput
									name="cardNo"
									label="Card No :"
									placeholder="1234-5678-9123-4567"
									control={control}
									className="form-control-sm"
								/>
							</Col>

							<SelectInput
								name="eMonth"
								label="Expiry Month"
								labelClassName="my-2"
								control={control}
								containerClass="col-md-4"
								className="form-control-sm"
							>
								<option defaultValue="selected">-- Select --</option>
								<option value={1}>1</option>
								<option value={2}>2</option>
								<option value={3}>3</option>
								<option value={4}>4</option>
								<option value={5}>5</option>
								<option value={6}>6</option>
								<option value={7}>7</option>
								<option value={8}>8</option>
								<option value={9}>9</option>
								<option value={10}>10</option>
								<option value={11}>11</option>
								<option value={12}>12</option>
							</SelectInput>

							<SelectInput
								name="eYear"
								label="Expiry Year"
								labelClassName="my-2"
								control={control}
								containerClass="col-md-4"
								className="form-control-sm"
							>
								<option defaultValue="selected">-- Select --</option>
								<option value={1}>2020</option>
								<option value={2}>2021</option>
								<option value={3}>2022</option>
								<option value={4}>2023</option>
								<option value={5}>2024</option>
								<option value={6}>2025</option>
							</SelectInput>

							<FormTextInput
								name="sCode"
								label="Security Code"
								labelClassName="my-2"
								containerClass="col-md-4"
								placeholder="Enter CVV"
								control={control}
								className="form-control-sm"
							/>
						</Row>
					</AccordionBody>
				</AccordionItem>
				<AccordionItem eventKey="2">
					<AccordionHeader className="mt-0">
						<div className="w-100 d-flex justify-content-between">
							<span className="align-self-center">Paypal</span>
							<Image src={paypal} height={30} />
						</div>
					</AccordionHeader>
					<AccordionBody>
						<p className="mb-0 text-muted">Add Paypal form page</p>
					</AccordionBody>
				</AccordionItem>
			</Accordion>
			<Button variant="soft-primary" className="w-100">
				Place Your Order
			</Button>
		</ComponentContainerCard>
	)
}

export default BillingDetails
