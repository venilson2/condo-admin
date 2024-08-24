import { Button, FormControl, Image } from 'react-bootstrap'
import logoSm from '@/assets/images/logo-sm.png'

const CouponCode = () => {
	return (
		<div className="text-center cart-promo">
			<Image src={logoSm} height={50} className="mb-2" />
			<h4>Have a promo code ?</h4>
			<p className="font-13">
				If you have a promocode, You can take discount !
			</p>
			<div className="input-group w-75 mx-auto">
				<FormControl
					type="text"
					className="form-control-sm"
					placeholder="Use Promocode"
					aria-describedby="button-addon2"
				/>
				<Button variant="primary" size="sm" type="button" id="button-addon2">
					Apply
				</Button>
			</div>
		</div>
	)
}

export default CouponCode
