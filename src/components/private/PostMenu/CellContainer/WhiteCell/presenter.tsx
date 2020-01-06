import React from 'react'
import styled from 'styled-components'
import { IMenu } from '../../../../../types'

interface IProps {
    menu: IMenu
    onClickCell: (id: string) => void
}

const Container = styled.div`
    width:164px;
    border:1px solid white;
    height:120px;
`

const Day = styled.div`
    margin-left:3px;
    color:gray;
`

const InnerContainer = styled.div`
    width:100%;
    height:100%;
    display:flex;
`

const Column = styled.div`
    width:50%;
    height:87%;
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    overflow:hidden;
`

const LunchLabel = styled.div`
    background: #273c75;
    color: white;
    border-radius: 5px;
    padding: 2px;
    font-size: 12px;
    margin-bottom:4px;
`

const DinnerLabel = styled.div`
    background: #e74c3c;
    color: white;
    border-radius: 5px;
    padding: 2px;
    font-size: 12px;
    margin-bottom:4px;
`

const Menu = styled.div`
    font-size:11px;
    color:black;
`

const Presenter: React.FC<IProps> = ({
    menu,
    onClickCell
}) => {
    return <Container
        onClick={() => {
            onClickCell(menu._id)
        }}
        className={'cell'}>
        <Day>
            {menu.day}
        </Day>
        <InnerContainer>
            <Column>
                <LunchLabel>
                    중식
                </LunchLabel>
                {menu.lunch.menus.map((menuText, i) => {
                    return <Menu key={i}>{menuText}</Menu>
                })}
            </Column>
            <Column>
                <DinnerLabel>
                    석식
                </DinnerLabel>
                {menu.dinner.menus.map((menuText, i) => {
                    return <Menu key={i}>{menuText}</Menu>
                })}
            </Column>
        </InnerContainer>
    </Container>
}

export default Presenter