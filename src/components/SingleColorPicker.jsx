import React, {useState} from 'react'

export default function SingleColorPicker({color, value, onChange}) {

  return (
    <div className={color}>
      <labe>{color.toUpperCase()}:</labe> 
      <input
        className='rgbinput'
        type="number"
        value={value}
        onChange={(e) => onChange(parseInt(e.target.value, 10))}
        min="0"
        max="255"
      />
    </div>
  );
}
