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
          <div className="row gap-3">
            {
              products.map((data) => {
                return(
                  <SingleProduct product={data}/>
                )
              })
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Home