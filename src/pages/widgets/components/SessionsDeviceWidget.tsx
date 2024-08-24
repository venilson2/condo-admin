import { ComponentContainerCard } from '@/components'
import { ApexOptions } from 'apexcharts'
import ReactApexChart from 'react-apexcharts'
import { FiCalendar } from 'react-icons/fi'

const SessionsDeviceWidget = () => {
	const chartOpts: ApexOptions = {
		chart: {
			height: 310,
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
			title="Sessions Device"
			menuItems={['Email', 'Purchase']}
		>
			<div className="text-center">
				<ReactApexChart
					height={310}
					options={chartOpts}
					series={chartOpts.series}
					type="donut"
				/>
				<h6 className="text-primary bg-soft-primary p-3 mb-0 mt-3">
					<FiCalendar className="align-self-center icon-xs me-1" />
					01 January 2020 to 31 June 2020
				</h6>
			</div>
		</ComponentContainerCard>
	)
}

export default SessionsDeviceWidget
