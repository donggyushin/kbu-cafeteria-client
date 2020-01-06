import React from 'react'
import styled from 'styled-components'
import { IMenu } from '../../../../../types'
import Form from './Form'
import List from './List'
import DailyMenuForm from './DailyMenuFormContainer'
import FixMenuForm from './FixMenuForm'

interface IProps {
    menu: IMenu
    addNewMenu: (event: React.KeyboardEvent<HTMLDivElement>, name: string) => void
    newLunch: string
    newDinner: string
    handleNewMenuInput: (event: React.ChangeEvent<HTMLInputElement>) => void
    deleteMenu: (name: string, index: number) => void
    newDaily: string
    newFix: string
}

const Container = styled.div`
    width:80%;
    display:flex;
    flex-direction:column;
`

const ListContainer = styled.div`
    display:flex;
`

const Presenter: React.FC<IProps> = ({
    menu,
    addNewMenu,
    newLunch,
    newDinner,
    handleNewMenuInput,
    deleteMenu,
    newDaily,
    newFix
}) => {
    return <Container>
        <Form
            addNewMenu={addNewMenu}
            newLunch={newLunch}
            newDinner={newDinner}
            handleNewMenuInput={handleNewMenuInput}
        />
        <ListContainer>
            <List
                menus={menu.lunch.menus}
                deleteMenu={deleteMenu}
                name={'lunch'}
            />
            <List menus={menu.dinner.menus}
                deleteMenu={deleteMenu}
                name={'dinner'}
            />
        </ListContainer>
        <ListContainer>
            <DailyMenuForm
                addNewMenu={addNewMenu}
                newDaily={newDaily}
                handleNewMenuInput={handleNewMenuInput}
                dailyMenus={menu.daily.menus}
            />
            <FixMenuForm
                addNewMenu={addNewMenu}
                newFix={newFix}
                fixMenus={menu.fix.menus}
                handleNewMenuInput={handleNewMenuInput}
            />
        </ListContainer>
    </Container>
}

export default Presenter