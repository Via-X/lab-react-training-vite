import React from 'react'
import "./DriverCard.css"
import "./Rating.css"

export default function DriverCard({driverCard}) {
  let rounded = Math.round(driverCard.rating);
  let starList = [];
  for (let i = 0; i < 5; i++) {
    if(rounded > i){
      starList[i] = "./src/assets/images/star.png"
    } else {
      starList[i] = "./src/assets/images/star-empty.png"
    }
  }

  return (
    <div className="driverCard">
      <img src={driverCard.img}></img>
      <div>
        <h4>{driverCard.name}</h4>
        <div className="stars">
            <img src={starList[0]}></img>
            <img src={starList[1]}></img>
            <img src={starList[2]}></img>
            <img src={starList[3]}></img>
            <img src={starList[4]}></img>
        </div>
        <h4>{driverCard.car.model} {"  "} {driverCard.car.licensePlate}</h4>
      </div>
    </div>
  )
}
