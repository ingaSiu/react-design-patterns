// Break down into smaller presenters:
// ProductCard +
// SortFilterControls+
// CartSummary+

// keyof: using key: keyof ProductQueryParams is much safer than string.
// It ensures you can only call the function with keys that actually exist on
// your params object (category, sort, etc.), preventing typos like
// onParamChange('catgery', 'electronics').

import type { CartItem, CartSummaryData, Product, ProductQueryParams } from '../../../types/products.js';

import CartSummary from './product/CartSummary.js';
import ErrorMessage from '../common/ErrorMessage.js';
import ProductCard from './product/ProductCard.js';
import SortFilterControls from './product/SortFilterControls.js';

type PresenterProps = {
  products: Product[];
  cart: CartItem[];
  cartSummary: CartSummaryData;
  onAddToCart: (product: Product) => void;
  onRemoveFromCart: (productId: string) => void;
  error: string | null;
  params: ProductQueryParams;
  onParamChange: (key: keyof ProductQueryParams, value: string) => void;
  onReset: () => void;
};

const ProductListPresenter = ({
  products,
  cart,
  cartSummary,
  onAddToCart,
  onRemoveFromCart,
  error,
  params,
  onParamChange,
  onReset,
}: PresenterProps) => {
  // TODO:
  // Rendering products +
  // Sort/filter UI interactions+
  // Add to cart button clicks
  if (error) {
    return <ErrorMessage title="Oops! Something went wrong" message={error} />;
  }

  return (
    <div className="w-full space-y-8">
      <CartSummary cart={cart} summary={cartSummary} onRemove={onRemoveFromCart} />
      {/* 1. The Controls Section */}
      <SortFilterControls params={params} onParamChange={onParamChange} onReset={onReset} />

      {/* 2. The Product Grid */}
      <div className="flex flex-wrap justify-center items-start gap-6">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard
              key={product.id}
              {...product} // Clean shorthand if props match object keys
              onAdd={() => onAddToCart(product)}
            />
          ))
        ) : (
          <p className="text-gray-500 py-20 text-lg">No products match your criteria.</p>
        )}
      </div>
    </div>
  );
};

export default ProductListPresenter;
