import React from 'react'
import styled from 'styled-components'
import Navigation from './Navigation'
import CalendarHeader from './Header'
import CellContainer from './CellContainer'
import { IMenu } from '../../../types'
import Form from './Form'
import GlobalNavigationBar from '../../global/GlobalNavigation'

interface IProps {
    year: number
    month: number
    offdays: number
    menuObjects: IMenu[]
    onClickCell: (id: string) => void
    form: boolean
    selectedCell: IMenu
    loading: boolean
    xbuttonClicked: () => void
    addNewMenu: (event: React.KeyboardEvent<HTMLDivElement>, name: string) => void
    newLunch: string
    newDinner: string
    handleNewMenuInput: (event: React.ChangeEvent<HTMLInputElement>) => void
    deleteMenu: (name: string, index: number) => void
    submitButtonClicked: () => void
    rightArrowClicked: () => void
    leftArrowClicked: () => void
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
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    padding-top:29px;
`

const Presenter: React.FC<IProps> = ({
    year,
    month,
    offdays,
    menuObjects,
    onClickCell,
    form,
    selectedCell,
    loading,
    xbuttonClicked,
    addNewMenu,
    newDinner,
    newLunch,
    handleNewMenuInput,
    deleteMenu,
    submitButtonClicked,
    rightArrowClicked,
    leftArrowClicked,
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
        <GlobalNavigationBar
            background={'#273c75'}
        />
        <Navigation
            year={year}
            month={month}
            rightArrowClicked={rightArrowClicked}
            leftArrowClicked={leftArrowClicked}
        />
        <CalendarHeader
        />
        {loading === false && <CellContainer
            offdays={offdays}
            menuObjects={menuObjects}
            onClickCell={onClickCell}
        />}

        {form && <Form
            selectedCell={selectedCell}
            xbuttonClicked={xbuttonClicked}
            addNewMenu={addNewMenu}
            newDinner={newDinner}
            newLunch={newLunch}
            handleNewMenuInput={handleNewMenuInput}
            deleteMenu={deleteMenu}
            submitButtonClicked={submitButtonClicked}
            newDaily={newDaily}
            newFix={newFix}
            handlePrice={handlePrice}
            dailyPrice={dailyPrice}
            fixPrice={fixPrice}
            dailyPriceInputEnterPressed={dailyPriceInputEnterPressed}
            dailyPriceXButtonTapped={dailyPriceXButtonTapped}
            fixPriceInputEnterPressed={fixPriceInputEnterPressed}
            fixPriceXButtonTapped={fixPriceXButtonTapped}
        />}
    </Container>
}

export default Presenter;