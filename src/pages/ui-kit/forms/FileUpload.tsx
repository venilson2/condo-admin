import { PageBreadcrumb } from '@/components'
import {
	Card,
	CardBody,
	CardHeader,
	CardTitle,
	Col,
	Row,
} from 'react-bootstrap'
import { FileUploader } from '@/components/FileUploader'
import { FilePond, registerPlugin } from 'react-filepond'
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import FilePondPluginFileEncode from 'filepond-plugin-file-encode'

//style
import 'filepond/dist/filepond.min.css'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'

registerPlugin(
	FilePondPluginFileEncode,
	FilePondPluginImageExifOrientation,
	FilePondPluginImagePreview
)
const FileUpload = () => {
	return (
		<>
			<PageBreadcrumb title="Uploads" subName="Forms" />
			<Row>
				<Col xl="6">
					<Card>
						<CardHeader>
							<CardTitle>Custom File Upload</CardTitle>
							<p className="text-muted mb-0">
								Your so fresh input file — Default version
							</p>
						</CardHeader>
						<CardBody>
							<FileUploader
								// icon={FiUploadCloud}
								text="Drop files here or click to upload."
								extraText="(This is just a demo dropzone. Selected files are not actually uploaded.)"
							/>
						</CardBody>
					</Card>
				</Col>
				<Col xl="6">
					<Card>
						<CardHeader>
							<CardTitle>File Pond Upload</CardTitle>
							<p className="text-muted mb-0">You can add a default value</p>
						</CardHeader>
						<CardBody>
							<FilePond allowMultiple={true} allowReorder={true} allowDrop />
						</CardBody>
					</Card>
				</Col>
			</Row>
		</>
	)
}

export default FileUpload
