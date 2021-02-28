export interface HeaderTypes {
    userId?: string
    title?: string,
    isAuth : boolean
}

export interface UserTypes {
    userId: string
}

export interface TabsTypes {
    currentTab: string
}

export const menuTabs = {
    NEWS: 0,
    EVENTS: 1,
    PROFILE: 2
}
