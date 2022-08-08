import React from 'react'

function Nav() {
  return (
    <div className='columns'>
      <div className='column'><h2>sniff around</h2></div>
      <div className='column'><h3>floofs</h3></div> 
      <div className='column'><h3>snyx</h3></div>
      <div className='column'><h3>sleps</h3></div>
    </div>
  )
}
/* ensure the links set state at App.jsx using setImages() for respective components */
export default Nav