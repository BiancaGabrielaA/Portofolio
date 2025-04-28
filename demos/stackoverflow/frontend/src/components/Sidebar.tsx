import React, { useState } from 'react';
import { FiUser } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const collections = [
    { name: "Get Questions", method: "GET", url: "/questions" },
    { name: "Post Question", method: "POST", url: "/questions" },
    { name: "Delete Question", method: "DELETE", url: "/questions/:id" },
    { name: "Update Question", method: "PATCH", url: "/questions/:id" },
];
export default function Sidebar () {
    const navigate = useNavigate();
    
    const [selectedOption, setSelectedOption] = useState<string>("GET");
    const [url, setUrl] = useState<string>("");

    const handleOptionSelect = (option: string) => {
        setSelectedOption(option);
    };

    const handleUrlChange = (newUrl: string) => {
        setUrl(newUrl);
    };

    const handleCollectionClick = (collection: { name: string, method: string, url: string }) => {
        setSelectedOption(collection.method);
        setUrl(collection.url);
    };

    const handleLogout = async () => {
        try {
          await fetch('http://localhost:5050/auth/logout', {
            method: 'GET',        // logout is usually a POST for best practice
            credentials: 'include'
          });
          navigate('/login'); // redirect after logout
        } catch (error) {
          console.error('Logout failed:', error);
        }
      };

    return (
        <div className="w-64 bg-gray-800 text-white flex flex-col justify-between min-h-screen p-4">
            <div>
                <h2 className="text-xl font-bold mb-4">Collections</h2>
                <ul className="space-y-2">
                {collections.map((item, index) => (
                    <li key={index}>
                    <button 
                        onClick={() => handleCollectionClick(item)} 
                        className="w-full text-left p-2 rounded hover:bg-gray-700"
                    >
                        {item.name}
                    </button>
                    </li>
                ))}
                </ul>
            </div>
            <div className="flex items-center space-x-3 p-2 bg-gray-700 rounded-md cursor-pointer">
                <FiUser className="text-white size-6" />
                <div>
                    <div className="font-semibold">Bianca</div>
                    <div  className="mt-1 border border-gray-400 text-gray-300 text-xs rounded-md px-2 py-1 hover:bg-red-500 hover:text-white hover:border-red-500 transition duration-200" onClick={handleLogout}>Logout</div>
                </div>
            </div>
            
        </div>
    )
}