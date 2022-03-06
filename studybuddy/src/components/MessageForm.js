import React, { useState } from 'react'

import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";

import { getMsg, createMsg } from '../services/messageSvc';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

const MessageForm = () => {
    const [value, setValue] = useState("");
    const [showMessage, setShowMessage] = React.useState(false)
    const [message, setMessage] = useState([]);
    const [messageSent, setMessageSent] = React.useState(false)

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!value) return;
        addMessage(value);
        setValue("");
    };

    const getData = async() => {
        const res = await getMsg();
        console.log(res.result[0].msg);
        setMessage(res.result[0].msg)
    }

    const addMessage = async (msg) => {
        await createMsg(msg)
        await getData()
        onSendMsg()
      }
    
    const onClick = () => {
        setShowMessage(true)
        getData()
    }
    
    const onSendMsg = () => {
        setMessageSent(true)
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setMessageSent(false);
      };

    return (
        <Box
        sx={{
            width: 400,
            height: 150,
            position: 'absolute',
            left: '2.5%',
            bottom: '5%'
          }}>
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    {/* <IconButton sx={{
                        position: 'absolute',
                        left: '89%',
                        bottom: '70%'
                    }}>
                        <CloseIcon />
                    </IconButton> */}
                    <Typography variant="h5" component="div">
                        Send a Message!
                    </Typography>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Say some words of encouragement to someone out there.
                    </Typography>

                    <form onSubmit={handleSubmit}>
                        <TextField id="standard-multiline-static"
                            rows={4}
                            fullWidth
                            label="Send Message" 
                            value={value} 
                            onChange={(event) => {setValue(event.target.value)}} />
                    </form>
                    
                    <Snackbar open={messageSent} autoHideDuration={6000} onClose={handleClose}>
                        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                            Message Sent!
                        </Alert>
                    </Snackbar>

                    {/* <button onClick={onClick}>Click</button>
                    { showMessage ? <p>{message}</p>: null} */}
                </CardContent>
            </Card>
        </Box>

    );
}

export default MessageForm