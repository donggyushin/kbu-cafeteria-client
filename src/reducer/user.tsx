import { IUser } from "../types"

interface IAction {
    type: string
}


const initialState = {
    isLoggedIn: localStorage.getItem('tk') ? true : false
}

export default function (state: IUser = initialState, action: IAction) {
    switch (action.type) {
        default:
            return state
    }
}