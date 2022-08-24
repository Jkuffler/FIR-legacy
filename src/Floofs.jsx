/* future ref: export const floof1 = require("./1.jpg") */
import "bulma/sass/elements/box.sass"
import "bulma/sass/elements/image.sass"
import "bulma/sass/components/card.sass"
import SimpleImageSlider from "react-simple-image-slider";
import f1 from './assets/floofs/1.jpg'
import f2 from './assets/floofs/2.jpg'
import f3 from './assets/floofs/3.jpg'
import f4 from './assets/floofs/4.jpg'
import f5 from './assets/floofs/5.jpg'
import f6 from './assets/floofs/6.jpg'
import f7 from './assets/floofs/7.jpg'
import f8 from './assets/floofs/8.jpg'
import f9 from './assets/floofs/9.jpg'
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


export default function Floofs() {


const allFloofs = [{url: f1}, {url: f2}, {url: f3}, {url: f4}, {url: f5}, {url: f6}, {url: f7}, {url: f8}, {url: f9}, {url: f10}, {url: f11}, {url: f12}, {url: f13}, {url: f14}, {url: f15}, {url: f16}, {url: f17}, {url: f18}, {url: f19}, {url: f20}];


  return (
    <figure>
      <SimpleImageSlider height={700} width={750} images={allFloofs}  showBullets={true}
        showNavs={true}/> 
    </figure>
  ) 
};