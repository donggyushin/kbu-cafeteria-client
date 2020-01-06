import { IMenu, IMenuReducerProps } from '../types'
import { FETCH_MENU_BOARDS } from '../actions/types'

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

        case FETCH_MENU_BOARDS:
            return fetchMenuboardsReducer(state, action)

        default:
            return state
    }
}

function fetchMenuboardsReducer(state: IMenuReducerProps, action: IAction): IMenuReducerProps {
    const {
        menus
    } = action
    return {
        ...state,
        menus,
        loading: false
    }
}