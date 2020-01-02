import { IMenu } from "../types";
import { Dispatch } from "react";
import axios from 'axios'
import { KBU_CAFETERIA_SERVER } from "../consts";
import { TURN_ON_LOADING, FETCH_MENUS, TURN_DOWN_LOADING } from "./types";

interface IDispatch {
    type: string
    menus: IMenu[]
}

interface IFetchMenusResponseData {
    ok: boolean
    error: string
    menus: IMenu[]
}

export const fetchMenus = (year: number, month: number) => (dispatch: Dispatch<IDispatch>) => {
    dispatch({
        type: TURN_ON_LOADING,
        menus: []
    })
    axios.get(`${KBU_CAFETERIA_SERVER}menu/${year}/${month}`)
        .then(res => res.data)
        .then((data: IFetchMenusResponseData) => {
            const { ok, error, menus } = data
            if (ok) {
                dispatch({
                    type: FETCH_MENUS,
                    menus
                })
                dispatch({
                    type: TURN_DOWN_LOADING,
                    menus: []
                })
                return
            } else {
                console.error(`Error occured at [${__dirname}]:${error}`)
                alert(`${year}년 ${month}월 메뉴들을 요청하던 도중에 에러가 발생하였습니다.`)
                window.location.href = '/'
                dispatch({
                    type: TURN_DOWN_LOADING,
                    menus: []
                })
                return
            }
        })
        .catch(err => {
            console.error(err)
            alert(`${year}년 ${month}월 메뉴들을 요청하던 도중에 에러가 발생하였습니다.`)
            window.location.href = '/'
            dispatch({
                type: TURN_DOWN_LOADING,
                menus: []
            })
            return
        })
}