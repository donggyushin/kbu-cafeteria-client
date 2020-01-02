import React from 'react'
import styled from 'styled-components'
import { IMenu } from '../../../../types'
import FormHeader from './Header'
import FormBody from './Body'

interface IProps {
    selectedCell: IMenu
    xbuttonClicked: () => void
    addNewMenu: (event: React.KeyboardEvent<HTMLInputElement>, name: string) => void
    newLunch: string
    newDinner: string
    handleNewMenuInput: (event: React.ChangeEvent<HTMLInputElement>) => void
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
    height:500px;
    background:white;
    border-radius:7px;
    display:flex;
    flex-direction:column;
    align-items:center;
`

const Presenter: React.FC<IProps> = ({
    selectedCell,
    xbuttonClicked,
    addNewMenu,
    newLunch,
    newDinner,
    handleNewMenuInput
}) => {
    console.log(selectedCell)
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
            />
        </Card>
    </Container>
}

export default Presenter