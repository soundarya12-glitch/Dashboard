import React, { useState } from "react";
import EditPage from "./Editpage";
import Addsection from "./Addsection";
import Roles from "./Roles";
import Information from "./Information";
import Settings from "./Settings";
// Simple input component

// AddNewSection Component
  
// Main Component
export default function UserTabs() {
  const [activeTab, setActiveTab] = useState("User Details");

  return (
    <div className="min-h-screen bg-black p-6 border border-stone-600 ">
      {/* Tabs */}
      <div className="flex gap-6  border-stone-600">
        {["User Details", "Roles & Permissions", "More Information", "Settings"].map(
          (tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 text-white ${
                activeTab === tab ? "border-b-2 border-white" : "opacity-60"
              }`}
            >
              {tab}
            </button>
          )
        )}
      </div>

      {/* Tab Content */}
      <div className="mt-6">
        {activeTab === "User Details" && (
         <div className="text-white">
 <Addsection/>
    </div>
        )}
        {activeTab === "Roles & Permissions" && (
          <div>

            <Roles/>
            </div>
        )}
        {activeTab === "More Information" && (
          <div >
            <Information/>
          </div>
        )}
        {activeTab === "Settings" && (
          <div>
            <div className="text-white mb-4">
<Settings/>

            </div>
          
          </div>
        )}
      </div>
    </div>
  );
}
