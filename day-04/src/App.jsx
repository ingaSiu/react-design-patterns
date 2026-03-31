// import BikeTracker from './messy/BikeTracker';
// import CarTracker from './messy/CarTracker';
import MouseTracker from './with-pattern/MouseTracker';

function App() {
  return (
    <div className="flex flex-col items-center">
      {/* <CarTracker />
      <BikeTracker /> */}

      <MouseTracker
        render={(pos) => (
          <p>
            🚗 Car is at ({pos.x}, {pos.y})
          </p>
        )}
      />

      <MouseTracker
        render={({ x, y }) => (
          <p>
            🏍️ Bike is at ({x}, {y})
          </p>
        )}
      />
    </div>
  );
}

export default App;

