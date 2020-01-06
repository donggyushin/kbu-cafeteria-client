import React from 'react'
import styled from 'styled-components'

interface IProps {
    text: string
}

const Container = styled.div`
    display:flex;
    align-items:center;
    margin-left:8px;
    margin-top:4px;
    margin-bottom:4px;
`
const Circle = styled.div`
    width:5px;
    height:5px;
    border-radius:50%;
    background:#273c75;
    margin-right:4px;
`

const Presenter: React.FC<IProps> = ({
    text
}) => {
    return <Container>
        <Circle />
        {text}
    </Container>
}

export default Presenter