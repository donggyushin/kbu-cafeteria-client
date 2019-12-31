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
    onClickCell: (day: number) => void
    form: boolean
    selectedCell: IMenu
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
    selectedCell
}) => {
    return <Container>
        <Navigation
            year={year}
            month={month}
        />
        <CalendarHeader
        />
        <CellContainer
            offdays={offdays}
            menuObjects={menuObjects}
            onClickCell={onClickCell}
        />
        {form && <Form
            selectedCell={selectedCell}
        />}
    </Container>
}

export default Presenter;