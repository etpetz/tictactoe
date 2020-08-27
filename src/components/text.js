import React, { useRef } from 'react';
import './text.css'

export const EnterText = function ({ onValueChange, label }) {
    let myInput;
    const inputElement = useRef()
    return (
        <div class="text-container">
        <h1>{label}</h1>
        <input
                type="number"
                ref={inputElement}

            />
            <button
                onClick={function () {
                    onValueChange(inputElement.current.value)
                }



}
            >Enter Size</button>
            </div>
    )

};