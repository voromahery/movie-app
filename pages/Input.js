import React, { useState } from 'react';

export function Input() {
    const [ inputValue, setInputValue ] = useState("");
    return (
        <div>
            <input
            value={inputValue}
            onChange={(e) => {
                if (!e.target.value.includes("g"))
                    setInputValue(e.target.value)}
            }
            />
        </div>
    )
}
