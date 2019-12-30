import React from 'react'
import styled from 'styled-components'
import LinkButtons from './LinkButtons'

interface IProps {
    logoutButtonClicked: () => void
}

const Container = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    height:100vh;
    justify-content:center;
    background-image:url('wallpaper.jpg');
    background-repeat:no-repeat;
    background-size:100% 100%;
    object-fit:contain;
`


const Presenter: React.FC<IProps> = ({
    logoutButtonClicked
}) => {
    return <Container>
        <LinkButtons
            logoutButtonClicked={logoutButtonClicked}
        />
    </Container>
}

export default Presenter