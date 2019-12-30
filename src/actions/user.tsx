import { Dispatch } from "react";
import { IUser } from "../types";
import axios from 'axios'
import { KBU_CAFETERIA_SERVER } from "../consts";
import { USER_LOGIN, TURN_ON_LOADING, TURN_DOWN_LOADING, USER_LOGOUT } from "./types";
import { turnOnLoading, turnDownLoading } from "./loading";

interface IDispatch {
    type: string
    user?: IUser
    token?: string
}

interface ILoginResponse {

    ok: boolean
    error: string
    token: string
    user: IUser

}

export const userLogout = () => (dispatch: Dispatch<IDispatch>) => {
    dispatch({
        type: USER_LOGOUT
    })
}

export const userLogin = (email: string, password: string) => (dispatch: Dispatch<IDispatch>) => {
    dispatch({
        type: TURN_ON_LOADING
    })

    axios.post(`${KBU_CAFETERIA_SERVER}user/login`, {
        email,
        password
    })
        .then(res => res.data)
        .then((data: ILoginResponse) => {
            const {
                ok,
                error,
                token,
                user
            } = data
            console.log('user:', user)
            if (ok) {

                dispatch({
                    type: USER_LOGIN,
                    user,
                    token
                })

            } else {

                alert(error)

            }
        })
        .catch(err => {

            console.error(err)
            alert(err.message)

        })


    dispatch({
        type: TURN_DOWN_LOADING
    })
}