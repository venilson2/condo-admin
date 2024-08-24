export type Project = {
	name: string
	client: {
		name: string
		image: string
	}
	startDate: string
	deadLine: string
	status: 'Active' | 'Pending' | 'Complete'
	progress: number
}

export type ProjectStatusType = {
	projectName: string
	client: string
	logo: string
	startDate: string
	deadline: string
	progress: number
	variant: string
	day: number
}
