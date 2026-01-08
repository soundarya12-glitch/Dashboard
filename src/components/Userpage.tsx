import React, { useState } from "react";

function ProfilePanel({ profileId, avatarUrl }) {
  return (
    <div className="border p-4 rounded bg-stone-700 text-white">
      <img src={avatarUrl} alt="avatar" className="w-20 h-20 rounded-full" />
      <p className="mt-2">ID: {profileId}</p>
    </div>
  );
}

export default function UserPage() {
  const [user, setUser] = useState({
    id: "USER_101",
    avatar: "https://i.pravatar.cc/150?img=1",
  });

  const changeUser = () => {
    setUser({
      id: "USER_202",
      avatar: "https://i.pravatar.cc/150?img=8",
    });
  };

  return (
    <div className="flex gap-6 p-4">
      <ProfilePanel profileId={user.id} avatarUrl={user.avatar} />
      <button
        onClick={changeUser}
        className="h-fit px-4 py-2 bg-blue-600 text-white rounded"
      >
        Change User
      </button>
    </div>
  );
}
