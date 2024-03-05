import React from 'react'



export default function Greetings({language}) {
  const greetingsList = [
    {
      lang: 'en',
      children: 'Hello'
    },
    {
      lang: 'de',
      children: "Hallo"
    },
    {
      lang: 'es',
      children: "Hola"
    },
    {
      lang: 'fr',
      children: "Bonjour"
    }
  ];
  let greeting;

  switch (language) {
    case 'en':
        greeting = greetingsList[0].children;
        break;
    case 'de':
        greeting = greetingsList[1].children;
        break;
    case 'es':
        greeting = greetingsList[2].children;
        break;
    case 'fr':
        greeting = greetingsList[3].children;
    default:
        console.log("Lang switch statement error");
  }
  
  return (
    <div>{greeting}</div>
  )
}
