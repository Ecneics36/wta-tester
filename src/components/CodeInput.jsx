import React, { useState } from 'react';
import Textfield from '@material-ui/core'

function receiveInput() {
    const { codeInput } = props

    

    return ();
}

function CodeInput() {
    const { codeInput } = props

    const [input, setInput] = useState('');

    return (
        <>
            <Textfield
                type="text"
                label="Order No"
                placeholder="Enter your code here"
                name="code input"
                value={input}
                fullWidth
                required
                onChange={() => setInput}
            >poop</Textfield>
        </>
    );

    
}

export default CodeInput;