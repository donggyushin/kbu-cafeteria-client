import { IMenu, IMenuReducerProps } from "../types";
import { FETCH_MENUS } from "../actions/types";

interface IAction {
    type: string
    menus: IMenu[]
}

const initialState: IMenuReducerProps = {
    menus: [],
    loading: true
}

export default function (state: IMenuReducerProps = initialState, action: IAction) {
    switch (action.type) {
        case FETCH_MENUS:
            return getMenus(state, action)
        default:
            return state
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