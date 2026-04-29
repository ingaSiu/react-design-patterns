import { useEvent } from '../../hooks/useEvent';
import { useState } from 'react';

export default function CartBadge() {
  const [items, setItems] = useState([]);

  // to become subscriber get notification and do something with it
  // you can get data from payload
  useEvent('cart:add', (data) => {
    console.log(data);
    setItems([...items, data]);
  });

  return (
    <div className="flex flex-col text-center">
      <h2 className="text-2xl">Subscriber</h2>
      <p className="text-4xl text-center">🛒 {items.length}</p>
      <ul className="list-none">
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
