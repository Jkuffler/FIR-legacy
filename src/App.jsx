// import { useState } from 'react'
import * as allFloofs from './assets/floofs/floofs.jsx'

function App() {
  // const [images, setImages] = useState(false)
  for (var i = 0; i < allFloofs.length; i++) {
    let src = `${allFloofs[i]}`;
    console.log(allFloofs[i])
    let floof = new Image(); 
    floof.src = src;
    querySelector.image-container.appendChild(floof);
  }

  
  return (
    <div className="App">
      <div className="image-container">
        <div>
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