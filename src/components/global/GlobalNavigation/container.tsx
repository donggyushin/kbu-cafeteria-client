import React from 'react'
import Presenter from './presenter'

interface IProps {
    background: string
}

class Container extends React.Component<IProps> {
    render() {
        const {
            background
        } = this.props;
        return <Presenter
            background={background}
        />
    }
}

export default Container