import { eventBus } from '../../lib/eventBus';

const products = [
  { id: crypto.randomUUID(), name: 'Soap' },
  { id: crypto.randomUUID(), name: 'Towel' },
  { id: crypto.randomUUID(), name: 'Bed' },
  { id: crypto.randomUUID(), name: 'Mirror' },
  { id: crypto.randomUUID(), name: 'Light' },
];

// whenever this button gets clicked, onClick this button will pick up one of the product randomly
// from these products array and that particular product detail will be published
// on the eventBus on this particular event

// in eventBus is a Map and it will be populated with the event called 'cart:add'
// and a listener set inside which whoever going to subscribe the will get added
// that only will happen when I call the subscribe method

export default function AddToCartButton() {
  const handleClick = () => {
    const randomIndex = Math.floor(Math.random() * products.length);
    const selectedProduct = products[randomIndex];
    eventBus.publish('cart:add', {
      id: selectedProduct.id,
      name: selectedProduct.name,
    });
  };

  return (
    <div className="flex space-x-2 border rounded border-gray-600 p-2 m-3">
      <h2 className="text-2xl">Publisher</h2>
      <button className="bg-emerald-500 rounded p-1 cursor-pointer" onClick={handleClick}>
        Add to Cart
      </button>
    </div>
  );
}
