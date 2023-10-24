
import { useState } from 'react';
import './App.css';
import Buttons from './Buttons';
import Clothes from './Clothes';
import { data } from './data';

function Home(){
    const[clothes,setClothes]=useState(data);
    const chosenClothes=(searchTerm)=>{
     const newClothes=data.filter( element =>element.searchTerm===searchTerm);
     setClothes(newClothes)
    }
    return(
<div>
  <div className='cont'>
<h2 className='back'>Free Standard Shipping</h2>
  </div>
  <Buttons filteredClothes={chosenClothes}/>
  <Clothes item={clothes}/>

</div>
    )
}
export default Home;