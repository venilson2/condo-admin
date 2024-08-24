import { Button, Card, CardBody, Col, Row } from 'react-bootstrap'
import user4 from '@/assets/images/users/user-4.jpg'
import { Link } from 'react-router-dom'
import { MapContainer, Marker, Popup } from 'react-leaflet'
import { TileLayer } from 'react-leaflet/TileLayer'
import type { LatLngExpression } from 'leaflet'

const ProfileInfo = () => {
	const position: LatLngExpression = [51.505, -0.09]

	return (
		<Row>
			<Col xs={12}>
				<Card>
					<CardBody className="p-0">
						<div style={{ height: 220 }}>
							<MapContainer
								center={position}
								zoom={13}
								maxZoom={18}
								className="pro-map"
								scrollWheelZoom
								style={{ height: '220px' }}
							>
								<TileLayer
									attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
									url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
								/>
								<Marker position={position}>
									<Popup>
										A pretty CSS3 popup. <br /> Easily customizable.
									</Popup>
								</Marker>
							</MapContainer>
						</div>
					</CardBody>
					<CardBody>
						<div className="dastone-profile">
							<Row>
								<Col lg={4} className="align-self-center mb-3 mb-lg-0">
									<div className="dastone-profile-main">
										<div className="dastone-profile-main-pic">
											<img
												src={user4}
												alt=""
												height="110"
												className="rounded-circle"
											/>
											<span className="dastone-profile_main-pic-change">
												<i className="fas fa-camera"></i>
											</span>
										</div>
										<div className="dastone-profile_user-detail">
											<h5 className="dastone-user-name">Rosa Dodson</h5>
											<p className="mb-0 dastone-user-name-post">
												UI/UX Designer, India
											</p>
										</div>
									</div>
								</Col>

								<Col lg={4} className="ms-auto align-self-center">
									<ul className="list-unstyled personal-detail mb-0">
										<li className="">
											<i className="ti ti-mobile me-2 text-secondary font-16 align-middle"></i>{' '}
											<b> phone </b> : +91 23456 78910
										</li>
										<li className="mt-2">
											<i className="ti ti-email text-secondary font-16 align-middle me-2"></i>{' '}
											<b> Email </b> : mannat.theme@gmail.com
										</li>
										<li className="mt-2">
											<i className="ti ti-world text-secondary font-16 align-middle me-2"></i>{' '}
											<b> Website </b> :
											<Link
												to="https://mannatthemes.com"
												className="font-14 text-primary"
											>
												https://mannatthemes.com
											</Link>
										</li>
									</ul>
								</Col>

								<Col lg={4} className="align-self-center">
									<Row>
										<div className="col-auto text-end border-end">
											<Button
												variant="soft-primary"
												className="btn-icon-circle btn-icon-circle-sm mb-2"
											>
												<i className="fab fa-facebook-f"></i>
											</Button>
											<p className="mb-0 fw-semibold">Facebook</p>
											<h4 className="m-0 fw-bold">
												25k{' '}
												<span className="text-muted font-12 fw-normal">
													Followers
												</span>
											</h4>
										</div>
										<div className="col-auto">
											<Button
												variant="soft-info"
												className="btn-icon-circle btn-icon-circle-sm mb-2"
											>
												<i className="fab fa-twitter"></i>
											</Button>
											<p className="mb-0 fw-semibold">Twitter</p>
											<h4 className="m-0 fw-bold">
												58k{' '}
												<span className="text-muted font-12 fw-normal">
													Followers
												</span>
											</h4>
										</div>
									</Row>
								</Col>
							</Row>
						</div>
					</CardBody>
				</Card>
			</Col>
		</Row>
	)
}

export default ProfileInfo
