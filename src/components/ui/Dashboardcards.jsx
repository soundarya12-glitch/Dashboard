"use client"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
/* Priority badge component – VERTICAL */
function PriorityBadge({ priorityCounts }) {
  if (!priorityCounts || Object.keys(priorityCounts).length === 0) return null
  const colors = {
    High: "bg-red-500 ",
    Medium: "bg-yellow-400 ",
    Low: "bg-green-500 ",
  }
  return (
    <div className="flex flex-col gap-1 text-gray-300 ">
      {Object.entries(priorityCounts).map(([key, value]) => (
        <div key={key} className="flex items-center gap-1  space y-2 mt-2  ">
          <span className={`w-3 h-3 rounded-full ${colors[key]}`} />
          <span className="text-sm">{key}: {value}</span>
        </div>
      ))}
    </div>
  )
}
export function DashboardCards() {
  const data = [
    {
      title: "Total Projects",
      count: 15,
      image: "/images/dash.png",
      titles: "+2% from last month",
    },
    {
      title: "Tasks Due Today",
      count: 81,
      priorityCounts: { High: 3, Medium: 4, Low: 1 }, // priority counts here
    },
    {
      title: "Overdue Tasks",
      count: "3",
      image: "/images/dashtwo.png",
      titles: "Action Required",
    },
    {
      title: "Team Workload",
      count: "85%",
      image: "/images/dash.png",
      titles: "Average utilization",
    },
  ]
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 -mt-3 -ml-2">
      {data.map((item) => (
        <Card
          key={item.title}
          className="bg-neutral-900 border border-neutral-800 p-4 rounded-lg"
        >
          <div className="space-y-2 text-left">
            {/* Title */}
            <CardHeader className="pt-1">
              <CardTitle className="text-white text-sm font-medium -ml-6">
                {item.title}
              </CardTitle>
            </CardHeader>
            {/* Count */}
            <p className="font-victor text-[44px] font-bold text-white -mt-2">
              {item.count}
            </p>
            {/* Sub text */}
            {item.titles && (
              <p className="text-sm text-gray-500">
                {item.titles}
              </p>
            )}
            {/* Piority */}
            <PriorityBadge className="-pt-1  font-family: font/family/sans; font-weight: font/weight/normal; font-style: Regular; font-size: spacing/3; leading-trim: NONE; line-height: spacing/4; letter-spacing: 0%; vertical-align: middle;" priorityCounts={item.priorityCounts} />
            {/* Image */}
            {item.image && (
              <CardContent className="p-0 pt-2">
                <img
                  src={item.image}
                  className="w-full h-15 object-cover rounded"
                  alt={item.title}
                />
              </CardContent>
            )}
          </div>
        </Card>
      ))}
    </div>
  )
}
