export type WidgetType = {
	title: string
	count: string
}

export type EarningReportType = {
	date: string
	itemCount: number
	text: string
	earnings: string
}

export type PopularProductsType = {
	product: {
		productImage: string
		productName: string
		productID: string
	}

	price: {
		originalPrice: number
		discountPrice: number
	}

	sell: {
		originalPrice: number
		sellPrice: number
	}

	status: string
}
