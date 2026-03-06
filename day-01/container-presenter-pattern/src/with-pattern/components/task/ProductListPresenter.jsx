// Break down into smaller presenters:
// ProductCard +
// SortFilterControls+
// CartSummary

import CartSummary from './product/CartSummary';
import ErrorMessage from '../common/ErrorMessage';
import ProductCard from './product/ProductCard';
import SortFilterControls from './product/SortFilterControls';

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
}) => {
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
