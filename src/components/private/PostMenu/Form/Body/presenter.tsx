import React from 'react'
import styled from 'styled-components'
import { IMenu } from '../../../../../types'
import Form from './Form'
import List from './List'

interface IProps {
    menu: IMenu
    addNewMenu: (event: React.KeyboardEvent<HTMLDivElement>, name: string) => void
    newLunch: string
    newDinner: string
    handleNewMenuInput: (event: React.ChangeEvent<HTMLInputElement>) => void
    deleteMenu: (name: string, index: number) => void
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
    deleteMenu
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
    </Container>
}

export default Presenter