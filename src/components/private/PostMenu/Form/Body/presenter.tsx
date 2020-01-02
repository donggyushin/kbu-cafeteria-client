import React from 'react'
import styled from 'styled-components'
import BodyHeader from './Header'
import { IMenu } from '../../../../../types'
import Form from './Form'
import List from './List'

interface IProps {
    menu: IMenu
    addNewMenu: (event: React.KeyboardEvent<HTMLInputElement>, name: string) => void
    newLunch: string
    newDinner: string
    handleNewMenuInput: (event: React.ChangeEvent<HTMLInputElement>) => void
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
    handleNewMenuInput
}) => {
    return <Container>
        <BodyHeader />
        <Form
            addNewMenu={addNewMenu}
            newLunch={newLunch}
            newDinner={newDinner}
            handleNewMenuInput={handleNewMenuInput}
        />
        <ListContainer>
            <List menus={menu.lunch.menus} />
            <List menus={menu.dinner.menus} />
        </ListContainer>
    </Container>
}

export default Presenter