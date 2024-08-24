import { ComponentContainerCard, PageBreadcrumb } from '@/components'
import { useToggle } from '@/hooks'
import {
	Accordion,
	Button,
	Col,
	Collapse,
	Nav,
	NavItem,
	NavLink,
	Row,
	TabContainer,
	TabContent,
	TabPane,
} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Tabs = () => {
	return (
		<ComponentContainerCard
			title="Tabs"
			description="Takes the basic nav from above and adds the .nav-tabs class to generate a tabbed interface."
		>
			<TabContainer defaultActiveKey="1">
				<Nav className="nav-tabs" role="tablist">
					<NavItem>
						<NavLink eventKey="1" href="#home" role="tab">
							Home
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink eventKey="2" href="#profile" role="tab">
							Profile
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink eventKey="3" href="#settings" role="tab">
							Settings
						</NavLink>
					</NavItem>
				</Nav>
				<TabContent>
					<TabPane eventKey="1" className="p-3" id="home" role="tabpanel">
						<p className="mb-0 text-muted">
							Raw denim you probably haven't heard of them jean shorts Austin.
						</p>
					</TabPane>
					<TabPane eventKey="2" className="p-3" id="profile" role="tabpanel">
						<p className="mb-0 text-muted">
							Food truck fixie locavore, accusamus mcsweeney's single-origin
							coffee squid.
						</p>
					</TabPane>
					<TabPane eventKey="3" className="p-3" id="settings" role="tabpanel">
						<p className="text-muted mb-0">
							Trust fund seitan letterpress, keytar raw denim keffiyeh etsy.
						</p>
					</TabPane>
				</TabContent>
			</TabContainer>
		</ComponentContainerCard>
	)
}

const Pills = () => {
	return (
		<ComponentContainerCard
			title="Pills"
			description="The tabs plugin also works with pills."
		>
			<TabContainer defaultActiveKey="1">
				<Nav justify className="nav-pills" role="tablist">
					<NavItem>
						<NavLink eventKey="1" href="#home" role="tab">
							Home
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink eventKey="2" href="#profile" role="tab">
							Profile
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink eventKey="3" href="#settings" role="tab">
							Settings
						</NavLink>
					</NavItem>
				</Nav>
				<TabContent>
					<TabPane eventKey="1" className="p-3" id="home" role="tabpanel">
						<p className="mb-0 text-muted">
							Raw denim you probably haven't heard of them jean shorts Austin.
						</p>
					</TabPane>
					<TabPane eventKey="2" className="p-3" id="profile" role="tabpanel">
						<p className="mb-0 text-muted">
							Food truck fixie locavore, accusamus mcsweeney's single-origin
							coffee squid.
						</p>
					</TabPane>
					<TabPane eventKey="3" className="p-3" id="settings" role="tabpanel">
						<p className="text-muted mb-0">
							Trust fund seitan letterpress, keytar raw denim keffiyeh etsy.
						</p>
					</TabPane>
				</TabContent>
			</TabContainer>
		</ComponentContainerCard>
	)
}

const VerticalPills = () => {
	type TabContentItem = {
		id: string
		title: string
		description: string
	}

	const tabContents: TabContentItem[] = [
		{
			id: '1',
			title: 'Home',
			description:
				'Trust fund seitan letterpress, keytar raw denim keffiyeh etsy art party before they sold out master cleanse gluten-free squid scenester freegan cosby sweater. Fanny pack portland seitan DIY, art party locavore wolf cliche high life echo park Austin. Cred vinyl keffiyeh DIY salvia PBR, banh mi before they sold out farm-to-table VHS viral locavore cosby sweater.',
		},
		{
			id: '2',
			title: 'Profile',
			description:
				"Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic.",
		},
		{
			id: '3',
			title: 'Settings',
			description:
				"Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation commodo enim craft beer mlkshk +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR.",
		},
	]
	return (
		<ComponentContainerCard
			title="Vertical Pills"
			description="And with vertical pills."
		>
			<TabContainer defaultActiveKey="1">
				<Row>
					<Col sm={3}>
						<Nav className="flex-column nav-pills text-center" role="tablist">
							{tabContents.map((tab, idx) => {
								return (
									<NavLink key={idx} eventKey={tab.id} role="tab">
										{tab.title}
									</NavLink>
								)
							})}
						</Nav>
					</Col>
					<Col sm={9}>
						<TabContent className="mo-mt-2">
							{tabContents.map((tab, idx) => {
								return (
									<TabPane
										key={idx}
										eventKey={tab.id}
										className="fade"
										role="tabpanel"
									>
										<p className="mb-0 text-muted">{tab.description}</p>
									</TabPane>
								)
							})}
						</TabContent>
					</Col>
				</Row>
			</TabContainer>
		</ComponentContainerCard>
	)
}

