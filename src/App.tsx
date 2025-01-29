
import { useState } from 'react'
import './App.css'

function App() {

  const getRandomElement = ():string => {
    const animals:string[] = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];

    return animals[Math.floor(Math.random() * animals.length)];
  }
  
  const [animals, setAnimals] = useState<string[]>([]);

  const handleClick = (): void => {
    setAnimals([...animals, getRandomElement()]);
  }

  return (
    <>
      <button onClick={handleClick}>Add Animal</button>
      <div>{animals}</div>
    </>
  )
}

export default App
