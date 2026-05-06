function BetterCart({ items }) {
  // derived state logic - computing the total and rendering the total
  // whenever the props change, this value will change
  const total = items.reduce((acc, item) => acc + item.price, 0);

  return <h2>Total: {total}</h2>;
}

export default BetterCart;
