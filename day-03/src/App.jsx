import './App.css';

import Modal from './with-pattern/modal/Modal';
import { useState } from 'react';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-col items-center">
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Modal.Header>
          <h2>Welcome!</h2>
        </Modal.Header>
        <Modal.Body>
          <p>This is a modal built with the Compound Component pattern.</p>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={() => setIsOpen(false)}>Close</button>
          <button onClick={() => alert('Action performed!')}>Do Action</button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default App;
