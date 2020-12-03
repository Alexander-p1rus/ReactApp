import React from 'react'
import classes from "./navBar.module.css"
import {NavLink} from "react-router-dom"


const NavBar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to="/profile" activeClassName={classes.activate_link}>Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink  to="/message" activeClassName={classes.activate_link} >Message</NavLink>
            </div>
            <div className={classes.item}>
                <a href="/news">News</a>
            </div>
            <div className={classes.item}>
                <a href="/music">Music</a>
            </div>
            <div className={classes.item}>
                <a href="/settings">Settings</a>
            </div>
            <div className={classes.item}>
                <NavLink  to="/users" activeClassName={classes.activate_link} >Users</NavLink>
            </div>
        </nav>
    );
}

export default NavBar

