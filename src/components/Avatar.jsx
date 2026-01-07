import React, { useState, useEffect } from "react";

export default function ProfileAvatar({
  username = "",
  profileId,       
  size = "md",     // "sm" or "md"
}) {
  const [image, setImage] = useState(null);
  const storageKey = `avatar-profile-${profileId}`;

  useEffect(() => {
    const storedAvatar = localStorage.getItem(storageKey);
    if (storedAvatar) setImage(storedAvatar);
    else setImage(null);
  }, [storageKey]);

  useEffect(() => {
    if (image) localStorage.setItem(storageKey, image);
    else localStorage.removeItem(storageKey);
  }, [image, storageKey]);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => setImage(ev.target.result);
    reader.readAsDataURL(file);
  };

  const handleRemove = () => setImage(null);

  const letter = username ? username.charAt(0).toUpperCase() : "?";

  // 🔥 Size classes
  const sizeClass = size === "sm" ? "w-6 h-6 text-xs" : "w-50 h-50 text-5xl";

  return (
    <div className={size === "sm" ? "" : "flex flex-col items-center gap-2"}>
      <label className={`relative ${sizeClass} border border-stone-500 rounded-xl flex items-center justify-center cursor-pointer overflow-hidden group`}>

        {image ? (
          <img src={image} alt={username} className="w-full h-full object-cover" />
        ) : (
          <div className={`w-full h-full flex items-center justify-center bg-stone-600 text-white font-bold ${size === "sm" ? "text-xs" : "text-5xl"}`}>
            {letter}
          </div>
        )}

        {size !== "sm" && (
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-sm transition">
            Change
          </div>
        )}

        {size !== "sm" && (
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageUpload}
          />
        )}

      </label>

      {image && size !== "sm" && (
        <button
          onClick={handleRemove}
          className="text-xs text-red-500 hover:underline"
        >
          Remove
        </button>
      )}
    </div>
  );
}
