import React from 'react';
import styled from 'styled-components'
import FromPicker from './FromPicker';
import ToPicker from './ToPicker';
import NextButton from './Button';

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

const UpperContainer = styled.div`
    width:100%;
    height:475px;
    background:#216ba5;
    color:white;
    display:flex;
    flex-direction:column;
    align-items:center;
`

const LowerContainer = styled.div`
    width:100%;
    background:white;
    display:flex;
    flex-direction:column;
    align-items:center;
`

const BigText = styled.div`
    font-size: 34px;
    font-weight: 600;
    line-height: 1.2;
    margin-top: 130px;
    margin-bottom: 22px;
`

const PickerContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
`

const Space = styled.div`
    width:100px;
`


const Presenter: React.FC<IProps> = ({
    fromDate,
    toDate,
    handleFromDateChange,
    handleToDateChange
}) => {
    // The first commit of Material-UI

    return <Container>
        <UpperContainer>
            <BigText>
                PICK DATE
        </BigText>
            <PickerContainer>
                <FromPicker
                    fromDate={fromDate}
                    handleFromDateChange={handleFromDateChange}
                />
                <Space />
                <ToPicker
                    toDate={toDate}
                    handleToDateChange={handleToDateChange}
                />
            </PickerContainer>
        </UpperContainer>
        <LowerContainer>
            <NextButton />
        </LowerContainer>


    </Container>
}


export default Presenter;