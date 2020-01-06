import { Dispatch } from "react";
import { IMenu } from "../types";
import { KBU_CAFETERIA_SERVER } from '../consts'
import axios from 'axios'
import { FETCH_MENU_BOARDS } from './types'


interface IDispatch {
    type: string
    menus: IMenu[]
}

interface IfetchMenuBoardsResponse {
    ok: boolean
    error: string
    menus: IMenu[]
}

export const fetchMenuBoards = (date1: string, date2: string) => (dispatch: Dispatch<IDispatch>) => {
    axios.get(`${KBU_CAFETERIA_SERVER}menu/menus/${date1}/${date2}`)
        .then(res => res.data)
        .then(data => {
            const {
                ok,
                error,
                menus
            }: IfetchMenuBoardsResponse = data
            console.log(`Data from KBU CAFETERIA SERVER: ${data}`)
            if (ok) {
                dispatch({
                    type: FETCH_MENU_BOARDS,
                    menus
                })
                return
            } else {
                alert(error)
                window.location.href = '/'
                return
            }
        })
        .catch(err => {
            console.error(err)
            alert(`메뉴판들을 불러오던 도중에 에러가 발생하였습니다. 관리자에게 문의해주세요. 01090411019`)
            window.location.href = '/'
            return
        })
}