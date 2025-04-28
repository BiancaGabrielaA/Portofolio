import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { FiEye, FiEyeOff } from 'react-icons/fi';

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);  
  const [passwordError, setPasswordError] = useState<string | null>(null); 
  const navigate = useNavigate();  
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);

  // Handle Login form submission
  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const email = (e.target as HTMLFormElement).email.value;
    const password = (e.target as HTMLFormElement).password.value;

    // Perform login with API request (adjust URL and data as needed)
    fetch('http://localhost:5050/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
      credentials: 'include',
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          navigate('/dashboard');
        } else {
          toast.error('Login unsuccessful', {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        }
      });
  };

  // Handle Register form submission
  const handleRegisterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const username = (e.target as HTMLFormElement).username.value;
    const email = (e.target as HTMLFormElement).email.value;
    const password = (e.target as HTMLFormElement).password.value;
    const repeatPassword = (e.target as HTMLFormElement).repeatPassword.value;

    // Check if passwords match
    if (password !== repeatPassword) {
      setPasswordError('Passwords do not match');
      return;
    }

    try {
      const res = await fetch('http://localhost:5050/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password }),
        credentials: 'include',
      });
  
      if (!res.ok) {
        // Server responded with 4xx/5xx
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

  // Google login redirect
  const googleLogin = () => {
    window.location.href = 'http://localhost:5050/auth/google';  // Adjust this URL to match your Google Auth route
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
              className="w-full p-2 border rounded"
              required
            />
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label htmlFor="password" className="block">Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                className="w-full p-2 border rounded pr-10"
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

          {/* Repeat Password Field */}
          {!isLogin && (
            <div className="mb-4">
              <label htmlFor="repeatPassword" className="block">Repeat Password</label>
              <div className="relative">
                <input
                  type={showRepeatPassword ? 'text' : 'password'}
                  id="repeatPassword"
                  className="w-full p-2 border rounded pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowRepeatPassword(v => !v)}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 border-none focus:outline-none focus:ring-0"
                  tabIndex={-1}
                >
                  {showRepeatPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
                </button>
              </div>
              {passwordError && <p className="text-red-500 text-sm">{passwordError}</p>}
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded"
          >
            {isLogin ? 'Login' : 'Register'}
          </button>
        </form>

        <div className="my-4 text-center">
          <button
            onClick={googleLogin}
            className="w-full bg-red-500 text-white p-2 rounded"
          >
            Login with Google
          </button>
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
