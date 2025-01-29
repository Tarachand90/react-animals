import bird from '../images/bird.svg';
import cat from '../images/cat.svg';
import cow from '../images/cow.svg';
import dog from '../images/dog.svg';
import gator from '../images/gator.svg';
import horse from '../images/horse.svg';

export type AnimalKey = 'bird' | 'cat' | 'cow' | 'dog' | 'gator' | 'horse';

export const animalsMap: Record<AnimalKey, string> = {
    bird,
    cat,
    cow,
    dog,
    gator,
    horse
  };