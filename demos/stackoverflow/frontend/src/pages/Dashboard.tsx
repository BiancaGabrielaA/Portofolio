import React, { useState } from 'react';
import Dropdown from "../components/Dropdown";
import URLInput from "../components/InputText";
import ParamsRequest from "../components/ParamsRequest";
import Sidebar from "../components/Sidebar";
import { API_BASE_URL } from "../config/api"

export default function Dashboard() {
  const [selectedOption, setSelectedOption] = useState<string>('GET');
  const [responseRequest, setResponseRequest] = useState("");
  const [url, setUrl] = useState<string>('');
  const [requestBody, setRequestBody] = useState<string>('{ "text": "Example question?}');

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
    try {
      const token = localStorage.getItem('authorizedToken');
  
      const options: RequestInit = {
        method: selectedOption,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        credentials: 'include',
      };
  
      if (selectedOption !== 'GET' && selectedOption !=='DELETE') {
        let parsedBody = requestBody;
        try {
          parsedBody = JSON.parse(requestBody);
        } catch (e) {
          setResponseRequest('Error: ' + e);
          return;
        }
  
        options.body = JSON.stringify(parsedBody);
      }
  
      const response = await fetch(API_BASE_URL + url, options);
      const text = await response.text();
  
      try {
        const data = JSON.parse(text);
        setResponseRequest(JSON.stringify(data, null, 2));
      } catch (e) {
        setResponseRequest(`❌ JSON parse failed: ${e}\nRaw response:\n${text}`);
      }
    } catch (error) {
      setResponseRequest(`Error: ${error}`);
    }
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
             <ParamsRequest body={requestBody} onBodyChange={setRequestBody} />
          </div>
        </div>
        <pre
          className="bg-gray-100 p-4 mt-4 rounded text-sm overflow-auto"
          style={{ height: 'calc(100vh - 600px)' }}
        >
          {responseRequest}
        </pre>
      </div>
    </div>
  );
}
