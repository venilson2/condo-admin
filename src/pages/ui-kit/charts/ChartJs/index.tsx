import { ComponentContainerCard, PageBreadcrumb2 } from '@/components'
import { Col, Row } from 'react-bootstrap'
import Chart, { type ChartItem } from 'chart.js/auto'
import { useEffect } from 'react'
import {
	barChartConfig,
	donutChartConfig,
	lineChartConfig,
	pieChartConfig,
	polarChartConfig,
	radarChartConfig,
} from './data'

const ChartJs = () => {
	useEffect(() => {
		const lineChartTag = document.getElementById('lineChart') as ChartItem
		const lineChart = new Chart(lineChartTag, lineChartConfig)

		const donutChartTag = document.getElementById('doughnut') as ChartItem
		const donutChart = new Chart(donutChartTag, donutChartConfig)

		const barChartTag = document.getElementById('bar') as ChartItem
		const barChart = new Chart(barChartTag, barChartConfig)

		const polarChartTag = document.getElementById('polarArea') as ChartItem
		const polarChart = new Chart(polarChartTag, polarChartConfig)

		const pieChartTag = document.getElementById('pie') as ChartItem
		const pieChart = new Chart(pieChartTag, pieChartConfig)

		const radarChartTag = document.getElementById('radar') as ChartItem
		const radarChart = new Chart(radarChartTag, radarChartConfig)

		return () => {
			lineChart.destroy()
			donutChart.destroy()
			barChart.destroy()
			polarChart.destroy()
			pieChart.destroy()
			radarChart.destroy()
		}
	}, [])
	return (
		<>
			<PageBreadcrumb2 appName="Charts" title="Chartjs Charts" />
			<Row>
				<Col lg={12} xl={8}>
					<ComponentContainerCard
						title="Line Chart"
						description="A line chart is a way of plotting data points on a line. Often, it is used to show trend data, and the comparison of two data sets."
					>
						<canvas id="lineChart" width={300} height={300} />
					</ComponentContainerCard>
				</Col>
				<Col lg={12} xl={4}>
					<ComponentContainerCard
						title="Donut Chart"
						description="Pie and doughnut charts are probably the most commonly used chart there are. They are divided into segments, the arc of each segment shows the proportional value of each piece of data."
					>
						<canvas id="doughnut" height={300} />
					</ComponentContainerCard>
				</Col>
				<Col lg={12} xl={8}>
					<ComponentContainerCard
						title="Bar Chart"
						description="A bar chart is a way of showing data as bars. It is sometimes used to show trend data, and the comparison of multiple data sets side by side."
					>
						<canvas id="bar" height={300} />
					</ComponentContainerCard>
				</Col>
				<Col lg={12} xl={4}>
					<ComponentContainerCard
						title="Polar Chart"
						description="Polar area charts are similar to pie charts, but each segment has the same angle - the radius of the segment differs depending on the value."
					>
						<canvas id="polarArea" height={300} />
					</ComponentContainerCard>
				</Col>
			</Row>
			<Row>
				<Col lg={12} xl={6}>
					<ComponentContainerCard
						title="Pie Chart"
						description="Pie and doughnut charts are probably the most commonly used chart there are. They are divided into segments, the arc of each segment shows the proportional value of each piece of data."
					>
						<canvas id="pie" height={300} />
					</ComponentContainerCard>
				</Col>
				<Col lg={12} xl={6}>
					<ComponentContainerCard
						title="Radar Chart"
						description="A radar chart is a way of showing multiple data points and the variation between them. They are often useful for comparing the points of two or more different data sets."
					>
						<canvas id="radar" height={300} />
					</ComponentContainerCard>
				</Col>
			</Row>
		</>
	)
}

export default ChartJs
