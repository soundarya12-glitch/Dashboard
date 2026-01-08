"use client"
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PlusIcon } from "lucide-react"
export function OverviewBoard() {
  const columns = [
    {
      name: "TO-DO",
      tasks: [
        { name: "Frontend Development", tag: "Medium", deadline: "Deadline 2025/12/30", img: "/images/avatar.png", names: "Soundarya" },
        { name: "User Testing", tag: "Low", deadline: "Deadline 2026/01/06", img: "/images/avatar.png", names: "Priya" },
        { name: "Backend Development", tag: "High", deadline: "Deadline 2026/12/30", img: "/images/avatar.png", names: "Divya" },
        { name: "UI Design", tag: "Medium", deadline: "Deadline 2025/12/30", img: "/images/avatar.png", names: "Soundarya" },
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
        { name: "Backend API", tag: "High", deadline: "Deadline 2027/12/30", img: "/images/avatar.png", names: "Soundarya" },
        { name: "Frontend Medium", tag: "Medium", deadline: "Deadline 2028/01/09", img: "/images/avatar.png", names: "Soundarya" },
        { name: "Database", tag: "Low", deadline: "Deadline 2029/07/10", img: "/images/avatar.png", names: "Soundarya" },
      ],
    },
  ];

  function getWidth(tag) {
    if (tag === "Low") return "w-[20%]";
    if (tag === "Medium") return "w-1/2";
    if (tag === "High") return "w-full";
  }
  return (
    <section className="mb-4">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
        <h1 className="font-family: font/family/sans;
font-weight: font/weight/semibold;
font-size: spacing/5;
leading-trim: NONE;
line-height: 100%;
letter-spacing: -2%;
vertical-align: middle;
-ml-2 font-semibold text-white">Overview</h1>
        <div className="flex gap-2 p-8 pr-2">
          <Button className="flex items-center gap-1 px-3 py-1 -ml-3 text-white hover:bg-purple-700 border border-gray-600" variant={undefined} size={undefined}>
            <PlusIcon size={16} /> Add Task
          </Button>
          <Button className="flex items-center p-3  px-3 py-1 text-white hover:bg-purple-700 border border-gray-600" variant={undefined} size={undefined}>
            <PlusIcon size={16} /> New Project
          </Button>
        </div>
      </div>
      {/* Columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4  ">
        {columns.map((col) => (
          <div key={col.name}>
            <h2 className="text-sm sm:text-base font-semibold text-white uppercase font-family: font/family/sans;font-weight: 700;font-style: Bold font-size: 13px;leading-trim: NONE;line-height: 100%;letter-spacing: 5% vertical-align: middle;text-transform: uppercase -mt-6 -ml-1">{col.name}</h2>
            <div className="flex flex-col gap-4 mt-4 ">
              {col.tasks.map((task, index) => (
                <Card key={index} className="bg-neutral-900 border border-neutral-800 relative ">
                  {/* Tag Badge */}
                  <div className="absolute top-2 right-2">
                    <span
                      className={`
                        text-[8px] sm:text-xs md:text-sm lg:text-base
                        font-medium 
                        rounded-full 
                        px-2 sm:px-3 md:px-4 
                        py-0.5 sm:py-1 md:py-1.5 
                        transition 
                        ${
                          task.tag === "High"
                            ? "bg-black text-green-600 hover:bg-gray-800"
                            : task.tag === "Medium"
                            ? "bg-black text-yellow-500 hover:bg-gray-800"
                            : "bg-black text-red-500 hover:bg-gray-800"
                        }
                      `}
                    >
                      {task.tag}
                    </span>
                  </div>
                  <CardHeader className="pb-0 pt-2 ">
                    <CardTitle className="text-white font-family: font/family/sans;
font-weight: font/weight/semibold;
font-style: Semi Bold;
font-size: spacing/4;
leading-trim: NONE;
line-height: 100%;
letter-spacing: 0%;
vertical-align: middle;
">{task.name}</CardTitle>
                    <p className="text-gray-300 font-family: font/family/sans;
font-weight: font/weight/normal;
font-style: Regular;
font-size: spacing/3-5;
leading-trim: NONE;
line-height: spacing/5;
letter-spacing: 0%;
 mt-0.3">{task.deadline}</p>
                    <div className="flex items-center gap-2 -ml-1 -mt-0.3">
                      <img src={task.img} className="h-8 w-8 rounded-full object-cover opacity-80" />
                      <p className="text-white font-family: font/family/sans;
font-weight: font/weight/normal;
font-style: Regular;
font-size: spacing/3-5;
leading-trim: NONE;
line-height: 100%;
letter-spacing: 0%;
vertical-align: middle;
 -ml-1 ">{task.names}</p>
                    </div>
                  </CardHeader>
                  <CardContent className={undefined}>
                    {(col.name === "IN PROGRESS" || col.name === "COMPLETED") && (
                      <div className="bg-black h-2 rounded-full overflow-hidden -mt-7 ml-6 mr-4">
                        <div
                          className={`h-2 rounded-full bg-purple-400 ${
                            col.name === "COMPLETED" ? "w-full" : getWidth(task.tag)
                          }`}
                        />
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
