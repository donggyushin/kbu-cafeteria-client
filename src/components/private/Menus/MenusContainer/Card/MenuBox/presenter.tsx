import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import Menu from './Menu'

interface IProps {
    menus: string[]
    name: string
    height: number
}

interface IContainer {
    height: number
}

const Container = styled.div`
    border-bottom:1px solid #dcdde1;
    height:${(props: IContainer) => `${props.height}px`};
`

const Presenter: React.FC<IProps> = ({
    menus,
    name,
    height
}) => {
    return <Container
        height={height}
    >
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