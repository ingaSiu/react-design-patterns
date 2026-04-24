import { toggleReducer } from '../reducers/toggle-reducer';
import { useReducer } from 'react';

export default function Toggle({ reducer = toggleReducer, onToggle }) {
  // define two things: reducer and state value (on & clicks)
  // it returns a current state value and dispatch function (with it dispatch an action to reducer)
  const [state, dispatch] = useReducer(reducer, { on: false, clicks: 0 });
  // destructure values from the state
  const { on, clicks } = state;

  function handleToggle() {
    // calling dispatch function with 'toggle' action
    dispatch({ type: 'toggle' });
    onToggle?.(!on);
  }

  return (
    <button
      onClick={handleToggle}
      className={`px-4 py-2 rounded-md text-white cursor-pointer ${on ? 'bg-green-600' : 'bg-red-500'}`}
    >
      {on ? 'ON' : 'OFF'} (Clicks: {clicks})
    </button>
  );
}
