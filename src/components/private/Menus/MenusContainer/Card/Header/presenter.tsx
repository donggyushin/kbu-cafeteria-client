import React from 'react'
import styled from 'styled-components'
import { getDayNameFromYearMonthDay } from '../../../../../../utils'

interface IProps {
    year: number
    month: number
    day: number
}

const Container = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    padding-top:5px;
    padding-bottom:5px;
    border-bottom:1px solid #dcdde1;
`

const Presenter: React.FC<IProps> = ({
    year,
    month,
    day
}) => {
    const dayOfWeek = getDayNameFromYearMonthDay(year, month, day)
    return <Container>
        {month + 1}월 {day}일 {dayOfWeek}
    </Container>
}

export default Presenter;