import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const getProduct = async () => {
    try {
      const response = await axios.get('https://e-commerce-be-6jj0.onrender.com/api/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching Products:', error.response ? error.response.data : error.message);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};
