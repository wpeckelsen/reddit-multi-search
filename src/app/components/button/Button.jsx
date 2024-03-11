import React from 'react'
import "./button.scss";
import Link from 'next/link';

export default function Button({ content, type, click }) {

  
  return (
    <button type={type} onClick={click} >
      <span className="button-text">{content}</span>
    </button>
  )
}

