import React, { useState } from 'react';
import Dropdown from "../components/Dropdown";
import URLInput from "../components/InputText";
import ParamsRequest from "../components/ParamsRequest";
import Sidebar from "../components/Sidebar";

export default function Dashboard() {
  const [selectedOption, setSelectedOption] = useState<string>('GET');
  const [url, setUrl] = useState<string>('');

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
  };

  const handleUrlChange = (newUrl: string) => {
    setUrl(newUrl);
  };

  const handleCollectionSelect = (method: string, presetUrl: string) => {
    setSelectedOption(method);
    setUrl(presetUrl);
  };

  const handleSubmit = async () => {
    const response = await fetch(`http://localhost:5050${url}`, {
      method: selectedOption,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar onSelectCollection={handleCollectionSelect} />

      {/* Main Dashboard Content */}
      <div className="flex-1">
        <div className="flex items-center justify-center w-full mt-[100px]">
          <div className="p-5 flex items-center space-x-4 w-full max-w-5xl">
            <Dropdown
              options={['GET', 'POST', 'PUT', 'PATCH', 'DELETE']}
              value={selectedOption}  // controlled value here
              onSelect={handleOptionSelect}  // onSelect to handle changes
            />

            <div className="w-full">
              <URLInput value={url} onChange={handleUrlChange} />
            </div>

            <div>
              <button
                onClick={handleSubmit}
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
