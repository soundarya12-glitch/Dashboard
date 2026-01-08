import { useState, useEffect } from "react";

export default function TagsModal({ onClose, initialTags = [], onSave }) {
  const [tags, setTags] = useState(initialTags);
  const [input, setInput] = useState("");

  // Add a tag
  const handleAddTag = () => {
    const newTag = input.trim();
    if (newTag !== "" && !tags.includes(newTag)) {
      setTags([...tags, newTag]);
      setInput("");
    }
  };

  // Remove a tag
  const handleRemoveTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  // Save tags to parent
  const handleSave = () => {
    onSave(tags);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-stone-900 p-6 rounded-xl w-80 flex flex-col gap-4">
        <h2 className="text-white font-semibold text-lg">Edit Tags</h2>

        {/* Tags display */}
        <div className="flex flex-wrap gap-2 bg-stone-800 p-2 rounded">
          {tags.map((tag, i) => (
            <div
              key={i}
              className="flex items-center bg-blue-600 px-3 py-1 rounded-full text-white text-sm"
            >
              {tag}
              <button
                onClick={() => handleRemoveTag(tag)}
                className="ml-2 text-red-500 font-bold"
              >
                ×
              </button>
            </div>
          ))}

          {/* Input */}
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                handleAddTag();
              }
            }}
            onBlur={handleAddTag}
            placeholder="Add tag"
            className="bg-stone-700 text-white px-3 py-1 rounded-full text-sm focus:outline-none"
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-2 mt-4">
          <button
            onClick={onClose}
            className="px-3 py-1 bg-red-600 text-white rounded"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-3 py-1 bg-green-600 text-white rounded"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
