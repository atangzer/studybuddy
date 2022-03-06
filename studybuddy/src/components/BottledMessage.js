import React, { useState } from 'react'

import Box from '@mui/material/Box';

import InputMessage from './MessageForm';

const BottledMessage = () => {
    const [showBottle, setShowBottle] = React.useState(false)

    const onClick = () => {
    }

    return (
        <Box>
            <InputMessage />
        </Box>
    )
  
}

export default BottledMessage;