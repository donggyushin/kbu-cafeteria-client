import React from 'react'
import styled from 'styled-components'
import MenusContainer from './MenusContainer'
import { IMenu } from '../../../types'

interface IProps {
    loading: boolean
    menus: IMenu[]
}

const Container = styled.div`
    width:100%;
    height:100vh;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    background:#f5f5f5;
`

const Presenter: React.FC<IProps> = ({
    loading,
    menus
}) => {
    return <Container>
        <MenusContainer
            loading={loading}
            menus={menus}
        />
    </Container>
}

export default Presenter