import React, { useContext, useState } from 'react';
import { ProductContext } from '../../context/ProductContext.jsx'; 
import { ClipLoader } from 'react-spinners';
import '../Products/Products.css';

function Products() {
  const { products } = useContext(ProductContext);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [categoryText, setCategoryText] = useState('Category'); // State to store button text

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  // Handle Search Input Change
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Handle Category Selection
  const handleCategorySelect = (category, categoryLabel) => {
    setSelectedCategory(category);
    setCategoryText(categoryLabel); // Update the button text when category is selected
  };

  // Filter Products Based on Search Term and Selected Category
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory ? product.category.toLowerCase() === selectedCategory.toLowerCase() : true;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container-fluid">
      <div className='container'>
        <h3 className="text-center product-text">Products</h3>
        <div className='row'>
          <div className='col-sm-12 col-md-12 col-lg-12 col-xl-12'>
            <div className="d-flex justify-content-center mb-3 category-search-container">
              {/* Search Form */}
              <form className="d-flex me-2 search-input-form" role="search">
                <input 
                  className="form-control me-2 search-input-box" 
                  type="search" 
                  placeholder="Search Product..." 
                  aria-label="Search" 
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
                <button className="btn search-btn px-4" type="button">Search</button>
              </form>

              {/* Category Dropdown */}
              <div className="dropdown category-menu">
                <button className="btn btn-secondary category-btn dropdown-toggle py-2" data-bs-toggle="dropdown" aria-expanded="false">
                  {categoryText}
                </button>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#" onClick={() => handleCategorySelect('', 'All')}>All</a></li> {/* All Category */}
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#" onClick={() => handleCategorySelect('electronics', 'Electronics')}>Electronics</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#" onClick={() => handleCategorySelect('home appliances', 'Home Appliances')}>Home Appliances</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#" onClick={() => handleCategorySelect('clothing', 'Clothing')}>Clothing</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container product-container">
        <div className="row">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 py-2 mb-4" key={product._id}>
                <div className="card h-100 mb-4 product-card" onClick={() => handleProductClick(product)} style={{ cursor: 'pointer' }}>
                  <img src={product.images[0]} className="card-img-top px-2 py-2" alt={product.name} />
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    {/* <p className="card-text">{product.description}</p> */}
                    <p className="card-text"><strong>Price: </strong>${product.price}</p>
                    {/* <p className="card-text"><strong>Quantity: </strong>{product.quantity}</p> */}
                    {/* <p className="card-text"><strong>Category: </strong>{product.category}</p> */}
                    <div className='d-flex justify-content-center'>
                      <button className='btn order-now-btn mt-2'>Know More</button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center"><ClipLoader size={30} color={"#242c6c"} />Loading...</p>
          )}
        </div>

        {/* Modal */}
        {selectedProduct && (
          <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1" role="dialog">
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">{selectedProduct.name}</h5>
                  <button type="button" className="btn-close" onClick={handleCloseModal} aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  <img src={selectedProduct.images[0]} className="img-fluid mb-3" alt={selectedProduct.name} />
                  <h5>{selectedProduct.name}</h5>
                  <p><strong>Description: </strong>{selectedProduct.description}</p>
                  <p><strong>Price: </strong>${selectedProduct.price}</p>
                  <p><strong>Quantity: </strong>{selectedProduct.quantity}</p>
                  <p><strong>Category: </strong>{selectedProduct.category}</p>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-danger">Add to Cart</button>
                  <button type="button" className="btn btn-primary">Order Now</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Products;


