import React from 'react'
import "./grid.scss";

export default function Grid({ a, b, c, d }) {
  return (
    <div className="grid">

      <span className="grid-a">{a}</span>
      <span className="grid-b">{b}</span>
      <span className='grid-c'>{c}</span>
      <span className="grid-d">{d}</span>



    </div>
  )
}
