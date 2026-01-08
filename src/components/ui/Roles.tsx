import { useState } from "react";
import TextInput from "./Textinput";

export default function Roles() {
  const [moduleName, setModuleName] = useState("");

  return (
    <div className="min-h-[120px] border border-stone-600 bg-black p-4 flex justify-center">
      {/* CARD */}
      <div className="w-full max-w-5xl rounded-xl p-4">

        {/* TITLE */}
        <h2 className="text-lg font-semibold text-white mb-6">
          Add Modules
        </h2>

        {/* FORM GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Module Name */}
          <div>
            <label className="block text-sm font-medium text-white mb-1">
              Modules Profile
            </label>

            <TextInput
              value={moduleName}
              onChange={(v) => setModuleName(v)}
              placeholder="Enter module name"
              className="
                h-8 px-3
                border border-gray-400
                text-white bg-stone-600
                rounded-lg
                hover:border-gray-900
                focus:border-pink-400
                focus:outline-none
              "
            />
          </div>

        </div>
      </div>
    </div>
  );
}
