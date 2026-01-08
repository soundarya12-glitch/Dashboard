import { useState } from "react";

export default function NavigationSettings() {
  const [searchBar, setSearchBar] = useState(true);
  const [notifications, setNotifications] = useState(true);

  return (
    <div className="space-y-4 text-sm  text-white">
      <div className="flex items-center justify-between">
      </div>

      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={searchBar}
          onChange={(e) => setSearchBar(e.target.checked)}
          className="accent-white"
       
        />
        <span>Search Bar</span>
      </label>

      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={notifications}
          onChange={(e) => setNotifications(e.target.checked)}
          className="accent-white"
          
        />
        <span>Notifications</span>
      </label>
    </div>
  );
}
