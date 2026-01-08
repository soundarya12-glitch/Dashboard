import { useState, useEffect } from "react";
import ProfileAvatar from "./Avatar";

export default function ShareModal({ onClose, sharedWith = [], onSave }) {
  // Example 4 users
  const allUsers = [
    "soundarya2300@gmail.com",
    "person2@example.com",
    "sabithabharathi64@gmail.com",
    "person4@example.com",
  ];

  const [selectedUsers, setSelectedUsers] = useState(sharedWith);

  const toggleUser = (user) => {
    if (selectedUsers.includes(user)) {
      setSelectedUsers(selectedUsers.filter((u) => u !== user));
    } else {
      setSelectedUsers([...selectedUsers, user]);
    }
  };

  const handleShare = () => {
    onSave(selectedUsers); // Send to parent
    alert("Shared successfully!"); 
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-stone-900 p-6 rounded w-92 flex flex-col gap-4">
        <h2 className="text-lg font-semibold text-white">Share Profile</h2>

        <div className="flex flex-col gap-2 max-h-40 overflow-y-auto">
          {allUsers.map((user) => (
            <button
              key={user}
              onClick={() => toggleUser(user)}
              className={`flex items-center gap-2 px-3 py-1 rounded ${
                selectedUsers.includes(user) ? "text-white" : "bg-stone-700 text-white"
              }`}
            >
              <ProfileAvatar username={user} size="sm" profileId={undefined} />
              <span className="text-base">{user}</span>
            </button>
          ))}
        </div>

        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-3 py-1 bg-stone-600 text-white rounded"
          >
            Cancel
          </button>
          <button
            onClick={handleShare}
            className="px-3 py-1 bg-stone-600 text-white rounded"
          >
            Share
          </button>
        </div>
      </div>
    </div>
  );
}
