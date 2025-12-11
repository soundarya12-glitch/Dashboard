import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PlusIcon } from "lucide-react"

export function OverviewBoard() {
  const columns = [
    {
      name: "TO-DO",
      tasks: [
        { name: "Frontend Development", tag: "Medium", deadline: "Deadline 2025/12/30", img: "/images/avatar.png", names: "soundarya" },
        { name: "User Testing", tag: "Low", deadline: "Deadline 2026/01/06", img: "/images/avatar.png", names: "Priya" },
        { name: "Backend Development", tag: "High", deadline: "Deadline 2026/12/30", img: "/images/avatar.png", names: "Divya" },
        { name: "UI Design", tag: "Medium", deadline: "Deadline 2025/12/30", img: "/images/avatar.png", names: "soundarya" },
      ],
    },
    {
      name: "IN PROGRESS",
      tasks: [
        { name: "Frontend Design", tag: "Medium", deadline: "Deadline 2026/11/13", img: "/images/avatar.png", names: "Jenifer" },
        { name: "Database Schema", tag: "Low", deadline: "Deadline 2026/10/10", img: "/images/avatar.png", names: "Hari" },
        { name: "User Authentication", tag: "High", deadline: "Deadline 2025/09/03", img: "/images/avatar.png", names: "Sindhu" },
        { name: "Payment Gateway", tag: "Medium", deadline: "Deadline 2026/02/20", img: "/images/avatar.png", names: "Sabitha" },
      ],
    },
    {
      name: "COMPLETED",
      tasks: [
        { name: "Design Framework", tag: "High", deadline: "Deadline 2026/05/13", img: "/images/avatar.png", names: "Giftson" },
        { name: "Backend API", tag: "High", deadline: "Deadline 2027/12/30", img: "/images/avatar.png", names: "soundarya" },
        { name: "Frontend Medium", tag: "Medium", deadline: "Deadline 2028/01/09", img: "/images/avatar.png", names: "soundarya" },
        { name: "Database", tag: "Low", deadline: "Deadline 2029/07/10", img: "/images/avatar.png", names: "soundarya" },
      ],
    },
  ];

  function getWidth(tag) {
    if (tag === "Low") return "w-[20%]";
    if (tag === "Medium") return "w-1/2";
    if (tag === "High") return "w-full";
  }

  return (
    <section className="mb-2 p-1">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-bold text-white">Overview</h1>

        <div className="flex gap-2  p-6 ">
          <Button className="hover:bg-purple-700 text-white px-2 py-1">
            <PlusIcon className="text-gray-300" size={20} />
            Export
          </Button>

          <Button className="hover:bg-purple-700  text-white ">
            <PlusIcon className="text-gray-300" size={20} />
            Add New
          </Button>
        </div>
      </div>

      {/* Columns */}
      
      <div className="grid grid-cols-2 p-4  sm:grid-cols-3 lg:grid-cols-3 gap-4 bg-black space-y-3 overflow-auto">
        {columns.map((col) => (
          <div key={col.name}>
            <h2 className="font-semibold mb-3 text-white">{col.name}</h2>

            <div className="space-y-6">
              {col.tasks.map((task, index) => (
                <Card key={index} className="bg-neutral-900 border border-neutral-800 relative">

                  {/* TAG BADGE - TOP RIGHT */}
                  <div className="absolute top-3 right-3">
                    <span
                      className={`px-2 py-1 rounded text-xs font-semibold
                        ${
                          task.tag === "High"
                            ? "bg-green-600 text-white"
                            : task.tag === "Medium"
                            ? "bg-yellow-500 text-black"
                            : "bg-red-600 text-white"
                        }
                      `}
                    >
                      {task.tag}
                    </span>
                  </div>

                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm text-white">{task.name}</CardTitle>

                    {/* Deadline */}
                    <p className="text-xs text-gray-500 tracking-tight [filter:blur(0.6px)] mt-1">
                      {task.deadline}
                    </p>

                    {/* Avatar + Name */}
                    <div className="flex items-center gap-3 mt-2">
                      <img
                        src={task.img}
                        className="h-8 w-8 rounded-full object-cover opacity-80"
                      />
                      
                      <p className="text-sm mr-1 text-gray-500 tracking-tight mb-2 [filter:blur(0.6px)] ">{task.names}</p>
                    </div>
                  </CardHeader>

                  <CardContent>
                    {/* PROGRESS BAR */}
                      
                  <div className="  bg-neutral-700 h-1 pl-2 rounded-full overflow-hidden">
  <div
    className={`h-1 bg-purple-500 rounded-full pl-9 ${getWidth(task.tag)}`}
  ></div>
</div>
                        

                  </CardContent>

                </Card>
                
              ))}
            </div>
          </div>
          
        ))}
      </div>
       
    </section>
    
    
  );
}
