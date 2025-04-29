import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { useAuth } from '../context/AuthContext';
import { API_ROUTES } from '../config/api';


export default function AuthPage() {
  const navigate = useNavigate(); 
  const { setUser, setIsAuthenticated } = useAuth();
  const [isLogin, setIsLogin] = useState(true);  
  const [form, setForm] = useState(
    {
      username: '',
      email: '',
      password: '',
      repeatPassword: ''
    }
  )

  const [passwordError, setPasswordError] = useState<string | null>(null); 
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);

  const validatePassword = (password: string) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    return passwordRegex.test(password);
  };
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleLoginSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    try {
      const response = await fetch(API_ROUTES.LOGIN, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
        credentials: 'include',  
      });
  
      const data = await response.json();
  
      if (response.ok && data.success) {
        setIsAuthenticated(true);
        setUser({ name: data.user.name, email: data.user.email });
      } else {
        setIsAuthenticated(false);
        toast.error(data.message || 'Login unsuccessful');
      }
    } catch (networkError) {
      console.error('Network or CORS error:', networkError);
      toast.error('Network error — could not reach server');
      setIsAuthenticated(false);
    }
  };

  const handleRegisterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (form.password !== form.repeatPassword) {
      toast.error('Passwords do not match');
      return;
    }
    if (!emailRegex.test(form.email)) {
      toast.error('Invalid email address');
      return;
    }
    if (!validatePassword(form.password)) {
      toast.error('Password must be at least 6 characters and include a letter, number, and special character');
      return;
    }

    try {
      const res = await fetch(API_ROUTES.REGISTER, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
        credentials: 'include',
      });
  
      if (!res.ok) {
        const err = await res.json();
        return toast.error(err.message || 'Registration failed');
      }
  
      const data = await res.json();
      if (data.success) {
        navigate('/dashboard');
      } else {
        toast.error('Register unsuccessful');
      }
    } catch (networkError) {
      console.error('Network or CORS error:', networkError);
      toast.error('Network error—could not reach server');
    }
  };

  const googleLogin = () => {
    window.location.href = API_ROUTES.GOOGLE_LOGIN;  
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded-md shadow-md w-80">
        <h2 className="text-2xl mb-4">{isLogin ? 'Login' : 'Register'}</h2>

        <form onSubmit={isLogin ? handleLoginSubmit : handleRegisterSubmit}>
          {!isLogin && (
            <div className="mb-4">
              <label htmlFor="username" className="block">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                value={form.username}
                onChange={(e) =>
                  setForm({ ...form, [e.target.name]: e.target.value })
                }
                className="w-full p-2 border rounded"
                required
              />
            </div>
          )}

          <div className="mb-4">
            <label htmlFor="email" className="block">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-2 border rounded"
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, [e.target.name]: e.target.value })
              }
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block">Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                className="w-full p-2 border rounded pr-10"
                value={form.password}
                onChange={(e) =>
                  setForm({ ...form, [e.target.name]: e.target.value })
                }
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(v => !v)}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 border-none focus:outline-none focus:ring-0"
                tabIndex={-1}
              >
                {showPassword ? <FiEye size={20} /> : <FiEyeOff size={20} />}
              </button>
            </div>
          </div>

          {!isLogin && (
            <div className="mb-4">
              <label htmlFor="repeatPassword" className="block">Repeat Password</label>
              <div className="relative">
                <input
                  type={showRepeatPassword ? 'text' : 'password'}
                  id="repeatPassword"
                  name="repeatPassword"
                  className="w-full p-2 border rounded pr-10"
                  value={form.repeatPassword}
                  onChange={(e) =>
                    setForm({ ...form, [e.target.name]: e.target.value })
                  }
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowRepeatPassword(v => !v)}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 border-none focus:outline-none focus:ring-0"
                  tabIndex={-1}
                >
                  {showRepeatPassword ? <FiEye size={20} /> : <FiEyeOff size={20} />}
                </button>
              </div>
              {passwordError && <p className="text-red-500 text-sm">{passwordError}</p>}
            </div>
          )}

          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded"
             > {isLogin ? 'Login' : 'Register'} </button>
        </form>

        <div className="my-4 text-center">
          <button onClick={googleLogin} className="w-full bg-red-500 text-white p-2 rounded"
            > Login with Google </button>
        </div>

        <div className="text-center">
          <p>
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <button
              className="text-blue-500 ml-2"
              onClick={() => {
                setIsLogin(!isLogin);
                setPasswordError(null);
              }}
            >
              {isLogin ? 'Register' : 'Login'}
            </button>
          </p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
