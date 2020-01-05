import React from 'react'
import Presenter from './presenter'
import { RouteComponentProps, withRouter } from 'react-router'
import axios from 'axios'
import { KBU_CAFETERIA_SERVER } from '../../../consts'

interface IUrlParams {
    date1: string
    date2: string
}

interface IState {
    date1: string
    date2: string
}

class Container extends React.Component<RouteComponentProps<IUrlParams>> {

    state: IState = {
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

        // 테스트입니다.
        axios.get(`${KBU_CAFETERIA_SERVER}menu/menus/${date1}/${date2}`)
            .then(res => res.data)
            .then(data => {
                console.log('data: ', data)
            })
            .catch(err => console.error(err))

    }

    render() {
        return <Presenter />
    }
}

export default withRouter(Container)