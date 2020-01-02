import React from 'react'
import styled from 'styled-components'
import { IMenu } from '../../../../../../types'

interface IProps { }

const Container = styled.div`
    width:100%;
    display:flex;
    margin-top:20px;
    flex-direction:column;
`

const Row = styled.div`
    display:flex;
    margin-bottom:10px;
`

const Text = styled.div`
    width:50%;
    display:flex;
    justify-content:center;
    align-items:center;
`



const Presenter: React.FC<IProps> = () => {
    return <Container>
        <Row>
            <Text>중식</Text>
            <Text>석식</Text>
        </Row>
    </Container>
}

export default Presenter