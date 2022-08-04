import { useState } from 'react'
import floof1 from './assets/floofs/1.jpg'

function App() {
  const [count, setCount] = useState(0)
    
  return (
    <div className="App">
      <div>
      
      </div>
      <h1>Fellows of Infinite Rest</h1>
      <div className="card">
        <img src={floof1} className="img"/>
      </div>
      
    </div>
  )
}

export default App
