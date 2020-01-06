import React from 'react'
import styled from 'styled-components'
import { IMenu } from '../../../../types'
import Card from './Card'

interface IProps {
    menus: IMenu[]
    loading: boolean
}

const Container = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
`

const Presenter: React.FC<IProps> = ({
    menus,
    loading
}) => {
    return <Container>
        {menus.map(menu => {
            return <Card
                key={menu._id}
                menu={menu}
            />
        })}
    </Container>
}

export default Presenter