import React from 'react'
import styled from 'styled-components'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            display: 'flex',
            flexWrap: 'wrap',
        },
        textField: {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
        },
        dense: {
            marginTop: theme.spacing(2),
        },
        menu: {
            width: 200,
        },
    }),
);




interface IProps {
    addNewMenu: (event: React.KeyboardEvent<HTMLDivElement>, name: string) => void
    newLunch: string
    newDinner: string
    handleNewMenuInput: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Container = styled.div`
    display:flex;
`


const Presenter: React.FC<IProps> = ({
    addNewMenu,
    newLunch,
    newDinner,
    handleNewMenuInput
}) => {
    const classes = useStyles();
    return <Container>
        <TextField
            id="outlined-name"
            label="중식"
            className={classes.textField}
            value={newLunch}
            onChange={handleNewMenuInput}
            margin="normal"
            variant="outlined"
            name="newLunch"
            onKeyPress={e => {
                addNewMenu(e, 'newLunch')
            }}
        />
        <TextField
            id="outlined-name"
            label="석식"
            className={classes.textField}
            value={newDinner}
            onChange={handleNewMenuInput}
            margin="normal"
            variant="outlined"
            name={'newDinner'}
            onKeyPress={e => {
                addNewMenu(e, 'newDinner')
            }}
        />
    </Container>
}

export default Presenter