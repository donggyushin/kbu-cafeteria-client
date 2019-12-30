import React from 'react'
import Presenter from './presenter'
import { connect } from 'react-redux'
import { IState } from '../../../types'
import { userLogin } from '../../../actions/user'

interface IProps {
    userLogin: (email: string, password: string) => void
}

class Container extends React.Component<IProps> {

    state = {
        email: "",
        password: ""
    }

    render() {
        const {
            email,
            password
        } = this.state
        const {
            handleInput,
            loginButtonClicked
        } = this
        return <Presenter
            email={email}
            password={password}
            handleInput={handleInput}
            loginButtonClicked={loginButtonClicked}
        />
    }

    loginButtonClicked = () => {
        const { email, password } = this.state;
        const { userLogin } = this.props;
        userLogin(email, password)
    }

    handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


}

const mapStateToProps = (state: IState) => {
    return {}
}

export default connect(mapStateToProps, {
    userLogin
})(Container)