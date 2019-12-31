import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width:164px;
    border:1px solid white;
    height:120px;
    background:rgba(225,225,225,0.5);
`

const Presenter: React.FC = () => {
    return <Container className={'cell'}>
        Gray Cell
    </Container>
}

export default Presenter