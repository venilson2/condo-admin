import { ComponentContainerCard } from '@/components'

import { ApexOptions } from 'apexcharts'
import ReactApexChart from 'react-apexcharts'

const SessionsByChannels = () => {
	const chartOpts: ApexOptions = {
		series: [
			{
				name: 'Inflation',
				data: [4.0, 10.1, 6.0, 8.0, 9.1],
			},
		],
		chart: {
			height: 355,
			type: 'bar',
			toolbar: {
				show: false,
			},
		},
		plotOptions: {
			bar: {
				dataLabels: {
					position: 'top', // top, center, bottom
				},
				columnWidth: '15',
				distributed: true,
			},
		},
		dataLabels: {
			enabled: true,
			formatter: function (val: any) {
				return val + '%'
			},
			offsetY: -20,
			style: {
				fontSize: '12px',
				colors: ['#000'],
			},
		},
		colors: ['#98e7df', '#b8c4d0', '#bec7fa', '#ffe2a3', '#92e6f0'],
		xaxis: {
			categories: ['Email', 'Referral', 'Organic', 'Direct', 'Campaign'],
			position: 'top',
			axisBorder: {
				show: false,
			},
			axisTicks: {
				show: false,
			},
			crosshairs: {
				fill: {
					type: 'gradient',
					gradient: {
						colorFrom: '#D8E3F0',
						colorTo: '#BED1E6',
						stops: [0, 100],
						opacityFrom: 0.4,
						opacityTo: 0.5,
					},
				},
			},
			tooltip: {
				enabled: true,
			},
		},

		grid: {
			padding: {
				left: 0,
				right: 0,
			},
			strokeDashArray: 3,
		},
		yaxis: {
			axisBorder: {
				show: false,
			},
			axisTicks: {
				show: false,
			},
			labels: {
				show: false,
				formatter: function (val: any) {
					return val + '%'
				},
			},
		},
	}
	return (
		<ComponentContainerCard title="Sessions By Channel">
			<div>
				<ReactApexChart
					height={370}
					options={chartOpts}
					series={chartOpts.series}
					type="bar"
				/>
			</div>
		</ComponentContainerCard>
	)
}

export default SessionsByChannels
