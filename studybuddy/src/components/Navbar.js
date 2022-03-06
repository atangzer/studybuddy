import React, { Component } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Clock from 'react-live-clock';

export default class Navbar extends Component {
    render() {
        return(
            <AppBar position='static' color='transparent'>
                <Toolbar>
                <Typography variant="h6" color="inherit" component="div"  sx={{ flexGrow: 2 }}>
                    Study Buddy
                </Typography>
                <Typography variant="h6" color="inherit" component="div">
                    <Clock format={'dddd, MMMM Mo, YYYY, h:mm:ss A'} ticking={true} timezone={'US/Pacific'} />
                </Typography>
                </Toolbar>
            </AppBar>
        )
      }
}
