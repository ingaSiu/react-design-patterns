const CartSummary = ({ cart, summary, onRemove }) => {
  if (cart.length === 0) return null;

  return (
    <div className="p-4 border rounded-lg bg-blue-400">
      <h2 className="text-xl font-bold mb-4">Your Cart ({summary.totalItems} items)</h2>
      <ul className="space-y-2">
        {cart.map((item) => (
          <li key={item.id} className="flex justify-between items-center">
            <span>
              {item.name} (x{item.quantity})
            </span>
            <div>
              <span className="mr-4">${(item.price * item.quantity).toFixed(2)}</span>
              <button onClick={() => onRemove(item.id)} className="text-red-500 text-sm">
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-4 border-t pt-2 font-bold text-right">Total: ${summary.totalPrice}</div>
    </div>
  );
};

export default CartSummary;
