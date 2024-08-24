import { ComponentContainerCard } from '@/components'
import { OrderChannelData } from '../data'
import { Image, ProgressBar } from 'react-bootstrap'

const OrderByChannel = () => {
	return (
		<ComponentContainerCard title="Pages View by Users">
			{OrderChannelData.map((orderChannel, idx) => {
				return (
					<div className="border-bottom-dashed mb-4" key={idx}>
						<div className="media mb-3">
							<Image
								src={orderChannel.logo}
								height="40"
								className="me-3 align-self-center rounded"
								alt="..."
							/>
							<div className="media-body align-self-center">
								<h6 className="mt-0 mb-1">{orderChannel.title}</h6>
								<p className="text-muted mb-1">
									<span className={`text-${orderChannel.profitLossClass}`}>
										{orderChannel.profitLoss}%
									</span>{' '}
									From Yesterday
								</p>
								<small className="float-end text-muted ms-3 font-11">
									{orderChannel.progress}%
								</small>
								<ProgressBar
									variant="warning-50"
									now={orderChannel.progress}
									style={{ borderRadius: '5px' }}
								/>
							</div>
						</div>
					</div>
				)
			})}
		</ComponentContainerCard>
	)
}

export default OrderByChannel
