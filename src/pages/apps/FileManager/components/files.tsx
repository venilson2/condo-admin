import {
	Card,
	CardBody,
	CardHeader,
	CardTitle,
	Col,
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
	Form,
	Modal,
	ModalBody,
	ModalHeader,
	ModalTitle,
	Nav,
	NavLink,
	ProgressBar,
	Row,
	TabContainer,
	TabContent,
	TabPane,
} from 'react-bootstrap'
import { FiFolder, FiLock } from 'react-icons/fi'
import { useToggle } from '@/hooks'
import { Link } from 'react-router-dom'
import {
	ProjectsData,
	FreeLancingProjectsData,
	PdfFilesData,
	DocumentData,
	CompanyDocumentData,
	PersonalDocumentData,
} from '../data'

const Files = () => {
	const { isOpen: ModalOpen, toggle: ModalToggle } = useToggle()

	return (
		<Row>
			<TabContainer defaultActiveKey="1">
				<Col lg={3}>
					<Card>
						<CardHeader>
							<Row className="align-items-center">
								<Col>
									<CardTitle as="h4">Categories</CardTitle>
								</Col>
								<div className="col-auto">
									<Dropdown>
										<DropdownToggle variant="outline-light" size="sm">
											<i className="mdi mdi-dots-horizontal text-muted"></i>
										</DropdownToggle>
										<DropdownMenu align="end">
											<DropdownItem>Create Folder</DropdownItem>
											<DropdownItem>Delete</DropdownItem>
											<DropdownItem>Settings</DropdownItem>
										</DropdownMenu>
									</Dropdown>
								</div>
							</Row>
						</CardHeader>
						<CardBody>
							<div className="files-nav">
								<Nav
									className="flex-column nav-pills"
									id="files-tab"
									aria-orientation="vertical"
								>
									<NavLink eventKey="1">
										<FiFolder className="align-self-center icon-dual-file icon-sm me-3" />
										<div className="d-inline-block align-self-center">
											<h5 className="m-0">Projects</h5>
											<small>80GB/200GB Used</small>
										</div>
									</NavLink>
									<NavLink eventKey="2">
										<FiFolder className="align-self-center icon-dual-file icon-sm me-3" />
										<div className="d-inline-block align-self-center">
											<h5 className="m-0">Pdf Files</h5>
											<small>80GB/200GB Used</small>
										</div>
									</NavLink>
									<NavLink eventKey="3">
										<FiFolder className="align-self-center icon-dual-file icon-sm me-3" />
										<div className="d-inline-block align-self-center">
											<h5 className="m-0">Documents</h5>
											<small>80GB/200GB Used</small>
										</div>
										{/* <Badge bg="success" className="ms-auto" style={{ fontSize: '10px' }}>8</Badge> */}
									</NavLink>
									<NavLink eventKey="4" className="mb-0" onClick={ModalToggle}>
										<FiLock className="align-self-center icon-dual-file icon-sm me-3" />
										<div className="d-inline-block align-self-center">
											<h5 className="m-0">Files Lock</h5>
											<small>80GB/200GB Used</small>
										</div>
									</NavLink>
								</Nav>
							</div>
						</CardBody>
					</Card>

					<Card>
						<CardBody className="card-body">
							<small className="float-end">62%</small>
							<h6 className="mt-0">620GB / 1TB Used</h6>
							<ProgressBar
								now={62}
								variant="success"
								style={{ height: '5px' }}
							/>
						</CardBody>
					</Card>
				</Col>

				<Col lg={9}>
					<div className="">
						<TabContent id="files-tabContent">
							<TabPane eventKey="1" className="fade" id="files-projects">
								<h4 className="card-title mt-0 mb-3">Projects</h4>
								<div className="file-box-content">
									{ProjectsData.map((projects, idx) => {
										return (
											<div className="file-box" key={idx}>
												<Link to="#" className="download-icon-link">
													<i className="dripicons-download file-download-icon"></i>
												</Link>
												<div className="text-center">
													<i
														className={`lar ${projects.icon} text-${projects.iconColor}`}
													></i>
													<h6 className="text-truncate">{projects.title}</h6>
													<small className="text-muted">
														{projects.date} / {projects.fileSize}MB
													</small>
												</div>
											</div>
										)
									})}
								</div>

								<div className="row">
									<div className="col-12">
										<h4 className="card-title my-3">Freelancing Projects</h4>
									</div>
								</div>
								<div className="file-box-content">
									{FreeLancingProjectsData.map((freeLancingProjects, idx) => {
										return (
											<div className="file-box" key={idx}>
												<Link to="#" className="download-icon-link">
													<i className="dripicons-download file-download-icon"></i>
												</Link>
												<div className="text-center">
													<i
														className={`lar ${freeLancingProjects.icon} text-${freeLancingProjects.iconColor}`}
													></i>
													<h6 className="text-truncate">
														{freeLancingProjects.title}
													</h6>
													<small className="text-muted">
														{freeLancingProjects.date} /{' '}
														{freeLancingProjects.fileSize}
														MB
													</small>
												</div>
											</div>
										)
									})}
								</div>
							</TabPane>

							<TabPane eventKey="2" id="files-pdf">
								<h4 className="mt-0 card-title mb-3">PDF Files</h4>
								<div className="file-box-content">
									{PdfFilesData.map((pdfFiles, idx) => {
										return (
											<div className="file-box" key={idx}>
												<Link to="#" className="download-icon-link">
													<i className="dripicons-download file-download-icon"></i>
												</Link>
												<div className="text-center">
													<i
														className={`lar ${pdfFiles.icon} text-${pdfFiles.iconColor}`}
													></i>
													<h6 className="text-truncate">{pdfFiles.title}</h6>
													<small className="text-muted">
														{pdfFiles.date} / {pdfFiles.fileSize}MB
													</small>
												</div>
											</div>
										)
									})}
								</div>
							</TabPane>

							<TabPane eventKey="3" id="files-documents">
								<h4 className="mt-0 card-title mb-3">Documents</h4>
								<div className="file-box-content">
									{DocumentData.map((document, idx) => {
										return (
											<div className="file-box" key={idx}>
												<Link to="#" className="download-icon-link">
													<i className="dripicons-download file-download-icon"></i>
												</Link>
												<div className="text-center">
													<i
														className={`lar ${document.icon} text-${document.iconColor}`}
													></i>
													<h6 className="text-truncate">{document.title}</h6>
													<small className="text-muted">
														{document.date} / {document.fileSize}MB
													</small>
												</div>
											</div>
										)
									})}
								</div>

								<div className="row">
									<div className="col-12">
										<h4 className="card-title my-3">Company Documents</h4>
									</div>
								</div>
								<div className="file-box-content">
									{CompanyDocumentData.map((companyDocument, idx) => {
										return (
											<div className="file-box" key={idx}>
												<Link to="#" className="download-icon-link">
													<i className="dripicons-download file-download-icon"></i>
												</Link>
												<div className="text-center">
													<i
														className={`lar ${companyDocument.icon} text-${companyDocument.iconColor}`}
													></i>
													<h6 className="text-truncate">
														{companyDocument.title}
													</h6>
													<small className="text-muted">
														{companyDocument.date} / {companyDocument.fileSize}
														MB
													</small>
												</div>
											</div>
										)
									})}
								</div>

								<div className="row">
									<div className="col-12">
										<h4 className="card-title my-3">Personal Documents</h4>
									</div>
								</div>
								<div className="file-box-content">
									{PersonalDocumentData.map((personalDocument, idx) => {
										return (
											<div className="file-box" key={idx}>
												<Link to="#" className="download-icon-link">
													<i className="dripicons-download file-download-icon"></i>
												</Link>
												<div className="text-center">
													<i
														className={`lar ${personalDocument.icon} text-${personalDocument.iconColor}`}
													></i>
													<h6 className="text-truncate">
														{personalDocument.title}
													</h6>
													<small className="text-muted">
														{personalDocument.date} /{' '}
														{personalDocument.fileSize}
														MB
													</small>
												</div>
											</div>
										)
									})}
								</div>
							</TabPane>

							<TabPane eventKey="4" id="files-hide">
								<Modal
									show={ModalOpen}
									onHide={ModalToggle}
									className="fade"
									tabindex={-1}
								>
									{/* <div className="modal-dialog modal-dialog-centered"> */}
									<div className="modal-content">
										<ModalHeader>
											<ModalTitle
												as="h6"
												className="mt-0"
												id="exampleModalLabel"
											>
												Enter Password
											</ModalTitle>
											<button
												type="button"
												className="btn-close"
												onClick={ModalToggle}
											></button>
										</ModalHeader>
										<ModalBody>
											<Form className="form-horizontal" action="/">
												<div className="mb-4 mt-2 ">
													<span className="thumb-xl justify-content-center d-flex align-items-center bg-soft-danger rounded-circle mx-auto">
														<i className="las la-lock"></i>
													</span>
												</div>
												<div className="input-group">
													<input
														type="password"
														className="form-control"
														placeholder="Password"
														aria-label="Password"
														aria-describedby="HideCard"
													/>
													<button
														className="btn btn-primary"
														type="button"
														id="HideCard"
													>
														<i className="las la-key"></i>
													</button>
												</div>
												<div className="text-end mt-1">
													<Link to="#" className="text-primary font-12">
														<i className="las la-lock"></i> Forgot password?
													</Link>
												</div>
											</Form>
										</ModalBody>
									</div>
									{/* </div> */}
								</Modal>
							</TabPane>
						</TabContent>
					</div>
				</Col>
			</TabContainer>
		</Row>
	)
}

export default Files
