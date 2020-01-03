import React from 'react'
import styled from 'styled-components'
import { Button } from '@material-ui/core'

interface IProps {
    menus: string[]
    deleteMenu: (name: string, index: number) => void
    name: string
}

const Container = styled.div`
    width:50%;
    display:flex;
    flex-direction:column;
`

const ButtonContainer = styled.div`
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
    ${ButtonContainer}:hover &{
        opacity:1;
    }
`


const Presenter: React.FC<IProps> = ({
    menus,
    deleteMenu,
    name
}) => {
    return <Container>
        {menus.map((menu, i) => <ButtonContainer>
            <Button key={i} variant="contained" color="primary">
                {menu}
            </Button>
            <XButton onClick={() => deleteMenu(name, i)} className={'fas fa-times'} />
        </ButtonContainer>)}
    </Container>
}

export default Presenter