import React from 'react';
import { BrowserRouter, Route, Switch,
     Link, NavLink } from 'react-router-dom'
import homePage from './../components/homepage'
import AboutPage from './../components/aboutpage'
import HelpPage from './../components/helppage'
import NoFoundPage from './../components/notfoundpage'
import Common from './../components/common';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Common/>
            <Switch>
                <Route path="/" component={homePage} exact={true} />
                <Route path="/about" component={AboutPage} exact={true} />
                <Route path="/about/:id" component={AboutPage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NoFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
)
export default AppRouter;
