import React, {useState} from 'react'

const diceArray = [
  "./src/assets/images/dice1.png",
  "./src/assets/images/dice2.png",
  "./src/assets/images/dice3.png",
  "./src/assets/images/dice4.png",
  "./src/assets/images/dice5.png",
  "./src/assets/images/dice6.png",
]
const empty = "./src/assets/images/dice-empty.png"

export default function Dice() {
  const [toggleImg, setToggleImg] = useState(diceArray[2]);

  function pickImg () {
    const randomIndex = Math.floor(Math.random() * diceArray.length);
    return diceArray[randomIndex];
  }

  function toggleImages () {
    setToggleImg(empty);


    setTimeout(() => {setToggleImg(pickImg())}, 1000);
  }

  return (
    <div className='dice'>Dice
      <img src={toggleImg} onClick={() => toggleImages()}></img>
    </div>
  )
}
