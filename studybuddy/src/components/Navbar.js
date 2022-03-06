import React, { Component } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import Clock from 'react-live-clock';

export default class Navbar extends Component {
    render() {
        return(
            <AppBar position='static' color='inherit'>
                <Toolbar>
                    <box sx={{ justifyContent: 'space-evenly' }}>
                        <Typography variant="h5" color="inherit" component="div" >
                            Study Buddy
                        </Typography>

                        {/* <Typography variant="h7" color="inherit" component="div">
                            <Clock format={'dddd, MMMM Mo, YYYY, h:mm:ss A'} ticking={true} timezone={'US/Pacific'} />
                        </Typography> */}
                    </box>
                </Toolbar>
            </AppBar>
        )
      }
}
