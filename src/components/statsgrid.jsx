"use client"

import StatsCard from "./StatsCard"

export default function StatsGrid() {
  const cards = [
    { title: "Total Projects", value: "15", color: "text-purple-400", image: "/images/dash.png" },
    { title: "Tasks Due Today", value: "81", color: "text-blue-400", image: "/images/dashtwo.png" },
    { title: "Overdue Tasks", value: "3", color: "text-red-500", image: "/images/dash.png" },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {cards.map((card) => (
        <StatsCard
          key={card.title}
          title={card.title}
          value={card.value}
          color={card.color}
          image={card.image}
        />
      ))}
    </div>
  )
}
