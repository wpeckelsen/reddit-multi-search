import React from 'react'
import "./button.scss";
import Link from 'next/link';

export default function Button({ type, click, form, content }) {

  
  return (
    <button 
    type={type} 
    onClick={click}
    formAction={form}
     >
      <span className="button-text">        
        {content}            
      </span>
    </button>
  )
}

