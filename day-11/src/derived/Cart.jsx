import { useEffect, useState } from 'react';

const Cart = ({ items }) => {
  const [total, setTotal] = useState(0);
  // antipattern storing derived state in use state
  // this is bad practice to store value like that
  // need to use derived state
  useEffect(() => {
    const sum = items.reduce((acc, item) => acc + item.price, 0);
    setTotal(sum);
  }, [items]);

  return <h2>Total: {total}</h2>;
};

export default Cart;
