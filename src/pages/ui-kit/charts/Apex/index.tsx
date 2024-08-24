import { ComponentContainerCard, PageBreadcrumb } from '@/components'
import ReactApexChart from 'react-apexcharts'
import { Button, Col, Row } from 'react-bootstrap'
import {
	CircularGuageChartOpts,
	basicAreaChartOpts,
	basicColumnChartOpts,
	basicLineChartOpts,
	basicTreemapChartOpts,
	bubbleChartOpts,
	columnWithLabelChartOpts,
	dateTimeAreaChartOpts,
	donutChartOpts,
	lineChartWithLabelsOpts,
	monochromeChartOpts,
	multipleRadialbarChartOpts,
	multipleYAxisChartOpts,
	patternedDonutChartOpts,
	pieChartOpts,
	polarAreaChartOpts,
	radialbarChartOpts,
	simpleCandlestickChartOpts,
	sparkChartOpts1,
	sparkChartOpts2,
	sparkChartOpts3,
	treemapColorChartOpts,
} from './data'

const Apex = () => {
	return (
		<>
			<PageBreadcrumb subName="Charts" title="Apex" />
			<Row>
				<Col lg={6}>
					<ComponentContainerCard title="Basic Line Chart">
						<div className="chart-demo">
							<ReactApexChart
								height={350}
								options={basicLineChartOpts}
								series={basicLineChartOpts.series}
								type="line"
								className="apex-charts"
							/>
						</div>
					</ComponentContainerCard>
				</Col>
				<Col lg={6}>
					<ComponentContainerCard title="Line with Data Labels">
						<div className="chart-demo">
							<ReactApexChart
								height={350}
								options={lineChartWithLabelsOpts}
								series={lineChartWithLabelsOpts.series}
								type="line"
								className="apex-charts"
							/>
						</div>
					</ComponentContainerCard>
				</Col>
			</Row>
			<Row>
				<Col lg={6}>
					<ComponentContainerCard title="Basic Area Chart">
						<div className="chart-demo">
							<ReactApexChart
								height={360}
								options={basicAreaChartOpts}
								series={basicAreaChartOpts.series}
								type="area"
								className="apex-charts"
							/>
						</div>
					</ComponentContainerCard>
				</Col>
				<Col lg={6}>
					<ComponentContainerCard title="Area Chart - Datetime X-Axis">
						<div className="chart-demo">
							<div className="toolbar">
								<Button variant="outline-light" size="sm" id="one_month">
									1M
								</Button>
								<Button variant="outline-light" size="sm" id="six_months">
									6M
								</Button>
								<Button
									variant="outline-light"
									size="sm"
									className="active"
									id="one_year"
								>
									1Y
								</Button>
								<Button variant="outline-light" size="sm" id="ytd">
									YTD
								</Button>
								<Button variant="outline-light" size="sm" id="all">
									ALL
								</Button>
							</div>
							<ReactApexChart
								id="apex_area2"
								height={350}
								options={dateTimeAreaChartOpts}
								series={dateTimeAreaChartOpts.series}
								type="area"
								className="apex-charts"
							/>
						</div>
					</ComponentContainerCard>
				</Col>
			</Row>
			<Row>
				<Col lg={6}>
					<ComponentContainerCard title="Basic Column Chart">
						<div className="chart-demo">
							<ReactApexChart
								height={396}
								options={basicColumnChartOpts}
								series={basicColumnChartOpts.series}
								type="bar"
								className="apex-charts"
							/>
						</div>
					</ComponentContainerCard>
				</Col>
				<Col lg={6}>
					<ComponentContainerCard title="Column Chart With DataLabels">
						<div className="chart-demo">
							<ReactApexChart
								height={380}
								options={columnWithLabelChartOpts}
								series={columnWithLabelChartOpts.series}
								type="bar"
								className="apex-charts"
							/>
						</div>
					</ComponentContainerCard>
				</Col>
			</Row>
			<Row>
				<Col lg={6}>
					<ComponentContainerCard title="Basic Bar Chart">
						<div className="chart-demo">
							<ReactApexChart
								height={380}
								options={columnWithLabelChartOpts}
								series={columnWithLabelChartOpts.series}
								type="bar"
								className="apex-charts"
							/>
						</div>
					</ComponentContainerCard>
				</Col>
				<Col lg={6}>
					<ComponentContainerCard title="Multiple Y-Axis Chart">
						<div className="chart-demo">
							<ReactApexChart
								height={380}
								options={multipleYAxisChartOpts}
								series={multipleYAxisChartOpts.series}
								type="line"
								className="apex-charts"
							/>
						</div>
					</ComponentContainerCard>
				</Col>
			</Row>
			<Row>
				<Col lg={6}>
					<ComponentContainerCard title="3D Bubble Chart">
						<div className="chart-demo">
							<ReactApexChart
								height={380}
								options={bubbleChartOpts}
								series={bubbleChartOpts.series}
								type="bubble"
								className="apex-charts"
							/>
						</div>
					</ComponentContainerCard>
				</Col>
				<Col lg={6}>
					<ComponentContainerCard title="Simple Candlestick Chart">
						<div className="chart-demo">
							<ReactApexChart
								height={320}
								options={simpleCandlestickChartOpts}
								series={simpleCandlestickChartOpts.series}
								type="candlestick"
								className="apex-charts"
							/>
						</div>
					</ComponentContainerCard>
				</Col>
			</Row>
			<Row>
				<Col lg={6}>
					<ComponentContainerCard title="Basic Treemap">
						<div className="chart-demo">
							<ReactApexChart
								height={350}
								options={basicTreemapChartOpts}
								series={basicTreemapChartOpts.series}
								type="treemap"
								className="apex-charts"
							/>
						</div>
					</ComponentContainerCard>
				</Col>
				<Col lg={6}>
					<ComponentContainerCard title="Treemap Color">
						<div className="chart-demo">
							<ReactApexChart
								height={350}
								options={treemapColorChartOpts}
								series={treemapColorChartOpts.series}
								type="treemap"
								className="apex-charts"
							/>
						</div>
					</ComponentContainerCard>
				</Col>
			</Row>
			<Row>
				<Col lg={6}>
					<ComponentContainerCard title="Polar Area">
						<div className="chart-demo my-0">
							<ReactApexChart
								width={380}
								options={polarAreaChartOpts}
								series={polarAreaChartOpts.series}
								type="polarArea"
								className="apex-charts"
							/>
						</div>
					</ComponentContainerCard>
				</Col>
				<Col lg={6}>
					<ComponentContainerCard title="Monochrome">
						<div className="chart-demo my-0">
							<ReactApexChart
								width={380}
								options={monochromeChartOpts}
								series={monochromeChartOpts.series}
								type="polarArea"
								className="apex-charts"
							/>
						</div>
					</ComponentContainerCard>
				</Col>
			</Row>
			<Row>
				<Col lg={4}>
					<ComponentContainerCard title="Simple Pie Chart">
						<div>
							<ReactApexChart
								height={320}
								options={pieChartOpts}
								series={pieChartOpts.series}
								type="pie"
								className="apex-charts"
							/>
						</div>
					</ComponentContainerCard>
				</Col>
				<Col lg={4}>
					<ComponentContainerCard title="Gradient Donut Chart">
						<div>
							<ReactApexChart
								height={320}
								options={donutChartOpts}
								series={donutChartOpts.series}
								type="donut"
								className="apex-charts"
							/>
						</div>
					</ComponentContainerCard>
				</Col>
				<Col lg={4}>
					<ComponentContainerCard title="Patterned Donut Chart">
						<div>
							<ReactApexChart
								height={320}
								options={patternedDonutChartOpts}
								series={patternedDonutChartOpts.series}
								type="donut"
								className="apex-charts"
							/>
						</div>
					</ComponentContainerCard>
				</Col>
			</Row>
			<Row>
				<Col lg={4}>
					<ComponentContainerCard title="Basic RadialBar Chart">
						<div>
							<ReactApexChart
								height={320}
								options={radialbarChartOpts}
								series={radialbarChartOpts.series}
								type="radialBar"
								className="apex-charts"
							/>
						</div>
					</ComponentContainerCard>
				</Col>
				<Col lg={4}>
					<ComponentContainerCard title="Multiple RadialBars">
						<div>
							<ReactApexChart
								height={350}
								options={multipleRadialbarChartOpts}
								series={multipleRadialbarChartOpts.series}
								type="radialBar"
								className="apex-charts"
							/>
						</div>
					</ComponentContainerCard>
				</Col>
				<Col lg={4}>
					<ComponentContainerCard title="Stroked Circular Guage">
						<div>
							<ReactApexChart
								height={380}
								options={CircularGuageChartOpts}
								series={CircularGuageChartOpts.series}
								type="radialBar"
								className="apex-charts"
							/>
						</div>
					</ComponentContainerCard>
				</Col>
			</Row>
			<Row>
				<Col xs={12}>
					<ComponentContainerCard title="Sparkline inline">
						<Row>
							<Col md={4}>
								<ReactApexChart
									height={160}
									options={sparkChartOpts1}
									series={sparkChartOpts1.series}
									type="area"
									className="apex-charts"
								/>
							</Col>
							<Col md={4}>
								<ReactApexChart
									height={160}
									options={sparkChartOpts2}
									series={sparkChartOpts2.series}
									type="area"
									className="apex-charts"
								/>
							</Col>
							<Col md={4}>
								<ReactApexChart
									height={160}
									options={sparkChartOpts3}
									series={sparkChartOpts3.series}
									type="area"
									className="apex-charts"
								/>
							</Col>
						</Row>
					</ComponentContainerCard>
				</Col>
			</Row>
		</>
	)
}

export default Apex
