import React from 'react';
import { CartState } from '../components/context/Context';
import FilterSec from '../components/FilterSec';
import './style.css'
import SingleProduct from '../components/SingleProduct';

const Home = () => {
  
  const {state: {products},} = CartState();
  console.log(products)

  return (
    <>
      <div className='home'>
        <FilterSec/>
        <div className="productscontainer">
          {
            products.map((prod) => {
              return <SingleProduct prod={prod}/>
            })
          }
        </div>
      </div>
    </>
  )
}

export default Home