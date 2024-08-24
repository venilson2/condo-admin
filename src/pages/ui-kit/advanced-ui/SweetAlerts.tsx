import { ComponentContainerCard, PageBreadcrumb2 } from '@/components'
import { Button, Col, Row } from 'react-bootstrap'
import { FiThumbsUp } from 'react-icons/fi'
import { withSwal } from 'react-sweetalert2'
import logoSm from '@/assets/images/logo-sm.png'
import bgPattern from '@/assets/images/pattern.png'

const SweetAlerts = withSwal((props: any) => {
	const { swal } = props
	let timerInterval: NodeJS.Timeout

	const swalWithBootstrapButtons = swal.mixin({
		customClass: {
			confirmButton: 'btn btn-success',
			cancelButton: 'btn btn-danger me-2',
		},
		buttonsStyling: false,
	})

	const Toast = swal.mixin({
		toast: true,
		position: 'top-end',
		showConfirmButton: false,
		timer: 3000,
		timerProgressBar: true,
		didOpen: (toast: HTMLElement) => {
			toast.addEventListener('mouseenter', swal.stopTimer)
			toast.addEventListener('mouseleave', swal.resumeTimer)
		},
	})
	return (
		<>
			<PageBreadcrumb2 appName="Advanced UI" title="Sweet Alert" />
			<Row>
				<Col xs={12}>
					<ComponentContainerCard
						title="Examples"
						description="A beautiful, responsive, customizable and accessible (WAI-ARIA) replacement for JavaScript's popup boxes. Zero dependencies."
					>
						<div className="table-responsive">
							<table className="table mb-0">
								<tbody>
									<tr className="border-0">
										<td className="border-0">
											<i className="mdi mdi-circle-outline me-1 text-pink"></i>A
											basic message
										</td>
										<td className="border-0">
											<Button
												variant="outline-primary"
												size="sm"
												onClick={() =>
													swal.fire({
														title: 'Any fool can use a computer',
													})
												}
											>
												Click me
											</Button>
										</td>
									</tr>
									<tr className="border-0">
										<td className="border-0">
											<i className="mdi mdi-circle-outline me-1 text-success"></i>
											A title with a text under
										</td>
										<td className="border-0">
											<Button
												variant="outline-primary"
												size="sm"
												onClick={() =>
													swal.fire({
														title: 'The Internet?',
														text: 'That thing is still around?',
														icon: 'question',
													})
												}
											>
												Click me
											</Button>
										</td>
									</tr>
									<tr className="border-0">
										<td className="border-0">
											<i className="mdi mdi-circle-outline me-1 text-warning"></i>
											A modal with a title, an error icon, a text, and a footer
										</td>
										<td className="border-0">
											<Button
												variant="outline-primary"
												size="sm"
												onClick={() =>
													swal.fire({
														icon: 'error',
														title: 'Oops...',
														text: 'Something went wrong!',
														footer: '<a href>Why do I have this issue?</a>',
													})
												}
											>
												Click me
											</Button>
										</td>
									</tr>
									<tr className="border-0">
										<td className="border-0">
											<i className="mdi mdi-circle-outline me-1 text-dark"></i>
											Custom HTML description and buttons with ARIA labels
										</td>
										<td className="border-0">
											<Button
												variant="outline-primary"
												size="sm"
												onClick={() =>
													swal.fire({
														title: '<b>HTML</b> <u>example</u>',
														icon: 'info',
														html:
															'You can use <b>bold text</b>, ' +
															'<a href="//mannatthemes.com/">links</a> ' +
															'and other HTML tags',
														showCloseButton: true,
														showCancelButton: true,
														confirmButtonClass: 'btn btn-confirm',
														cancelButtonClass: 'btn btn-cancel ms-1',
														confirmButtonText: `<${FiThumbsUp} /> Great!`,
														cancelButtonText: `Cancel`,
													})
												}
											>
												Click me
											</Button>
										</td>
									</tr>
									<tr className="border-0">
										<td className="border-0">
											<i className="mdi mdi-circle-outline me-1 text-pink"></i>A
											dialog with three buttons
										</td>
										<td className="border-0">
											<Button
												variant="outline-primary"
												size="sm"
												onClick={() =>
													swal
														.fire({
															title: 'Do you want to save the changes?',
															showDenyButton: true,
															showCancelButton: true,
															confirmButtonText: `Save`,
															denyButtonText: `Don't save`,
														})
														.then((result: any) => {
															/* Read more about isConfirmed, isDenied below */
															if (result.isConfirmed) {
																swal.fire('Saved!', '', 'success')
															} else if (result.isDenied) {
																swal.fire('Changes are not saved', '', 'info')
															}
														})
												}
											>
												Click me
											</Button>
										</td>
									</tr>
									<tr className="border-0">
										<td className="border-0">
											<i className="mdi mdi-circle-outline me-1 text-info"></i>A
											custom positioned dialog
										</td>
										<td className="border-0">
											<Button
												variant="outline-primary"
												size="sm"
												onClick={() =>
													swal.fire({
														position: 'top-end',
														icon: 'success',
														title: 'Your work has been saved',
														showConfirmButton: false,
														timer: 1500,
													})
												}
											>
												Click me
											</Button>
										</td>
									</tr>
									<tr className="border-0">
										<td className="border-0">
											<i className="mdi mdi-circle-outline me-1 text-primary"></i>
											Custom animation with Animation
										</td>
										<td className="border-0">
											<Button
												variant="outline-primary"
												size="sm"
												onClick={() =>
													swal.fire({
														title: 'Custom animation with Animate.css',
														showClass: {
															popup: 'animate__animated animate__fadeInDown',
														},
														hideClass: {
															popup: 'animate__animated animate__fadeOutUp',
														},
													})
												}
											>
												Click me
											</Button>
										</td>
									</tr>
									<tr className="border-0">
										<td className="border-0">
											<i className="mdi mdi-circle-outline me-1 text-secondary"></i>
											A confirm dialog, with a function attached to the
											"Confirm"-button...
										</td>
										<td className="border-0">
											<Button
												variant="outline-primary"
												size="sm"
												onClick={() =>
													swal
														.fire({
															title: 'Are you sure?',
															text: "You won't be able to revert this!",
															icon: 'warning',
															showCancelButton: true,
															confirmButtonColor: '#3085d6',
															cancelButtonColor: '#d33',
															confirmButtonText: 'Yes, delete it!',
														})
														.then(function (result: any) {
															if (result.isConfirmed) {
																swal.fire(
																	'Deleted!',
																	'Your file has been deleted.',
																	'success'
																)
															}
														})
												}
											>
												Click me
											</Button>
										</td>
									</tr>
									<tr className="border-0">
										<td className="border-0">
											<i className="mdi mdi-circle-outline me-1 text-danger"></i>
											... and by passing a parameter, you can execute something
											else for "Cancel".
										</td>
										<td className="border-0">
											<Button
												variant="outline-primary"
												size="sm"
												onClick={() =>
													swalWithBootstrapButtons
														.fire({
															title: 'Are you sure?',
															text: "You won't be able to revert this!",
															icon: 'warning',
															showCancelButton: true,
															confirmButtonText: 'Yes, delete it!',
															cancelButtonText: 'No, cancel!',
															reverseButtons: true,
														})
														.then((result: any) => {
															if (result.isConfirmed) {
																swalWithBootstrapButtons.fire(
																	'Deleted!',
																	'Your file has been deleted.',
																	'success'
																)
															} else if (
																/* Read more about handling dismissals below */
																result.dismiss === swal.DismissReason.cancel
															) {
																swalWithBootstrapButtons.fire(
																	'Cancelled',
																	'Your imaginary file is safe :)',
																	'error'
																)
															}
														})
												}
											>
												Click me
											</Button>
										</td>
									</tr>
									<tr className="border-0">
										<td className="border-0">
											<i className="mdi mdi-circle-outline me-1 text-purple"></i>
											A message with a custom image
										</td>
										<td className="border-0">
											<Button
												variant="outline-primary"
												size="sm"
												onClick={() =>
													swal.fire({
														title: 'Metrica!',
														text: 'Modal with a Brand Logo.',
														imageUrl: logoSm,
														imageWidth: 80,
														imageHeight: 80,
														imageAlt: 'Custom image',
													})
												}
											>
												Click me
											</Button>
										</td>
									</tr>
									<tr className="border-0">
										<td className="border-0">
											<i className="mdi mdi-circle-outline me-1 text-success"></i>
											A message with custom width, padding, background and
											animated Nyan Cat
										</td>
										<td className="border-0">
											<Button
												variant="outline-primary"
												size="sm"
												onClick={() =>
													swal.fire({
														title: 'Custom width, padding, background.',
														width: 600,
														padding: 50,
														background: `rgba(254,254,254,1) url(${bgPattern})`,
													})
												}
											>
												Click me
											</Button>
										</td>
									</tr>
									<tr className="border-0">
										<td className="border-0">
											<i className="mdi mdi-circle-outline me-1 text-warning"></i>
											A message with auto close timer
										</td>
										<td className="border-0">
											<Button
												variant="outline-primary"
												size="sm"
												onClick={() =>
													swal
														.fire({
															title: 'Auto close alert!',
															html: 'I will close in <b></b> milliseconds.',
															timer: 2000,
															timerProgressBar: true,
															didOpen: () => {
																swal.showLoading()
																const b = swal
																	.getHtmlContainer()
																	.querySelector('b')
																timerInterval = setInterval(() => {
																	b.textContent = swal.getTimerLeft()
																}, 100)
															},
															willClose: () => {
																clearInterval(timerInterval)
															},
														})
														.then((result: any) => {
															/* Read more about handling dismissals below */
															if (result.dismiss === swal.DismissReason.timer) {
																console.log('I was closed by the timer')
															}
														})
												}
											>
												Click me
											</Button>
										</td>
									</tr>
									<tr className="border-0">
										<td className="border-0">
											<i className="mdi mdi-circle-outline me-1 text-info"></i>
											Right-to-left support for Arabic, Persian, Hebrew, and
											other RTL languages
										</td>
										<td className="border-0">
											<Button
												variant="outline-primary"
												size="sm"
												onClick={() =>
													swal.fire({
														title: 'هل تريد الاستمرار؟',
														icon: 'question',
														iconHtml: '؟',
														confirmButtonText: 'نعم',
														cancelButtonText: 'لا',
														showCancelButton: true,
														showCloseButton: true,
													})
												}
											>
												Click me
											</Button>
										</td>
									</tr>
									<tr className="border-0">
										<td className="border-0">
											<i className="mdi mdi-circle-outline me-1 text-pink"></i>
											AJAX request example
										</td>
										<td className="border-0">
											<Button
												variant="outline-primary"
												size="sm"
												onClick={() =>
													swal
														.fire({
															title: 'Submit your Github username',
															input: 'text',
															inputAttributes: {
																autocapitalize: 'off',
															},
															showCancelButton: true,
															confirmButtonText: 'Look up',
															showLoaderOnConfirm: true,
															preConfirm: (login: string) => {
																return fetch(`//api.github.com/users/${login}`)
																	.then((response) => {
																		if (!response.ok) {
																			throw new Error(response.statusText)
																		}
																		return response.json()
																	})
																	.catch((error) => {
																		swal.showValidationMessage(
																			`Request failed: ${error}`
																		)
																	})
															},
															allowOutsideClick: () => !swal.isLoading(),
														})
														.then((result: any) => {
															if (result.isConfirmed) {
																swal.fire({
																	title: `${result.value.login}'s avatar`,
																	imageUrl: result.value.avatar_url,
																})
															}
														})
												}
											>
												Click me
											</Button>
										</td>
									</tr>
									<tr className="border-0">
										<td className="border-0">
											<i className="mdi mdi-circle-outline me-1 text-warning"></i>
											Mixin example
										</td>
										<td className="border-0">
											<Button
												variant="outline-primary"
												size="sm"
												onClick={() =>
													Toast.fire({
														icon: 'success',
														title: 'Signed in successfully',
													})
												}
											>
												Click me
											</Button>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</ComponentContainerCard>
				</Col>
			</Row>
		</>
	)
})

export default SweetAlerts
