import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

type User = {
	id: number
	email?: string
	username: string
	password: string
	firstName: string
	lastName: string
	role: string
	token: string
}

const TOKEN =
	'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb2RlcnRoZW1lcyIsImlhdCI6MTU4NzM1NjY0OSwiZXhwIjoxOTAyODg5NDQ5LCJhdWQiOiJjb2RlcnRoZW1lcy5jb20iLCJzdWIiOiJzdXBwb3J0QGNvZGVydGhlbWVzLmNvbSIsImxhc3ROYW1lIjoiVGVzdCIsIkVtYWlsIjoic3VwcG9ydEBjb2RlcnRoZW1lcy5jb20iLCJSb2xlIjoiQWRtaW4iLCJmaXJzdE5hbWUiOiJIeXBlciJ9.P27f7JNBF-vOaJFpkn-upfEh3zSprYfyhTOYhijykdI'

const mock = new MockAdapter(axios, { onNoMatch: 'passthrough' })

export const fakeUsers: User[] = [
	{
		id: 1,
		email: 'admin@mannatthemes.com',
		username: 'admin',
		password: 'password',
		firstName: 'Admin',
		lastName: 'Mannatthemes',
		role: 'Admin',
		token: TOKEN,
	},
]

export default function configureFakeBackend() {
	mock.onPost('/login').reply(function (config) {
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		return new Promise(function (resolve, _reject) {
			setTimeout(function () {
				// get parameters from post request
				const params = JSON.parse(config.data)
				// find if any user matches login credentials
				const filteredUsers = fakeUsers.filter((user) => {
					return (
						user.email === params.email && user.password === params.password
					)
				})

				if (filteredUsers.length) {
					// if login details are valid return user details and fake jwt token
					const user = filteredUsers[0]
					resolve([200, user])
				} else {
					// else return error
					resolve([401, { error: 'Username or password is incorrect' }])
				}
			}, 1000)
		})
	})
}
