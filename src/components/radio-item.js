import React from 'react'

export const RadioItem = function ({ item, name, onValueChange }) {
    return (
        <ul>
            <label>
                <input
                    type="radio"
                    name={name}
                    onChange={function () {
                        onValueChange(item.value)
                    }
                        }
                />
                {item.name}
            </label>
        </ul>
    )
};