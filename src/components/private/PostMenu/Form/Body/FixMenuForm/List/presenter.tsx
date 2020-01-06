import React from 'react'
import styled from 'styled-components'
import { Button } from '@material-ui/core'

interface IProps {
    text: string
}

const Container = styled.div``

const Presenter: React.FC<IProps> = ({
    text
}) => {
    return <Container>
        <Button
            variant="contained"
            color="primary"
            style={{
                marginBottom: 10
            }}
        >
            {text}
        </Button>
    </Container>
}

export default Presenter