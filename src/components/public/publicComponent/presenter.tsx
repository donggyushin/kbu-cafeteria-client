import React from 'react'
import styled from 'styled-components'
import LoginForm from '../LoginForm'

const Container = styled.div`
    width:100%;
`

const Presenter: React.FC = () => {
    return <Container>
        <LoginForm />
    </Container>
}

export default Presenter