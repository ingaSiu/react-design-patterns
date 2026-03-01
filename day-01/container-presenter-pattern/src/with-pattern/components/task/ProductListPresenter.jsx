// Break down into smaller presenters:
// ProductCard +
// SortFilterControls
// CartSummary

import ProductCard from './product/ProductCard';

const ProductListPresenter = ({ products }) => {
  // TODO:
  // Rendering products
  // Sort/filter UI interactions
  // Add to cart button clicks
  return (
    <div className="flex flex-wrap justify-center items-start gap-6 ">
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
