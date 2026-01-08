import { useState } from "react";
const today = new Date().toLocaleDateString("en-GB"); 
export default function Emailinbox() {
     const [checked, setChecked] = useState(false);
  return (
    <div className=" rounded-xl  mt-1 text-black">
   

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Simultaneous Sessions */}
        <div>
          <label className="text-sm  text-white font-medium">
     Email Status
          </label>
           <input defaultValue="open"
          disabled
         
            className="mt-1 bg-stone-800
              text-white
              border border-stone-600
              
              focus
             w-full rounded-md  p-2"
             
          />
           </div>
           </div>
           </div>


     
     
  );
}
