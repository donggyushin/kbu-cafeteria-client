import React from 'react'
import styled from 'styled-components'
import { IMenu } from '../../../../types'

interface IProps {
    selectedCell: IMenu
}

const Container = styled.div`
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background:rgba(225, 225, 225, 0.5);
    display:flex;
    justify-content:center;
    align-items:center;

`

const Card = styled.div`
    width:500px;
    height:500px;
    background:white;
    border-radius:7px;
`

const Presenter: React.FC<IProps> = ({
    selectedCell
}) => {
    console.log(selectedCell)
    return <Container>
        <Card>
            Form
        </Card>
    </Container>
}

export default Presenter