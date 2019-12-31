import React from 'react'
import styled from 'styled-components'
import GrayCell from './GrayCell'
import WhiteCell from './WhiteCell'
import { IMenu } from '../../../../types'

interface IProps {
    offdays: number
    menuObjects: IMenu[]
    onClickCell: (day: number) => void
}

const Container = styled.div`
    width: 1165px;
    display:flex;
    flex-wrap:wrap;
`

const Presenter: React.FC<IProps> = ({
    offdays,
    menuObjects,
    onClickCell
}) => {
    const grayCells = []

    for (let index = 0; index < offdays; index++) {
        grayCells.push(<GrayCell />)
    }


    return <Container>
        {grayCells}
        {menuObjects.map(menu => {
            return <WhiteCell
                onClickCell={onClickCell}
                menu={menu}
                key={menu.day} />
        })}
    </Container>
}

export default Presenter