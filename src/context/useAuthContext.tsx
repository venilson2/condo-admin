import { AuthContextType, User } from '@/types'
import { deleteCookie, hasCookie, setCookie } from 'cookies-next'
import { createContext, useContext, useState, ReactNode } from 'react'

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function useAuthContext() {
	const context = useContext(AuthContext)
	if (context === undefined) {
		throw new Error('useAuthContext must be used within an AuthProvider')
	}
	return context
}

const authSessionKey = '_DASTONE_AUTH_'

export function AuthProvider({ children }: { children: ReactNode }) {
	const [user, setUser] = useState<User | undefined>(undefined)

	const saveSession = (user: User) => {
		setCookie(authSessionKey, JSON.stringify(user))
		setUser(user)
	}

	const removeSession = () => {
		deleteCookie(authSessionKey)
		setUser(undefined)
	}

	return (
		<AuthContext.Provider
			value={{
				user,
				isAuthenticated: hasCookie(authSessionKey),
				saveSession,
				removeSession,
			}}
		>
			{children}
		</AuthContext.Provider>
	)
}
