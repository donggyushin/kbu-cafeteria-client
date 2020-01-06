import React from 'react'
import Presenter from './presenter'
import { RouteComponentProps, withRouter } from 'react-router'
import { connect } from 'react-redux'
import { IState, IMenu } from '../../../types'
import { fetchMenuBoards } from '../../../actions/menuBoard'

interface IUrlParams {
    date1: string
    date2: string
}

interface IStateProps {
    date1: string
    date2: string
}

interface IProps {
    fetchMenuBoards: (date1: string, date2: string) => void
    loading: boolean
    menus: IMenu[]
}

class Container extends React.Component<RouteComponentProps<IUrlParams> & IProps> {

    state: IStateProps = {
        date1: "",
        date2: ""
    }

    componentDidMount() {
        const {
            date1,
            date2
        } = this.props.match.params
        this.setState({
            date1,
            date2
        })

        this.props.fetchMenuBoards(date1, date2)

    }

    render() {
        const {
            loading,
            menus
        } = this.props
        return <Presenter
            loading={loading}
            menus={menus}
        />
    }
}

const mapStateToProps = (state: IState) => {
    return {
        loading: state.menuBoard.loading,
        menus: state.menuBoard.menus
    }
}

export default connect(mapStateToProps, {
    fetchMenuBoards
})(withRouter(Container))