import React, { useRef } from 'react';
import { ListItem } from './list-item.js'
import './list.css'

export const List = function ({ items, setItems, listAllowEditing, color, style, weight, size }) {
    let myInput;
    const inputElement = useRef()
    return (
        <div class="list-container">
            <h1>Todo List</h1>
            {listAllowEditing && (
                <div>
                    <input
                        onChange={function (event) {
                            myInput = event.target.value;
                        }}
                        type="text"
                        ref={inputElement}
                    />
                    <button
                        onClick={function () {
                            setItems([...items, { name: myInput }]);
                            inputElement.current.value = ''
                        }}
                    >
                        Submit
          </button>
                </div>
            )}
            <ul>
                {items.map(function (item, idx) {
                    return (
                        <ListItem
                            key={idx}
                            item={item}
                            color={color}
                            style={style}
                            size={size}
                            weight={weight}
                            itemAllowEditing={listAllowEditing}
                            removeMe={function () {
                                const itemsCopy = [...items]; // same as Array.from(myItems)
                                itemsCopy.splice(idx, 1);
                                setItems(itemsCopy);
                            }}
                        />
                    );
                })}
            </ul>
        </div>
    );
};