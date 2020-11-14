import React from 'react'
import classes from"./Header.module.css"

const Header=()=>{
    return(
        <header className={classes.header}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Pepsi_logo_2014.svg"
          alt="logo"
        />
      </header>
    );
}

export default Header;