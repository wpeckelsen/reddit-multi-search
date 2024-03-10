import React from 'react'
import "./button.scss";

export default function Button({ content, type, click }) {
  return (
    <button type={type} onClick={click} >
      <span className="button-text">{content}</span>
    </button>
  )
}
