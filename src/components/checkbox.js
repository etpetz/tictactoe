import React from 'react';

export const Checkbox = function ({ items, onValueChange, label }) {
    return (
    <label>
        <input
                type="checkbox"
                onChange={function (event) {
                    if (event.target.checked) {
                        onValueChange(true)
                    }
                    else {
                        onValueChange(false)
                    }
                }}
    /> {label}
    </label>
    )

}