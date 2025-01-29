
import { useState } from 'react'
import './App.css'
import AnimalShows from './components/AnimalShows';

function App() {

  const getRandomElement = ():string => {
    const animals:string[] = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];
    return animals[Math.floor(Math.random() * animals.length)];
  }
  
  const [animals, setAnimals] = useState<string[]>([]);
  
  const handleClick = (): void => {
    let animalSelected = getRandomElement();
    setAnimals([...animals, animalSelected]);
  }

  return (
    <>
      <button onClick={handleClick}>Add Animal</button>
      {animals.map((animalType, index) => (
        <AnimalShows key={index} type={animalType} />
      ))}
    </>
  )
}

export default App
