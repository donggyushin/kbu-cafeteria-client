import React from 'react'
import styled from 'styled-components'

interface IProps {
    menus: string[]
}

const Container = styled.div`
    width:50%;
    display:flex;
    flex-direction:column;
`

const Text = styled.div``

const Presenter: React.FC<IProps> = ({
    menus
}) => {
    return <Container>
        {menus.map((menu, i) => <Text key={i}>{menu}</Text>)}
    </Container>
}

export default Presenter