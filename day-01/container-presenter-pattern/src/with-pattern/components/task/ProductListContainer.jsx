import { useEffect, useState } from 'react';

import ProductListPresenter from './ProductListPresenter';
import axios from 'axios';

const ProductListContainer = () => {
  // TODO:
  // API calls and data fetching:
  // - GET all products +
  // - GET filtered/sorted products
  // Cart management
  // Error handling +
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/products`);
      console.log(response.data);
      setProducts(response.data);
    } catch (err) {
      setError('Failed to fetch products');
    }
  };

  //const sortProducts = async () => {};
  return <ProductListPresenter products={products} error={error} />;
};

export default ProductListContainer;
