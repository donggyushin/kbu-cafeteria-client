import React from 'react'
import styled from 'styled-components'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import List from './List';
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
    newDaily: string
    handleNewMenuInput: (event: React.ChangeEvent<HTMLInputElement>) => void
    dailyMenus: string[]
    deleteMenu: (name: string, index: number) => void
}

const Container = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
`

const ListContainer = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
`

const Presenter: React.FC<IProps> = ({
    addNewMenu,
    newDaily,
    handleNewMenuInput,
    dailyMenus,
    deleteMenu
}) => {
    const classes = useStyles()
    return <Container>
        <TextField
            id="outlined-name"
            label="데일리"
            className={classes.textField}
            value={newDaily}
            margin="normal"
            variant="outlined"
            name="newDaily"
            fullWidth={false}
            onKeyPress={e => {
                addNewMenu(e, 'newDaily')
            }}
            onChange={handleNewMenuInput}
        />
        <ListContainer>
            {dailyMenus.map((daily, i) => {
                return <List
                    text={daily}
                    key={i}
                    name={'daily'}
                    index={i}
                    deleteMenu={deleteMenu}
                />
            })}
        </ListContainer>

    </Container>
}

export default Presenter