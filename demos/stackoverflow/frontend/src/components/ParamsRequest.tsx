import React, { useState } from "react";

const tabs = ["Params", "Authorization", "Headers", "Body"];

export default function ParamsRequest() {
  const [activeTab, setActiveTab] = useState("Params");

  return (
    <div className="w-full">
      {/* Tabs */}
      <div className="flex border-b border-gray-300">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-2 px-4 -mb-px border-b-2 font-medium text-sm ${
              activeTab === tab
                ? "border-blue-500 text-blue-500"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="p-4 border border-gray-300 rounded-b">
        {activeTab === "Params" && (
          <div>Params content here...</div>
        )}
        {activeTab === "Authorization" && (
          <div>Authorization content here...</div>
        )}
        {activeTab === "Headers" && (
          <div>Headers content here...</div>
        )}
        {activeTab === "Body" && (
          <div>Body content here...</div>
        )}
      </div>
    </div>
  );
}
