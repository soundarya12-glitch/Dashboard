import { useState } from "react";

export default function App() {

  const [appTheme, setAppTheme] = useState("");


 

  return (
    <div className="space-y-6 text-sm text-white">
      {/* TITLE */}
  
      {/* Mute Sounds */}
     
      {/* Desk Theme */}
      <div>
        <label className="block pb-3">Default App</label>
        <select
          value={appTheme}
          onChange={(e) => setAppTheme(e.target.value)}
          className=" w-120
              bg-stone-800
              text-white
              border border-stone-600
              rounded-xl
              focus
            "
        
        >
             <option></option>
          <option>ERP</option>
         
        </select>
      </div>

      {/* Banner Image */}
      
    </div>
  );
}
