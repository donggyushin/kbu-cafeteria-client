import React from 'react'
import styled from 'styled-components'
import { IMenu } from '../../../../../types'

interface IProps {
    menu: IMenu
}

const Container = styled.div`
    background:white;
    margin-right:15px;
    margin-left:15px;
    width:250px;
    height:500px;
    border-radius:4px;
    box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);
`

const Presenter: React.FC<IProps> = ({
    menu
}) => {
    return <Container>
        Card
    </Container>
}

export default Presenter