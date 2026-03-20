import { useRef, useState } from 'react';

function CounterWithRef() {
  const countRef = useRef(0); // persists between renders
  const [renderCount, setRenderCount] = useState(0); // for forcing re-renders

  // then clicking on ref btn you will see incremented numbers in console
  // but only then we click on the state btn these numbers will appear in UI, because they
  // are persisted between renderings and only state component calls render
  // so clicking ref btn 5 times and state btn 1 time (calls re-render)
  // so ref would be 5 and state would be 1
  const increment = () => {
    countRef.current = countRef.current + 1; // update ref
    console.log('Ref Count:', countRef.current);
  };

  return (
    <div className="flex justify-around w-full">
      <div>
        <h2 className="text-2xl">Ref Count: {countRef.current}</h2>
        <button className="bg-purple-500 text-white p-1 rounded" onClick={increment}>
          Increment Ref Count
        </button>
      </div>

      <div>
        <h2 className="text-2xl">Render Count: {renderCount}</h2>
        <button className="bg-purple-500 text-white p-1 rounded" onClick={() => setRenderCount(renderCount + 1)}>
          Force Re-render
        </button>
      </div>
    </div>
  );
}

export default CounterWithRef;
