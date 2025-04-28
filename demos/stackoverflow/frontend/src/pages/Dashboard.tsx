import Dropdown from "../components/Dropdown";
import React, { useState } from 'react';
import URLInput from "../components/InputText";
import ParamsRequest from "../components/ParamsRequest";
import Sidebar from "../components/Sidebar";

export default function Dashboard() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [url, setUrl] = useState<string>("");

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
  };

  const handleUrlChange = (newUrl: string) => {
    setUrl(newUrl);
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Dashboard Content */}
      <div className="flex-1">
        <div className="flex items-center justify-center w-full mt-[100px]">
          <div className="p-5 flex items-center space-x-4 w-full max-w-5xl">
            <Dropdown
              options={['GET', 'POST', 'PUT', 'PATCH', 'DELETE']}
              onSelect={handleOptionSelect}
            />

            <div className="w-full">
              <URLInput value={url} onChange={handleUrlChange} />
            </div>

            <div>
              <button
                onClick={() => console.log('Sending to backend:', { url, method: selectedOption })}
                className="bg-blue-500 text-white py-2 px-4 rounded"
              >
                Submit
              </button>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center w-full mt-8">
          <div className="w-full max-w-5xl">
            <ParamsRequest />
          </div>
        </div>
      </div>
    </div>
  );
}
