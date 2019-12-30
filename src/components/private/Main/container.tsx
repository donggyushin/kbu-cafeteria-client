import React from 'react'
import Presenter from './presenter'
import { connect } from 'react-redux'
import { IState } from '../../../types';
import { userLogout } from '../../../actions/user'

interface IProps {
    userLogout: () => void
}

class Container extends React.Component<IProps> {
    render() {
        const { logoutButtonClicked } = this;
        return <Presenter
            logoutButtonClicked={logoutButtonClicked}
        />
    }

    logoutButtonClicked = () => {
        this.props.userLogout()
    }
}

const mapStateToProps = (state: IState) => {
    return {}
}

export default connect(
    mapStateToProps, {
    userLogout
}
)(Container)