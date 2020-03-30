import React from 'react'
import styled from 'styled-components'
import { IMenu } from '../../../../types'
import FormHeader from './Header'
import FormBody from './Body'
import { Button } from '@material-ui/core'

interface IProps {
    selectedCell: IMenu
    xbuttonClicked: () => void
    addNewMenu: (event: React.KeyboardEvent<HTMLDivElement>, name: string) => void
    newLunch: string
    newDinner: string
    handleNewMenuInput: (event: React.ChangeEvent<HTMLInputElement>) => void
    deleteMenu: (name: string, index: number) => void
    submitButtonClicked: () => void
    newDaily: string
    newFix: string
    handlePrice: (event: React.ChangeEvent<HTMLInputElement>) => void
    dailyPrice: number
    fixPrice: number
    dailyPriceInputEnterPressed: (event: React.KeyboardEvent<HTMLInputElement>) => void
    dailyPriceXButtonTapped: (index: number) => void
    fixPriceInputEnterPressed: (event: React.KeyboardEvent<HTMLInputElement>) => void
    fixPriceXButtonTapped: (index: number) => void
}

const Container = styled.div`
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background:rgba(225, 225, 225, 0.5);
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
`

const Card = styled.div`
    width:500px;
    height:650px;
    background:white;
    border-radius:7px;
    display:flex;
    flex-direction:column;
    align-items:center;
    position: relative;
    overflow-y:scroll;
    padding-top:20px;
    padding-bottom:20px;
`

const SubmitButtonContainer = styled.div`
    margin-top:20px;
`

const Presenter: React.FC<IProps> = ({
    selectedCell,
    xbuttonClicked,
    addNewMenu,
    newLunch,
    newDinner,
    handleNewMenuInput,
    deleteMenu,
    submitButtonClicked,
    newDaily,
    newFix,
    handlePrice,
    dailyPrice,
    fixPrice,
    dailyPriceInputEnterPressed,
    dailyPriceXButtonTapped,
    fixPriceInputEnterPressed,
    fixPriceXButtonTapped
}) => {
    return <Container>
        <Card>
            <FormHeader
                year={selectedCell.year}
                month={selectedCell.month}
                day={selectedCell.day}
                xbuttonClicked={xbuttonClicked}
            />
            <FormBody
                addNewMenu={addNewMenu}
                menu={selectedCell}
                newLunch={newLunch}
                newDinner={newDinner}
                handleNewMenuInput={handleNewMenuInput}
                deleteMenu={deleteMenu}
                newDaily={newDaily}
                newFix={newFix}
                handlePrice={handlePrice}
                dailyPrice={dailyPrice}
                fixPrice={fixPrice}
                dailyPriceInputEnterPressed={dailyPriceInputEnterPressed}
                dailyPriceXButtonTapped={dailyPriceXButtonTapped}
                fixPriceInputEnterPressed={fixPriceInputEnterPressed}
                fixPriceXButtonTapped={fixPriceXButtonTapped}
            />
            <SubmitButtonContainer>
                <Button
                    onClick={submitButtonClicked}
                    variant="outlined"
                    color="secondary"
                >
                    제출하기
            </Button>
            </SubmitButtonContainer>
        </Card>
    </Container>
}

export default Presenter