import React from 'react';
import styled from 'styled-components'
import FromPicker from './FromPicker';
import ToPicker from './ToPicker';
import NextButton from './Button';
import GlobalNavigationBar from '../../../global/GlobalNavigation';

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

const UpperContainer = styled.div`
    width:100%;
    height:425px;
    background:#216ba5;
    color:white;
    display:flex;
    flex-direction:column;
    align-items:center;
    padding-top:50px;
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
    margin-top: 80px;
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
    handleToDateChange,
    nextButtonClicked
}) => {
    // The first commit of Material-UI

    return <Container>

        <UpperContainer>
            <GlobalNavigationBar
                background={'white'}
            />
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
            <NextButton
                nextButtonClicked={nextButtonClicked}
            />
        </LowerContainer>


    </Container>
}


export default Presenter;