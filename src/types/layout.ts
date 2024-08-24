type LayoutSideNavMode = 'default' | 'sm'

type LayoutState = {
	sideNavMode: LayoutSideNavMode
}

type LayoutType = {
	settings: LayoutState
	updateSideNavMode: (newSidenav: LayoutSideNavMode) => void
}

export type { LayoutSideNavMode, LayoutState, LayoutType }
