import { ComponentContainerCard } from '@/components'
import { Col, FormControl, FormSelect, Row } from 'react-bootstrap'

const DeliveryAddress = () => {
	return (
		<ComponentContainerCard title="Delivery Address">
			<Row className="form-group row">
				<label className="col-xl-3 col-lg-3 text-end align-self-center mb-lg-0 form-label">
					First Name
				</label>
				<Col lg={9} xl={8}>
					<FormControl className="form-control-sm" type="text" id="firstname" />
				</Col>
			</Row>
			<Row className="form-group">
				<label className="col-xl-3 col-lg-3 text-end align-self-center mb-lg-0 form-label">
					Last Name
				</label>
				<Col lg={9} xl={8}>
					<FormControl className="form-control-sm" type="text" id="lastname" />
				</Col>
			</Row>
			<Row className="form-group">
				<label className="col-xl-3 col-lg-3 text-end align-self-center mb-lg-0 form-label">
					Delivery Address
				</label>
				<Col lg={9} xl={8}>
					<FormControl as="textarea" className="form-control-sm" rows={3} />
				</Col>
			</Row>
			<Row className="form-group">
				<label className="col-xl-3 col-lg-3 text-end align-self-center mb-lg-0 form-label">
					City
				</label>
				<Col lg={9} xl={8}>
					<FormControl className="form-control-sm" type="text" id="city" />
				</Col>
			</Row>
			<Row className="form-group">
				<label className="col-xl-3 col-lg-3 text-end align-self-center mb-lg-0 form-label">
					State
				</label>
				<Col lg={9} xl={8}>
					<FormSelect className="form-control-sm">
						<option>Select</option>
						<option>Gujarat</option>
						<option>New york</option>
						<option>California</option>
					</FormSelect>
				</Col>
			</Row>
			<Row className="form-group">
				<label className="col-xl-3 col-lg-3 text-end align-self-center mb-lg-0 form-label">
					Country
				</label>
				<Col lg={9} xl={8}>
					<FormSelect className="form-control-sm">
						<option>Select</option>
						<option>India</option>
						<option>USA</option>
						<option>New Zealand</option>
					</FormSelect>
				</Col>
			</Row>
			<Row className="form-group">
				<label className="col-xl-3 col-lg-3 text-end align-self-center mb-lg-0 form-label">
					Zip Code
				</label>
				<Col lg={9} xl={8}>
					<FormControl className="form-control-sm" type="text" />
				</Col>
			</Row>
			<Row className="form-group">
				<label className="col-xl-3 col-lg-3 text-end align-self-center mb-lg-0 form-label">
					Email Address
				</label>
				<Col lg={9} xl={8}>
					<FormControl className="form-control-sm" type="text" />
				</Col>
			</Row>
			<Row className="form-group">
				<label className="col-xl-3 col-lg-3 text-end align-self-center mb-lg-0 form-label">
					Mobile No
				</label>
				<Col lg={9} xl={8}>
					<FormControl className="form-control-sm" type="text" />
				</Col>
			</Row>
			<Row className="form-group">
				<Col lg={9} xl={8} className="offset-lg-3 offset-xl-3">
					<div className="custom-control custom-checkbox">
						<FormControl
							type="checkbox"
							className="custom-control-input"
							id="horizontalCheckbox"
							data-parsley-multiple="groups"
							data-parsley-mincheck="2"
						/>
						<label
							className="custom-control-label"
							htmlFor="horizontalCheckbox"
						>
							Confirm Shipping Address
						</label>
					</div>
				</Col>
			</Row>
		</ComponentContainerCard>
	)
}

export default DeliveryAddress
