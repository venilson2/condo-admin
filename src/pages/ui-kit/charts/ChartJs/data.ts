import { type ChartConfiguration } from 'chart.js/auto'

const lineChartConfig: ChartConfiguration = {
	type: 'line',
	data: {
		labels: [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
		],
		datasets: [
			{
				label: 'Conversion Rate',
				fill: false,
				backgroundColor: '#d9e6fd',
				borderColor: '#d9e6fd',
				data: [-90, -50, -70, 20, -35, 20, 10, 50, 30, 80],
			},
			{
				label: 'Average Sale Value',
				fill: false,
				backgroundColor: '#4a8af6',
				borderColor: '#4a8af6',
				borderDash: [5, 5],
				data: [10, -50, 30, -80, 50, -30, 30, -80, 10, -10],
			},
		],
	},
	options: {
		maintainAspectRatio: false,
		plugins: {
			legend: {
				labels: {
					color: '#7c8ea7',
				},
			},
		},
		scales: {
			y: {
				beginAtZero: true,
				ticks: {
					// Include a dollar sign in the ticks
					callback: function (value) {
						return '$' + value
					},
					color: '#7c8ea7',
				},
				grid: {
					// drawBorder: 'border',
					color: 'rgba(132, 145, 183, 0.15)',
					// borderDash: [3],
					// borderColor: 'rgba(132, 145, 183, 0.15)',
				},
				// beginAtZero: true,
			},
			x: {
				ticks: {
					color: '#7c8ea7',
				},
				grid: {
					display: false,
					color: 'rgba(132, 145, 183, 0.09)',
					// tickBorderDash: [3],
					// tickColor: 'rgba(132, 145, 183, 0.09)',
				},
			},
		},
	},
}

const donutChartConfig: ChartConfiguration = {
	type: 'doughnut',
	data: {
		labels: ['Bitcoin', 'Ethereum', 'Litecoin'],
		datasets: [
			{
				data: [80, 80, 80],
				backgroundColor: ['#f7931a', '#4d79f6', '#e0e7fd'],
				borderColor: 'transparent',
				borderRadius: 0,
				hoverBackgroundColor: ['#f7931a', '#4d79f6', '#e0e7fd'],
				hoverBorderColor: 'transparent',
			},
		],
	},
	options: {
		maintainAspectRatio: false,
		plugins: {
			legend: {
				labels: {
					color: '#7c8ea7',
				},
			},
		},
	},
}

const barChartConfig: ChartConfiguration = {
	type: 'bar',
	data: {
		labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
		datasets: [
			{
				label: 'Sales Analytics',
				backgroundColor: 'rgba(23, 97, 253, 0.4)',
				borderColor: '#4a8af6',
				borderWidth: 2,
				barPercentage: 0.3,
				categoryPercentage: 0.5,
				hoverBackgroundColor: 'rgba(23, 97, 253, 0.7)',
				hoverBorderColor: '#4a8af6',
				data: [65, 59, 80, 81, 56, 55, 40, 20],
			},
		],
	},

	options: {
		maintainAspectRatio: false,
		responsive: true,
		plugins: {
			legend: {
				position: 'top',
				labels: {
					color: '#7c8ea7',
				},
			},
			title: {
				display: false,
				text: 'Chart.js Bar Chart',
			},
		},
		scales: {
			y: {
				beginAtZero: true,
				ticks: {
					// Include a dollar sign in the ticks
					callback: function (value) {
						return '$' + value
					},
					color: '#7c8ea7',
				},
				grid: {
					color: 'rgba(23, 97, 253, 0.4)',
				},
			},
			x: {
				ticks: {
					color: '#7c8ea7',
				},
				grid: {
					display: false,
					color: 'rgba(23, 97, 253, 0.4)',
				},
			},
		},
	},
}

const polarChartConfig: ChartConfiguration = {
	type: 'polarArea',
	data: {
		labels: ['Series 1', 'Series 2', 'Series 3', 'Series 4'],
		datasets: [
			{
				data: [11, 16, 7, 18],
				backgroundColor: ['#f7931a', '#4d79f6', '#1ac9ff', '#e0e7fd'],
				borderColor: 'transparent',
				label: 'My dataset', // for legend
				hoverBorderColor: '#ffffff',
			},
		],
	},
	options: {
		maintainAspectRatio: false,
		plugins: {
			legend: {
				labels: {
					color: '#7c8ea7',
				},
			},
		},
	},
}

const pieChartConfig: ChartConfiguration = {
	type: 'pie',
	data: {
		labels: ['Desktops', 'Tablets', 'Mobiles'],
		datasets: [
			{
				data: [80, 80, 80],
				backgroundColor: ['#f7931a', '#4d79f6', '#e0e7fd'],
				borderColor: 'transparent',
				hoverBackgroundColor: ['#f7931a', '#4d79f6', '#e0e7fd'],
				hoverBorderColor: '#ffffff',
			},
		],
	},
	options: {
		maintainAspectRatio: false,
		plugins: {
			legend: {
				labels: {
					color: '#7c8ea7',
				},
			},
		},
	},
}

const radarChartConfig: ChartConfiguration = {
	type: 'radar',
	data: {
		labels: [
			'Eating',
			'Drinking',
			'Sleeping',
			'Designing',
			'Coding',
			'Cycling',
			'Running',
		],
		datasets: [
			{
				label: 'Desktops',
				backgroundColor: 'rgba(77,121,246,0.3)',
				borderColor: '#4d79f6',
				pointBackgroundColor: '#4ac7ec',
				pointBorderColor: '#fff',
				pointHoverBackgroundColor: '#fff',
				pointHoverBorderColor: 'rgba(179,181,198,1)',
				data: [65, 59, 90, 81, 56, 55, 40],
			},
			{
				label: 'Tablets',
				backgroundColor: 'rgba(74,199,236,0.2)',
				borderColor: '#4ac7ec',
				pointBackgroundColor: '#4d79f6',
				pointBorderColor: '#fff',
				pointHoverBackgroundColor: '#fff',
				pointHoverBorderColor: 'rgba(255,99,132,1)',
				data: [28, 48, 40, 19, 96, 27, 100],
			},
		],
	},
	options: {
		maintainAspectRatio: false,
		scales: {
			r: {
				angleLines: {
					display: true,
					color: 'rgba(132, 145, 183, 0.15)',
					borderDash: [2],
				},
			},
		},
		plugins: {
			legend: {
				labels: {
					color: '#7c8ea7',
				},
			},
		},
	},
}

export {
	lineChartConfig,
	donutChartConfig,
	barChartConfig,
	polarChartConfig,
	pieChartConfig,
	radarChartConfig,
}
