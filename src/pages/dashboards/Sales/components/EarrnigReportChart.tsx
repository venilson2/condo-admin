import { ComponentContainerCard } from '@/components'
import { FiCalendar } from 'react-icons/fi'
import { ApexOptions } from 'apexcharts'
import ReactApexChart from 'react-apexcharts'

const EarrnigReportChart = () => {
	const chartOpts: ApexOptions = {
		chart: {
			height: 270,
			type: 'donut',
		},
		plotOptions: {
			pie: {
				donut: {
					size: '85%',
				},
			},
		},
		dataLabels: {
			enabled: false,
		},

		stroke: {
			show: true,
			width: 2,
			colors: ['transparent'],
		},

		series: [50, 25, 25],
		legend: {
			show: true,
			position: 'bottom',
			horizontalAlign: 'center',
			floating: false,
			fontSize: '13px',
			offsetX: 0,
			offsetY: 0,
		},
		labels: ['Mobile', 'Tablet', 'Desktop'],
		colors: ['#2a76f4', 'rgba(42, 118, 244, .5)', 'rgba(42, 118, 244, .18)'],

		responsive: [
			{
				breakpoint: 600,
				options: {
					plotOptions: {
						donut: {
							customScale: 0.2,
						},
					},
					chart: {
						height: 240,
					},
					legend: {
						show: false,
					},
				},
			},
		],
		tooltip: {
			y: {
				formatter: function (val) {
					return val + ' %'
				},
			},
		},
	}
	return (
		<ComponentContainerCard
			title="Earning Reports"
			label="This Week"
			menuItems={['Today', 'Last Week', 'Last Month', 'This Year']}
		>
			<ReactApexChart
				height={270}
				options={chartOpts}
				series={chartOpts.series}
				type="donut"
			/>
			<h6 className="bg-light-alt py-3 px-2 mb-0">
				<FiCalendar
					data-feather="calendar"
					className="align-self-center icon-xs me-1"
				/>
				01 January 2020 to 31 December 2020
			</h6>
		</ComponentContainerCard>
	)
}

export default EarrnigReportChart
