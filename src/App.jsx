// import { useState } from 'react'
import f1 from './assets/floofs/1.jpg'

function App() {
  // const [images, setImages] = useState(false)
  

  
  return (
    <div className="App">
      <h1>Fellows of Infinite Rest</h1>
      <div className="image-container">
        <div>
          <img src={f1} className="floofs"/>
        {
      /*  <Floofs/> 
          <Sleps/>  
          <Snyks/>  */
          }
        </div>
      
      </div>
    </div>
  )
}

export default App