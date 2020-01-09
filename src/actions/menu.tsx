import { IMenu } from "../types";
import { Dispatch } from "react";
import axios from 'axios'
import { KBU_CAFETERIA_SERVER } from "../consts";
import { TURN_ON_LOADING, FETCH_MENUS, TURN_DOWN_LOADING, PUT_NEW_MENU } from "./types";

interface IPutNewMenuDispatch {
    type: string
    menu?: IMenu
}

interface IPutNewMenuResponse {
    ok: boolean
    error: string
    menu: IMenu
}

export const putNewMenu = (menu: IMenu) => (dispatch: Dispatch<IPutNewMenuDispatch>) => {
    dispatch({
        type: TURN_ON_LOADING
    })
    axios.put(`${KBU_CAFETERIA_SERVER}menu`, {
        menu
    }, {
        headers: {
            'authentication': localStorage.getItem('tk')
        }
    })
        .then(res => res.data)
        .then((data: IPutNewMenuResponse) => {
            const { ok, error, menu } = data
            if (ok) {
                dispatch({
                    type: PUT_NEW_MENU,
                    menu
                })
            } else {
                console.error(`Error occured at [${__dirname}]: ${error}`)
                alert(error)
                window.location.href = '/'
            }
        })
        .catch(err => {
            console.error(`Error occured at [${__dirname}]: ${err}`)
            alert(err.message)
            window.location.href = '/'
        })
    dispatch({
        type: TURN_DOWN_LOADING
    })
}



interface IFetchMenusDispatch {
    type: string
    menus: IMenu[]

}

interface IFetchMenusResponseData {
    ok: boolean
    error: string
    menus: IMenu[]
}

export const fetchMenus = (year: number, month: number) => (dispatch: Dispatch<IFetchMenusDispatch>) => {
    dispatch({
        type: TURN_ON_LOADING,
        menus: []
    })
    axios.get(`${KBU_CAFETERIA_SERVER}menu/${year}/${month}`, {
        headers: {
            'authentication': localStorage.getItem('tk')
        }
    })
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
                alert(`${year}년 ${month + 1}월 메뉴들을 요청하던 도중에 에러가 발생하였습니다.`)
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