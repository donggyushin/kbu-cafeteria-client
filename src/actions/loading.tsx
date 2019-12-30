import { Dispatch } from "react"
import { TURN_ON_LOADING, TURN_DOWN_LOADING } from "./types"

interface IDispatch {
    type: string
}



export const turnOnLoading = () => (dispatch: Dispatch<IDispatch>) => {
    console.log('turnOnLoading')
    dispatch({
        type: TURN_ON_LOADING
    })
}

export const turnDownLoading = () => (dispatch: Dispatch<IDispatch>) => {
    dispatch({
        type: TURN_DOWN_LOADING
    })
}