import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function EditProfilePage() {
  const { profileId } = useParams();
  const navigate = useNavigate();

  const [avatar, setAvatar] = useState(null);
  const [assigned, setAssigned] = useState("");
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState("");

  useEffect(() => {
    setAvatar(localStorage.getItem(`avatar-${profileId}`) || null);
    setAssigned(localStorage.getItem(`assigned-${profileId}`) || "");
    setTags(JSON.parse(localStorage.getItem(`tags-${profileId}`) || "[]"));
  }, [profileId]);

  const handleAvatar = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      localStorage.setItem(`avatar-${profileId}`, reader.result);
      setAvatar(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const saveAssigned = () => {
    localStorage.setItem(`assigned-${profileId}`, assigned);
    alert("Assigned saved!");
  };

  const addTag = () => {
    if (!tagInput.trim()) return;
    const updated = [...tags, tagInput.trim()];
    localStorage.setItem(`tags-${profileId}`, JSON.stringify(updated));
    setTags(updated);
    setTagInput("");
  };

  return (
    <div className="p-6 w-80 bg-gray-900 text-white rounded mx-auto mt-8">
      <h2 className="text-center mb-4 font-bold">Edit Profile {profileId}</h2>

      {/* Avatar */}
      <div className="flex flex-col items-center mb-4">
        <img
          src={avatar || "https://via.placeholder.com/100"}
          className="w-24 h-24 rounded-full mb-2"
        />
        <label className="cursor-pointer text-blue-400 text-xs">
          Change Avatar
          <input type="file" hidden accept="image/*" onChange={handleAvatar} />
        </label>
      </div>

      {/* Assigned */}
      <div className="mb-4">
        <input
          className="w-full text-black px-2 py-1 mb-1"
          value={assigned}
          onChange={(e) => setAssigned(e.target.value)}
          placeholder="Assigned To"
        />
        <button
          className="bg-blue-600 px-2 py-1 rounded text-white w-full"
          onClick={saveAssigned}
        >
          Save Assigned
        </button>
      </div>

      {/* Tags */}
      <div className="mb-4">
        <div className="flex gap-2 mb-2">
          <input
            className="flex-1 text-black px-2 py-1"
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            placeholder="New Tag"
          />
          <button className="bg-blue-600 px-2 py-1 rounded text-white" onClick={addTag}>
            Add
          </button>
        </div>
        <div className="flex gap-2 flex-wrap">
          {tags.map((t, i) => (
            <span key={i} className="bg-blue-600 px-2 rounded text-xs">{t}</span>
          ))}
        </div>
      </div>

      <button
        className="bg-green-600 px-2 py-1 rounded text-white w-full"
        onClick={() => navigate(`/profile/${profileId}`)}
      >
        Back to Profile
      </button>
    </div>
  );
}
