import React from 'react'
import Presenter from './presenter'

interface IProps {
    logoutButtonClicked: () => void
}

class Container extends React.Component<IProps> {
    render() {
        const { logoutButtonClicked } = this.props;
        return <Presenter
            logoutButtonClicked={logoutButtonClicked}
        />
    }
}

export default Container