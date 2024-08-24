import React, { createContext, useContext, useState } from 'react'

// Define types
type LayoutType = {
	updateSideNavMode: (newSideNavMode: LayoutSideNavMode) => void
	settings: LayoutState
}

type LayoutState = {
	sideNavMode: LayoutSideNavMode
}

type LayoutSideNavMode = 'default' | 'sm'

// Create context
const ThemeContext = createContext<LayoutType | undefined>(undefined)

// Custom hook to access context
export function useThemeContext() {
	const context = useContext(ThemeContext)
	if (context === undefined) {
		throw new Error('useThemeContext must be used within a ThemeProvider')
	}
	return context
}

// ThemeProvider component
export function ThemeProvider({ children }: { children: React.ReactNode }) {
	const INIT_STATE: LayoutState = {
		sideNavMode: 'default',
	}

	const [settings, setSettings] = useState<LayoutState>(INIT_STATE)

	const updateSettings = (_newSettings: Partial<LayoutType['settings']>) => {
		setSettings({ ...settings, ..._newSettings })
	}

	const updateSideNavMode = (newSideNavMode: LayoutSideNavMode) => {
		if (newSideNavMode === 'default') {
			document.body.classList.contains('enlarge-menu') &&
				document.body.classList.remove('enlarge-menu')
		} else if (newSideNavMode === 'sm') {
			!document.body.classList.contains('enlarge-menu') &&
				document.body.classList.add('enlarge-menu')
		}
		updateSettings({ ...settings, sideNavMode: newSideNavMode })
	}

	return (
		<ThemeContext.Provider
			value={{
				updateSideNavMode,
				settings,
			}}
		>
			{children}
		</ThemeContext.Provider>
	)
}
