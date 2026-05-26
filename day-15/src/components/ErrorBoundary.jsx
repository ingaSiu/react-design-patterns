import React from 'react';

// it is a class component, because error boundaries depens on a multiple lifecycle methods
// that only exist in React.Component class
class ErrorBoundary extends React.Component {
  // since this is a class component we do not use hooks, instead we define a state
  // as a non-primitive object
  state = {
    hasError: false,
    error: null,
    retryKey: 0,
  };

  // getDerivedStateFromError method gives us all the information about an error that
  // happens in your component
  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      error,
    };
  }

  // this method gives us information about error itself and also the error stack
  componentDidCatch(error, info) {
    console.error('Error:', error.message);
    console.error('Component stack:', info.componentStack);
  }
  // add retry - to see if the error have recovered
  // setState - updates the state variable (in class component)
  // after re-rendering it will check if there is still an error or not and show fitting UI
  handleRetry = () => {
    this.setState((prev) => ({
      hasError: false, // recovering from the error as I retry
      error: null,
      retryKey: prev.retryKey + 1, // on every retry click the value will update and cause re-render
    }));
  };

  // method for rendering
  render() {
    // extract state
    const { hasError, error, retryKey } = this.state;
    const { fallback: Fallback, children } = this.props;

    // return error
    if (hasError) {
      return <Fallback error={error} onRetry={this.handleRetry} />;
    }
    // if no error return children
    // uswe retry key as a key, because the moment the key value changes, React will re-render
    return <div key={retryKey}>{children}</div>;
  }
}

export default ErrorBoundary;
