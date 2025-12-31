import { useState } from "react";
import { GENDERS } from "./Genders";

export default function GenderModal({ onSelect, onClose, onAdvanced }) {
  const [search, setSearch] = useState("");

  const filtered = GENDERS.filter((g) =>
    g.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-black w-96 rounded-lg p-4">

        {/* Header */}
        <div className="flex justify-between mb-3">
          <h3 className="font-semibold text-white">Select Gender</h3>
          <button className=" text-white" onClick={onClose}>✕</button>
        </div>

        {/* Search */}
        <input
          placeholder="Beginning with"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full  p-2 mb-3  mt-2 h-8 rounded-2xl px-3 py-2
              border border-gray-400 text-white bg-stone-600
              focus:border-pink-400 focus:outline-none"
        />

        {/* List */}
        <div className="max-h-60 overflow-y-auto">
          {filtered.map((g) => (
            <div
              key={g}
              className="p-2 cursor-pointer text-white hover:bg-stone-500"
              onClick={() => {
                onSelect(g);
                onClose();
              }}
            >
              {g}
            </div>
          ))}

          {/* ADVANCED SEARCH Option */}
          <div
            className="p-2 cursor-pointer text-white  hover:bg-stone-500 font-semibold"
            onClick={() => {
              onAdvanced();  // Call parent to open advanced search modal
              onClose();
            }}
          >
            Advanced search
          </div>
        </div>

        <div className="text-right mt-3">
          <button className="bg-stone-800  text-white px-4 py-1 rounded">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
