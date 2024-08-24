import { PageBreadcrumb } from '@/components'
import { Col, Row } from 'react-bootstrap'
import logoSm from '@/assets/images/logo-sm.png'
import { Link } from 'react-router-dom'

const BillingEmail = () => {
	return (
		<>
			<PageBreadcrumb title="Billing Email" subName="Email Template" />
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
							<tr>
								<td valign="top" />
								<td
									width={600}
									style={{
										display: 'block !important',
										maxWidth: '600px !important',
										clear: 'both',
									}}
									valign="top"
								>
									<div className="content" style={{ padding: 20 }}>
										<table
											className="main"
											width="100%"
											cellPadding={0}
											cellSpacing={0}
											style={{
												border: '1px dashed #4d79f6',
											}}
										>
											<tbody>
												<tr>
													<td
														className="content-wrap aligncenter"
														style={{
															padding: 20,
															backgroundColor: 'transparent',
														}}
														align="center"
														valign="top"
													>
														<table width="100%" cellPadding={0} cellSpacing={0}>
															<tbody>
																<tr>
																	<td>
																		<Link to="#">
																			<img
																				src={logoSm}
																				style={{
																					height: 40,
																					marginLeft: 'auto',
																					marginRight: 'auto',
																					display: 'block',
																				}}
																			/>
																		</Link>
																	</td>
																</tr>
																<tr>
																	<td
																		className="content-block"
																		style={{
																			padding: '0 0 20px',
																		}}
																		valign="top"
																	>
																		<h2
																			className="aligncenter"
																			style={{
																				fontFamily:
																					'"Helvetica Neue",Helvetica,Arial,"Lucida Grande",sans-serif',
																				fontSize: 24,
																				color: '#50649c',
																				lineHeight: '1.2em',
																				fontWeight: 600,
																				textAlign: 'center',
																			}}
																		>
																			Thanks for using{' '}
																			<span
																				style={{
																					color: '#4d79f6',
																					fontWeight: 700,
																				}}
																			>
																				Dastone
																			</span>
																			.
																		</h2>
																	</td>
																</tr>
																<tr>
																	<td
																		className="content-block aligncenter"
																		style={{
																			padding: '0 0 20px',
																		}}
																		align="center"
																		valign="top"
																	>
																		<table
																			className="invoice"
																			style={{
																				width: '80%',
																			}}
																		>
																			<tbody>
																				<tr>
																					<td
																						style={{
																							fontFamily:
																								'"Helvetica Neue",Helvetica,Arial,sans-serif',
																							fontSize: 14,
																							padding: '5px 0',
																						}}
																						valign="top"
																					>
																						Mannatthemes
																						<br />
																						Invoice #12345
																						<br />
																						01 Sep 2021
																					</td>
																				</tr>
																				<tr>
																					<td
																						style={{
																							padding: '5px 0',
																						}}
																						valign="top"
																					>
																						<table
																							className="invoice-items"
																							cellPadding={0}
																							cellSpacing={0}
																							style={{
																								width: '100%',
																							}}
																						>
																							<tbody>
																								<tr>
																									<td
																										style={{
																											fontFamily:
																												'"Helvetica Neue",Helvetica,Arial,sans-serif',
																											fontSize: 14,
																											verticalAlign: 'top',
																											borderTopWidth: 1,
																											borderTopColor: '#eee',
																											borderTopStyle: 'solid',
																											margin: 0,
																											padding: '10px 0',
																										}}
																										valign="top"
																									>
																										Apple iphone X
																									</td>
																									<td
																										className="alignright"
																										style={{
																											fontFamily:
																												'"Helvetica Neue",Helvetica,Arial,sans-serif',
																											fontSize: 14,
																											verticalAlign: 'top',
																											textAlign: 'right',
																											borderTopWidth: 1,
																											borderTopColor: '#eee',
																											borderTopStyle: 'solid',
																											margin: 0,
																											padding: '10px 0',
																										}}
																										align="right"
																										valign="top"
																									>
																										$ 1499.99
																									</td>
																								</tr>
																								<tr>
																									<td
																										style={{
																											fontFamily:
																												'"Helvetica Neue",Helvetica,Arial,sans-serif',
																											fontSize: 14,
																											verticalAlign: 'top',
																											borderTopWidth: 1,
																											borderTopColor: '#eee',
																											borderTopStyle: 'solid',
																											margin: 0,
																											padding: '10px 0',
																										}}
																										valign="top"
																									>
																										Data cable
																									</td>
																									<td
																										className="alignright"
																										style={{
																											fontFamily:
																												'"Helvetica Neue",Helvetica,Arial,sans-serif',
																											fontSize: 14,
																											verticalAlign: 'top',
																											textAlign: 'right',
																											borderTopWidth: 1,
																											borderTopColor: '#eee',
																											borderTopStyle: 'solid',
																											margin: 0,
																											padding: '10px 0',
																										}}
																										align="right"
																										valign="top"
																									>
																										$ 20.00
																									</td>
																								</tr>
																								<tr>
																									<td
																										style={{
																											fontFamily:
																												'"Helvetica Neue",Helvetica,Arial,sans-serif',
																											fontSize: 14,
																											verticalAlign: 'top',
																											borderTopWidth: 1,
																											borderTopColor: '#eee',
																											borderTopStyle: 'solid',
																											margin: 0,
																											padding: '10px 0',
																										}}
																										valign="top"
																									>
																										Phone Cover
																									</td>
																									<td
																										className="alignright"
																										style={{
																											fontFamily:
																												'"Helvetica Neue",Helvetica,Arial,sans-serif',
																											fontSize: 14,
																											verticalAlign: 'top',
																											textAlign: 'right',
																											borderTopWidth: 1,
																											borderTopColor: '#eee',
																											borderTopStyle: 'solid',
																											margin: 0,
																											padding: '10px 0',
																										}}
																										align="right"
																										valign="top"
																									>
																										$ 40.00
																									</td>
																								</tr>
																								<tr>
																									<td
																										className="alignright"
																										width="80%"
																										style={{
																											fontFamily:
																												'"Helvetica Neue",Helvetica,Arial,sans-serif',
																											fontSize: 14,
																											verticalAlign: 'top',
																											textAlign: 'right',
																											borderTopWidth: 2,
																											borderTopColor: '#50649c',
																											borderTopStyle: 'solid',
																											borderBottomColor:
																												'#50649c',
																											borderBottomWidth: 2,
																											borderBottomStyle:
																												'solid',
																											fontWeight: 700,
																											margin: 0,
																											padding: '10px 0',
																										}}
																										align="right"
																										valign="top"
																									>
																										Total
																									</td>
																									<td
																										className="alignright"
																										style={{
																											fontFamily:
																												'"Helvetica Neue",Helvetica,Arial,sans-serif',
																											fontSize: 14,
																											verticalAlign: 'top',
																											textAlign: 'right',
																											borderTopWidth: 2,
																											borderTopColor: '#50649c',
																											borderTopStyle: 'solid',
																											borderBottomColor:
																												'#50649c',
																											borderBottomWidth: 2,
																											borderBottomStyle:
																												'solid',
																											fontWeight: 700,
																											margin: 0,
																											padding: '10px 0',
																										}}
																										align="right"
																										valign="top"
																									>
																										$ 1559.99
																									</td>
																								</tr>
																							</tbody>
																						</table>
																					</td>
																				</tr>
																			</tbody>
																		</table>
																	</td>
																</tr>
																<tr>
																	<td
																		className="content-block aligncenter"
																		style={{
																			fontFamily:
																				'"Helvetica Neue",Helvetica,Arial,sans-serif',
																			fontSize: 14,
																			verticalAlign: 'top',
																			textAlign: 'center',
																			margin: 0,
																			padding: '0 0 20px',
																		}}
																		align="center"
																		valign="top"
																	>
																		<Link
																			to="#"
																			style={{
																				fontFamily:
																					'"Helvetica Neue",Helvetica,Arial,sans-serif',
																				fontSize: 14,
																				color: '#4d79f6',
																				textDecoration: 'underline',
																				margin: 0,
																			}}
																		>
																			View in browser
																		</Link>
																	</td>
																</tr>
																<tr>
																	<td
																		className="content-block aligncenter"
																		style={{
																			fontFamily:
																				'"Helvetica Neue",Helvetica,Arial,sans-serif',
																			fontSize: 14,
																			verticalAlign: 'top',
																			textAlign: 'center',
																			margin: 0,
																			padding: '0 0 20px',
																		}}
																		align="center"
																		valign="top"
																	>
																		Dastone Inc. 123 my street, And my Country
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

export default BillingEmail
