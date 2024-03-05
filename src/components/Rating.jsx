import React from 'react'
import "./Rating.css"

export default function Rating({children}) {
  let rounded = Math.round(children);
  let starList = [];
  for (let i = 0; i < 5; i++) {
    if(rounded > i){
      starList[i] = "./src/assets/images/star.png"
    } else {
      starList[i] = "./src/assets/images/star-empty.png"
    }
  }
  return (
    <div className="stars">
      <img src={starList[0]}></img>
      <img src={starList[1]}></img>
      <img src={starList[2]}></img>
      <img src={starList[3]}></img>
      <img src={starList[4]}></img>
    </div>
  )
}
