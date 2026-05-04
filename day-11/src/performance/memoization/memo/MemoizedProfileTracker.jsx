import MemoizedCard from './ProfileTracker';
import { useState } from 'react';

const MemoizedProfileTracker = () => {
  const [value, setValue] = useState('');
  // before memo() usage on every key press the child component re-rendered
  // after wrapping child component in memo(), child takes hardcoded prop value
  // and does not re-render on every key press, it just displays the value
  // if the prop value changes, then the child component will re-render
  return (
    <div className="p-2 border rounded">
      <input className="border rounded p-1" value={value} onChange={(e) => setValue(e.target.value)} />
      <MemoizedCard name="Tapas" />
    </div>
  );
};

export default MemoizedProfileTracker;
