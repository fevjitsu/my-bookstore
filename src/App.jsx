// Alternative App.jsx with JSX routes
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<SignUp />} />
            {/* Add other routes here */}
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;