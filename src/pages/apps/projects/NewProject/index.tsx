import {
	FormTextInput,
	PageBreadcrumb2,
	SelectInput,
	TextAreaInput,
} from '@/components'
import {
	Button,
	Card,
	CardBody,
	CardHeader,
	CardTitle,
	Col,
	Image,
	Row,
} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import avatar4 from '@/assets/images/users/user-4.jpg'
import avatar5 from '@/assets/images/users/user-5.jpg'
import avatar6 from '@/assets/images/users/user-6.jpg'
import avatar8 from '@/assets/images/users/user-8.jpg'
import avatar9 from '@/assets/images/users/user-9.jpg'
import avatar10 from '@/assets/images/users/user-10.jpg'
import project3 from '@/assets/images/widgets/project3.jpg'

const users = [avatar4, avatar5, avatar6, avatar8, avatar9, avatar10]
const NewProject = () => {
	const settingSchema = yup.object({
		projectName: yup.string().required('Please enter project name'),
		startDate: yup.date().required('Please enter start date'),
		endDate: yup.date().required('Please enter end date'),
		rate: yup.number().required('Please enter rate'),
		priceType: yup.string().required('Please select price type'),
		required: yup.string().required('Please select required'),
		invoiceTime: yup.string().required('Please select invoice time'),
		priority: yup.string().required('Please select priority'),
		message: yup.string().required('Please enter message'),
	})
	const { control, handleSubmit } = useForm({
		resolver: yupResolver(settingSchema),
	})
	return (
		<>
			<PageBreadcrumb2 title="Create Project" appName="Projects" />
			<Row>
				<Col xs={12}>
					<Card>
						<CardHeader>
							<Row className="align-items-center">
								<Col>
									<CardTitle as="h4" className="card-title">
										Create Project Form
									</CardTitle>
									<p className="text-muted mb-0">
										Basic example to create project form styles.
									</p>
								</Col>
							</Row>
						</CardHeader>
						<CardBody>
							<Row>
								<Col lg={6}>
									<form onSubmit={handleSubmit(() => {})}>
										<FormTextInput
											name="projectName"
											label="Project Name :"
											control={control}
											placeholder="Enter project name"
										/>
										<div className="form-group">
											<Row>
												<FormTextInput
													name="startDate"
													label="Project Start Date"
													labelClassName="mt-2"
													placeholder="Enter start date"
													containerClass="col-lg-3 col-6 mb-2 mb-lg-0"
													control={control}
												/>
												<FormTextInput
													name="endDate"
													label="Project End Date"
													labelClassName="mt-2"
													placeholder="Enter end date"
													containerClass="col-lg-3 col-6 mb-2 mb-lg-0"
													control={control}
												/>
												<FormTextInput
													name="rate"
													label="Rate"
													labelClassName="mt-2"
													placeholder="Enter rate"
													containerClass="col-lg-3 col-6"
													control={control}
												/>
												<SelectInput
													name="priceType"
													label="Price Type"
													labelClassName="mt-2"
													containerClass="col-lg-3 col-6"
													control={control}
												>
													<option>Hourly</option>
													<option>Daily</option>
													<option>Fix</option>
												</SelectInput>
											</Row>
										</div>
										<div className="form-group">
											<Row>
												<SelectInput
													name="required"
													label="Required"
													labelClassName="mt-2"
													containerClass="col-lg-6 mb-2 mb-lg-0"
													control={control}
												>
													<option>--Select--</option>
													<option>UI/UX Design</option>
													<option>Payment System </option>
													<option>Android 10</option>
												</SelectInput>
												<SelectInput
													name="invoiceTime"
													label="Invoice Time"
													labelClassName="mt-2"
													containerClass="col-lg-3 col-6"
													control={control}
												>
													<option>30 Day</option>
													<option>3 Month</option>
													<option>1 Year</option>
												</SelectInput>
												<SelectInput
													name="priority"
													label="Priority"
													labelClassName="mt-2"
													containerClass="col-lg-3 col-6"
													control={control}
												>
													<option>-- select --</option>
													<option>High</option>
													<option>Medium</option>
													<option>Low</option>
												</SelectInput>
											</Row>
										</div>
										<TextAreaInput
											name="message"
											label="Message"
											rows={5}
											labelClassName="mt-2"
											placeholder="writing here.."
											containerClass="mb-3"
											control={control}
										/>
										<Button
											variant="soft-primary"
											size="sm"
											type="submit"
											className="me-1"
										>
											Create project
										</Button>
										<Button variant="soft-danger" size="sm" type="button">
											Cancel
										</Button>
									</form>
								</Col>
								<Col lg={5} className="ms-auto align-self-center">
									<form>
										<div className="form-group">
											<label htmlFor="pro-avatar">Project Avatar</label>
											<Image src={project3} className="thumb-lg rounded mx-3" />
											<div className="add-file btn btn-soft-primary btn-sm position-relative overflow-hidden">
												Change Avatar
												<input
													type="file"
													name="file"
													className="add-file-input"
												/>
											</div>
										</div>
										<h5 className="font-weight-normal my-5">
											There are many variations of passages of Lorem Ipsum
											available, but the majority have suffered alteration in
											some form, by injected humour, or randomised.
										</h5>
										<div className="form-group">
											<label htmlFor="team-leader">Project team members</label>
											<div className="img-group ms-3">
												{users.map((user, idx) => {
													return (
														<Link
															className="user-avatar user-avatar-group"
															to="#"
															key={idx}
														>
															<Image
																src={user}
																alt="user"
																className="thumb-xs rounded-circle"
															/>
														</Link>
													)
												})}
											</div>

											<Button
												variant="soft-primary"
												size="sm"
												className="add-member ms-3 px-3"
											>
												<i className="fas fa-plus"></i>
											</Button>
										</div>
									</form>
								</Col>
							</Row>
						</CardBody>
					</Card>
				</Col>
			</Row>
		</>
	)
}

export default NewProject
