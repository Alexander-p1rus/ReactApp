import React from 'react'
import  classes from "./navBar.module.css"

const NavBar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <a href="2#">profile</a>
            </div>
            <div className={classes.item}>
                <a href="3#">Message</a>
            </div>
            <div className={classes.item}>
                <a href="2#">news</a>
            </div>
            <div className={classes.item}>
                <a href="3#">music</a>
            </div>
            <div className={classes.item}>
                <a href="3#">settings</a>
            </div>
        </nav>
    );
}

export default NavBar

