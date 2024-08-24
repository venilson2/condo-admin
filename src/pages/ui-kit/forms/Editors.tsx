import { PageBreadcrumb2 } from '@/components'
import {
	Card,
	CardBody,
	CardHeader,
	CardTitle,
	Col,
	Row,
} from 'react-bootstrap'
import { Editor } from '@tinymce/tinymce-react'
import { useRef } from 'react'

const Editors = () => {
	const editorRef = useRef<any>(null)
	return (
		<>
			<PageBreadcrumb2 title="Editor" appName="Forms" />
			<Row>
				<Col xs="12">
					<Card>
						<CardHeader>
							<CardTitle>TinyMCE Editor</CardTitle>
							<p className="text-muted mb-0">
								Bootstrap-wysihtml5 is a javascript plugin that makes it easy to
								create simple, beautiful wysiwyg editors with the help of
								wysihtml5 and Twitter Bootstrap.
							</p>
						</CardHeader>
						<CardBody>
							<Editor
								onInit={(editor) => (editorRef.current = editor)}
								initialValue="<p>Hello, World!</p>"
								init={{
									height: 500,
									plugins: [
										'advlist autolink link image lists charmap print preview hr anchor pagebreak',
										'searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking',
										'table emoticons template paste help',
									],
									toolbar:
										'undo redo | formatselect | ' +
										'bold italic backcolor | alignleft aligncenter ' +
										'alignright alignjustify | bullist numlist outdent indent | ' +
										'removeformat | help',
									menu: {
										favs: {
											title: 'My Favorites',
											items: 'code visualaid | searchreplace | emoticons',
										},
									},
									menubar: 'favs file edit view insert format tools table help',
									content_style:
										'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
								}}
							/>
						</CardBody>
					</Card>
				</Col>
			</Row>
		</>
	)
}

export default Editors
