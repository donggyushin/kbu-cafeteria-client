import React from 'react'
import styled from 'styled-components'
import Navigation from './Navigation'
import CalendarHeader from './Header'
import CellContainer from './CellContainer'
import { IMenu } from '../../../types'
import Form from './Form'

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
    addNewMenu: (event: React.KeyboardEvent<HTMLInputElement>, name: string) => void
    newLunch: string
    newDinner: string
    handleNewMenuInput: (event: React.ChangeEvent<HTMLInputElement>) => void
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
    handleNewMenuInput
}) => {
    return <Container>
        <Navigation
            year={year}
            month={month}
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
        />}
    </Container>
}

export default Presenter;