import React, { useRef } from 'react';
import { RadioItem } from './radio-item.js'
import './radio.css'


export const Radio = function ({ items, name, onValueChange, label }) {
    return (
        <div class="radio-container">
            <h1>{label}</h1>
            <form>
                    {items.map(function (item, idx) {
                        return (
                            <RadioItem
                                key={idx}
                                item={item}
                                name={name}
                                onValueChange={onValueChange}
                        />
                        );
                    })}

            </form>
            </div>
    )
};