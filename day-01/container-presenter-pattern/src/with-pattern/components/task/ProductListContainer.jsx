import { useEffect, useState } from 'react';

import ProductListPresenter from './ProductListPresenter';
import axios from 'axios';

const ProductListContainer = () => {
  // TODO:
  // API calls and data fetching:
  // - GET all products +
  // - GET filtered products
  // Cart management
  // Error handling
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/products`);
      console.log(response.data);
      setProducts(response.data);
    } catch {
      console.log('Something went wrong');
    }
  };
  return <ProductListPresenter products={products} />;
};

export default ProductListContainer;
