// import AutoFocusInput from './state-ref/components/AutoFocusInput';
// import Counter from './state-ref/components/Counter';
// import CounterWithRef from './state-ref/components/CounterWithRef';

import ControlledFeedbackForm from './controlled/ControlledFeedbackForm';

// import FeedbackForm from './messy/FeedbackForm';

function App() {
  return (
    <div className="flex flex-col items-center">
      {/* <Counter />
      <AutoFocusInput />
      <CounterWithRef /> */}
      {/* <FeedbackForm /> */}
      <ControlledFeedbackForm />
    </div>
  );
}

export default App;
