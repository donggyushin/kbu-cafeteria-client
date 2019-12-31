export interface IDinner {
    menus: string[]
}

export interface ILunch {
    menus: string[]
}

export interface IMenu {
    day: number
    lunch: ILunch
    dinner: IDinner
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
    user: IUser,
    loading: ILoading
    menus: IMenu[]
}