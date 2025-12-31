import React from 'react'
import TextInput from "./Textinput";
import RolesCheckbox from './Editcheckbox';
export default function Editroles() {
  const LOCATIONS = ["Account", "Business", "Finiance"];
  return (
    <div className="min-h-screen border border-stone-600 bg-black p-2 flex justify-center">
            {/* WHITE CARD */}
            <div className=" w-full max-w-5xl rounded-xl p-2">
        
              {/* TITLE */}
              <h2 className="text-lg font-semibold  -pb-1  text-white mb-6">
                Role
              </h2>
      
              {/* FORM GRID */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      
                {/* Title */}
                <div>
                  <label className="text-sm font-medium  mb-2   pr-20  text-white">
                     Role Profile
                  </label>
                <select

  onChange={(e) => updateField("location", e.target.value)}
  className="mt-2 w-full h-8 rounded-2xl px-3
  border border-gray-400 text-white bg-stone-600"
>
  <option value="">Select Location</option>
  {LOCATIONS.map((loc) => (
    <option key={loc} value={loc}>
      {loc}
    </option>
  ))}
</select>
                </div>
                </div>
                <RolesCheckbox/>
                </div>
                </div>
  )
}
