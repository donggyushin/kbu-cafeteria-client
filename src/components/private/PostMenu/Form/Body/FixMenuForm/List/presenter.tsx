import React from 'react'
import styled from 'styled-components'
import { Button } from '@material-ui/core'

interface IProps {
    text: string
    name: string
    deleteMenu: (name: string, index: number) => void
    index: number
}

const Container = styled.div`
    display:flex;
    align-items:center;
    margin-bottom:15px;
`

const XButton = styled.i`
    color:black;
    margin-left:20px;
    opacity:0;
    padding:7px;
    cursor:pointer;
    ${Container}:hover & {
        opacity:1;
    }
`

const Presenter: React.FC<IProps> = ({
    text,
    name,
    deleteMenu,
    index
}) => {
    return <Container>
        <Button
            variant="contained"
            color="primary"
        >
            {text}
        </Button>
        <XButton
            className={'fas fa-times'}
            onClick={() => deleteMenu(name, index)}
        />
    </Container>
}

export default Presenter