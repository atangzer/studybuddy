import React, { useState } from 'react'
import TextField from '@mui/material/TextField';

const MessageForm = ({ addMessage }) => {
    const [value, setValue] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!value) return;
        addMessage(value);
        setValue("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <TextField label="Send Message" value={value} onChange={(event) => {setValue(event.target.value)}} />
        </form>
    );
}

export default MessageForm