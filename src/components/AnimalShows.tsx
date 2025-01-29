import React from 'react';
import bird from '../images/bird.svg';
import cat from '../images/cat.svg';
import cow from '../images/cow.svg';
import dog from '../images/dog.svg';
import gator from '../images/gator.svg';
import horse from '../images/horse.svg';

type AnimalKey = 'bird' | 'cat' | 'cow' | 'dog' | 'gator' | 'horse';

interface AnimalType {
    type: AnimalKey;
}

const animalsMap: Record<AnimalKey, string> = {
  bird: bird,
  cat: cat,
  cow: cow,
  dog: dog,
  gator: gator,
  horse: horse
};

const AnimalShows = ({type}: AnimalType) => {
  return (
    <div>
      <img alt={type} src={animalsMap[type]} />
    </div>
  )
}

export default AnimalShows
