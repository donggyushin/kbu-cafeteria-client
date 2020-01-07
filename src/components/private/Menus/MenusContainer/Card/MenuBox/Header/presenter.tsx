import React from 'react'
import styled from 'styled-components'

interface IProps {
    name: string
}

const Container = styled.div`
    display:flex;
`

const Text = styled.div`
    /* background:#273c75;
    color:white;
    font-size:11px;
    padding:2.5px;
    margin-top:3px;
    margin-left:3px;
    font-weight:600;
    border-radius:4px; */
    margin-left:7px;
    margin-bottom:4px;
    font-weight:600;
    margin-top:4px;
`

const Presenter: React.FC<IProps> = ({
    name
}) => {
    return <Container>
        <Text>
            {name}
        </Text>

    </Container>
}

export default Presenter