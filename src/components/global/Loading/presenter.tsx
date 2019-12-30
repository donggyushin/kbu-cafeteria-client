import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background:rgba(0,0,0,0.4);
    color:white;
    display:flex;
    justify-content:center;
    align-items:center;
`

const Presenter: React.FC = () => {
    return <Container>
        Loading...
    </Container>
}

export default Presenter