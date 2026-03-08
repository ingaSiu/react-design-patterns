type ProductCardProps = {
  imageUrl: string;
  name: string;
  price: number;
  inStock: boolean;
  onAdd: () => void;
};

const ProductCard = ({ imageUrl, name, price, inStock, onAdd }: ProductCardProps) => {
  return (
    <div className="flex flex-col items-center w-64 border rounded-lg overflow-hidden shadow-sm p-4 bg-white">
      <div className="w-full h-48 flex justify-center items-center">
        <img src={imageUrl} alt={name} className="max-h-full object-contain" />
      </div>
      <div className="text-center mt-4">
        <h1 className="font-bold text-lg text-blue-800">{name}</h1>
        <div className="mt-2">
          <p className="text-blue-600 font-semibold">$ {price}</p>
          <p className="text-sm">
            {inStock ? (
              <span className="text-green-600">Item is in stock</span>
            ) : (
              <span className="text-red-600">Item is out of stock</span>
            )}
          </p>
          <button
            onClick={onAdd}
            disabled={!inStock}
            className={`w-full mt-4 py-2 px-4 rounded-md font-semibold transition-colors 
              ${
                inStock
                  ? 'bg-blue-600 text-white hover:bg-blue-700 cursor-pointer'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
          >
            {inStock ? 'Add to Cart' : 'Out of Stock'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
