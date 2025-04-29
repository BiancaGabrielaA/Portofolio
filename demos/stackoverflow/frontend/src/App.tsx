import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import Dashboard from './pages/Dashboard';
import { useEffect, useState } from 'react';
import { API_ROUTES } from './config/api';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null); 
  const navigate = useNavigate();

  useEffect(() => {

    fetch(API_ROUTES.CHECK_AUTH, {
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.authenticated) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      })
      .catch((err) => {
        console.error('Network error checking auth:', err);
        setIsAuthenticated(false);
      });
  }, []);

  useEffect(() => {
    if (isAuthenticated === null) return; 
    if (isAuthenticated) {
      navigate('/dashboard');
    } else {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  if (isAuthenticated === null) {
    return <div>Loading...</div>;
  }

  return (
    <Routes>
      <Route path="/login" element={<AuthPage setIsAuthenticated={setIsAuthenticated} />} />
      <Route
        path="/dashboard"
        element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />}
      />
      <Route path="/" element={<Navigate to="/login" />} />
    </Routes>
  );
}

export default App;
