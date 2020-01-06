import React from 'react'
import styled from 'styled-components'
import MenusContainer from './MenusContainer'
import { IMenu } from '../../../types'
import GlobalNavigationBar from '../../global/GlobalNavigation'

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
    position:relative;
`

const NavigationButtonContainer = styled.div`
    position:absolute;
    top:20px;
`

const Presenter: React.FC<IProps> = ({
    loading,
    menus
}) => {
    return <Container>
        <NavigationButtonContainer>
            <GlobalNavigationBar
                background={'#273c75'}
            />
        </NavigationButtonContainer>
        <MenusContainer
            loading={loading}
            menus={menus}
        />
    </Container>
}

export default Presenter