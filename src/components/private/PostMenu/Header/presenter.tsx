import React from 'react'
import styled from 'styled-components'

interface IProps {
}

const Container = styled.div`
    margin-top: 36px;
    width: 1165px;
    display:flex;
    flex-wrap: wrap;
`

const RedCell = styled.div`
    width:164px;
    display:flex;
    align-items:center;
    justify-content:center;
    background:#e74c3c;
    color:white;
    border:1px solid white;
`

const BlueCell = styled.div`
    width:164px;
    display:flex;
    align-items:center;
    justify-content:center;
    background:#3498db;
    color:white;
    border:1px solid white;
`


const Presenter: React.FC<IProps> = () => {
    return <Container id={'cell-container'}>
        <RedCell
        >
            일
        </RedCell>
        <BlueCell
        >
            월
        </BlueCell>
        <BlueCell
        >
            화
        </BlueCell>
        <BlueCell

        >
            수
        </BlueCell>
        <BlueCell
        >
            목
        </BlueCell>
        <BlueCell
        >
            금
        </BlueCell>
        <BlueCell
        >
            토
        </BlueCell>
    </Container>
}

export default Presenter