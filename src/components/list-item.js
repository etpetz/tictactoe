import React from 'react'

export const ListItem = function ({ item, removeMe, itemAllowEditing, color, style, weight, size }) {
    const [showRemove, setShowRemove] = React.useState(false);
    return (
        <li
            onClick={ function () {
                if (itemAllowEditing) {
                    setShowRemove(true);
                };
                if (showRemove) {
                    setShowRemove(false);
                }
                }
            }
            style={{
                color: color,
                fontStyle: style,
                fontSize: size + "px",
                fontWeight: weight
            }}
        >
            {item.name}
            {showRemove && <button id="delete" onClick={removeMe}>Remove {item.name}</button>}
        </li>
    );
};