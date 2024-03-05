import React from 'react'



export default function NumbersTable(props) {

  const arr = [];
  for(let i = 0; i <= props.limit; i++) {
    arr.push(i);
  }
  return (
    <div className="numbersTable">
      {arr.map((number) => <div className='numberblock'
        key={number}
        style={{
          borderColor: 'black',
          borderWidth: '5px',
          borderStyle: 'solid',
          backgroundColor: number % 2 === 0 ? 'red' : 'transparent',
          color: number % 2 === 0 ? 'white' : 'black' 
        }}
      >
        {number}
      </div> )}
    </div>
  )
}
