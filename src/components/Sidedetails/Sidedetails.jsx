import React, { useEffect, useState } from 'react';

const Sidedetails = ({meals}) => {
 
    const [food,setFood]=useState({})

    useEffect(()=>{
        const localStorageData=JSON.parse(localStorage.getItem("order-item"))
        if(localStorageData){
            setFood(localStorageData)
        }
    },[meals])
    console.log(food,0)
    // const {strInstructions,strYoutube}=details;
    // {strInstructions?strInstructions.slice(0,300):""
    return (
        <div className= ' top-0 right-4 fixed w-[30%] bg-yellow-600'>
            <h2 className='text-4xl font-extrabold text-center my-5 '>
                Meal Details
            </h2>
            <h1 className=' text-xl p-3 m-3 rounded bg-black my-4 text-yellow-500 font-bold'>Follow Instrcuction:{food?.strInstructions?food.strInstructions.slice(0,300):""}</h1>
            <h2  className='text-sm p-3 m-3 rounded bg-black text-yellow-500 font-bold'>Search Channel:
            {food?.strYoutube?food?.strYoutube:""}</h2>
        </div>
    );
};

export default Sidedetails;