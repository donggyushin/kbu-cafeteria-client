import React from 'react'
import styled from 'styled-components'
import DatePicker from 'react-datepicker'

interface IProps {
    handleToDateChange: (date: Date) => void
    toDate: Date
}

const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
`
const Text = styled.div`
    margin-bottom: 10px;
`

const Presenter: React.FC<IProps> = ({
    handleToDateChange,
    toDate
}) => {
    return <Container>
        <Text>
            TO
        </Text>
        <DatePicker
            selected={toDate}
            onChange={handleToDateChange}
        />
    </Container>
}


export default Presenter