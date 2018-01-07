import React from 'react';
import {NavLink } from 'react-router-dom'
const Common = () => (
    <header>
        React Routing Application
     <NavLink activeClassName="is-active" exact={true} to="/">Home</NavLink>
        <NavLink activeClassName="is-active" to="/about">About</NavLink>
        <NavLink activeClassName="is-active" to="/help">Help</NavLink>
    </header>
)

export default Common