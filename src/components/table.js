import React, { useRef } from 'react';

export const Table = ({ rows, columns, onValueChange }) => {

    return (
        <div class="table-container">
            {<table>
                <thead>
                    <tr>
                        {columns.map(function (column, idx) {
                            return (
                                <th>{column.label}</th>
                            )
                        }
                        )
                        }
                    </tr>
                </thead>
                <tbody>

                    {rows.map(function (row, idx) {
                        return (
                            <tr>
                                {columns.map(function (column, idx) {
                                    return (
                                        <td>
                                            {row[column.key]}
                                        </td>
                                    )
                                }
                                )}

                            </tr>)
                    }
                    )}



                </tbody>
            </table>}

            <div class="button-container">
            {columns.map(function (column, idx) {
                return (
                    <button
                        onClick={function () {
                            const swappedColumns = [...columns]
                            if (idx + 1 === swappedColumns.length) {
                                swappedColumns.unshift(swappedColumns.pop())
                            }
                            else {
                                const left = columns[idx]
                                const right = columns[idx + 1]
                                swappedColumns[idx] = right
                                swappedColumns[idx + 1] = left

                            }
                            onValueChange(swappedColumns)
                        }
                        }
                    >
                        move {column.label} to the right
                        </button>
                )
            })
                }
            </div>
            <div class="button-container">
                {columns.map(function (column, idx) {
                    return (
                        <button
                            onClick={function () {
                                const swappedColumns = [...columns]
                                if (idx === 0) {
                                    swappedColumns.push(swappedColumns.shift())
                                }
                                else {
                                    const right = columns[idx]
                                    const left = columns[idx - 1]
                                    swappedColumns[idx] = left
                                    swappedColumns[idx - 1] = right
                                }
                                onValueChange(swappedColumns)
                            }
                            }
                        >
                            move {column.label} to the left
                        </button>
                    )
                })
                }    
                </div>


        </div>
    );
};
