import React, { useEffect, useState } from 'react';
import Restaurant from './components/Restaurant/Restaurant';
import Sidedetails from './components/Sidedetails/Sidedetails';

const App = () => {
  const [meals,showmeals]=useState({})
  function showdetails(item){
  //  const storedData=JSON.parse(localStorage.getItem("order-item"))
  localStorage.setItem("order-item",JSON.stringify(item))
  showmeals(item)
  }

  return (
    <div className='md:flex gap-4'>
    <Restaurant showdetails={showdetails}></Restaurant>
    <Sidedetails meals={meals} ></Sidedetails>
    </div>
  );
};

export default App;