import { useState } from "react";

export default function FormSettings() {
  const [sidebar, setSidebar] = useState(true);
  const [timeline, setTimeline] = useState(true);
  const [dashboard, setDashboard] = useState(true);

  return (
    <div className="text-sm text-white space-y-3">
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
          checked={timeline}
          onChange={(e) => setTimeline(e.target.checked)}
          className="accent-white"
        />
        <span>Timeline</span>
      </label>

      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={dashboard}
          onChange={(e) => setDashboard(e.target.checked)}
          className="accent-white"
        />
        <span>Dashboard</span>
      </label>
    </div>
  );
}
