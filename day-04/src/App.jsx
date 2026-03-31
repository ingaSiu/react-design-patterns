import BikeTracker from './messy/BikeTracker';
import CarTracker from './messy/CarTracker';

function App() {
  return (
    <div className="flex flex-col items-center">
      <CarTracker />
      <BikeTracker />
    </div>
  );
}

export default App;

