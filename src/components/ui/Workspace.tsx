import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function Email() {
   const [searchBar, setSearchBar] = useState(true);

  return (
    <div className="space-y-4 mb-7  pb-6 text-sm text-white">
      {/* PASSWORD INPUT */}
      <div className="space-y-1 mb-3">
        <label className="text-xs   text-stone-400">
   Default Workspace
        </label>

        <div className="relative mt-2">
          <input
            type="text"
            className="w-120 pt-2 mb-2 rounded-md bg-stone-800 border border-stone-600 px-2 py-2 pr-10 outline-none "
          />

        
        </div>
      </div>

      {/* CHECKBOX */}
        <label className="text-xs text-stone-400">
If left empty, the default workspace will be the last visited workspace
        </label>


    </div>
  );
}
