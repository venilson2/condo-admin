import {
	Nav,
	NavItem,
	NavLink,
	TabContainer,
	TabContent,
	TabPane,
} from 'react-bootstrap'
import SimpleBar from 'simplebar-react'

// style
import 'simplebar-react/dist/simplebar.min.css'
import { Link } from 'react-router-dom'
import { type ChatUser } from '../data'
import DMList from './DMList'

type ChatUsersProps = {
	onUserSelect: (value: ChatUser) => void
}
const UsersChat = ({ onUserSelect }: ChatUsersProps) => {
	return (
		<div className="chat-box-left">
			<TabContainer defaultActiveKey="1">
				<Nav
					className="nav nav-pills mb-3 nav-justified"
					id="myTab"
					role="tablist"
				>
					<NavItem role="presentation">
						<NavLink eventKey="1" role="tab">
							General
						</NavLink>
					</NavItem>
					<NavItem role="presentation">
						<NavLink eventKey="2" role="tab">
							Groups
						</NavLink>
					</NavItem>
					<NavItem role="presentation">
						<NavLink eventKey="3" role="tab">
							Personal
						</NavLink>
					</NavItem>
				</Nav>
				<div className="chat-search">
					<div className="form-group">
						<div className="input-group">
							<input
								type="text"
								id="chat-search"
								name="chat-search"
								className="form-control form-control-sm"
								placeholder="Search"
							/>
							<button
								type="button"
								className="btn btn-soft-primary btn-sm shadow-none"
							>
								<i className="fas fa-search"></i>
							</button>
						</div>
					</div>
				</div>
				<SimpleBar className="chat-list">
					<TabContent id="pills-tabContent">
						<TabPane eventKey="1" className="fade" id="general_chat">
							<DMList onUserSelect={onUserSelect} />
						</TabPane>
						<TabPane eventKey="2" className="fade" id="group_chat">
							<Link to="" className="media new-message">
								<div className="media-left">
									<div className="avatar-box thumb-md align-self-center me-2">
										<span className="thumb-md justify-content-center d-flex align-items-center bg-soft-success rounded-circle me-2">
											<i className="fab fa-quinscape" />
										</span>
									</div>
								</div>
								<div className="media-body">
									<div>
										<h6>Design Group</h6>
										<p>Good morning! How are you?</p>
									</div>
									<div>
										<span>20 Feb</span>
										<span>1</span>
									</div>
								</div>
							</Link>
							<Link to="" className="media">
								<div className="media-left">
									<div className="avatar-box thumb-md align-self-center me-2">
										<span className="thumb-md justify-content-center d-flex align-items-center bg-soft-primary rounded-circle me-2">
											<i className="fab fa-connectdevelop" />
										</span>
									</div>
								</div>
								<div className="media-body">
									<div>
										<h6>Front end Developers</h6>
										<p>Have A Nice day...</p>
									</div>
									<div>
										<span>15 Feb</span>
									</div>
								</div>
							</Link>
							<Link to="" className="media">
								<div className="media-left">
									<div className="avatar-box thumb-md align-self-center me-2">
										<span className="thumb-md justify-content-center d-flex align-items-center bg-soft-warning rounded-circle me-2">
											<i className="far fa-gem" />
										</span>
									</div>
								</div>
								<div className="media-body">
									<div>
										<h6>UI/UX Designers</h6>
										<p>Congratulations everybody... </p>
									</div>
									<div>
										<span>14 Feb</span>
									</div>
								</div>
							</Link>
							<Link to="" className="media">
								<div className="media-left">
									<div className="avatar-box thumb-md align-self-center me-2">
										<span className="thumb-md justify-content-center d-flex align-items-center bg-soft-pink rounded-circle me-2">
											<i className="fab fa-react" />
										</span>
									</div>
								</div>
								<div className="media-body">
									<div>
										<h6>React Developers</h6>
										<p>How are you Friends...</p>
									</div>
									<div>
										<span>10 Feb</span>
									</div>
								</div>
							</Link>
							<Link to="" className="media">
								<div className="media-left">
									<div className="avatar-box thumb-md align-self-center me-2">
										<span className="thumb-md justify-content-center d-flex align-items-center bg-soft-info rounded-circle me-2">
											<i className="fas fa-globe"></i>
										</span>
									</div>
								</div>
								<div className="media-body">
									<div>
										<h6>Marketing Group</h6>
										<p>How are you Friends...</p>
									</div>
									<div>
										<span>10 Feb</span>
									</div>
								</div>
							</Link>
						</TabPane>
						<TabPane eventKey="3" className="fade" id="personal_chat">
							<DMList onUserSelect={onUserSelect} />
						</TabPane>
					</TabContent>
				</SimpleBar>
			</TabContainer>
		</div>
	)
}

export default UsersChat
