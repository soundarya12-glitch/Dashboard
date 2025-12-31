import React, { useState } from "react";
import EditPage from "./Editpage";
import Addsection from "./Addsection";
import Roles from "./Roles";
import Editroles from "./Editroles";
import Information from "./Information";
import Settings from "./Settings";
import Connections from "./Connections";
// Simple input component

// AddNewSection Component

  
// Main Component
export default function EditTabs() {
  const [activeTab, setActiveTab] = useState("User Details");

  return (
    <div className="min-h-screen bg-black p-6 border border-stone-600 ">
      {/* Tabs */}
      <div className="flex gap-6 border-b border-stone-600">
        {["User Details", "Roles & Permissions", "More Information", "Settings","Connections"].map(
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
 <EditPage/>
    </div>
        )}
        {activeTab === "Roles & Permissions" && (
          <div>

        <Editroles/>
            </div>
        )}
        {activeTab === "More Information" && (
          <div >
            <Information/>
          </div>
        )}
        {activeTab === "Connections" && (
          <div >
          <Connections/>
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
