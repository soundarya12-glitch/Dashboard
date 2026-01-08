import { useState } from "react";

export default function ListSettings() {
  const [sidebar, setSidebar] = useState(true);
  const [bulkActions, setBulkActions] = useState(true);

  return (
    <div className="space-y-4 text-sm text-white">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-base">List Settings</h3>
        <span>⌃</span>
      </div>

      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={sidebar}
          onChange={(e) => setSidebar(e.target.checked)}
          className="accent-white"
        />
        <span>Sidebar</span>
      </label>

      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={bulkActions}
          onChange={(e) => setBulkActions(e.target.checked)}
          className="accent-white"
        />
        <span>Bulk Actions</span>
      </label>
         <label className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={bulkActions}
          onChange={(e) => setBulkActions(e.target.checked)}
          className="accent-white "
        />
        <span>View Actions</span>
      </label>
    </div>
  );
}
