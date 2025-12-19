import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState<number>(0)
  const [isOdd, setIsOdd] = useState<boolean>(false)

  // Monitor counter changes
  useEffect(() => {
    setIsOdd(counter % 2 !== 0)
    console.log(`Counter changed to: ${counter}`)
  }, [counter])

  const increment = (): void => {
    setCounter(counter + 1)
  }

  const decrement = (): void => {
    setCounter(counter - 1)
  }

  return (
    <div className="container">
      <h1>Counter Application</h1>
      <div className="counter-display" style={{ color: isOdd ? 'green' : 'red' }}>
        {counter}
      </div>
      <p className="status">
        The number is <strong>{isOdd ? 'odd' : 'even'}</strong>
      </p>
      <div className="button-group">
        <button onClick={decrement} className="btn btn-decrement">
          Decrement
        </button>
        <button onClick={increment} className="btn btn-increment">
          Increment
        </button>
      </div>
    </div>
  )
}

export default App
