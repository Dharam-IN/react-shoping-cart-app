import { faker } from '@faker-js/faker';
import React, { createContext } from 'react';

const card = createContext();

const Context = ({children}) => {

    const products = [...Array(20)].map(() => ({
      id: faker.string.uuid(),
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      image: faker.image.urlPicsumPhotos(),
      inStock: faker.datatype.number({ min: 0, max: 7 }),
      fastDelivery: faker.datatype.boolean(),
      ratings: faker.datatype.number({min: 1, max: 5})
    }))

    console.log(products)
    
  return (
    <card.Provider>
        {children}
    </card.Provider>
  )
}

export default Context