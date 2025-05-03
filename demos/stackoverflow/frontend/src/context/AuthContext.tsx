import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import axios from 'axios';
import { API_ROUTES } from '../config/api';

type AuthContextType = {
  isAuthenticated: boolean;
  setIsAuthenticated: (value: boolean) => void;
  user: { name: string; email: string } | null;
  setUser: (user: { name: string; email: string }) => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<{ name: string; email: string; } | null>(null);

  useEffect(() => {
    axios
      .get(API_ROUTES.CHECK_AUTH, { withCredentials: true })
      .then((res) => {
        setIsAuthenticated(res.data.authenticated);
        if(res.data.authenticated == true){
          setUser({
            name: res.data.user.name,
            email: res.data.user.email,
          });
        }
      })
      .catch((err) => {
        console.error('Auth check failed:', err);
        setIsAuthenticated(false);
      });
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
