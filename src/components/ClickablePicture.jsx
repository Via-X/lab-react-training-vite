import React, {useState }from 'react'
import "./ClickablePicture.css"

export default function ClickablePicture(props) {
  const [toggleImg, setToggleImg] = useState(props.img);
  return (
    <div className='clickPic'>ClickablePicture: 
     
     <img src={toggleImg} onClick={() => setToggleImg(props.imgClicked)}></img>
    
    </div>
  )
}
