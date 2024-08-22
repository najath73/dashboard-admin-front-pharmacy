import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes';
import { AuthProvider } from './hooks/AuthContext';


import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
        <AppRoutes />
      </div>
    </Router>
  </AuthProvider>
  );
}

export default App;
