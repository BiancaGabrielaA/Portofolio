import React, { useState } from 'react';
import { FiUser } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { API_ROUTES } from '../config/api';
import { useAuth } from '../context/AuthContext';

const collections = [
  { name: "Get Questions", method: "GET", url: "/questions" },
  { name: "Post Question", method: "POST", url: "/questions" },
  { name: "Delete Question", method: "DELETE", url: "/questions/:id" },
  { name: "Update Question", method: "PATCH", url: "/questions/:id" },
];

interface SidebarProps {
  onSelectCollection: (method: string, url: string) => void;
}

export default function Sidebar({ onSelectCollection}: SidebarProps) {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState<number | null>(null); 
  const { setIsAuthenticated } = useAuth();

  const handleLogout = async () => {
    try {
      const response = await fetch(API_ROUTES.LOGOUT, {
        method: 'GET',
        credentials: 'include',
      });
  
      const data = await response.json();
  
      if (data.success) {
        setIsAuthenticated(false);
        navigate('/login');
      } else {
        toast.error(data.message || 'Logout unsuccessful');
      }
    } catch (networkError) {
      console.error('Network error during logout:', networkError);
      toast.error('Network error—could not reach server');
    }
  };

  const handleSelect = (method: string, url: string, index: number) => {
    onSelectCollection(method, url);
    setActiveIndex(index);
  };

  return (
    <div>
<div className="w-64 bg-gray-800 text-white flex flex-col justify-between min-h-screen p-4">
      <div>
        <h2 className="text-xl font-bold mb-4">Collections</h2>
        <div className="space-y-2">
          {collections.map((item, idx) => (
            <div
              key={idx}
              onClick={() => handleSelect(item.method, item.url, idx)}
              className={`p-3 rounded-md cursor-pointer ${
                activeIndex === idx ? 'bg-blue-600' : 'bg-gray-700 hover:bg-gray-600'
              }`}
            >
              {item.name}
            </div>
          ))}
        </div>
      </div>

      {/* User Profile + Logout */}
      <div className="flex items-center space-x-3 p-2 bg-gray-700 rounded-md cursor-pointer">
        <FiUser className="text-white size-6" />
        <div>
          <div className="font-semibold">Bianca</div>
          <div
            className="mt-1 border border-gray-400 text-gray-300 text-xs rounded-md px-2 py-1 hover:bg-red-500 hover:text-white hover:border-red-500 transition duration-200"
            onClick={handleLogout}
          >
            Logout
          </div>
        </div>
      </div>
    </div>
    <ToastContainer />
    </div>
    
  );
}
