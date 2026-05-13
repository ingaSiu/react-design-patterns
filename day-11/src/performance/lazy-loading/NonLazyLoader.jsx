import Heavy from './Heavy';
import Light from './Light';
import { useState } from 'react';

const NonLazyLoader = () => {
  const [show, setShow] = useState(false);

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', padding: 20 }}>
      <h1>Non-Lazy Demo</h1>
      <p>Heavy component is bundled with the app (non-lazy).</p>

      <Light />

      <button onClick={() => setShow((s) => !s)} style={{ margin: 10 }}>
        {show ? 'Hide Heavy' : 'Show Heavy'}
      </button>

      {show && <Heavy />}
    </div>
  );
};

export default NonLazyLoader;
