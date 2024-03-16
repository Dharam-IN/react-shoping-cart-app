import React, { useContext } from 'react';
import FilterSec from '../components/FilterSec';
import './style.css'
import SingleProduct from '../components/SingleProduct';
import { CartState } from '../context/Context';

const Home = () => {
  
  const {state: {products},} = CartState();

  console.log(products)

  return (
    <>
      <div className='home'>
        <FilterSec/>
        <div className="productscontainer">
          {
            products.map((data) => {
              return(
                <p>{data.name}</p>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default Home