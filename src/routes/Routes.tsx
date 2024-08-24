import { Navigate, Route, RouteProps, Routes } from 'react-router-dom'
// import { useAuthContext } from "@/context";
import { allAdminRoutes, allBlankRoutes } from './index'
import Layout from '@/layout/Layout'
import { useAuthContext } from '@/context'
import DefaultLayout from '@/layout/DefaultLayout'

const AllRoutes = (props: RouteProps) => {
	const { isAuthenticated } = useAuthContext()
	return (
		<Routes>
			<Route>
				{allBlankRoutes.map((route, idx) => (
					<Route
						key={idx}
						path={route.path}
						element={<DefaultLayout {...props}>{route.element}</DefaultLayout>}
					/>
				))}
			</Route>

			<Route>
				{allAdminRoutes.map((route, idx) => (
					<Route
						path={route.path}
						element={
							isAuthenticated === false ? (
								<Navigate
									to={{
										pathname: '/auth/login',
										search: 'next=' + route.path,
									}}
								/>
							) : (
								<Layout {...props}>{route.element}</Layout>
							)
						}
						key={idx}
					/>
				))}
			</Route>

			{/* <Route>
        {allAdminFlattedRoutes.map((route, idx) => (
          <Route
            key={idx}
            path={route.path}
            element={
              (isAuthenticated && session?.role == 'admin') ? (
                <AdminLayout {...props}>{route.element}</AdminLayout>
              ) : (
                <Navigate
                  to={{
                    pathname: "/auth/login",
                    search: "redirectTo=" + route.path,
                  }}
                />
              )
            }
          />
        ))}
      </Route> */}
		</Routes>
	)
}

export default AllRoutes
