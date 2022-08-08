/* future ref: export const floof1 = require("./1.jpg") */
import "bulma/sass/elements/box.sass"
import "bulma/sass/elements/image.sass"
import f1 from './assets/floofs/1.jpg'
import f2 from './assets/floofs/2.jpg'
import f3 from './assets/floofs/3.jpg'
import f4 from './assets/floofs/4.jpg'
import f5 from './assets/floofs/5.jpg'
import f6 from './assets/floofs/6.jpg'
import f7 from './assets/floofs/7.jpg'
import f8 from './assets/floofs/8.jpg'
// import f9 from './assets/floofs/9.jpg'
import f10 from './assets/floofs/10.jpg'
import f11 from './assets/floofs/11.jpg'
import f12 from './assets/floofs/12.jpg'
import f13 from './assets/floofs/13.jpg'
import f14 from './assets/floofs/14.jpg'
import f15 from './assets/floofs/15.jpg'
import f16 from './assets/floofs/16.jpg'
import f17 from './assets/floofs/17.jpg'
import f18 from './assets/floofs/18.jpg'
import f19 from './assets/floofs/19.jpg'
import f20 from './assets/floofs/20.jpg'
import f21 from './assets/floofs/21.jpg'
// import InfiniteScroll from 'react-infinite-scroller';
import { useState } from 'react'

export default function Floofs() {
// const  perPage = 1
const allFloofs = [f1, f2, f3, f4, f5, f6, f7, f8, f10, f11, f12, f13, f14, f15, f16, f17, f18, f19, f20, f21]

  return (
    
      <div className="column is-two-thirds">
        {
          allFloofs.map((floof, index) => <figure key={index}className="image is-4by3"><div className="box"><img className="media" src={floof} alt="floofin vibe" /></div></figure>)
        }
      </div>
  ) 
};