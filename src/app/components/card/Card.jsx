import React from 'react';
import "./card.scss";

export default function Card({ size, title, subtitle, content }) {
    return (
        <>
        
            <div className={size}>
            <h2>{title}</h2>        
                <p>{subtitle}</p>
                <div className="error"></div>
                <div className="content">{content}</div>
            </div>
        </>
    )
}
