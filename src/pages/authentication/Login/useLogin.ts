import { HttpClient } from '@/common'
import { useAuthContext } from '@/context'
import type { User } from '@/types'
import { yupResolver } from '@hookform/resolvers/yup'
import { type AxiosResponse } from 'axios'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { toast } from 'sonner'
import * as yup from 'yup'

export default function useLogin() {
	const [loading, setLoading] = useState(false)
	const navigate = useNavigate()
	const [searchParams] = useSearchParams()

	const { isAuthenticated, saveSession } = useAuthContext()

	const schemaResolver = yup.object().shape({
		username: yup
			.string()
			.required('Por favor digite seu username'),
		password: yup.string().required('Por favor digite sua senha'),
		subdomain: yup.string().required('Por favor digite o código do dominio'),
	})

	const { control, handleSubmit } = useForm({
		resolver: yupResolver(schemaResolver),
		defaultValues: {
			username: 'admin',
			password: 'password',
			subdomain: '001'
		},
	})

	type LoginFormFields = yup.InferType<typeof schemaResolver>

	// const redirectUrl = useMemo(() => (location.state?.from.pathname, location.pathname ?? "/"), [location.state]);
	const redirectUrl = searchParams.get('next') ?? '/dashboard'

	const login = handleSubmit(async function (values: LoginFormFields) {
		setLoading(true)
		try {
			const res: AxiosResponse<User> = await HttpClient.post('/login', values)
			if (res.data.token) {
				saveSession({
					...(res.data ?? {}),
					token: res.data.token,
				})
				toast.success('Successfully logged in. Redirecting....', {
					position: 'top-right',
					duration: 2000,
				})
				navigate(redirectUrl)
			}
		} catch (e: any) {
			if (e.response?.data?.error) {
				toast.error(e.response?.data?.error, {
					position: 'top-right',
					duration: 2000,
				})
			}
		} finally {
			setLoading(false)
		}
	})

	return { loading, login, redirectUrl, isAuthenticated, control }
}
