import React from 'react'
import Wrapper from './pages/Wrapper';
import { ProductProvider } from './context/ProductContext';

function App() {
  return (
    <div>
      <ProductProvider>
        <Wrapper />
      </ProductProvider>
    </div>
  )
}

export default App