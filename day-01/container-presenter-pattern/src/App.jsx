import './App.css';

import UserProfile from './messy-way/components/UserProfile';

//import UserProfileContainer from "./with-pattern/components/profile/UserProfileContainer";
function App() {
  return (
    <div>
      <UserProfile userId={1} />
    </div>
  );
}

export default App;

