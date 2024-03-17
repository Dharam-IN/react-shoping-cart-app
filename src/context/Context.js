import { faker } from '@faker-js/faker';
import React, { createContext, useContext, useReducer } from 'react'
import { CartReducer } from './CartReducer';


const Cart = createContext();
faker.seed(99);
const Context = ({children}) => {

    const products = [...Array(20)].map((data, id) =>{
        return(
            {
                id: faker.datatype.uuid(),
                name: faker.commerce.productName(),
                price: faker.commerce.price(),
                image: faker.image.urlPicsumPhotos(),
                inStock: faker.number.int({ min: 0, max: 7 }),
                fastDelivery: faker.datatype.boolean(),
                ratings: faker.datatype.number({ min: 1, max: 5 })

            }
        )
    })

    const [state, dispatch] = useReducer(CartReducer, {
        products: products,
        cart: []
    })
    

  return (
    <>
        <Cart.Provider  value={{state, dispatch}}>
            {children}
        </Cart.Provider>
    </>
  )
}

export default Context;

export const CartState = () => {
    return useContext(Cart)
}