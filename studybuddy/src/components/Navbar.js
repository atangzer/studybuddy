import React, { Component } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";

export default class Navbar extends Component {
    render() {
        return(
            <AppBar position='static' color='transparent'>
                <Toolbar>
                <IconButton>
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" color="inherit" component="div">
                    Study Buddy
                </Typography>
                </Toolbar>
            </AppBar>
        )
      }
}
