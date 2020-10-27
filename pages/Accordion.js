import React, { useState } from 'react';

export function Accordion() {
    const [isToggle, setIsToggle] = useState(false);

const showMe = isToggle ? (<h3>Show me</h3>) : null;

    return (
        <div>
            {/* { isToggle?
                <h3>Show me</h3>
                :null */
                showMe
                }
            <button onClick={() => setIsToggle(!isToggle)}>Toggle</button>
        </div>
    )
}
