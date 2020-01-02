import React from 'react'
import styled from 'styled-components'

interface IProps {
    year: number
    month: number
    day: number
    xbuttonClicked: () => void
}

const Container = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    position: relative;   
    height: 70px;
    width:100%;
`
const Text = styled.div`
    font-size:20px;
`

const XButtonContainer = styled.div`
    position: absolute;
    right:0;
    padding: 20px;
`

const XButton = styled.i``

const Presenter: React.FC<IProps> = ({
    year,
    month,
    day,
    xbuttonClicked
}) => {
    return <Container>
        <Text>{year}년 {month + 1}월 {day}일</Text>
        <XButtonContainer onClick={xbuttonClicked}>
            <XButton className={'fas fa-times'} />
        </XButtonContainer>
    </Container>
}

export default Presenter