import React from 'react';

import { AnimalKey, animalsMap } from '../constants/animalsMap';

interface AnimalType {
    type: AnimalKey;
}

const AnimalShows = ({type}: AnimalType) => {
  return (
    <div>
      <img alt={`A picture of a ${type}`} src={animalsMap[type]} />
    </div>
  )
}

export default AnimalShows
