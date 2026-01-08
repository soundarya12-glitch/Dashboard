import { useState } from "react";

const ROLES = [
  "Academics User",
  "Accounts Manager",
  "Accounts User",
  "Analytics",
  "Auditor",
  "Customer",
  "Employee",
  "HR Manager",
  "HR User",
  "Projects Manager",
  "Projects User",
  "Purchase Manager",
  "Sales Manager",
  "Sales User",
  "Stock Manager",
  "Support Team",
  "System Manager",
  "Website Manager",
  "Workspace Manager",
];

export default function RolesCheckbox() {
  const [selected, setSelected] = useState([]);
  const [saved, setSaved] = useState(false);
  const [unsaved, setUnsaved] = useState(false);

  const toggleRole = (role) => {
    setSelected((prev) =>
      prev.includes(role)
        ? prev.filter((r) => r !== role)
        : [...prev, role]
    );
    setSaved(false); // manual change → remove Saved
    setUnsaved(true); // manual change → show Unsaved
  };

  const selectAll = () => {
    setSelected(ROLES);
    setSaved(true);
    setUnsaved(false); // Select All → remove Unsaved
  };

  const unselectAll = () => {
    setSelected([]);
    setSaved(false);
    setUnsaved(true); // manual unselect → Unsaved
  };

  return (
    <div className="mt-2 border rounded-lg p-4">
      {/* Buttons */}
      <div className="flex gap-3 mb-4 items-center">
        <button
          onClick={selectAll}
          className="px-3 py-1 text-sm bg-stone-700 rounded text-white"
        >
          Select All
        </button>
        <button
          onClick={unselectAll}
          className="px-3 py-1 text-sm bg-stone-700 rounded text-white"
        >
          Unselect All
        </button>

        {/* Saved / Unsaved Indicators */}
        {saved && (
          <div className="ml-4 flex items-center gap-2 px-3 py-1 rounded-full 
                          bg-emerald-500/10 text-emerald-400 text-xs font-medium
                          border border-emerald-500/30">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            Saved
          </div>
        )}

        {unsaved && !saved && (
          <div className="ml-4 flex items-center gap-2 px-3 py-1 rounded-full 
                          bg-red-500/10 text-red-400 text-xs font-medium
                          border border-red-500/30">
            Unsaved
          </div>
        )}
      </div>

      {/* Checkbox Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {ROLES.map((role) => (
          <label key={role} className="flex items-center gap-2 text-sm text-white">
            <input
              type="checkbox"
              checked={selected.includes(role)}
              onChange={() => toggleRole(role)}
            />
            {role}
          </label>
        ))}
      </div>
    </div>
  );
}
