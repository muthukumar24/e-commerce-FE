import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const getProduct = async () => {
    try {
      setLoading(true)
      const response = await axios.get('https://e-commerce-be-6jj0.onrender.com/api/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching Products:', error.response ? error.response.data : error.message);
    }
    finally{
      setLoading(false);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <ProductContext.Provider value={{ products, loading }}>
      {children}
    </ProductContext.Provider>
  );
};
