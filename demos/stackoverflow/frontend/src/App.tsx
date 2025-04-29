import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import Dashboard from './pages/Dashboard';
import { useEffect } from 'react';
import { useAuth } from './context/AuthContext';

function App() {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated === null) return;
    if (isAuthenticated) navigate('/dashboard');
    else navigate('/login');
  }, [isAuthenticated, navigate]);

  if (isAuthenticated === null) return <div>Loading...</div>;

  return (
    <Routes>
      <Route path="/login" element={<AuthPage/>} />
      <Route
        path="/dashboard"
        element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />}
      />
      <Route path="/" element={<Navigate to="/login" />} />
    </Routes>
  );
}

export default App;
