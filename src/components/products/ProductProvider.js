import React, { createContext, useState } from 'react'


export const ProductContext = createContext()

export const ProductProvider = (props) => {
  
  const [products, setProducts] = useState([])
  
  const getProducts = () => {
    return fetch('https://localhost:8088/locations?_embed=productType')
      .then(res => res.json())
      .then(setProducts)
  }
  
  return (
    <ProductContext.Provider value={{
      getProducts, products
    }}>
      {props.children}
      
    </ProductContext.Provider>
    
  )
}

