import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export function DashboardCards() {
  const data = [
    { title: "Total Projects", count: 15, image: "/images/dash.png", titles: "+2% from last month" },
    { title: "Tasks Due Today", count: 81,image: "/images/images.png",titles: "+2% from last month" },
    { title: "Overdue Tasks", count: 3, image: "/images/dashtwo.png", titles: "Action Required" },
    { title: "Team Workload", count: "85%", image: "/images/dash.png", titles: "Average utilization" },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
      {data.map((item) => (
        <Card
          key={item.title}
          className="bg-neutral-900 border-neutral-800 p-4 rounded-lg relative"
        >
          {/* Count */}
          <p className="absolute top-10 left-9 text-4xl font-semibold text-white tracking-tight leading-none">
            {item.count}
          </p>

          {/* Card Header */}
          <CardHeader>
            <CardTitle className="absolute top-1 left-9 text-sm font-medium text-gray-400 tracking-tight">
              {item.title}
            </CardTitle>
          </CardHeader>
   {item.titles && (
              <p className="text-xs text-gray-500 tracking-tight  mt-10 mr-20">{item.titles}</p>
            )}
          {/* Card Content */}
          <CardContent className="space-y-2">
            {item.image && (
              <img
                src={item.image}
                className="w-75 h-20 bottom-29 object-cover rounded"
                alt={item.title}
              />
            )}

            {/* Sub-text */}
         
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
