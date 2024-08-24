import { ComponentContainerCard, PageBreadcrumb2 } from '@/components'
import { colorVariants } from '@/constant'
import { Col, Row } from 'react-bootstrap'

const Heading = () => {
	return (
		<ComponentContainerCard
			title="Heading"
			description="All HTML headings,<h1> through<h6>, are available."
		>
			<h1>h1. Bootstrap heading</h1>
			<h2>h2. Bootstrap heading</h2>
			<h3>h3. Bootstrap heading</h3>
			<h4>h4. Bootstrap heading</h4>
			<h5>h5. Bootstrap heading</h5>
			<h6>h6. Bootstrap heading</h6>
		</ComponentContainerCard>
	)
}

const DisplayHeadings = () => {
	return (
		<ComponentContainerCard
			title="Display Headings"
			description="Traditional heading elements are designed to work best in the meat of your page content."
		>
			<h1 className="display-1">Display 1</h1>
			<h1 className="display-2">Display 2</h1>
			<h1 className="display-3">Display 3</h1>
			<h1 className="display-4">Display 4</h1>
		</ComponentContainerCard>
	)
}

const InlineTextElements = () => {
	return (
		<ComponentContainerCard
			title="Inline text elements"
			description="Styling for common inline HTML5 elements."
		>
			<h4 className="mt-0 header-title">Inline text elements</h4>
			<p className="text-muted mb-4">
				Styling for common inline HTML5 elements.
			</p>
			<p>
				You can use the mark tag to <mark>highlight</mark> text.
			</p>
			<p>
				<del>This line of text is meant to be treated as deleted text.</del>
			</p>
			<p>
				<s>This line of text is meant to be treated as no longer accurate.</s>
			</p>
			<p>
				<ins>
					This line of text is meant to be treated as an addition to the
					document.
				</ins>
			</p>
			<p>
				<u>This line of text will render as underlined</u>
			</p>
			<p>
				<small>This line of text is meant to be treated as fine print.</small>
			</p>
			<p>
				<strong>This line rendered as bold text.</strong>
			</p>
			<p className="mb-0">
				<em>This line rendered as italicized text.</em>
			</p>
		</ComponentContainerCard>
	)
}

const TextColors = () => {
	return (
		<ComponentContainerCard
			title="Colors"
			description="Convey meaning through color with a handful of color utility classes. Includes support for styling links with hover states, too."
		>
			{colorVariants.map((color, idx) => {
				return (
					<p key={idx} className={`text-${color}`}>
						.text-{color}
					</p>
				)
			})}
			<p className="text-light bg-dark">.text-light</p>
			<p className="text-body">.text-body</p>
			<p className="text-muted">.text-muted</p>
			<p className="text-white bg-dark">.text-white</p>
			<p className="text-black-50">.text-black-50</p>
			<p className="text-white-50 bg-dark">.text-white-50</p>
		</ComponentContainerCard>
	)
}

