import React from 'react';
import { Block } from './block.js'
import './board.css'

let moveCount = 0

export const Board = function ({ blocks, onValueChange }) {

    //// variables

    const [gameStarted, setGameStarted] = React.useState(false)
    const [showScores, setShowScores] = React.useState(false)
    const [tieGame, setTieGame] = React.useState(false)

    let startScores = new Map([
        ['X', 0],
        ['O', 0]
    ]);

    const [scores, setScores] = React.useState(startScores)

    const checkTeam = {
        X: checkX,
        O: checkO
    }
    //// execute

    console.log("game started: ", gameStarted)
    console.log("winner exists: ",showScores)
    console.log("scores: ", scores)
    console.log("move count", moveCount)

    if (!gameStarted) {
        return showWelcome()
    }
    else {
        return showGame()
    }



    //// functions

    function showWelcome() {

        return (
        	<div>
            <div class="thing-container">
            welcome to the thunderdome
            <p><button onClick={function () {setGameStarted(true)}}>start game</button></p>
                </div>
			<div class="thing-container">
            	x and o will alternate who goes first
            </div>
            )
    }


    function showGame() {

        if (!showScores) {
            checkWinner('X')
            checkWinner('O')
            return (
                <div class="thing-container">
                    <table>
                        {blocks.map(function (row, rowIdx) {
                            return (
                                <tr>
                                    {row.map(function (column, columnIdx) {
                                        return (
                                            <td>
                                                <Block value={column} onValueChange={function (newValue) {
                                                    const blocksNew = [...blocks]
                                                    blocksNew[rowIdx][columnIdx] = newValue
                                                    onValueChange(blocksNew)
                                                    /// react needs a copy here because without a new value
                                                    /// it won't know that it needs to rerender
                                                    moveCount++
                                                }
                                                } />
                                            </td>
                                        )
                                    })}
                                </tr>
                            )
                        }

                        )}



                    </table>
                    {tieGame && <div><p>tie game</p>
                        <button onClick={function () {
                            setShowScores(true)
                            onValueChange(createBlankBoard())
                        }}>view scores</button>
                        <button onClick={function () {
                            setGameStarted(false)
                            setShowScores(false)
                            setTieGame(false)
                            resetScores()
                        }}>reset scores</button></div>}

                    
                </div>
            )
        }
        else {
            return ( 
                <div class="thing-container">
                    <button onClick={function () { 
                        setShowScores(false)
                        setTieGame(false)
                    }} >play again</button>
                    <button onClick={function () {
                        setGameStarted(false)
                        setShowScores(false)
                        setTieGame(false)
                        resetScores()
                    }}>reset scores</button>
                    <p><b>scoreboard</b></p>
                    <p>o: {scores.get('O')}</p>
                    <p>x: {scores.get('X')}</p>
                    </div>
                /// you have to have the STATE control what is being shown, not the function
                )
        }
    }

    function checkWinner(team) {
        const columnCount = [0, 0, 0]
        let leftDiagonalCount = 0
        let rightDiagonalCount = 0
        blocks.map(function (row, rowIdx) {
            row.map(function (column, columnIdx) {
                if (column === team) {
                    columnCount[columnIdx]++
                }
                if (row[columnIdx] === team && rowIdx === columnIdx) {
                    leftDiagonalCount++
                }
                if (row[columnIdx] === team && rowIdx + columnIdx === 2) {
                    rightDiagonalCount++
                }
            })
        })
        if (blocks.some(row => row.every(checkTeam[team])) || columnCount.some(checkThree) || leftDiagonalCount === 3 || rightDiagonalCount === 3) {
            declareWinner(team)
        }
        if (moveCount >= 9) {
            declareTie()
        }
    }

    function givePoint(team) {
        scores.set(team, scores.get(team) + 1)
        return scores
    }
    function resetScores() {
        setScores(startScores)
    }

    function declareWinner(team) {
        console.log(team + ' wins!')
        moveCount = 0
        onValueChange(createBlankBoard())
        setScores(givePoint(team))
        setShowScores(true)
    }

    function declareTie() {
        console.log('no one wins!')
        moveCount = 0
        setTieGame(true)
    }
    
    function checkX(value) {
        return value === 'X'
    }

    function checkO(value) {
        return value === 'O'
    }

    function checkThree(value) {
        return value===3
    }

    function createBlankBoard() {
        return [['', '', ''], ['', '', ''], ['', '', '']]
    }

}
