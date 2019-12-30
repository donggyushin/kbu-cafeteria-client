import React from 'react'
import styled from 'styled-components'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import MainComponent from '../Main';
import PostMenu from '../PostMenu';
import MenuView from '../MenuView';

const Presenter: React.FC = () => {
    return <Router>
        <Switch>
            <Route path={'/post'}>
                <PostMenu />
            </Route>
            <Route path={'/view'}>
                <MenuView />
            </Route>
            <Route>
                <MainComponent />
            </Route>
        </Switch>
    </Router>
}

export default Presenter