const Typography = () => {
	return (
		<>
			<PageBreadcrumb2 appName="UI Kit" title="Typography" />
			<Row>
				<Col lg={6}>
					<Row>
						<Col lg={6}>
							<div className="card">
								<div className="card-body">
									<span className="float-right text-muted fw-normal">
										Normal / 400
									</span>
									<h1 className="font-54 fw-normal mt-0 mb-4">Aa</h1>
									<h5 className="mb-0 fw-normal">Metrica</h5>
								</div>
							</div>
						</Col>
						<Col lg={6}>
							<div className="card ">
								<div className="card-body">
									<span className="float-right text-muted fw-bold">
										Bold / 700
									</span>
									<h1 className="font-54 fw-bold mt-0 mb-4">Aa</h1>
									<h5 className="mb-0 fw-bold">Metrica</h5>
								</div>
							</div>
						</Col>
					</Row>
					<Heading />
					<div className="card">
						<div className="card-header">
							<h4 className="card-title">Lead</h4>
							<p className="text-muted mb-0">
								Make a paragraph stand out by adding{' '}
								<code className="highlighter-rouge">.lead</code>.
							</p>
						</div>
						<div className="card-body">
							<p className="lead mb-0">
								Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
								auctor.
							</p>
						</div>
					</div>
				</Col>
				<Col lg={6}>
					<div className="card">
						<div className="card-body">
							<div className="font-16">
								<code>font-family : 'Roboto', sans-serif; </code>
							</div>
						</div>
					</div>
					<DisplayHeadings />
				</Col>
			</Row>
			<Row>
				<Col lg={6}>
					<div className="card">
						<div className="card-header">
							<h4 className="card-title">Blockquotes</h4>
							<p className="text-muted mb-0">
								For quoting blocks of content from another source within your
								document. Wrap{' '}
								<code className="highlighter-rouge">
									&lt;blockquote class="blockquote"&gt;
								</code>{' '}
								around any <abbr title="HyperText Markup Language">HTML</abbr>{' '}
								as the quote.
							</p>
						</div>
						<div className="card-body">
							<blockquote className="blockquote">
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									Integer posuere erat a ante.
								</p>
								<footer className="blockquote-footer font-14">
									Someone famous in{' '}
									<cite title="Source Title">Source Title</cite>
								</footer>
							</blockquote>
							<blockquote className="blockquote blockquote-reverse">
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									Integer posuere erat a ante.
								</p>
								<footer className="blockquote-footer font-14">
									Someone famous in{' '}
									<cite title="Source Title">Source Title</cite>
								</footer>
							</blockquote>
							<blockquote className="blockquote blockquote-reverse mb-0">
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									Integer posuere erat a ante.
								</p>
								<footer className="blockquote-footer font-14 text-right">
									Someone famous in{' '}
									<cite title="Source Title">Source Title</cite>
								</footer>
							</blockquote>
						</div>
					</div>
				</Col>
				<Col lg={6}>
					<InlineTextElements />
				</Col>
			</Row>
			<Row>
				<Col lg={6}>
					<Row>
						<Col lg={6}>
							<div className="card">
								<div className="card-header">
									<h4 className="card-title">Unorder List</h4>
									<p className="text-muted mb-0">
										Bootstrap unorder list style
									</p>
								</div>
								<div className="card-body">
									<ul className="mb-0">
										<li>Integer molestie lorem at massa</li>
										<li>
											Nulla volutpat aliquam velit
											<ul>
												<li>Phasellus iaculis neque</li>
												<li>Purus sodales ultricies</li>
												<li>Vestibulum laoreet porttitor sem</li>
											</ul>
										</li>
										<li>Faucibus porta lacus fringilla vel</li>
									</ul>
								</div>
							</div>
						</Col>
						<Col lg={6}>
							<div className="card">
								<div className="card-header">
									<h4 className="card-title">Order List</h4>
									<p className="text-muted mb-0">Bootstrap order list style</p>
								</div>
								<div className="card-body">
									<ol className="mb-0">
										<li>Integer molestie lorem at massa</li>
										<li>Nulla volutpat aliquam velit </li>
										<li>Phasellus iaculis neque</li>
										<li>Purus sodales ultricies</li>
										<li>Vestibulum laoreet porttitor sem</li>
										<li>Faucibus porta lacus fringilla vel</li>
									</ol>
								</div>
							</div>
						</Col>
						<Col lg={6}>
							<div className="card">
								<div className="card-header">
									<h4 className="card-title">Unstyleed List</h4>
									<p className="text-muted mb-0">
										Bootstrap unstyled list style
									</p>
								</div>
								<div className="card-body">
									<ul className="mb-0 list-unstyled">
										<li>Integer molestie lorem at massa</li>
										<li>Nulla volutpat aliquam velit </li>
										<li>Phasellus iaculis neque</li>
										<li>Purus sodales ultricies</li>
										<li>Vestibulum laoreet porttitor sem</li>
										<li>Faucibus porta lacus fringilla vel</li>
									</ul>
								</div>
							</div>
						</Col>
						<Col lg={6}>
							<div className="card">
								<div className="card-header">
									<h4 className="card-title">Inline List</h4>
									<p className="text-muted mb-0">Bootstrap inline list style</p>
								</div>
								<div className="card-body">
									<ul className="list-inline">
										<li className="list-inline-item">
											<i className="mdi mdi-circle-outline font-13 text-success me-1" />
											Lorem ipsum
										</li>
										<li className="list-inline-item">
											<i className="mdi mdi-circle-outline font-13 text-success me-1" />
											Phasellus iaculis
										</li>
										<li className="list-inline-item">
											<i className="mdi mdi-circle-outline font-13 text-success me-1" />
											Nulla volutpat
										</li>
										<li className="list-inline-item">
											<i className="mdi mdi-circle-outline font-13 text-success me-1" />
											Lorem ipsum
										</li>
										<li className="list-inline-item">
											<i className="mdi mdi-circle-outline font-13 text-success me-1" />
											Phasellus iaculis
										</li>
										<li className="list-inline-item">
											<i className="mdi mdi-circle-outline font-13 text-success me-1" />
											Nulla volutpat
										</li>
										<li className="list-inline-item">
											<i className="mdi mdi-circle-outline font-13 text-success me-1" />
											Lorem ipsum
										</li>
										<li className="list-inline-item">
											<i className="mdi mdi-circle-outline font-13 text-success me-1" />
											Phasellus iaculis
										</li>
										<li className="list-inline-item">
											<i className="mdi mdi-circle-outline font-13 text-success me-1" />
											Nulla volutpat
										</li>
									</ul>
								</div>
							</div>
						</Col>
					</Row>
				</Col>
				<Col lg={6}>
					<TextColors />
				</Col>
			</Row>
			<Row>
				<div className="col-12">
					<div className="card">
						<div className="card-header">
							<h4 className="card-title">Description list alignment</h4>
							<p className="text-muted mb-0">
								Align terms and descriptions horizontally by using our grid
								system’s predefined classes (or semantic mixins). For longer
								terms, you can optionally add a{' '}
								<code className="highlighter-rouge">.text-truncate</code> class
								to truncate the text with an ellipsis.
							</p>
						</div>
						<div className="card-body">
							<dl className="row mb-0">
								<dt className="col-sm-3">Description lists</dt>
								<dd className="col-sm-9">
									A description list is perfect for defining terms.
								</dd>
								<dt className="col-sm-3">Euismod</dt>
								<dd className="col-sm-9">
									Vestibulum id ligula porta felis euismod semper eget lacinia
									odio sem nec elit.
								</dd>
								<dd className="col-sm-9 offset-sm-3">
									Donec id elit non mi porta gravida at eget metus.
								</dd>
								<dt className="col-sm-3">Malesuada porta</dt>
								<dd className="col-sm-9">
									Etiam porta sem malesuada magna mollis euismod.
								</dd>
								<dt className="col-sm-3 text-truncate">
									Truncated term is truncated
								</dt>
								<dd className="col-sm-9">
									Fusce dapibus, tellus ac cursus commodo, tortor mauris
									condimentum nibh, ut fermentum massa justo sit amet risus.
								</dd>
								<dt className="col-sm-3">Nesting</dt>
								<dd className="col-sm-9 mb-0">
									<dl className="row mb-0">
										<dt className="col-sm-4">Nested definition list</dt>
										<dd className="col-sm-8">
											Aenean posuere, tortor sed cursus feugiat, nunc augue
											blandit nunc.
										</dd>
									</dl>
								</dd>
							</dl>
						</div>
					</div>
				</div>
			</Row>
		</>
	)
}

export default Typography
