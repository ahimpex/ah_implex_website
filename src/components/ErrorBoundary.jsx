import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Application Error:', error, errorInfo);
  }

  handleReset = () => {
    try {
      localStorage.clear();
      sessionStorage.clear();
    } catch {}
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#071830] text-white flex items-center justify-center p-6 text-center">
          <div className="max-w-md bg-brand-900 border border-brand-700 p-8 rounded-2xl shadow-2xl">
            <h2 className="text-xl font-bold font-serif mb-3 text-gold-400">
              A&amp;H IMPEX
            </h2>
            <p className="text-sm text-slate-300 mb-6">
              An unexpected issue occurred while loading the page. Click below to reload with fresh data.
            </p>
            <button
              onClick={this.handleReset}
              className="px-6 py-2.5 bg-brand-500 hover:bg-brand-600 text-white font-medium rounded-lg transition-colors shadow-md"
            >
              Refresh &amp; Reload
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