const CustomTabs = () => {
	type TabContentItem = {
		id: string
		title: string
		description: string
		icon: string
	}

	const tabContents: TabContentItem[] = [
		{
			id: '1',
			title: 'Home',
			description:
				"Raw denim you probably haven't heard of them jean shorts Austin.",
			icon: 'home',
		},
		{
			id: '2',
			title: 'Profile',
			description:
				"Food truck fixie locavore, accusamus mcsweeney's marfa nulla.",
			icon: 'calendar',
		},
		{
			id: '3',
			title: 'Settings',
			description:
				'Trust fund seitan letterpress, keytar raw denim keffiyeh etsy.',
			icon: 'cog',
		},
	]
	return (
		<ComponentContainerCard
			title="Custom Tabs"
			description="You can use custom tabs"
		>
			<TabContainer defaultActiveKey="1">
				<div className="nav-tabs-custom text-center">
					<Nav className="nav nav-tabs" role="tablist">
						{tabContents.map((tab, idx) => {
							return (
								<NavItem key={idx}>
									<NavLink eventKey={tab.id} className="text-center" role="tab">
										<i className={`la la-${tab.icon} d-block`} />
										{tab.title}
									</NavLink>
								</NavItem>
							)
						})}
					</Nav>
				</div>
				<TabContent className="mo-mt-2">
					{tabContents.map((tab, idx) => {
						return (
							<TabPane
								key={idx}
								eventKey={tab.id}
								className="p-3"
								role="tabpanel"
							>
								<p className="mb-0 text-muted">{tab.description}</p>
							</TabPane>
						)
					})}
				</TabContent>
			</TabContainer>
		</ComponentContainerCard>
	)
}

const CollapseExample = () => {
	const { isOpen, toggle } = useToggle()
	return (
		<ComponentContainerCard
			title="Collapse"
			description="Click the buttons below to show and hide another element via class changes:"
		>
			<p>
				<Link
					to=""
					className="btn btn-secondary mb-2 mb-lg-0 me-1"
					onClick={toggle}
				>
					Link with href
				</Link>
				<Button variant="secondary" type="button" onClick={toggle}>
					Button with data-target
				</Button>
			</p>
			<Collapse in={isOpen}>
				<div className="card mb-0 card-body">
					<p className="mb-0 text-muted">
						Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
						terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
						labore wes anderson cred nesciunt sapiente ea proident.
					</p>
				</div>
			</Collapse>
		</ComponentContainerCard>
	)
}

const FlushExample = () => {
	return (
		<ComponentContainerCard
			title="Flush Example"
			description="Add .accordion-flush to remove the default background-color, some borders, and some rounded corners to render accordions edge-to-edge with their parent container."
		>
			<Accordion flush defaultActiveKey="0">
				{Array.from(new Array(Math.floor(3))).map((_accordion, idx) => {
					return (
						<Accordion.Item eventKey={`${idx}`} key={idx}>
							<Accordion.Header as="h5">
								<div className="fw-semibold">Accordion Item #{idx + 1}</div>
							</Accordion.Header>
							<Accordion.Body className="accordion-body">
								Anim pariatur cliche reprehenderit, enim eiusmod high life
								accusamus terry richardson ad squid. 3 wolf moon officia aute,
								non cupidatat skateboard dolor brunch. Food truck quinoa
								nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
								put a bird on it squid single-origin coffee nulla assumenda
								shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
								wes anderson cred nesciunt sapiente ea proident. Ad vegan
								excepteur butcher vice lomo. Leggings occaecat craft beer
								farm-to-table, raw denim aesthetic synth nesciunt you probably
								haven't heard of them accusamus labore sustainable VHS.
							</Accordion.Body>
						</Accordion.Item>
					)
				})}
			</Accordion>
		</ComponentContainerCard>
	)
}

const AccordionExample = () => {
	return (
		<ComponentContainerCard
			title="Accordion Example"
			description="Using the card component, you can extend the default collapse behavior to create an accordion."
		>
			<Accordion defaultActiveKey="0">
				{Array.from(new Array(Math.floor(3))).map((_accordion, idx) => {
					return (
						<Accordion.Item eventKey={`${idx}`} key={idx}>
							<Accordion.Header as="h5" className="m-0">
								<div className="fw-semibold">Accordion Item #{idx + 1}</div>
							</Accordion.Header>
							<Accordion.Body>
								<strong>This is the {idx + 1} item's accordion body.</strong> It
								is hidden by default, until the collapse plugin adds the
								appropriate classes that we use to style each element. These
								classes control the overall appearance, as well as the showing
								and hiding via CSS transitions. You can modify any of this with
								custom CSS or overriding our default variables. It's also worth
								noting that just about any HTML can go within the
								<code>.accordion-body</code>, though the transition does limit
								overflow.
							</Accordion.Body>
						</Accordion.Item>
					)
				})}
			</Accordion>
		</ComponentContainerCard>
	)
}

const TabsAndAccordions = () => {
	return (
		<>
			<PageBreadcrumb subName="UI Kit" title="Tab & Accordions" />
			<Row>
				<Col md={12} lg={6}>
					<Tabs />
				</Col>
				<Col lg={6}>
					<Pills />
				</Col>
			</Row>
			<Row>
				<Col lg={6}>
					<VerticalPills />
					<CollapseExample />
					<FlushExample />
				</Col>
				<Col lg={12} xl={6}>
					<CustomTabs />
					<AccordionExample />
					{/* <div className="card">
            <div className="card-header">
              <h4 className="card-title">Accordion Example</h4>
              <p className="text-muted mb-0">Using the card component, you can extend the default collapse behavior to create an accordion.</p>
            </div>
            <div className="card-body">
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h5 className="accordion-header m-0" id="headingOne">
                    <button className="accordion-button fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      Accordion Item #1
                    </button>
                  </h5>
                  <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <strong>This is the first item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as
                      well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the
                      <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h5 className="accordion-header m-0" id="headingTwo">
                    <button className="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      Accordion Item #2
                    </button>
                  </h5>
                  <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as
                      well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the
                      <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h5 className="accordion-header m-0" id="headingThree">
                    <button className="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      Accordion Item #3
                    </button>
                  </h5>
                  <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as
                      well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the
                      <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
				</Col>
			</Row>
		</>
	)
}

export default TabsAndAccordions
