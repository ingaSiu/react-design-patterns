import { useEffect, useState } from 'react';

import ProductListPresenter from './ProductListPresenter';
import axios from 'axios';

const INITIAL_PARAMS = {
  category: '',
  sort: 'name',
  filter: 'all',
  search: '',
};

const ProductListContainer = () => {
  // TODO:
  // API calls and data fetching:
  // - GET all products +
  // - GET filtered/sorted products+
  // Cart management
  // Error handling +
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [error, setError] = useState(null);
  // Centralized state for all query params
  const [params, setParams] = useState({
    category: '',
    sort: 'name',
    filter: 'all',
    search: '',
  });

  useEffect(() => {
    fetchProducts();
  }, [params]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/products`, {
        params: {
          // Axios automatically removes undefined/null, but we'll clean empty strings
          category: params.category || undefined,
          sort: params.sort || undefined,
          filter: params.filter || undefined,
          search: params.search || undefined,
        },
      });
      console.log(response.data);
      setProducts(response.data);
    } catch (err) {
      setError('Failed to fetch products');
    }
  };

  const handleParamChange = (key, value) => {
    setParams((prev) => ({ ...prev, [key]: value }));
  };

  const resetFilters = () => {
    setParams(INITIAL_PARAMS);
  };

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const cartSummary = {
    totalItems: cart.reduce((sum, item) => sum + item.quantity, 0),
    totalPrice: cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2),
  };
  return (
    <div className="flex flex-col items-center w-full max-w-7xl mx-auto p-6 pt-12">
      <ProductListPresenter
        products={products}
        cart={cart}
        cartSummary={cartSummary}
        onAddToCart={addToCart}
        onRemoveFromCart={removeFromCart}
        error={error}
        params={params}
        onParamChange={handleParamChange}
        onReset={resetFilters}
      />
    </div>
  );
};

export default ProductListContainer;
