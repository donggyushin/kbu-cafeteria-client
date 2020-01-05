import React from 'react'
import Presenter from './presenter'


interface IState {
    fromDate: Date
    toDate: Date
}

class Container extends React.Component {

    state: IState = {
        fromDate: new Date(),
        toDate: new Date()
    }

    componentDidMount() {
        const { toDate } = this.state
        toDate.setDate(toDate.getDate() + 1)
        this.setState({
            toDate
        })
    }


    render() {
        const {
            handleFromDateChange,
            handleToDateChange
        } = this

        const {
            fromDate,
            toDate
        } = this.state
        return <Presenter
            handleFromDateChange={handleFromDateChange}
            handleToDateChange={handleToDateChange}
            fromDate={fromDate}
            toDate={toDate}
        />
    }

    handleFromDateChange = (date: Date) => {
        this.setState({
            fromDate: date
        })
    }

    handleToDateChange = (date: Date) => {
        this.setState({
            toDate: date
        })
    }
}

export default Container