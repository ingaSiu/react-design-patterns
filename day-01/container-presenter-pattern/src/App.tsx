import './App.css';

import ProductListContainer from './with-pattern/components/task/ProductListContainer.js';

// import UserProfileContainer from './with-pattern/components/profile/UserProfileContainer';

//import UserProfile from './messy-way/components/UserProfile';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-start justify-center">
      {/* <UserProfileContainer userId={3} /> */}
      <div className="w-full max-w-7xl p-6">
        <ProductListContainer />
      </div>
    </div>
  );
}

export default App;

