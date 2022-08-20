import Floofs from './Floofs.jsx';
import Nav from './Nav.jsx';
// import InfiniteScroll from 'react-infinite-scroller';
import "bulma/sass/grid/columns.sass";
import { useState } from 'react';

function App() {
  const [images, setImages] = useState([])
  
  return (
    <div className="columns is-mobile">
      <div className="column is-one-third"><h1>Fellows of Infinite Rest</h1>
        <div className="card"><Nav /></div>
      </div>
      <div className="column is-three-thirds"><Floofs /></div>
    </div>
  )
}

export default App