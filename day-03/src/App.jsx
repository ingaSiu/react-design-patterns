import './App.css';

import Modal from './with-pattern/modal/Modal';
import { useState } from 'react';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-col items-center mt-3">
      <button onClick={() => setIsOpen(true)} className="cursor-pointer">
        Open Modal
      </button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Modal.Header>
          <h2 className="text-black">Welcome!</h2>
        </Modal.Header>
        <Modal.Body>
          <p className="text-black">This is a modal built with the Compound Component pattern.</p>
        </Modal.Body>
        <Modal.Footer>
          <button className="text-black" onClick={() => setIsOpen(false)}>
            Close
          </button>
          <button className="text-black" onClick={() => alert('Action performed!')}>
            Do Action
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default App;
