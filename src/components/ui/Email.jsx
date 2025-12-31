import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function Email() {
   const [searchBar, setSearchBar] = useState(true);

  return (
    <div className="space-y-4  pb-6 text-sm text-white">
      {/* PASSWORD INPUT */}
      <div className="space-y-1 pb-">
        <label className="text-xs text-stone-400">
        Email Signature
        </label>

        <div className="relative mt-2">
          <input
            type="text"
            className="w-120 pt-2 rounded-md bg-stone-800 border border-stone-600 px-2 py-2 pr-10 outline-none "
          />

        
        </div>
      </div>

      {/* CHECKBOX */}
       <label className="flex items-center gap-2">
       <input
          type="checkbox"
          checked={searchBar}
          onChange={(e) => setSearchBar(e.target.checked)}
          className="accent-white"
       
        />
          <span>
Send Notifications For Email Threads</span>
      </label>

        <label className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={searchBar}
          onChange={(e) => setSearchBar(e.target.checked)}
          className="accent-white"
       
        />
        <span>
Send Me A Copy of Outgoing Emails</span>
      </label>
 <label className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={searchBar}
          onChange={(e) => setSearchBar(e.target.checked)}
          className="accent-white"
       
        />
        <span>

Allowed In Mentions</span>
      </label>

    </div>
  );
}
