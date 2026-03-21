import { useRef, useState } from 'react';

export default function FeedbackForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const messageRef = useRef(); // using ref for message

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      alert('Name required');
      return;
    }
    if (!email.includes('@')) {
      alert('Valid email required');
      return;
    }
    // this message value is not handled with state
    // but the ref makes the textarea focused if it is empty
    // this kind of handling is not correct and makes harder validation, rendering and testing
    if (!messageRef.current.value) {
      messageRef.current.focus();
      return;
    }
    console.log('Form submitted:', {
      name,
      email,
      message: messageRef.current.value,
    });
  };

  return (
    <form className="flex flex-col" onSubmit={handleSubmit}>
      <input
        className="border rounded-2xl p-2 my-3"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        className="border rounded-2xl p-2 my-3"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <textarea className="border rounded-2xl p-2 my-3" ref={messageRef} placeholder="Your message" />
      <button className="bg-purple-500 text-white p-1 rounded" type="submit">
        Send Feedback
      </button>
    </form>
  );
}
