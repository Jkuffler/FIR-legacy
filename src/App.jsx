import Floofs from './Floofs.jsx'
import "bulma/sass/grid/columns.sass"

function App() {
  // const [images, setImages] = useState(false)
  

  
  return (
    <div className="columns">
      <div className="column is-one-third"><h1>Fellows of Infinite Rest</h1>
      
      {/* Insert Menu Link options */}
      </div>
      <div className="column is-two-thirds">
        <Floofs />
      </div>
    </div>
  )
}

export default App