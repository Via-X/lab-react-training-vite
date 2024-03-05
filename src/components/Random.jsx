import React from 'react'


export default function Random({min, max}) {

  let randomNumber = Math.floor(Math.random() * (max - min)) + min;

  return (
    <div>Random value between {min} and {max} => {randomNumber}</div>
  );
}
