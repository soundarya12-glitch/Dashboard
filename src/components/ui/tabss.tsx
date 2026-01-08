import { useState } from "react";

const tabs = [
  { id: "outline", label: "Outline" },
  { id: "performance", label: "Past Performance", count: 3 },
  { id: "personnel", label: "Key Personnel", count: 2 },
  { id: "documents", label: "Focus Documents" },
];

export default function TabsBar() {
  const [active, setActive] = useState("outline");

  return (
    <div className="flex gap-2  bg-stone-800 p-1 rounded-xl w-fit">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActive(tab.id)}
          className={`
            flex items-center gap-2 text-black font-family: font/family/sans;
font-weight: font/weight/medium;
font-style: large;
font-size: spacing/3-5; px-4 py-1 rounded-lg 
            transition pl-3
            ${
              active === tab.id
                ? "bg-stone-700 text-white border border-white"
                : "text-gray-300 hover:bg-gray-700/60"
            }
          `}
        >
          <span>{tab.label}</span>

          {tab.count !== undefined && (
            <span
              className={`
                text-xs px-2 py-0.5 rounded-full bg-stone-500
                ${
                  active === tab.id
                    ? "bg-gray-600 text-white"
                    : "bg-gray-700 text-gray-300"
                }
              `}
            >
              {tab.count}
            </span>
          )}
        </button>
      ))}
    </div>
  );
}
