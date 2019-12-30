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
}