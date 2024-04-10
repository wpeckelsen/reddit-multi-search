import React from 'react';
import "./card.scss";

export default function Card({ size, title, subtitle, content }) {
    return (
        <>
        <h2>{title}</h2>       
            <div className={size}>
             
                <p>{subtitle}</p>
                <div className="error"></div>
                <div className="content">{content}</div>
            </div>
        </>
    )
}
