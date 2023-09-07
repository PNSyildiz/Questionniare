import React from 'react'

const Card = ({text, number}) => {
  return (
    <div className='Card'>
    <h2> {text}</h2>
      <h1>{number}</h1>
    </div>
  )
}

export default Card
