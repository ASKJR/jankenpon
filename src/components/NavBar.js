import React, { Component } from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core/';

const NavBar = () => {
    return (
        <AppBar position="static" color="primary">
            <Toolbar>
                <Typography variant="title" color="inherit">
                    じゃんけんぽん
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;