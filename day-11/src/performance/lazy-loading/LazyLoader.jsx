import React, { Suspense, useState } from 'react';

import Light from './Light'; // Light component imported statically

// Heavy component is dynamicallu imported along with lazy() functionality
const Heavy = React.lazy(() => import('./Heavy'));

const LazyLoader = () => {
  const [show, setShow] = useState(false);

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', padding: 20 }}>
      <h1>Lazy Demo</h1>
      <p>
        Heavy component is loaded on demand via <code>React.lazy()</code>.
      </p>

      <Light />
      {/* dynamically render Heavy component based on the condition, so on first load it won't be downloaded,
the download will only happen then user clicks on the button */}
      <button onClick={() => setShow((s) => !s)} style={{ margin: 10 }}>
        {show ? 'Hide Heavy' : 'Show Heavy'}
      </button>

      <Suspense fallback={<div style={{ padding: 20 }}>Loading heavy component…</div>}>{show && <Heavy />}</Suspense>
    </div>
  );
};

export default LazyLoader;
