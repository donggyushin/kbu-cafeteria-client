import React from 'react'
import styled from 'styled-components'
import Form from './Form'

interface IProps {
    email: string
    password: string
    handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void
    loginButtonClicked: () => void
}

const Container = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    padding-top:200px;
`

const Presenter: React.FC<IProps> = ({
    email,
    password,
    handleInput,
    loginButtonClicked
}) => {
    return <Container>
        <Form
            email={email}
            password={password}
            handleInput={handleInput}
            loginButtonClicked={loginButtonClicked}
        />
    </Container>
}

export default Presenter