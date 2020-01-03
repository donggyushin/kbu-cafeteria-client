import React from 'react'
import styled from 'styled-components'

interface IProps {
    year: number
    month: number
    rightArrowClicked: () => void
    leftArrowClicked: () => void
}

const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
`

const Year = styled.div`
    font-size: 34px;
    margin-bottom: 19px;
`

const Row = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
`

const LeftArrow = styled.i`
    font-weight: 900;
    font-size: 22px;
    padding: 15px;
`

const RightArrow = styled.i`
    font-weight: 900;
    font-size: 22px;
    padding: 15px;
`

const Month = styled.div`
    font-size: 33px;
    margin-right: 17px;
    margin-left: 17px;
`

const Presenter: React.FC<IProps> = ({
    year,
    month,
    rightArrowClicked,
    leftArrowClicked
}) => {
    return <Container>
        <Year>{year}</Year>
        <Row>
            <LeftArrow
                className={'fas fa-chevron-left'}
                onClick={leftArrowClicked}
            />
            <Month>{month + 1}</Month>
            <RightArrow
                className={'fas fa-chevron-right'}
                onClick={rightArrowClicked}
            />
        </Row>
    </Container>
}

export default Presenter