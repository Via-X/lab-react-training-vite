import React from 'react'
import "./BoxColor.css"

export default function BoxColor({r, g, b}) {

const hex = "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
const boxColor = {
  backgroundColor: hex,
}

  return (
    <div className="boxColor" style={boxColor}>
      <h6>rgb({r},{g}, {b})</h6>
      <h6>{hex}</h6>
    </div>

  )
}
