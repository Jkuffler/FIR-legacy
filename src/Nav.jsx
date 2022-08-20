import React from 'react'

function Nav() {


  return (
    <div className='column'>
      <h2>sniff around</h2>
      <div>
        <h3><a href='/Floofs'>floofs</a></h3> 
        <h3><a href='/Sneex'>sneex</a></h3>
        <h3><a href='Sleps'>sleps</a></h3>
      </div>
    </div>
  )
}
/* ensure the links set state at App.jsx using setImages() for respective components */
export default Nav