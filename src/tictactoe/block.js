import React from 'react';
import './block.css'

let turnCount = 0;
export const Block = function ({ value, onValueChange }) {
    return (
        <div class="block" style={{ }} onClick={function () {
            if (value === '' && turnCount % 2 === 0) {
                value = 'X';
                turnCount++;
            }
            else if (value === '' && turnCount % 2 === 1) {
                value = 'O';
                turnCount++;    
            }
            onValueChange(value)
        }
        }>
            {value}
            </div>     
         )
     
};