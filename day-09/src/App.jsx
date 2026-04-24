import Toggle from './components/Toggle';
import { customToggleReducer } from './reducers/toggle-reducer';

function App() {
  return (
    <div className="flex flex-col items-center">
      <Toggle />
      <Toggle reducer={customToggleReducer} />
    </div>
  );
}

export default App;
