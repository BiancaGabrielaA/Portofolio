import React, { useState } from 'react';
import { FiUser } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { API_ROUTES } from '../config/api';
import { useAuth } from '../context/AuthContext';
import { FiChevronDown, FiChevronRight } from 'react-icons/fi';

const collections = [
  {
    id: 1,
    category: "Users",
    routes: [
      { name: "Get My Info", method: "GET", url: "/users/get-my-info" },
      { name: "Get User Info", method: "GET", url: "/users/get-info/:userId"},
      { name: "Get All Users", method: "GET", url: "/users/get-all" },
    ]
  },
  {
    id: 2,
    category: "Questions",
    routes: [
      { name: "Get All Questions", method: "GET", url: "/questions/get-all" },
      { name: "Get Question", method: "GET", url: "/questions/get-question/:questionId" },
      { name: "Post Question", method: "POST", url: "/questions/insert" },
      { name: "Get User's Questions", method: "GET", url: "/questions/get-all/:userId" },
      { name: "Delete Question", method: "DELETE", url: "/questions/delete-question/:questionId" },
      { name: "Update Question", method: "PATCH", url: "/questions/update-question/:questionId" },
    ]
  },
  {
    id: 3,
    category: "Answers",
    routes: [
      { name: "Get All Questions", method: "GET", url: "/questions/get-all" },
      { name: "Get Question", method: "GET", url: "/questions/get-question/:questionId" },
    ]
  },
];

interface SidebarProps {
  onSelectCollection: (method: string, url: string) => void;
}

export default function Sidebar({ onSelectCollection }: SidebarProps) {
  const navigate = useNavigate();
  const { user, setIsAuthenticated } = useAuth();
  const [expandedCategory, setExpandedCategory] = useState<number | null>(null);

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

  const toggleCategory = (id: number) => {
    setExpandedCategory(prev => (prev === id ? null : id));
  };

  return (
      <div className="w-64 bg-gray-800 text-white flex flex-col min-h-screen">
        {/* Top: Sidebar content */}
        <div className="flex-1 p-4 flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-bold mb-4">Collections</h2>
            <div className="space-y-2">
              {collections.map((collection) => (
                <div key={collection.id}>
                  <div
                    onClick={() => toggleCategory(collection.id)}
                    className="flex items-center justify-between p-3 bg-gray-700 rounded-md cursor-pointer hover:bg-gray-600"
                  >
                    <span className="font-semibold">{collection.category}</span>
                    {expandedCategory === collection.id ? <FiChevronDown /> : <FiChevronRight />}
                  </div>
    
                  {expandedCategory === collection.id && (
                    <div className="ml-4 mt-2 space-y-1">
                      {collection.routes.map((route, idx) => (
                        <div
                          key={idx}
                          onClick={() => onSelectCollection(route.method, route.url)}
                          className="text-sm bg-gray-600 hover:bg-blue-600 rounded px-2 py-1 cursor-pointer"
                        >
                          <span className="font-medium">{route.method}</span> — {route.name}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
    
        <div className="p-4 bg-gray-700 flex items-start space-x-3 border-t border-gray-600">
          <FiUser className="text-white size-6 flex-shrink-0" />
          <div className="flex flex-col flex-grow min-w-0">
            <div className="font-semibold text-white break-words text-sm leading-tight">
              {user?.name || user?.email}
            </div>
            <div
              className="mt-1 border border-gray-400 text-gray-300 text-xs rounded-md px-2 py-1 hover:bg-red-500 hover:text-white hover:border-red-500 transition duration-200 cursor-pointer w-fit"
              onClick={handleLogout}
            >
              Logout
            </div>
          </div>
        </div>
    
        <ToastContainer />
      </div>
    );
}
