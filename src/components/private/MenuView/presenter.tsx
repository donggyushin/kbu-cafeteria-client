import React from 'react'
import styled from 'styled-components'
import DatePicker from './DatePicker'

interface IProps {
    handleFromDateChange: (date: Date) => void
    handleToDateChange: (date: Date) => void
    fromDate: Date
    toDate: Date
}

const Container = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
`

const Presenter: React.FC<IProps> = ({
    handleFromDateChange,
    handleToDateChange,
    fromDate,
    toDate
}) => {
    return <Container>
        <DatePicker
            handleFromDateChange={handleFromDateChange}
            handleToDateChange={handleToDateChange}
            fromDate={fromDate}
            toDate={toDate}
        />
    </Container>
}

export default Presenter