import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

interface IHomeIcon {
    background: string
}

interface IProps {
    background: string
}

const Container = styled.div``

const HomeICon = styled.i`
    font-size:40px;
    color:${(props: IHomeIcon) => props.background};
`

const Presenter: React.FC<IProps> = ({
    background
}) => {
    return <Container>
        <Link
            to={'/'}
        >
            <HomeICon
                background={background}
                className={'fas fa-home'}
            />
        </Link>
    </Container>
}

export default Presenter