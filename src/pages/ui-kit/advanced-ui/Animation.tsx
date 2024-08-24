import { PageBreadcrumb2 } from '@/components'
import { Button, Card, CardBody, Col, Row } from 'react-bootstrap'
import {
	swap,
	magic,
	vanishIn,
	twisterInDown,
	twisterInUp,
	puffIn,
	puffOut,
	vanishOut,
	openDownLeft,
	openDownRight,
	openUpLeft,
	openUpRight,
	openDownLeftReturn,
	openDownRightReturn,
	openUpLeftReturn,
	openUpRightReturn,
	openDownLeftOut,
	openDownRightOut,
	openUpLeftOut,
	openUpRightOut,
	perspectiveDown,
	perspectiveUp,
	perspectiveLeft,
	perspectiveRight,
	perspectiveDownReturn,
	perspectiveUpReturn,
	perspectiveLeftReturn,
	perspectiveRightReturn,
	rotateDown,
	rotateUp,
	rotateLeft,
	rotateRight,
	slideDown,
	slideUp,
	slideLeft,
	slideRight,
	slideDownReturn,
	slideUpReturn,
	slideLeftReturn,
	slideRightReturn,
	swashOut,
	swashIn,
	foolishIn,
	holeOut,
	tinRightOut,
	tinLeftOut,
	tinUpOut,
	tinDownOut,
	tinRightIn,
	tinLeftIn,
	tinUpIn,
	tinDownIn,
	bombRightOut,
	bombLeftOut,
	boingInUp,
	boingOutDown,
	spaceOutUp,
	spaceOutRight,
	spaceOutDown,
	spaceOutLeft,
	spaceInUp,
	spaceInRight,
	spaceInDown,
	spaceInLeft,
} from 'react-magic'
import { StyleSheet, css } from 'aphrodite'

import logoSm from '@/assets/images/logo-sm.png'
import SimpleBar from 'simplebar-react'

//style
import 'simplebar-react/dist/simplebar.min.css'
import { useState } from 'react'

