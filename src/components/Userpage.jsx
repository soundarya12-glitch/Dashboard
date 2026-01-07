import React, { useState } from "react";
import ProfilePanel from "./ProfilePanel";

export default function UserPage() {
  const [user, setUser] = useState({
    id: "USER_101",
    avatar: "https://i.pravatar.cc/150?img=1",
  });

  // simulate user change
  const changeUser = () => {
    setUser({
      id: "USER_202",
      avatar: "https://i.pravatar.cc/150?img=8",
    });
  };

  return (
    <div className="flex gap-6">
      <ProfilePanel
        profileId={user.id}
        avatarUrl={user.avatar}
      />

      <button
        onClick={changeUser}
        className="h-fit px-4 py-2 bg-blue-600 text-white rounded"
      >
        Change User
      </button>
    </div>
  );
}
