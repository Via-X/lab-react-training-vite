import React from 'react'
import "./CreditCard.css"

export default function CreditCard({creditCard}) {
  const ccString = creditCard.number.toString();
  const lString = ccString.slice(0,12);
  const rString = ccString.slice(12);
 
  const maskedString = lString.replace(/\d/g, "*") + rString;
  const tempString = maskedString.match(/.{1,4}/g);
  const newString = tempString.join(' ');

  // const cctypeString = "Visa" 
  // if (creditCard.type === "Master"){
  //   cctypeString = "Master"
  // }

  return (
    <div className="ccBox" id={creditCard.bank}>
      <h3>{creditCard.type}</h3>
      <h2>{newString}</h2>
      <h6>
          Expires {creditCard.expirationMonth}/{creditCard.expirationYear}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {creditCard.bank}
          <br />
          {creditCard.owner}
      </h6>
    </div> 
  )
}
