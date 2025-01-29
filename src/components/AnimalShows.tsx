import React, { useState } from 'react'

import heart from '../images/heart.svg'

import { AnimalKey, animalsMap } from '../constants/animalsMap'

interface AnimalType {
  type: AnimalKey
}

const AnimalShows = ({ type }: AnimalType) => {
  const [clicks, setClicks] = useState<number>(0)

  const handleClick = () => {
    setClicks(clicks + 1)
  }

  return (
    <div className="animal-show" onClick={handleClick}>
      <img
        className="animal"
        alt={`A picture of a ${type}`}
        src={animalsMap[type]}
      />
      <img
        className="heart"
        alt="heart"
        src={heart}
        style={{ width: 10 + 10 * clicks + 'px' }}
      />
    </div>
  )
}

export default AnimalShows
