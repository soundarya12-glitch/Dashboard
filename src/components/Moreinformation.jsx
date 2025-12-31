import { useState } from "react";
const today = new Date().toLocaleDateString("en-GB"); 
export default function MoreInformation() {
     const [checked, setChecked] = useState(false);
  return (
    <div className=" rounded-xl  mt-1 text-black">
   

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Simultaneous Sessions */}
        <div>
          <label className="text-sm  text-white font-medium">
     More Information
          </label>
          <input value={today}
          disabled
         
            className="mt-1 bg-stone-800
              text-white
              border border-stone-600
              
              focus
             w-full rounded-md  p-2"
             
          />
            <span className="text-white mb-7">Asia kolkata</span>
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
       <span className="text-white pl-2">Read by recipents</span>
        </div>

        {/* Restrict IP */}
        <div className="md:col-span-2">
          <input
        type="checkbox"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
        className="bg-stone-600"
      />
       <span className="text-white pl-2">Send  recipents</span>
        </div>

        </div>

        {/* User Type */}
          
      </div>
      


     
     
  );
}
