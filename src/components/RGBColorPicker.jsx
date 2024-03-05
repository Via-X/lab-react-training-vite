import React, {useState} from 'react'
import SingleColorPicker from './SingleColorPicker';

export default function RGBColorPicker() {
  const [rValue, setRValue] = useState(0);
  const [gValue, setGValue] = useState(0);
  const [bValue, setBValue] = useState(0);

  const handleChange = (color) => (value) => {
    if(color === "r"){
      setRValue(value);
    } else if( color === "g") {
      setGValue(value);
    } else if (color === "b") {
      setBValue(value);
    }
  };

  return (
    <div className='rgbcontainer'>
        <div>
            <div className='redBox' 
              style={{
                backgroundColor: `rgb(${rValue},0,0)`,
                // width: '100px',
                // height: '100px',
                // marginBottom: "20px"
              }}>
            </div>
            <div className='greenBox'
              style={{
                backgroundColor: `rgb(0,${gValue},0)`,
                // width: '100px',
                // height: '100px',
                // marginBottom: "20px"
              }}>
            </div>
            <div className='blueBox'
              style={{
                backgroundColor: `rgb(0,0,${bValue})`,
                // width: '100px',
                // height: '100px',
                // marginBottom: "20px"
              }}>
            </div>
            <div className='rgbBox'
              style={{
                backgroundColor: `rgb(${rValue},${gValue},${bValue})`,
                // width: '100px',
                // height: '100px',
                // marginBottom: "20px"
              }}>  
            </div>
         </div>
      <div>
          <SingleColorPicker color="r" value={rValue} onChange={handleChange("r")} /> <br />
          <SingleColorPicker color="g" value={gValue} onChange={handleChange("g")} /> <br />
          <SingleColorPicker color="b" value={bValue} onChange={handleChange("b")} /> <br />
          <label className='rgb'>rgb ({rValue},{gValue},{bValue})</label>
      </div>   
 






  
      {/* <div className='redBox' style={{backgroundColor: {rValue}}}>
      </div><br />
      <div className='greenBox' style={{backgroundColor: {gValue}}}>
      </div><br />
      <div className='blueBox' style={{backgroundColor: {bValue}}}>
      </div><br /> */}
    </div>
  )
}
