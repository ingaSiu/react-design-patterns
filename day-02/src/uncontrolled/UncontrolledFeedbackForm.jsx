import { useRef } from 'react';

export default function UncontrolledFeedbackForm() {
  // The code initializes three "references"
  // In React, useRef acts like a "pointer" to a physical DOM element.
  // By adding ref={nameRef} to an <input>, you give React a direct line to that specific HTML element on the screen.
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  // Unlike state-driven forms, this component doesn't know what you're typing while you're
  // typing it. It only looks at the data when the Submit button is clicked.
  // Inside handleSubmit, the code accesses the data via .current.value.
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const message = messageRef.current.value;

    // The code performs basic validation checks before "sending" the data
    if (!name) {
      nameRef.current.focus();
      return;
    }
    if (!email.includes('@')) {
      emailRef.current.focus();
      return;
    }
    if (!message) {
      messageRef.current.focus();
      return;
    }

    console.log('Form submitted:', { name, email, message });
  };

  return (
    <form className="flex flex-col" onSubmit={handleSubmit}>
      <input className="border rounded-2xl p-2 my-3" type="text" ref={nameRef} placeholder="Name" />
      <input className="border rounded-2xl p-2 my-3" type="email" ref={emailRef} placeholder="Email" />
      <textarea className="border rounded-2xl p-2 my-3" ref={messageRef} placeholder="Your message" />
      <button className="bg-purple-500 text-white p-1 rounded" type="submit">
        Send Feedback
      </button>
    </form>
  );
}
