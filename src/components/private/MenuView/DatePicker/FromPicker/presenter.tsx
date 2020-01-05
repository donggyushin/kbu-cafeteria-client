import React from 'react'
import styled from 'styled-components'
import DatePicker from 'react-datepicker'


interface IProps {
    handleFromDateChange: (date: Date) => void
    fromDate: Date
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
    handleFromDateChange,
    fromDate
}) => {
    return <Container>
        <Text>
            FROM
        </Text>
        <DatePicker
            selected={fromDate}
            onChange={handleFromDateChange}
        />
    </Container>
}

export default Presenter