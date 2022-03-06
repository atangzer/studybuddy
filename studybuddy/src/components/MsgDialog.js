import React, { useState } from 'react'

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { getMsg } from '../services/messageSvc';

const MsgDialog = () => {
    const [open, setOpen] = React.useState(false);
    const [showMessage, setShowMessage] = React.useState(false)
    const [message, setMessage] = useState([]);

    const getData = async() => {
      const res = await getMsg();
      console.log(res.result[0].msg);
      setMessage(res.result[0].msg)
    }

    // const onClick = () => {
    //     setShowMessage(true)
    //     getData()
    // }

    const handleClickOpen = () => {
      setOpen(true);
      setShowMessage(true)
      getData()
    };
  
    const handleClose = () => {
      setOpen(false);
    }

    return(
        <div>
        <Button variant='contained' color='inherit' onClick={handleClickOpen}>
          Motivate Me!
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"A special message just for you!"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {message}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Thanks!</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
}

export default MsgDialog