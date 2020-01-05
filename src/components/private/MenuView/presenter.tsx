import React from 'react'
import styled from 'styled-components'
import DatePicker from './DatePicker'

interface IProps {
    handleFromDateChange: (date: Date) => void
    handleToDateChange: (date: Date) => void
    fromDate: Date
    toDate: Date
    nextButtonClicked: () => void
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
    toDate,
    nextButtonClicked
}) => {
    return <Container>
        <DatePicker
            handleFromDateChange={handleFromDateChange}
            handleToDateChange={handleToDateChange}
            fromDate={fromDate}
            toDate={toDate}
            nextButtonClicked={nextButtonClicked}
        />
    </Container>
}

export default Presenter