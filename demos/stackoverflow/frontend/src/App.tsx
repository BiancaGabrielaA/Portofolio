import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import { useEffect, useState } from 'react';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if the user is logged in by hitting backend
    fetch('http://localhost:5050/api/me', {
      credentials: 'include'
    })
      .then(res => res.json())
      .then(data => setIsAuthenticated(data?.user ? true : false));
  }, []);

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/"
        element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />}
      />
    </Routes>
  );
}

export default App;
