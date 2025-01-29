
import './App.css'

function App() {

  const handleClick = (): void => {
    console.log('Button was clicked!')
  }

  return (
    <>
      <button onClick={handleClick}>Add Animal</button>
    </>
  )
}

export default App
