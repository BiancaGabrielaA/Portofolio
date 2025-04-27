import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);  // Track if it's login or register form
  const navigate = useNavigate();  // Replace `useHistory` with `useNavigate`


  // Handle Login form submission
  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const email = (e.target as HTMLFormElement).email.value;
    const password = (e.target as HTMLFormElement).password.value;

    // Perform login with API request (adjust URL and data as needed)
    fetch('http://localhost:5050/api/login', {
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
          // Handle failed login
        }
      });
  };

  // Handle Register form submission
  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const email = (e.target as HTMLFormElement).email.value;
    const password = (e.target as HTMLFormElement).password.value;

    // Perform registration with API request (adjust URL and data as needed)
    fetch('http://localhost:5050/api/register', {
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
          // Handle failed registration
        }
      });
  };

  // Google login redirect
  const googleLogin = () => {
    window.location.href = 'http://localhost:5050/auth/google';  // Adjust this URL to match your Google Auth route
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded-md shadow-md w-80">
        <h2 className="text-2xl mb-4">{isLogin ? 'Login' : 'Register'}</h2>

        {/* Toggle between Login and Register Forms */}
        <form onSubmit={isLogin ? handleLoginSubmit : handleRegisterSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block">Email</label>
            <input type="email" id="email" className="w-full p-2 border rounded" required />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block">Password</label>
            <input type="password" id="password" className="w-full p-2 border rounded" required />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
            {isLogin ? 'Login' : 'Register'}
          </button>
        </form>

        <div className="my-4 text-center">
          <button onClick={googleLogin} className="w-full bg-red-500 text-white p-2 rounded">
            Login with Google
          </button>
        </div>

        <div className="text-center">
          <p>
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <button
              className="text-blue-500 ml-2"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? 'Register' : 'Login'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
