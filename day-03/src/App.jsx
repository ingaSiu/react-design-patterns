import './App.css';

import Modal from './messy/Modal';

function App() {
  return (
    <div className="flex flex-col items-center">
      <Modal
        title="Delete Acount"
        body="Are you sure you want to delete your account?"
        primaryAction={<button>Delete</button>}
        secondaryAction={<button>Cancel</button>}
      />
    </div>
  );
}

export default App;
