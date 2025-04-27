import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import Dashboard from './pages/Dashboard';
import { useEffect, useState } from 'react';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:5050/auth/check-auth', {
      credentials: 'include'
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Unauthorized');
      })
      .then(data => {
        if (data.user) {
          setIsAuthenticated(true); // <- set it here ✅
          navigate('/dashboard');
        }
      })
      .catch(error => {
        console.log('User is not authenticated', error);
        setIsAuthenticated(false); // <- also make sure to set false
      });
  }, [navigate]);

  return (
    <Routes>
      <Route path="/login" element={<AuthPage />} />
      <Route
        path="/dashboard"
        element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />}
      />
      <Route
        path="/"
        element={<Navigate to="/login" />}
      />
    </Routes>
  );
}

export default App;
