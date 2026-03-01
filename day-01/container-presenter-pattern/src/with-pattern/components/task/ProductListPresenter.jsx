// Break down into smaller presenters:
// ProductCard +
// SortFilterControls
// CartSummary

import ErrorMessage from '../common/ErrorMessage';
import ProductCard from './product/ProductCard';

const ProductListPresenter = ({ products, error }) => {
  // TODO:
  // Rendering products +
  // Sort/filter UI interactions
  // Add to cart button clicks
  if (error) {
    return <ErrorMessage title="Oops! Something went wrong" message={error} />;
  }

  return (
    <div className="flex flex-wrap justify-center items-start gap-6">
      {products.map((product) => {
        return (
          <ProductCard
            key={product.id}
            imageUrl={product.imageUrl}
            name={product.name}
            price={product.price}
            inStock={product.inStock}
          />
        );
      })}
    </div>
  );
};

export default ProductListPresenter;
