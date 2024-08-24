import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Modal, Row, Col, Button } from 'react-bootstrap'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { EventInput } from '@fullcalendar/core'

// components
import { FormTextInput, SelectInput } from '@/components'

type FormValues = {
	title: string
	className: string
}

interface AddEditEventProps {
	isOpen?: boolean
	onClose?: () => void
	isEditable?: boolean
	eventData: EventInput
	onRemoveEvent?: () => void
	onUpdateEvent: (value: any) => void
	onAddEvent: (value: any) => void
}

const AddEditEvent = ({
	isOpen,
	onClose,
	isEditable,
	eventData,
	onRemoveEvent,
	onUpdateEvent,
	onAddEvent,
}: AddEditEventProps) => {
	// event state
	const [event] = useState<EventInput>(eventData)

	/*
	 * form validation schema
	 */
	const calendarFormSchema = yup.object({
		title: yup.string().required('Please enter event name'),
		className: yup.string().required('Please select category'),
	})

	const { control, handleSubmit, reset } = useForm<FormValues>({
		resolver: yupResolver(calendarFormSchema),
		defaultValues: {
			title: event.title,
			className: event.className ? String(event.className) : 'bg-danger',
		},
	})

	/*
	 * handle form submission
	 */
	const onSubmitEvent = (data: { title: string; className: string }) => {
		isEditable ? onUpdateEvent(data) : onAddEvent(data)
		reset()
	}

	return (
		<Modal show={isOpen} onHide={onClose}>
			<Modal.Header className="py-3 px-4 border-bottom-0" closeButton>
				<Modal.Title as="h5" id="modal-title">
					{isEditable ? 'Edit Event' : 'Add New Event'}
				</Modal.Title>
			</Modal.Header>
			<Modal.Body className="px-4 pb-4 pt-0">
				<form
					noValidate
					name="chat-form"
					id="chat-form"
					onSubmit={handleSubmit(onSubmitEvent)}
				>
					<Row>
						<Col sm={12}>
							<FormTextInput
								type="text"
								label="Event Name"
								name="title"
								className="form-control"
								placeholder="Insert Event Name"
								containerClass={'mb-3'}
								key="title"
								control={control}
							/>
						</Col>
						<Col sm={12}>
							<SelectInput
								label="Category"
								name="className"
								containerClass={'mb-3'}
								key="className"
								control={control}
							>
								<option value="bg-danger">Danger</option>
								<option value="bg-success">Success</option>
								<option value="bg-primary">Primary</option>
								<option value="bg-info">Info</option>
								<option value="bg-dark">Dark</option>
								<option value="bg-warning">Warning</option>
							</SelectInput>
						</Col>
					</Row>

					<Row className="mt-2">
						<Col xs={4}>
							{isEditable ? (
								<Button variant="danger" onClick={onRemoveEvent}>
									Delete
								</Button>
							) : null}
						</Col>
						<Col xs={8} className="text-end">
							<Button className="btn btn-light me-1" onClick={onClose}>
								Close
							</Button>
							<Button
								variant="success"
								type="submit"
								className="btn btn-success"
							>
								Save
							</Button>
						</Col>
					</Row>
				</form>
			</Modal.Body>
		</Modal>
	)
}

export default AddEditEvent
