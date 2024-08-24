const worldMapOpts = {
	normalizeFunction: 'polynomial',
	zoomOnScroll: false,
	hoverOpacity: 0.7,
	selectedMarkers: [0, 2],
	markersSelectable: true,
	hoverColor: false,
	markers: [
		{ name: 'Palestine', coords: [31.9474, 35.2272] },
		{ name: 'Russia', coords: [61.524, 105.3188] },
		{ name: 'Canada', coords: [56.1304, -106.3468] },
		{ name: 'Greenland', coords: [71.7069, -42.6043] },
	],
	markerStyle: {
		initial: { fill: '#5c5cff' },
		selected: { fill: '#ff5da0' },
	},
	regionStyle: {
		initial: {
			fill: 'rgba(145,166,189,.25)',
		},
	},
	labels: {
		markers: {
			render: (marker: any) => marker.name,
		},
	},
}
const worldMapWithLineOpts = {
	normalizeFunction: 'polynomial',
	zoomOnScroll: false,
	zoomButtons: false,
	markers: [
		{ name: 'Greenland', coords: [72, -42] },
		{ name: 'Canada', coords: [56.1304, -106.3468] },
		{ name: 'Brazil', coords: [-14.235, -51.9253] },
		{ name: 'Egypt', coords: [26.8206, 30.8025] },
		{ name: 'Russia', coords: [61, 105] },
		{ name: 'China', coords: [35.8617, 104.1954] },
		{ name: 'United States', coords: [37.0902, -95.7129] },
		{ name: 'Norway', coords: [60.472024, 8.468946] },
		{ name: 'Ukraine', coords: [48.379433, 31.16558] },
	],
	lines: [
		{ from: 'Canada', to: 'Egypt' },
		{ from: 'Russia', to: 'Egypt' },
		{ from: 'Greenland', to: 'Egypt' },
		{ from: 'Brazil', to: 'Egypt' },
		{ from: 'United States', to: 'Egypt' },
		{ from: 'China', to: 'Egypt' },
		{ from: 'Norway', to: 'Egypt' },
		{ from: 'Ukraine', to: 'Egypt' },
	],
	lineStyle: {
		animation: true,
		strokeDasharray: '6 3 6',
	},
	labels: {
		markers: {
			render: (marker: any) => marker.name,
		},
	},
}

export { worldMapOpts, worldMapWithLineOpts }
