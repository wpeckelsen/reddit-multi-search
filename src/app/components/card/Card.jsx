import React from 'react'

export default function Card({ title, subtitle, content }) {
    return (
        <>
            <div className='title'>
                <h1>{title}</h1>
                <p>{subtitle}</p>
            </div>

            <div className='card'>
                {content}
            </div>
        </>
    )
}
