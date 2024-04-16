import React from 'react';
import "./card.scss";

export default function Card({ size, title, switchTitle, subtitle, content }) {
    return (
        <>
        
            <div className={size}>
            <h2>{title}</h2>            
            <span>{switchTitle}</span>
                <p>{subtitle}</p>
                <div className="error"></div>
                <div className="content">{content}</div>
            </div>
        </>
    )
}
