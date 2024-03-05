import React, {useState} from 'react'
import "./LikeButton.css"

export default function LikeButton() {
  const [lCount, setLCount] = useState(0);
  const [rCount, setRCount] = useState(0);

  return (
    <div>LikeButton
      <button onClick={() => setLCount((prevCount) => prevCount +1)}> {lCount} Like</button>
      <button onClick={() => setRCount((prevCount) => prevCount +1)}> {rCount} Like</button>
    </div>
  )
}
