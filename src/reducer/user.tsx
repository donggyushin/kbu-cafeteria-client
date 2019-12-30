import { IUser } from "../types"
import { USER_LOGIN, USER_LOGOUT } from "../actions/types"

interface IAction {
    type: string,
    user: IUser,
    token: string
}


const initialState: IUser = {
    isLoggedIn: localStorage.getItem('tk') ? true : false,
    email: "",
    name: "",
    phone: ""
}

export default function (state: IUser = initialState, action: IAction) {
    switch (action.type) {
        case USER_LOGIN:
            return userLoginReducer(state, action)
        case USER_LOGOUT:
            return userLogoutReducer(state, action)
        default:
            return state
    }
}

const userLogoutReducer = (state: IUser, action: IAction): IUser => {
    window.localStorage.removeItem('tk')
    return {
        ...state,
        isLoggedIn: false,
        email: "",
        name: "",
        phone: ""
    }
}

const userLoginReducer = (state: IUser, action: IAction): IUser => {
    const {
        user,
        token
    } = action
    const {
        email,
        name,
        phone
    } = user
    window.localStorage.setItem('tk', token)
    return {
        ...state,
        isLoggedIn: true,
        email,
        name,
        phone
    }
}