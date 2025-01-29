import React, { useState } from 'react';

import heart from '../images/heart.svg';

import { AnimalKey, animalsMap } from '../constants/animalsMap';

interface AnimalType {
    type: AnimalKey;
}

const AnimalShows = ({type}: AnimalType) => {
const [clicks, setClicks] = useState<number>(0);

const handleClick = () => {
  setClicks(clicks + 1);
}

  return (
    <div onClick={handleClick}>
      <img alt={`A picture of a ${type}`} src={animalsMap[type]} />
      <img alt="heart" src={heart} style={ {width: 10 + 10 * clicks + 'px'}} />
    </div>
  )
}

export default AnimalShows
