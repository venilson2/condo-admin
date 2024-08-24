import { PageBreadcrumb2 } from '@/components'
import { Col, Row } from 'react-bootstrap'

import bell from '@/assets/images/bell.png'
import { Link } from 'react-router-dom'

const AlertEmail = () => {
	return (
		<>
			<PageBreadcrumb2 title="Alert" appName="Email " />
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
									display: 'flex',
									justifyContent: 'center',
								}}
							>
								<td
									width={600}
									style={{
										display: 'block !important',
										maxWidth: '600px !important',
										clear: 'both',
										margin: '0px auto',
									}}
									valign="top"
								>
									<div
										className="content"
										style={{ padding: 20, width: '100%' }}
									>
										<table
											className="main"
											width="100%"
											cellPadding={0}
											cellSpacing={0}
											style={{
												border: '1px solid rgba(130, 134, 156, 0.15)',
											}}
											bgcolor="transparent"
										>
											<tbody>
												<tr>
													<td
														className="alert alert-primary border-0 bg-primary"
														style={{
															padding: 20,
															borderRadius: 0,
														}}
														align="center"
														valign="top"
													>
														<img
															src={bell}
															style={{
																marginLeft: 'auto',
																marginRight: 'auto',
																display: 'block',
																width: 60,
															}}
														/>
													</td>
												</tr>
												<tr>
													<td
														className="alert alert-dark border-0"
														style={{
															color: '#fff',
															backgroundColor: '#212f56',
															padding: 20,
															borderRadius: 0,
														}}
														align="center"
														valign="top"
													>
														Warning: You're approaching your limit. Please
														upgrade.
													</td>
												</tr>
												<tr>
													<td
														className="content-wrap"
														style={{ padding: 20 }}
														valign="top"
													>
														<table width="100%" cellPadding={0} cellSpacing={0}>
															<tbody>
																<tr>
																	<td
																		className="content-block"
																		style={{
																			fontFamily:
																				'"Helvetica Neue",Helvetica,Arial,sans-serif',
																			fontSize: 14,
																			padding: 10,
																		}}
																		valign="top"
																	>
																		You have{' '}
																		<strong
																			style={{
																				fontFamily:
																					'"Helvetica Neue",Helvetica,Arial,sans-serif',
																				boxSizing: 'border-box',
																				fontSize: 14,
																				margin: 0,
																			}}
																		>
																			1 free report
																		</strong>{' '}
																		remaining.
																	</td>
																</tr>
																<tr>
																	<td
																		className="content-block"
																		style={{
																			fontFamily:
																				'"Helvetica Neue",Helvetica,Arial,sans-serif',
																			fontSize: 14,
																			padding: '10px 10px 20px',
																		}}
																		valign="top"
																	>
																		Add your credit card now to upgrade your
																		account to a premium plan to ensure you
																		don't miss out on any reports.
																	</td>
																</tr>
																<tr>
																	<td
																		className="content-block"
																		style={{
																			fontFamily:
																				'"Helvetica Neue",Helvetica,Arial,sans-serif',
																			fontSize: 14,
																			padding: '0 0 20px',
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
																			Upgrade my account
																		</Link>
																	</td>
																</tr>
																<tr>
																	<td
																		className="content-block"
																		style={{
																			fontFamily:
																				'"Helvetica Neue",Helvetica,Arial,sans-serif',
																			fontSize: 14,
																			textAlign: 'center',
																		}}
																		valign="top"
																	>
																		Thanks for choosing <b>Metrica</b> Admin.
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

export default AlertEmail
