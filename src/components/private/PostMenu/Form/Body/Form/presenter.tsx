import React from 'react'
import styled from 'styled-components'

interface IProps {
    addNewMenu: (event: React.KeyboardEvent<HTMLInputElement>, name: string) => void
    newLunch: string
    newDinner: string
    handleNewMenuInput: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Container = styled.div`
    display:flex;
`

const Input = styled.input`
    width:50%;
`

const Presenter: React.FC<IProps> = ({
    addNewMenu,
    newLunch,
    newDinner,
    handleNewMenuInput
}) => {
    return <Container>
        <Input onChange={handleNewMenuInput} onKeyDown={e => {
            addNewMenu(e, 'newLunch')
        }} value={newLunch} name={'newLunch'} />
        <Input onChange={handleNewMenuInput}
            onKeyDown={e => {
                addNewMenu(e, 'newDinner')
            }}
            value={newDinner} name={'newDinner'} />
    </Container>
}

export default Presenter