const styles = StyleSheet.create({
	swap: {
		animationName: swap,
		animationDuration: '1s',
	},
	magic: {
		animationName: magic,
		animationDuration: '1s',
	},
	twisterInDown: {
		animationName: twisterInDown,
		animationDuration: '1s',
	},
	twisterInUp: {
		animationName: twisterInUp,
		animationDuration: '1s',
	},
	puffIn: {
		animationName: puffIn,
		animationDuration: '1s',
	},
	puffOut: {
		animationName: puffOut,
		animationDuration: '1s',
	},
	vanishIn: {
		animationName: vanishIn,
		animationDuration: '1s',
	},
	vanishOut: {
		animationName: vanishOut,
		animationDuration: '1s',
	},
	openDownLeft: {
		animationName: openDownLeft,
		animationDuration: '1s',
	},
	openDownRight: {
		animationName: openDownRight,
		animationDuration: '1s',
	},
	openUpLeft: {
		animationName: openUpLeft,
		animationDuration: '1s',
	},
	openUpRight: {
		animationName: openUpRight,
		animationDuration: '1s',
	},
	openDownLeftReturn: {
		animationName: openDownLeftReturn,
		animationDuration: '1s',
	},
	openDownRightReturn: {
		animationName: openDownRightReturn,
		animationDuration: '1s',
	},
	openUpLeftReturn: {
		animationName: openUpLeftReturn,
		animationDuration: '1s',
	},
	openUpRightReturn: {
		animationName: openUpRightReturn,
		animationDuration: '1s',
	},
	openDownLeftOut: {
		animationName: openDownLeftOut,
		animationDuration: '1s',
	},
	openDownRightOut: {
		animationName: openDownRightOut,
		animationDuration: '1s',
	},
	openUpLeftOut: {
		animationName: openUpLeftOut,
		animationDuration: '1s',
	},
	openUpRightOut: {
		animationName: openUpRightOut,
		animationDuration: '1s',
	},
	perspectiveDown: {
		animationName: perspectiveDown,
		animationDuration: '1s',
	},
	perspectiveUp: {
		animationName: perspectiveUp,
		animationDuration: '1s',
	},
	perspectiveLeft: {
		animationName: perspectiveLeft,
		animationDuration: '1s',
	},
	perspectiveRight: {
		animationName: perspectiveRight,
		animationDuration: '1s',
	},
	perspectiveDownReturn: {
		animationName: perspectiveDownReturn,
		animationDuration: '1s',
	},
	perspectiveUpReturn: {
		animationName: perspectiveUpReturn,
		animationDuration: '1s',
	},
	perspectiveLeftReturn: {
		animationName: perspectiveLeftReturn,
		animationDuration: '1s',
	},
	perspectiveRightReturn: {
		animationName: perspectiveRightReturn,
		animationDuration: '1s',
	},
	rotateDown: {
		animationName: rotateDown,
		animationDuration: '1s',
	},
	rotateUp: {
		animationName: rotateUp,
		animationDuration: '1s',
	},
	rotateLeft: {
		animationName: rotateLeft,
		animationDuration: '1s',
	},
	rotateRight: {
		animationName: rotateRight,
		animationDuration: '1s',
	},
	slideDown: {
		animationName: slideDown,
		animationDuration: '1s',
	},
	slideUp: {
		animationName: slideUp,
		animationDuration: '1s',
	},
	slideLeft: {
		animationName: slideLeft,
		animationDuration: '1s',
	},
	slideRight: {
		animationName: slideRight,
		animationDuration: '1s',
	},
	slideDownReturn: {
		animationName: slideDownReturn,
		animationDuration: '1s',
	},
	slideUpReturn: {
		animationName: slideUpReturn,
		animationDuration: '1s',
	},
	slideLeftReturn: {
		animationName: slideLeftReturn,
		animationDuration: '1s',
	},
	slideRightReturn: {
		animationName: slideRightReturn,
		animationDuration: '1s',
	},
	swashOut: {
		animationName: swashOut,
		animationDuration: '1s',
	},
	swashIn: {
		animationName: swashIn,
		animationDuration: '1s',
	},
	foolishIn: {
		animationName: foolishIn,
		animationDuration: '1s',
	},
	holeOut: {
		animationName: holeOut,
		animationDuration: '1s',
	},
	tinRightOut: {
		animationName: tinRightOut,
		animationDuration: '1s',
	},
	tinLeftOut: {
		animationName: tinLeftOut,
		animationDuration: '1s',
	},
	tinUpOut: {
		animationName: tinUpOut,
		animationDuration: '1s',
	},
	tinDownOut: {
		animationName: tinDownOut,
		animationDuration: '1s',
	},
	tinRightIn: {
		animationName: tinRightIn,
		animationDuration: '1s',
	},
	tinLeftIn: {
		animationName: tinLeftIn,
		animationDuration: '1s',
	},
	tinUpIn: {
		animationName: tinUpIn,
		animationDuration: '1s',
	},
	tinDownIn: {
		animationName: tinDownIn,
		animationDuration: '1s',
	},
	bombRightOut: {
		animationName: bombRightOut,
		animationDuration: '1s',
	},
	bombLeftOut: {
		animationName: bombLeftOut,
		animationDuration: '1s',
	},
	boingInUp: {
		animationName: boingInUp,
		animationDuration: '1s',
	},
	boingOutDown: {
		animationName: boingOutDown,
		animationDuration: '1s',
	},
	spaceOutUp: {
		animationName: spaceOutUp,
		animationDuration: '1s',
	},
	spaceOutRight: {
		animationName: spaceOutRight,
		animationDuration: '1s',
	},
	spaceOutDown: {
		animationName: spaceOutDown,
		animationDuration: '1s',
	},
	spaceOutLeft: {
		animationName: spaceOutLeft,
		animationDuration: '1s',
	},
	spaceInUp: {
		animationName: spaceInUp,
		animationDuration: '1s',
	},
	spaceInRight: {
		animationName: spaceInRight,
		animationDuration: '1s',
	},
	spaceInDown: {
		animationName: spaceInDown,
		animationDuration: '1s',
	},
	spaceInLeft: {
		animationName: spaceInLeft,
		animationDuration: '1s',
	},
})

