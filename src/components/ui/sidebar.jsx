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
  Card, CardContent, CardHeader, CardTitle
} from "@/components/ui/card"
import { Topbar } from "./Topbar.jsx"
import { DashboardCards } from "./Dashboardcards.jsx"



export default function Sidebar() {
  const [open, setOpen] = useState(true)
  const [active, setActive] = useState("Dashboard")

  return (
    <div className="flex h-20  bg-black">
      {/* Sidebar */}
      <div className={`bg-black text-white text-sm p-2 h-full transition-all duration-300 ${open ? "w-64" : "w-20"}`}>
        <Button
          variant="ghost"
          className="mb-6 text-white flex items-center gap-2"
          onClick={() => setOpen(!open)}
        >
          <UserCircle size={25} />
          {open && <span className="font-bold text-lg">Magfrai</span>}
        </Button>
        <Separator className="bg-gray-700 mb-2" />
        <div className="space-y-2 h-full">
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

          {/* Other Items */}
          {[
            { name: "Projects", icon: Folder, id:"Projects"},
            { name: "All Projects", icon: MenuIcon },
            { name: "Active Projects", icon: AlertCircle },
            { name: "Complete Projects", icon: CheckCircle },
            { name: "Reports", icon: BarChart2 },
            { name: "Sales Performance", icon: BarChart3 },
            { name: "Budget Summary", icon: DollarSign },
            { name: "Teams", icon: Users },
            { name: "Members", icon: UserCheck },
            { name: "Roles & Permissions", icon: User2Icon },
            { name: "Work Assignments", icon: Briefcase },
            { name: "Settings", icon: Settings },
            { name: "Profile", icon: Users },
            { name: "System Preferences", icon: Cpu },
            { name: "Help", icon: HelpCircle },
            { name: "Feedback", icon: MessageCircle },
            
          ].map((item) => (
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
      {/* Main Content */}
    </div>
  )
}
