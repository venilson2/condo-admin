/*
 * Copyright (c) 2023.
 * File Name: PrivateRoute.tsx
 * Author: Mannatthemes
 */
import React from 'react'

type PrivateRouteProps = {
	component: React.ComponentType
}

const PrivateRoute = ({ component: RouteComponent }: PrivateRouteProps) => {
	return <RouteComponent />
}

export default PrivateRoute
