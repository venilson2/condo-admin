import { PageBreadcrumb } from '@/components'
import { Col, Row } from 'react-bootstrap'

import logoSm from '@/assets/images/logo-sm.png'
import { Link } from 'react-router-dom'

const ActionEmail = () => {
	return (
		<>
			<PageBreadcrumb subName="Email Template" title="Basic Email" />
			<Row>
				<Col lg={12}>
					<table
						className="body-wrap"
						style={{
							fontFamily: '"Helvetica Neue",Helvetica,Arial,sans-serif',
							boxSizing: 'border-box',
							fontSize: 14,
							width: '100%',
							backgroundColor: 'transparent',
							margin: 0,
						}}
						bgcolor="transparent"
					>
						<tbody>
							<tr
								style={{
									fontFamily: '"Helvetica Neue",Helvetica,Arial,sans-serif',
									boxSizing: 'border-box',
									fontSize: 14,
									margin: 0,
								}}
							>
								<td
									style={{
										fontFamily: '"Helvetica Neue",Helvetica,Arial,sans-serif',
										boxSizing: 'border-box',
										fontSize: 14,
										verticalAlign: 'top',
										margin: 0,
									}}
									valign="top"
								/>
								<td
									className="container"
									width={600}
									style={{
										fontFamily: '"Helvetica Neue",Helvetica,Arial,sans-serif',
										boxSizing: 'border-box',
										fontSize: 14,
										verticalAlign: 'top',
										display: 'block !important',
										maxWidth: '600px !important',
										clear: 'both',
										margin: '0 auto',
									}}
									valign="top"
								>
									<div
										className="content"
										style={{
											fontFamily: '"Helvetica Neue",Helvetica,Arial,sans-serif',
											boxSizing: 'border-box',
											fontSize: 14,
											maxWidth: 600,
											display: 'block',
											margin: '0 auto',
											padding: 20,
										}}
									>
										<table
											className="main"
											width="100%"
											cellPadding={0}
											cellSpacing={0}
											itemProp="action"
											itemScope
											itemType="http://schema.org/ConfirmAction"
											style={{
												fontFamily:
													'"Helvetica Neue",Helvetica,Arial,sans-serif',
												boxSizing: 'border-box',
												fontSize: 14,
												borderRadius: 3,
												backgroundColor: 'transparent',
												margin: 0,
												border: '1px dashed #4d79f6',
											}}
											bgcolor="#fff"
										>
											<tbody>
												<tr
													style={{
														fontFamily:
															'"Helvetica Neue",Helvetica,Arial,sans-serif',
														boxSizing: 'border-box',
														fontSize: 14,
														margin: 0,
													}}
												>
													<td
														className="content-wrap"
														style={{
															fontFamily:
																'"Helvetica Neue",Helvetica,Arial,sans-serif',
															boxSizing: 'border-box',
															fontSize: 14,
															verticalAlign: 'top',
															margin: 0,
															padding: 20,
														}}
														valign="top"
													>
														<meta
															itemProp="name"
															content="Confirm Email"
															style={{
																fontFamily:
																	'"Helvetica Neue",Helvetica,Arial,sans-serif',
																boxSizing: 'border-box',
																fontSize: 14,
																margin: 0,
															}}
														/>
														<table
															width="100%"
															cellPadding={0}
															cellSpacing={0}
															style={{
																fontFamily:
																	'"Helvetica Neue",Helvetica,Arial,sans-serif',
																boxSizing: 'border-box',
																fontSize: 14,
																margin: 0,
															}}
														>
															<tbody>
																<tr>
																	<td>
																		<Link to="#">
																			<img
																				src={logoSm}
																				style={{
																					marginLeft: 'auto',
																					marginRight: 'auto',
																					display: 'block',
																					marginBottom: 10,
																					height: 40,
																				}}
																			/>
																		</Link>
																	</td>
																</tr>
																<tr
																	style={{
																		fontFamily:
																			'"Helvetica Neue",Helvetica,Arial,sans-serif',
																		boxSizing: 'border-box',
																		fontSize: 14,
																		margin: 0,
																	}}
																>
																	<td
																		className="content-block"
																		style={{
																			fontFamily:
																				'"Helvetica Neue",Helvetica,Arial,sans-serif',
																			boxSizing: 'border-box',
																			color: '#4d79f6',
																			fontSize: 24,
																			fontWeight: 700,
																			textAlign: 'center',
																			verticalAlign: 'top',
																			margin: 0,
																			padding: '0 0 10px',
																		}}
																		valign="top"
																	>
																		WelCome To Dastone
																	</td>
																</tr>
																<tr
																	style={{
																		fontFamily:
																			'"Helvetica Neue",Helvetica,Arial,sans-serif',
																		boxSizing: 'border-box',
																		fontSize: 14,
																		margin: 0,
																	}}
																>
																	<td
																		className="content-block"
																		style={{
																			fontFamily:
																				'"Helvetica Neue",Helvetica,Arial,sans-serif',
																			boxSizing: 'border-box',
																			color: '#3f5db3',
																			fontSize: 14,
																			verticalAlign: 'top',
																			margin: 0,
																			padding: '10px 10px',
																		}}
																		valign="top"
																	>
																		Please confirm your email address by
																		clicking the link below.
																	</td>
																</tr>
																<tr
																	style={{
																		fontFamily:
																			'"Helvetica Neue",Helvetica,Arial,sans-serif',
																		boxSizing: 'border-box',
																		fontSize: 14,
																		margin: 0,
																	}}
																>
																	<td
																		className="content-block"
																		style={{
																			fontFamily:
																				'"Helvetica Neue",Helvetica,Arial,sans-serif',
																			boxSizing: 'border-box',
																			fontSize: 14,
																			verticalAlign: 'top',
																			margin: 0,
																			padding: '10px 10px',
																		}}
																		valign="top"
																	>
																		We may need to send you critical information
																		about our service and it is important that
																		we have an accurate email address.
																	</td>
																</tr>
																<tr
																	style={{
																		fontFamily:
																			'"Helvetica Neue",Helvetica,Arial,sans-serif',
																		boxSizing: 'border-box',
																		fontSize: 14,
																		margin: 0,
																	}}
																>
																	<td
																		className="content-block"
																		itemProp="handler"
																		itemScope
																		itemType="http://schema.org/HttpActionHandler"
																		style={{
																			fontFamily:
																				'"Helvetica Neue",Helvetica,Arial,sans-serif',
																			boxSizing: 'border-box',
																			fontSize: 14,
																			verticalAlign: 'top',
																			margin: 0,
																			padding: '10px 10px',
																		}}
																		valign="top"
																	>
																		<Link
																			to="#"
																			className="btn-primary"
																			style={{
																				fontSize: 14,
																				textDecoration: 'none',
																				lineHeight: '2em',
																				fontWeight: 'bold',
																				textAlign: 'center',
																				cursor: 'pointer',
																				display: 'block',
																				borderRadius: 5,
																				textTransform: 'capitalize',
																				border: 'none',
																				padding: '10px 20px',
																			}}
																		>
																			Confirm email address
																		</Link>
																	</td>
																</tr>
																<tr
																	style={{
																		fontFamily:
																			'"Helvetica Neue",Helvetica,Arial,sans-serif',
																		boxSizing: 'border-box',
																		fontSize: 14,
																		margin: 0,
																	}}
																>
																	<td
																		className="content-block"
																		style={{
																			fontFamily:
																				'"Helvetica Neue",Helvetica,Arial,sans-serif',
																			boxSizing: 'border-box',
																			fontSize: 14,
																			paddingTop: 5,
																			verticalAlign: 'top',
																			margin: 0,
																			textAlign: 'right',
																		}}
																		valign="top"
																	>
																		— <b>Dastone</b> - Admin Dashboard
																	</td>
																</tr>
															</tbody>
														</table>
													</td>
												</tr>
											</tbody>
										</table>
									</div>
								</td>
								<td
									style={{
										fontFamily: '"Helvetica Neue",Helvetica,Arial,sans-serif',
										boxSizing: 'border-box',
										fontSize: 14,
										verticalAlign: 'top',
										margin: 0,
									}}
									valign="top"
								/>
							</tr>
						</tbody>
					</table>
				</Col>
			</Row>
		</>
	)
}

export default ActionEmail
