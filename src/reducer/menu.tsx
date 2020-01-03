import { IMenu, IMenuReducerProps } from "../types";
import { FETCH_MENUS, PUT_NEW_MENU } from "../actions/types";

interface IAction {
    type: string
    menus: IMenu[]
    menu: IMenu
}

const initialState: IMenuReducerProps = {
    menus: [],
    loading: true
}

export default function (state: IMenuReducerProps = initialState, action: IAction) {
    switch (action.type) {
        case FETCH_MENUS:
            return getMenus(state, action)
        case PUT_NEW_MENU:
            return putMenu(state, action)
        default:
            return state
    }
}

const putMenu = (state: IMenuReducerProps, action: IAction): IMenuReducerProps => {
    const { menu } = action;
    const updatedMenus = state.menus.map(object => {
        if (object._id === menu._id) {
            return menu
        } else {
            return object
        }
    })
    return {
        ...state,
        menus: updatedMenus
    }
}

const getMenus = (state: IMenuReducerProps, action: IAction): IMenuReducerProps => {
    const { menus } = action
    return {
        ...state,
        menus,
        loading: false
    }
}