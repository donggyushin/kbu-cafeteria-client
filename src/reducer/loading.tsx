import { ILoading } from "../types"
import { TURN_ON_LOADING, TURN_DOWN_LOADING } from "../actions/types"

interface IAction {
    type: string
}

const initialState: ILoading = {
    loading: false
}

export default function (state = initialState, action: IAction) {
    switch (action.type) {

        case TURN_ON_LOADING:
            return turnOnLoadingReducer(state, action)

        case TURN_DOWN_LOADING:
            return turnDownLoadingReducer(state, action)

        default:
            return state
    }
}

const turnDownLoadingReducer = (state: ILoading, action: IAction): ILoading => {
    return {
        ...state,
        loading: false
    }
}

const turnOnLoadingReducer = (state: ILoading, action: IAction): ILoading => {
    console.log('asd')
    return {
        ...state,
        loading: true
    }
}