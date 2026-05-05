import React from 'react';

//this is a react component that catches and handles runtime errors in the child components

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }; // Update state so the next render shows the fallback UI.
  }

  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught an error", error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong in this section.</h1>; // Fallback UI
    }
    return this.props.children;
  }
}

export default ErrorBoundary;