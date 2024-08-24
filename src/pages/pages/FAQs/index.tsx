import {
	ComponentContainerCard,
	FormTextInput,
	PageBreadcrumb2,
	TextAreaInput,
} from '@/components'
import { splitArray } from '@/utils'
import { yupResolver } from '@hookform/resolvers/yup'
import {
	Accordion,
	AccordionBody,
	AccordionHeader,
	AccordionItem,
	Button,
	Col,
	Row,
} from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

const faqData = [
	{
		id: 1,
		title: 'What is Dastone?',
	},
	{
		id: 2,
		title: 'How buy Dastone on coin?',
	},
	{
		id: 3,
		title: 'What cryptocurrency can i use to buy Dastone?',
	},
	{
		id: 4,
		title: 'Where can i download the wallet?',
	},
	{
		id: 5,
		title: 'Can i trade Dastone?',
	},
	{
		id: 6,
		title: 'What is Dastone?',
	},
]

const FAQs1 = () => {
	const faqs = faqData || []
	const faqChunks = splitArray(faqs, 3)
	return (
		<ComponentContainerCard
			title="Most Commonly Asked Questions"
			description="Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid."
		>
			<Row>
				{faqChunks.map((chunk, idx) => {
					return (
						<Col lg={6} key={idx}>
							<ul className="list-unstyled faq-qa">
								{chunk.map((item, idx) => {
									return (
										<li key={idx} className="mb-5">
											<h6>
												{item.id}. {item.title}
											</h6>
											<p className="font-14 text-muted ms-3">
												Anim pariatur cliche reprehenderit, enim eiusmod high
												life accusamus terry richardson ad squid.
											</p>
										</li>
									)
								})}
							</ul>
						</Col>
					)
				})}
			</Row>
		</ComponentContainerCard>
	)
}

const FAQsAccordion = () => {
	return (
		<ComponentContainerCard
			title="Most Commonly Asked Questions"
			description="Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid."
		>
			<Accordion defaultActiveKey="0">
				{faqData.slice(0, 3).map((faq, idx) => {
					return (
						<AccordionItem eventKey={`${idx}`} key={idx}>
							<AccordionHeader as="h2" className="mt-0">
								{faq.title}
							</AccordionHeader>
							<AccordionBody>
								<strong>This is the {faq.id} item's accordion body.</strong> It
								is hidden by default, until the collapse plugin adds the
								appropriate classes that we use to style each element. These
								classes control the overall appearance, as well as the showing
								and hiding via CSS transitions. You can modify any of this with
								custom CSS or overriding our default variables. It's also worth
								noting that just about any HTML can go within the
								<code>.accordion-body</code>, though the transition does limit
								overflow.
							</AccordionBody>
						</AccordionItem>
					)
				})}
			</Accordion>
		</ComponentContainerCard>
	)
}

const FAQsForm = () => {
	const faqFormSchema = yup.object({
		name: yup.string().required('Please enter name'),
		email: yup
			.string()
			.email('Please enter a valid email address')
			.required('Please enter email'),
		subject: yup.string().required('Please enter subject'),
		message: yup.string().required('Please enter message'),
	})

	const { control, handleSubmit } = useForm({
		resolver: yupResolver(faqFormSchema),
	})
	return (
		<ComponentContainerCard
			title="Have More Questions"
			description="Don't Worry ! Email us your Questions or you can send us twitter."
		>
			<Row>
				<Col xs={12}>
					<form onSubmit={handleSubmit(() => {})}>
						<Row>
							<FormTextInput
								name="name"
								placeholder="Name"
								containerClass="col-lg-6 mb-2"
								control={control}
							/>
							<FormTextInput
								name="email"
								type="email"
								placeholder="Email"
								containerClass="col-lg-6 mb-2"
								control={control}
							/>
						</Row>
						<Row>
							<FormTextInput
								name="subject"
								placeholder="Subject"
								containerClass="col-12 mb-2"
								control={control}
							/>
						</Row>
						<TextAreaInput
							name="message"
							containerClass="mb-2"
							rows={4}
							placeholder="Your message"
							control={control}
						/>
						<Button variant="primary" type="submit" className="btn-block px-4">
							Send Email
						</Button>
					</form>
				</Col>
			</Row>
		</ComponentContainerCard>
	)
}

const FAQs = () => {
	return (
		<>
			<PageBreadcrumb2 appName="Pages" title="FAQ" />
			<Row>
				<Col xs={12}>
					<FAQs1 />
				</Col>
			</Row>
			<Row>
				<Col lg={6}>
					<FAQsAccordion />
				</Col>
				<Col lg={6}>
					<FAQsForm />
				</Col>
			</Row>
		</>
	)
}

export default FAQs