const Animation = () => {
	const [animation, setAnimation] = useState<object | null>()

	const toggleAnimation = (animation: object) => {
		setAnimation(animation)
		setTimeout(() => {
			setAnimation(null)
		}, 1000)
	}

	return (
		<>
			<PageBreadcrumb2 title="Animation" appName="Advanced UI" />
			<Row>
				<Col md={12}>
					<Card>
						<CardBody>
							<div className="text-center">
								<h4 className="page-title">Magic Animation</h4>
								<h6 className="mb-5 fw-normal text-muted">
									CSS3 Animations with special effects.
								</h6>
								<div className="position-relative d-inline-block mx-auto">
									<div id="animate-me" className={css(animation)}>
										<div className="shadow-sm p-4 d-inline-block rounded-circle">
											<img src={logoSm} className="center-block thumb-xl" />
										</div>
									</div>
								</div>
							</div>
							<div className="mt-5">
								<Row>
									<div
										id="content"
										className="col-lg-6 mx-auto text-center button-list container-magic-bottom container text-center"
									>
										<SimpleBar style={{ height: 450 }}>
											<h5 className="mb-3 font-15">Magic Effects</h5>
											<Button
												variant="outline-primary"
												size="sm"
												onClick={() => toggleAnimation(styles.magic)}
											>
												Magic
											</Button>
											<Button
												variant="outline-primary"
												size="sm"
												className="btn-animation"
												onClick={() => toggleAnimation(styles.twisterInDown)}
											>
												TwisterInDown
											</Button>
											<Button
												variant="outline-primary"
												size="sm"
												className="btn-animation"
												onClick={() => toggleAnimation(styles.twisterInUp)}
											>
												TwisterInUp
											</Button>
											<Button
												variant="outline-primary"
												size="sm"
												className="btn-animation"
												onClick={() => toggleAnimation(styles.swap)}
											>
												Swap
											</Button>
											<h5 className="mb-3 font-15">Bling</h5>
											<Button
												variant="outline-primary"
												size="sm"
												className="btn-animation"
												onClick={() => toggleAnimation(styles.puffIn)}
											>
												PuffIn
											</Button>
											<Button
												variant="outline-primary"
												size="sm"
												className="btn-animation"
												onClick={() => toggleAnimation(styles.puffOut)}
											>
												PuffOut
											</Button>
											<Button
												variant="outline-primary"
												size="sm"
												className="btn-animation"
												onClick={() => toggleAnimation(styles.vanishIn)}
											>
												VanishIn
											</Button>
											<Button
												variant="outline-primary"
												size="sm"
												className="btn-animation"
												onClick={() => toggleAnimation(styles.vanishOut)}
											>
												VanishOut
											</Button>
											<h5 className="mb-3 font-15">Static Effects</h5>
											<Button
												variant="outline-primary"
												size="sm"
												className="btn-animation"
												onClick={() => toggleAnimation(styles.openDownLeft)}
											>
												OpenDownLeft
											</Button>
											<Button
												variant="outline-primary"
												size="sm"
												className="btn-animation"
												onClick={() => toggleAnimation(styles.openDownRight)}
											>
												OpenDownRight
											</Button>
											<Button
												variant="outline-primary"
												size="sm"
												className="btn-animation"
												onClick={() => toggleAnimation(styles.openUpLeft)}
											>
												OpenUpLeft
											</Button>
											<Button
												variant="outline-primary"
												size="sm"
												className="btn-animation"
												onClick={() => toggleAnimation(styles.openUpRight)}
											>
												OpenUpRight
											</Button>
											<Button
												variant="outline-primary"
												size="sm"
												className="btn-animation"
												onClick={() =>
													toggleAnimation(styles.openDownLeftReturn)
												}
											>
												OpenDownLeftReturn
											</Button>
											<Button
												variant="outline-primary"
												size="sm"
												className="btn-animation"
												onClick={() =>
													toggleAnimation(styles.openDownRightReturn)
												}
											>
												OpenDownRightReturn
											</Button>
											<Button
												variant="outline-primary"
												size="sm"
												className="btn-animation"
												onClick={() => toggleAnimation(styles.openUpLeftReturn)}
											>
												OpenUpLeftReturn
											</Button>
											<Button
												variant="outline-primary"
												size="sm"
												className="btn-animation"
												onClick={() =>
													toggleAnimation(styles.openUpRightReturn)
												}
											>
												OpenUpRightReturn
											</Button>
											<h5 className="mb-3 font-15">Static Effects Out</h5>
											<Button
												variant="outline-primary"
												size="sm"
												className="btn-animation"
												onClick={() => toggleAnimation(styles.openDownLeftOut)}
											>
												OpenDownLeftOut
											</Button>
											<Button
												variant="outline-primary"
												size="sm"
												className="btn-animation"
												onClick={() => toggleAnimation(styles.openDownRightOut)}
											>
												OpenDownRightOut
											</Button>
											<Button
												variant="outline-primary"
												size="sm"
												className="btn-animation"
												onClick={() => toggleAnimation(styles.openUpLeftOut)}
											>
												OpenUpLeftOut
											</Button>
											<Button
												variant="outline-primary"
												size="sm"
												className="btn-animation"
												onClick={() => toggleAnimation(styles.openUpRightOut)}
											>
												OpenUpRightOut
											</Button>
											<h5 className="mb-3 font-15">Perspective</h5>
											<Button
												variant="outline-primary"
												size="sm"
												className="btn-animation"
												onClick={() => toggleAnimation(styles.perspectiveDown)}
											>
												PerspectiveDown
											</Button>
											<Button
												variant="outline-primary"
												size="sm"
												className="btn-animation"
												onClick={() => toggleAnimation(styles.perspectiveUp)}
											>
												PerspectiveUp
											</Button>
											<Button
												variant="outline-primary"
												size="sm"
												className="btn-animation"
												onClick={() => toggleAnimation(styles.perspectiveLeft)}
											>
												PerspectiveLeft
											</Button>
											<Button
												variant="outline-primary"
												size="sm"
												className="btn-animation"
												onClick={() => toggleAnimation(styles.perspectiveRight)}
											>
												PerspectiveRight
											</Button>
											<Button
												variant="outline-primary"
												size="sm"
												className="btn-animation"
												onClick={() =>
													toggleAnimation(styles.perspectiveDownReturn)
												}
											>
												PerspectiveDownReturn
											</Button>
											<Button
												variant="outline-primary"
												size="sm"
												className="btn-animation"
												onClick={() =>
													toggleAnimation(styles.perspectiveUpReturn)
												}
											>
												PerspectiveUpReturn
											</Button>
											<Button
												variant="outline-primary"
												size="sm"
												className="btn-animation"
												onClick={() =>
													toggleAnimation(styles.perspectiveLeftReturn)
												}
											>
												PerspectiveLeftReturn
											</Button>
											<Button
												variant="outline-primary"
												size="sm"
												className="btn-animation"
												onClick={() =>
													toggleAnimation(styles.perspectiveRightReturn)
												}
											>
												PerspectiveRightReturn
											</Button>
											<h5 className="mb-3 font-15">Rotate</h5>
											<Button
												variant="outline-primary"
												size="sm"
												className="btn-animation"
												onClick={() => toggleAnimation(styles.rotateDown)}
											>
												RotateDown
											</Button>
											<Button
												variant="outline-primary"
												size="sm"
												className="btn-animation"
												onClick={() => toggleAnimation(styles.rotateUp)}
											>
												RotateUp
											</Button>
											<Button
												variant="outline-primary"
												size="sm"
												className="btn-animation"
												onClick={() => toggleAnimation(styles.rotateLeft)}
											>
												RotateLeft
											</Button>
											<Button
												variant="outline-primary"
												size="sm"
												className="btn-animation"
												onClick={() => toggleAnimation(styles.rotateRight)}
											>
												RotateRight
											</Button>
											<h5 className="mb-3 font-15">Slide</h5>
											<Button
												variant="outline-primary"
												size="sm"
												className="btn-animation"
												onClick={() => toggleAnimation(styles.slideDown)}
											>
												SlideDown
											</Button>
											<Button
												variant="outline-primary"
												size="sm"
												className="btn-animation"
												onClick={() => toggleAnimation(styles.slideUp)}
											>
												SlideUp
											</Button>
											<Button
												variant="outline-primary"
												size="sm"
												className="btn-animation"
												onClick={() => toggleAnimation(styles.slideLeft)}
											>
												SlideLeft
											</Button>
											<Button
												variant="outline-primary"
												size="sm"
												className="btn-animation"
												onClick={() => toggleAnimation(styles.slideRight)}
											>
												SlideRight
											</Button>
											<Button
												variant="outline-primary"
												size="sm"
												className="btn-animation"
												onClick={() => toggleAnimation(styles.slideDownReturn)}
											>
												SlideDownReturn
											</Button>
											<Button
												variant="outline-primary"
												size="sm"
												className="btn-animation"
												onClick={() => toggleAnimation(styles.slideUpReturn)}
											>
												SlideUpReturn
											</Button>
											<Button
												variant="outline-primary"
												size="sm"
												className="btn-animation"
												onClick={() => toggleAnimation(styles.slideLeftReturn)}
											>
												SlideLeftReturn
											</Button>
											<Button
												variant="outline-primary"
												size="sm"
												className="btn-animation"
												onClick={() => toggleAnimation(styles.slideRightReturn)}
											>
												SlideRightReturn
											</Button>
											<h5 className="mb-3 font-15">Math</h5>
											<Button
												variant="outline-primary"
												size="sm"
												className="btn-animation"
												onClick={() => toggleAnimation(styles.swashOut)}
											>
												SwashOut
											</Button>
											<Button
												variant="outline-primary"
												size="sm"
												className="btn-animation"
												onClick={() => toggleAnimation(styles.swashIn)}
											>
												SwashIn
											</Button>
											<Button
												variant="outline-primary"
												size="sm"
												className="btn-animation"
												onClick={() => toggleAnimation(styles.foolishIn)}
											>
												FoolishIn
											</Button>
											<Button
												variant="outline-primary"
												size="sm"
												className="btn-animation"
												onClick={() => toggleAnimation(styles.holeOut)}
											>
												HoleOut
											</Button>
											<h5 className="mb-3 font-15">Tin</h5>
											<Button
												variant="outline-primary"
												size="sm"
												className="btn-animation"
												onClick={() => toggleAnimation(styles.tinRightOut)}
											>
												TinRightOut
											</Button>
											<Button
												variant="outline-primary"
												size="sm"
												className="btn-animation"
												onClick={() => toggleAnimation(styles.tinLeftOut)}
											>
												TinLeftOut
											</Button>
											<Button
												variant="outline-primary"
												size="sm"
												className="btn-animation"
												onClick={() => toggleAnimation(styles.tinUpOut)}
											>
												TinUpOut
											</Button>
											<Button
												variant="outline-primary"
												size="sm"
												className="btn-animation"
												onClick={() => toggleAnimation(styles.tinDownOut)}
											>
												TinDownOut
											</Button>
											<Button
												variant="outline-primary"
												size="sm"
												className="btn-animation"
												onClick={() => toggleAnimation(styles.tinRightIn)}
											>
												TinRightIn
											</Button>
											<Button
												variant="outline-primary"
												size="sm"
												className="btn-animation"
												onClick={() => toggleAnimation(styles.tinLeftIn)}
											>
												TinLeftIn
											</Button>
											<Button
												variant="outline-primary"
												size="sm"
												className="btn-animation"
												onClick={() => toggleAnimation(styles.tinUpIn)}
											>
												TinUpIn
											</Button>
											<Button
												variant="outline-primary"
												size="sm"
												className="btn-animation"
												onClick={() => toggleAnimation(styles.tinDownIn)}
											>
												TinDownIn
											</Button>
											<h5 className="mb-3 font-15">Bomb</h5>
											<Button
												variant="outline-primary"
												size="sm"
												className="btn-animation"
												onClick={() => toggleAnimation(styles.bombRightOut)}
											>
												BombRightOut
											</Button>
											<Button
												variant="outline-primary"
												size="sm"
												className="btn-animation"
												onClick={() => toggleAnimation(styles.bombLeftOut)}
											>
												BombLeftOut
											</Button>
											<h5 className="mb-3 font-15">Boing</h5>
											<Button
												variant="outline-primary"
												size="sm"
												className="btn-animation"
												onClick={() => toggleAnimation(styles.boingInUp)}
											>
												BoingInUp
											</Button>
											<Button
												variant="outline-primary"
												size="sm"
												className="btn-animation"
												onClick={() => toggleAnimation(styles.boingOutDown)}
											>
												BoingOutDown
											</Button>
											<h5 className="mb-3 font-15">On The Space</h5>
											<Button
												variant="outline-primary"
												size="sm"
												className="btn-animation"
												onClick={() => toggleAnimation(styles.spaceOutUp)}
											>
												SpaceOutUp
											</Button>
											<Button
												variant="outline-primary"
												size="sm"
												className="btn-animation"
												onClick={() => toggleAnimation(styles.spaceOutRight)}
											>
												SpaceOutRight
											</Button>
											<Button
												variant="outline-primary"
												size="sm"
												className="btn-animation"
												onClick={() => toggleAnimation(styles.spaceOutDown)}
											>
												SpaceOutDown
											</Button>
											<Button
												variant="outline-primary"
												size="sm"
												className="btn-animation"
												onClick={() => toggleAnimation(styles.spaceOutLeft)}
											>
												SpaceOutLeft
											</Button>
											<Button
												variant="outline-primary"
												size="sm"
												className="btn-animation"
												onClick={() => toggleAnimation(styles.spaceInUp)}
											>
												SpaceInUp
											</Button>
											<Button
												variant="outline-primary"
												size="sm"
												className="btn-animation"
												onClick={() => toggleAnimation(styles.spaceInRight)}
											>
												SpaceInRight
											</Button>
											<Button
												variant="outline-primary"
												size="sm"
												className="btn-animation"
												onClick={() => toggleAnimation(styles.spaceInDown)}
											>
												SpaceInDown
											</Button>
											<Button
												variant="outline-primary"
												size="sm"
												className="btn-animation"
												onClick={() => toggleAnimation(styles.spaceInLeft)}
											>
												SpaceInLeft
											</Button>
										</SimpleBar>
									</div>
								</Row>
							</div>
						</CardBody>
					</Card>
				</Col>
			</Row>
		</>
	)
}

export default Animation
