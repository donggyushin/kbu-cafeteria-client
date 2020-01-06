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
    newFix: string
    handleNewMenuInput: (event: React.ChangeEvent<HTMLInputElement>) => void
    fixMenus: string[]
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
    newFix,
    handleNewMenuInput,
    fixMenus
}) => {
    const classes = useStyles()
    return <Container>
        <TextField
            id="outlined-name"
            label="고정메뉴"
            className={classes.textField}
            value={newFix}
            margin="normal"
            variant="outlined"
            name="newFix"
            fullWidth={false}
            onKeyPress={e => {
                addNewMenu(e, 'newFix')
            }}
            onChange={handleNewMenuInput}
        />
        <ListContainer>
            {fixMenus.map((menu, i) => {
                return <List text={menu} key={i} />
            })}
        </ListContainer>
    </Container>
}

export default Presenter