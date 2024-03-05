import React, {useState} from 'react'

export default function IdCard({idCard}) {

  return (
    <div className='idCard'>
      <div>
        <img className="idImg" src={idCard.picture}></img>
      </div>
      <div className='idDetails'>
        <h4>First Name: {idCard.firstName}</h4>
        <h4>Last Name: {idCard.lastName}</h4>
        <h4>Gender: {idCard.gender}</h4>
        <h4>Height: {idCard.height}</h4>
        <h4>Birth: {idCard.birth}</h4>
      </div>
    </div>
  );
}
