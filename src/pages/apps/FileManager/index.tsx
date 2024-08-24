import { PageBreadcrumb2 } from '@/components'
import Files from './components/files'

const FileManager = () => {
	return (
		<>
			<PageBreadcrumb2 title="File Manager" appName="Apps" />
			<Files />
		</>
	)
}

export default FileManager
