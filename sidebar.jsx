"use client"

import { useState } from "react"
import { 
  UserCircle, Home, Calendar, Folder, CheckCircle, Users, Settings,
  AlertCircle, MenuIcon, BarChart2, DollarSign, UserCheck, BarChart3,
  User2Icon, Briefcase, Cpu, HelpCircle, MessageCircle
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
} from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle,CardImage } from "@/components/ui/card"

export default function Sidebar() {
  const [open, setOpen] = useState(true)
  const [active, setActive] = useState("Dashboard")

  return (
    <div className="flex h-full bg-black">
      {/* Sidebar */}
      <div className={`bg-black text-white text-sm p-2 transition-all duration-300 h-4/3 ${open ? "w-64" : "w-20"}`}>
        <Button
          variant="ghost"
          className="mb-6 text-white flex items-center gap-2"
          onClick={() => setOpen(!open)}
        >
          <UserCircle size={25} />
          {open && <span className="font-bold text-lg">Magfrai</span>}
        </Button>

        <Separator className="bg-gray-700 mb-2" />

        <div className="space-y-2">
          {/* Dashboard */}
          <div
            onClick={() => setActive("Dashboard")}
            className={`flex items-center gap-2 p-2 rounded-xl cursor-pointer transition ${
              active === "Dashboard" ? "bg-gray-700" : "hover:bg-gray-800"
            }`}
          >
            <Home size={20} />
            {open && <span>Dashboard</span>}
          </div>

          {/* Calendar */}
          <div
            onClick={() => setActive("Calendar")}
            className={`flex items-center gap-2 p-2 rounded-xl cursor-pointer transition ${
              active === "Calendar" ? "bg-gray-700" : "hover:bg-gray-800"
            }`}
          >
            <Calendar size={20} />
            {open && <span>Calendar</span>}
          </div>

          {/* Projects Accordion */}
         
          {/* Other Items */}
          {[
    
           { name: "Projects", icon: Folder, id: "Projects" }, { name: "All Projects", icon: MenuIcon, id: "all-projects" }, { name: "Active Projects", icon: AlertCircle, id: "active-projects" }, { name: "Complete Projects", icon: CheckCircle, id: "complete-projects" }, { name: "Reports", icon: BarChart2, id: "reports" }, { name: "Sales Performance", icon: BarChart3, id: "sales" }, { name: "Budget Summary", icon: DollarSign, id: "budget" }, { name: "Teams", icon: Users, id: "teams" }, { name: "Members", icon: UserCheck, id: "members" }, { name: "Roles & Permissions", icon: User2Icon, id: "roles" }, { name: "Work Assignments", icon: Briefcase, id: "work" }, { name: "Settings", icon: Settings, id: "settings" }, { name: "Profile", icon: Users, id: "profile" }, { name: "System Preferences", icon: Cpu, id: "system" }, { name: "Help", icon: HelpCircle, id: "help" }, { name: "Feedback", icon: MessageCircle, id: "feedback" },
           ]

          .map((item) => (
            <div
              key={item.name}
              onClick={() => setActive(item.name)}
              className={`flex items-center gap-2 p-2 rounded-xl cursor-pointer transition ${
                active === item.name ? "bg-gray-700" : "hover:bg-gray-800"
              }`}
            >
              <item.icon size={20} />
              {open && <span>{item.name}</span>}
            </div>
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 p-6 space-y-4">
        <h1 className="text-lg font-bold text-white">{active}</h1>

        {/* Example ShadCN Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4  p-1">
  {[
    { title: "Total Projects", content: "15",color: "text-white", image: "/images/dash.png"  },
    { title: "Tasks Due Today", content: "81 ",color: "text-white",image: "/images/dashtwo.png"  },
    { title: "Overdue Tasks", content: "3" ,color: "text-red-500" },
    { title: "Team Workload", content: "85%",color: "text-white" }
  ].map((card) => (
    <Card className="bg-black p-0"> key={card.title}
      <CardHeader >
        <CardTitle className="text-sm font-bold text-white mt-0 ">{card.title}</CardTitle>
      </CardHeader>
      <CardContent>
   <p className={`text-6xl font-bold p-1 ${card.color}`}>{card.content}</p>
   <CardImage>
<div className="w-3/4 h-20 overflow-hidden flex justify-start items-start">
  <img
    src={card.image}
    alt={card.title}
    className="h-full w-60 object-contain"
  />
</div>
 </CardImage>
      </CardContent>
    </Card>
  ))}
</div>

      </div>
    </div>
  )
}
