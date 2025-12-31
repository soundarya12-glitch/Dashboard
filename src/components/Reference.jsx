import { useState } from "react";
const today = new Date().toLocaleDateString("en-GB"); 
export default function Reference() {
     const [checked, setChecked] = useState(false);
  return (
    <div className=" rounded-xl  mt-1 text-black">
   

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Simultaneous Sessions */}
        <div>
          <label className="text-sm  text-white font-medium">
     Company
          </label>
           <input defaultValue="aaa"
          disabled
         
            className="mt-1 bg-stone-800
              text-white
              border border-stone-600
              
              focus
             w-full rounded-md  p-2"
             
          />
            <label className="text-sm  text-white font-medium">
     User
          </label>
          <input defaultValue="soundarya2300@gmail.com"
          disabled
         
            className="mt-1 bg-stone-800
              text-white
              border border-stone-600
              
              focus
             w-full rounded-md  p-2"
             
          />
          
        </div>

        {/* Login After */}
        <div>
         
        </div>

        {/* Login Before */}
        <div>
         
    <input
        type="checkbox"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
        className="bg-stone-600"
      />
       <span className="text-white pl-2">Unseen</span>
        <input
        type="checkbox"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
        className="bg-stone-600"
      />
       <span className="text-white pl-2">seen</span>
        </div>

        {/* Restrict IP */}
        <div className="md:col-span-2">
        
        </div>

        </div>

        {/* User Type */}
          
      </div>
      


     
     
  );
}
