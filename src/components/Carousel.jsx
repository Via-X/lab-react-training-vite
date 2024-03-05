import React, {useState} from 'react'

export default function Carousel(props) {
  const [count, setCount] = useState(0);

  if (count < 0) {
    setCount(3);
  } else if ( count > 3) {
    setCount(0);
  }

  return (
    <div>Carousel
    <img src={props.images[count]}></img>
    <button onClick={() => setCount((prevCount) => prevCount -1)}> Left</button> 
    <button onClick={() => setCount((prevCount) => prevCount +1)}> Right</button>
    </div>
  )
}
