import React from 'react';
import { FaArrowCircleRight } from 'react-icons/fa';
const Item = ({item,showdetails}) => {

    const {strMealThumb, strMeal,idMeal,strInstructions}=item
    return (
        <div>
            <div className="card w-full rounded-lg bg-lime-200 p-4 shadow-xl">
           <figure className="px-10 pt-10">
          <img src={strMealThumb} alt="Shoes" className="rounded-xl w-full" />
           </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-2xl text-purple-800">Name:{strMeal}</h2>
    <p className='text-fuchsia-900 font-bold'>Instruction:{strInstructions.slice(0,50)}.....</p>
    <div className="card-actions">
      <span onClick={()=>showdetails(item)} className='text-3xl bg-fuchsia-950 text-white p-3 rounded-lg'>
       <FaArrowCircleRight/>
      </span>
    </div>
  </div>
</div>
        </div>
    );
};

export default Item;