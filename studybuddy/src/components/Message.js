import React, { useState } from 'react'

import { getMsg, createMsg } from '../services/messageSvc';

const Message = () => {
    const [showMessage, setShowMessage] = React.useState(false)
    const [message, setMessage] = useState([]);

    const getData = async() => {
        const res = await getMsg();
        console.log(res.result[0].msg);
        setMessage(res.result[0].msg)
    }
    
    const onClick = () => {
        setShowMessage(true)
        getData()
    }    

    return (
        <div>
            <button onClick={onClick}>Click</button>
            { showMessage ? <p>{message}</p>: null}
        </div>

    )
}

const MyMessage = () => (
    <div>
        <p></p>
    </div>
)

export default Message;