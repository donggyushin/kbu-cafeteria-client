import React from 'react'
import styled from 'styled-components'
import { Button } from '@material-ui/core'

interface IProps {
    nextButtonClicked: () => void
}

const Container = styled.div``

const Presenter: React.FC<IProps> = ({
    nextButtonClicked
}) => {
    return <Container>
        <Button
            variant="outlined"
            color="primary"
            size="large"
            style={{
                marginTop: 100
            }}
            onClick={nextButtonClicked}
        >
            결과보러가기
</Button>
    </Container>
}

export default Presenter