import React from 'react'

export const Test = ({ func }) => {
    return (
        <div>
            <h2>count: 0</h2>
            <button onClick={func} className='p-2 me-2'>+</button>
            <button onClick={func} className='p-2'>-</button>
        </div>
    )
}
