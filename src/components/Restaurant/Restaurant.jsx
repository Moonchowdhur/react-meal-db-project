import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';

const Restaurant = ({showdetails}) => {
    const [orders,setorders]=useState([])
    useEffect(()=>{
      fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=a")
      .then(res=>res.json())
      .then(data=>setorders(data.meals))
    },[])

    
    return (
        <div className='md:w-[68%] p-4 grid bg-black grid-cols-1 md:grid-cols-3 gap-8'>
           {
            orders.map(item=><Item showdetails={showdetails} key={item.idMeal} item={item}></Item>)
           } 
        </div>
    );
};

export default Restaurant;