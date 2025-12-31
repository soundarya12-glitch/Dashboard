import React from 'react'
import TextInput from "./Textinput";
export default function Roles() {
  return (
    <div className="min-h-screen border border-stone-600 bg-black p-2 flex justify-center">
            {/* WHITE CARD */}
            <div className=" w-full max-w-5xl rounded-xl p-2">
        
              {/* TITLE */}
              <h2 className="text-lg font-semibold  pb-2  text-white mb-6">
                Add Modules
              </h2>
      
              {/* FORM GRID */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      
                {/* Title */}
                <div>
                  <label className="text-sm font-medium  mt-1  pr-20  text-white">
                     Modules Profile
                  </label>
                  <TextInput 
                 
                    className=" mt-2 h-7   pl-2 pr-2  border border-gray-400
           hover:border-gray-900
          focus:border-pink-400
          focus:ring-0
          focus:outline-none  text-white  bg-stone-600"
                  />
                </div>
                </div>
                </div>
                </div>
  )
}
