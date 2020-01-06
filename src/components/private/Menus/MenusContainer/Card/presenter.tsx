import React from 'react'
import styled from 'styled-components'
import { IMenu } from '../../../../../types'
import MenuBox from './MenuBox'
import CardHeader from './Header'

interface IProps {
    menu: IMenu
}

const Container = styled.div`
    background:white;
    margin-right:15px;
    margin-left:15px;
    width:250px;
    height:600px;
    border-radius:4px;
    box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);
`

const Presenter: React.FC<IProps> = ({
    menu
}) => {
    const {
        lunch,
        dinner,
        fix,
        day,
        daily,
        year,
        month
    } = menu
    return <Container>
        <CardHeader
            year={year}
            month={month}
            day={day}
        />
        <MenuBox
            menus={lunch.menus}
            name={'중식'}
        />
        <MenuBox
            menus={dinner.menus}
            name={'석식'}
        />
        <MenuBox
            menus={daily.menus}
            name={'데일리'}
        />
        <MenuBox
            menus={fix.menus}
            name={'고정 메뉴'}
        />
    </Container>
}

export default Presenter