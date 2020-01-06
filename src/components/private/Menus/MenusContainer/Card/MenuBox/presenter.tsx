import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import Menu from './Menu'

interface IProps {
    menus: string[]
    name: string
}

const Container = styled.div``

const Presenter: React.FC<IProps> = ({
    menus,
    name
}) => {
    return <Container>
        <Header
            name={name}
        />
        {menus.map((menu, i) => {
            return <Menu
                key={i}
                text={menu}
            />
        })}
    </Container>
}

export default Presenter