export default function StatusSettings() {
  return (
    <div className=" rounded-xl  mt-1 text-black">
   

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Simultaneous Sessions */}
        <div>
          <label className="text-sm  text-white font-medium">
     Communication Type
          </label>
          <input defaultValue="Communication"
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
          <label className="text-sm   text-white font-medium">Status</label>
          <input defaultValue="Open"
            disabled
            className="mt-1 bg-stone-800
              text-white
              border border-stone-600
              
              focus
             w-full rounded-md  p-2"
          />
          
        </div>

        {/* Restrict IP */}
        <div className="md:col-span-2">
         
        </div>

        {/* User Type */}
            <div>
          <label className="text-sm font-medium text-white ">Sent or Received
</label>
            <input  defaultValue="Sent"
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
