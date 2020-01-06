export interface IDinner {
    _id: string
    menus: string[]
}

export interface IFix {
    _id: string
    menus: string[]
}

export interface IDaily {
    _id: string
    menus: string[]
}

export interface ILunch {
    _id: string
    menus: string[]
}

export interface IMenu {
    _id: string
    year: number
    month: number
    day: number
    lunch: ILunch
    dinner: IDinner
    fix: IFix
    daily: IDaily
}

export interface IMenuReducerProps {
    menus: IMenu[]
    loading: boolean
}

export interface IUser {
    isLoggedIn: boolean
    email: string
    name: string
    phone: string
}

export interface ILoading {
    loading: boolean
}

export interface IState {
    user: IUser
    loading: ILoading
    menu: IMenuReducerProps
    menuBoard: IMenuReducerProps
}