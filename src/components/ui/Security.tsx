export default function Security() {
  return (
    <div className=" rounded-xl  mt-1 text-black">
   

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Simultaneous Sessions */}
        <div>
          <label className="text-sm  text-white font-medium">
            Simultaneous Sessions
          </label>
          <input
            type="number"
            defaultValue={2}
            className="mt-1 bg-stone-800
              text-white
              border border-stone-600
              
              focus
             w-full rounded-md  p-2"
          />
        </div>

        {/* Login After */}
        <div>
          <label className="text-sm text-white  font-medium">Login After</label>
          <input
            type="number"
            defaultValue={9}
            className="mt-1 bg-stone-800
              text-white
              border border-stone-600
              
              focus
             w-full rounded-md  p-2"
          />
          <p className="text-xs text-gray-500 mt-1">
            Allow user to login only after this hour (0-24)
          </p>
        </div>

        {/* Login Before */}
        <div>
          <label className="text-sm   text-white font-medium">Login Before</label>
          <input
            type="number"
            defaultValue={0}
            className="mt-1 bg-stone-800
              text-white
              border border-stone-600
              
              focus
             w-full rounded-md  p-2"
          />
          <p className="text-xs text-gray-500 mt-1">
            Allow user to login only before this hour (0-24)
          </p>
        </div>

        {/* Restrict IP */}
        <div className="md:col-span-2">
          <label className="text-sm font-medium">Restrict IP</label>
          <textarea
            rows={4} 
            className=" w-90 h-42 mt-1 bg-stone-800
              text-white
              border border-stone-600
              
              focus
              rounded-md  p-2 -ml-15 "
          />
          <p className="text-xs text-gray-500 mt-1">
            Multiple IPs comma separated. Partial IP allowed (111.111.111)
          </p>
        </div>

        {/* User Type */}
            <div>
          <label className="text-sm font-medium text-white ">User Type</label>
          <select className="mt-1 bg-stone-800
              text-white
              border border-stone-600
              
              focus
             w-full rounded-md  p-2">
            <option>Website User</option>
            <option>System User</option>
          </select>
          <p className="text-xs text-gray-500 mt-1">
            System User has access to desktop
          </p>
        </div>
      </div>
        </div>


     
     
  );
}
