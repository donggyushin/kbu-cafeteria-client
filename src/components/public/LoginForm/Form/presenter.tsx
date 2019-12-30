import React from 'react'
import styled from 'styled-components'
import { TextField, Button } from '@material-ui/core'

interface IProps {
    email: string
    password: string
    handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void
    loginButtonClicked: () => void
}

const Container = styled.div`
    width:500px;
    display:flex;
    flex-direction:column;
    align-items:center;
`

const Presenter: React.FC<IProps> = ({
    email,
    password,
    handleInput,
    loginButtonClicked
}) => {
    return <Container>
        <TextField
            onChange={handleInput}
            value={email}
            name={'email'}
            style={{
                marginBottom: 20
            }} id="outlined-basic" fullWidth={true} label="email" variant="outlined" />
        <TextField
            type={'password'}
            onChange={handleInput}
            value={password}
            name={'password'}
            style={{
                marginBottom: 20
            }} id="outlined-basic" fullWidth={true} label="password" variant="outlined" />
        <Button onClick={loginButtonClicked} color="primary">로그인</Button>
    </Container>
}

export default Presenter