import React, { useState } from 'react';
import { List } from './components/list.js'
import { Radio } from './components/radio.js'
import { EnterText } from './components/text.js'
import { Checkbox } from './components/checkbox.js'
import { Table } from './components/table.js'
import { Board } from './tictactoe/board.js'
import { get } from 'https';

// a react component has a life cycle, so you can call a function when something happens to it
// 1. mounted-- added to the DOM
// 2. gets removed from the DOM
// 3. when the state updates, you can call a function

let _items = [
    //{ name: "Learn HTML", color: "blue" },
    //{ name: "Learn JS", color: "red" },
    //{ name: "Learn CSS" }
];

const _columns = [
    { label: "name", key: "name" },
    { label: "fave color", key: "color" },
    { label: "sound effect", key: "sound" }
]

const _rows = [
    { name: "eva", color: "green", sound: 'peep' },
    { name: "amelia", color: "blue", sound: 'beep' }
]

const _checkbox_items = [
    { name: "allow editing", value:true },
];

const _radio_color_items = [
    { name: "green", value: "green" },
    { name: "red", value: "red" },
    { name: "blue", value: "blue" }
]

const _radio_style_items = [
    { name: "italics", value: 'italic' },
    { name: "normal", value: 'normal' }
]

const _radio_weight_items = [
    { name: "bold", value: 'bold' },
    { name: "normal", value: 'normal' }
]

const _blocks = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
]


export const App = function () {

    const [mode, setMode] = React.useState()
    const [listAllowEditing, setListAllowEditing] = React.useState(false)
    const [listColor, setListColor] = React.useState("black")
    const [listStyle, setListStyle] = React.useState('normal')
    const [listWeight, setListWeight] = React.useState('normal')
    const [listSize, setListSize] = React.useState(20)
    const [columns, setColumns] = React.useState(_columns)
    const [blocks, setBlocks] = React.useState(_blocks)
    const [loading, setLoading] = React.useState(false)
    const [items, setItems] = React.useState(_items)

    React.useEffect(function () {
        setLoading(true)
        fetch('http://www.mocky.io/v2/5dc9e4412f0000c9c473ef4b?mocky-delay=1000ms', { headers: { 'Content-Type': 'application/json' } })
            .then(function (response) { return response.json() })
            .then(function (data) { setItems(JSON.parse(data)) })
            .finally(function () { setLoading(false) })
    }, []
    )
    // it's gonna actually call this function!

    return ([
        <Board blocks={blocks} onValueChange={setBlocks} />
        //loading && <p>items are loading!</p>,
        //<List items={items} setItems={setItems} listAllowEditing={listAllowEditing} color={listColor} style={listStyle} weight={listWeight} size={listSize} />,
        //<Checkbox items={_checkbox_items} onValueChange={setListAllowEditing} label="Allow Editing" />,
        //<Table columns={columns} rows={_rows} onValueChange={setColumns} />,
        //<Radio items={_radio_color_items} name="formColorOptions" onValueChange={setListColor} label="Choose Color" />,
        //<Radio items={_radio_style_items} name="formStyleOptions" onValueChange={setListStyle} label="Choose Style" />,
        //<Radio items={_radio_weight_items} name="formWeightOptions" onValueChange={setListWeight} label="Choose Weight" />,
        //<EnterText onValueChange={setListSize} label="Choose Size" />
        ])

   }