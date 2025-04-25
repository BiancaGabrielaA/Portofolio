"use client";
import { useState } from "react";

const methods = ["GET", "POST", "PUT", "DELETE", "PATCH"];
const tabs = ["Params", "Authorization", "Headers", "Body", "Scripts", "Tests", "Settings"];

export default function Home() {
  const [method, setMethod] = useState("GET");
  const [url, setUrl] = useState("");
  const [activeTab, setActiveTab] = useState("Params");

  return (
    <div className="items-start justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-sans bg-gray-50 text-sm text-gray-800">

      {/* Header */}
      <h1 className="text-xl font-semibold">Postman Clone - Test your API</h1>

      {/* Request Bar */}
      <div className="w-full max-w-5xl flex gap-3">
        <select
          value={method}
          onChange={(e) => setMethod(e.target.value)}
          className="border border-gray-300 p-2 rounded bg-white"
        >
          {methods.map((m) => (
            <option key={m} value={m}>{m}</option>
          ))}
        </select>

        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter request URL"
          className="flex-grow p-2 border border-gray-300 rounded"
        />

        <button className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700">
          Send
        </button>
      </div>

      {/* Tabs */}
      <div className="w-full max-w-5xl">
        <div className="flex border-b border-gray-300 mb-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 text-sm border-b-2 ${
                activeTab === tab
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-blue-600"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="p-4 border rounded bg-white shadow-sm">
          {activeTab === "Params" && <div>Add query parameters here...</div>}
          {activeTab === "Authorization" && <div>Authorization settings go here...</div>}
          {activeTab === "Headers" && <div>Add custom headers...</div>}
          {activeTab === "Body" && (
            <textarea
              placeholder="Write your JSON body here"
              className="w-full h-40 p-2 border border-gray-300 rounded font-mono"
            />
          )}
          {activeTab === "Scripts" && <div>Add pre-request scripts...</div>}
          {activeTab === "Tests" && <div>Write tests for response validation...</div>}
          {activeTab === "Settings" && <div>Request-specific settings...</div>}
        </div>
      </div>
    </div>
  );
}
