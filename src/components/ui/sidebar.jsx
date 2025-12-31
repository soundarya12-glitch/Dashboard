"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { UserCircle, ChevronDown } from "lucide-react"
import { Link } from "react-router-dom"

export default function Sidebar() {
  const [open, setOpen] = useState(true)
  const [active, setActive] = useState("Dashboard")
  const [dropdownOpen, setDropdownOpen] = useState({
    Projects: true,
    Reports: true,
    Teams: true,
    Settings: true,
  })

  const toggleDropdown = (name) => {
    setDropdownOpen((prev) => ({ ...prev, [name]: !prev[name] }))
  }

  const sidebarItems = [
    { name: "Dashboard", icon: "/images/homesmile.png", path: "/" },
    { name: "Calendar", icon: "/images/calendar.png", path: "/calendar" },
    { name: "Users",  icon: "/images/userss.png", path: "/users" },
    {
      name: "Projects",
      icon: "/images/chart.png",
    
      subItems: [
        { name: "All Projects", path: "/project" },
        { name: "Active Projects", path: "/projects/active" },
        { name: "Complete Projects", path: "/projects/complete" },
      ],
    },
    {
      name: "Reports",
      icon: "/images/filetext.png",
      subItems: [
        { name: "Sales Performance", path: "/reports/sales" },
        { name: "Budget Summary", path: "/reports/budget" },
      ],
    },
    {
      name: "Teams",
      icon: "/images/users.png",
      subItems: [
        { name: "Members", path: "/teams/members" },
        { name: "Roles & Permissions", path: "/teams/roles" },
        { name: "Work Assignments", path: "/teams/work" },
      ],
    },
    {
      name: "Settings",
      icon: "/images/cogfour.png",
      subItems: [
        { name: "Profile", path: "/settings/profile" },
        { name: "System Preferences", path: "/settings/system" },
      ],
    },
    { name: "Help", icon: "/images/questioncircle.png", path: "/help" },
    { name: "Feedback", icon: "/images/confetti.png", path: "/feedback" },
  ]

  return (
    <div className="ml-3 sidebar">
      <div
        className={`bg-black text-white text-sm p-2 h-full transition-all duration-300 ${
          open ? "w-64" : "w-20"
        }`}
      >
        {/* User */}
        <Button
          variant="ghost"
          className="mb-6 text-white flex items-center gap-2"
          onClick={() => setOpen(!open)}
        >
          <UserCircle size={25} />
          {open && <span className="font-bold text-lg">Magfrai</span>}
        </Button>

        {/* Menu */}
        <div className="space-y-2">
          {sidebarItems.map((item) => (
            <div key={item.name}>
              {/* Parent */}
              {item.path ? (
                // If parent has path, use Link
                <Link
                  to={item.path}
                  className={`flex items-center justify-between p-2 rounded-xl transition ${
                    active === item.name ? "bg-stone-700  border border-gray-500  " : "hover:bg-stone-700"
                  }`}
                  onClick={() => setActive(item.name)}
                >
                  <div className="flex items-center gap-2">
                    <img src={item.icon} alt={item.name} className="w-5 h-5" />
                    {open && <span>{item.name}</span>}
                  </div>
                </Link>
              ) : (
                // If no path, just toggle dropdown
                <div
                  onClick={() => toggleDropdown(item.name)}
                  className={`flex items-center justify-between p-2 rounded-xl cursor-pointer transition hover:bg-stone-700`}
                >
                  <div className="flex items-center gap-2">
                    <img src={item.icon} alt={item.name} className="w-5 h-5" />
                    {open && <span>{item.name}</span>}
                  </div>
                  {item.subItems && open && (
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 ${
                        dropdownOpen[item.name] ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </div>
              )}

              {/* Sub-items */}
              {item.subItems && dropdownOpen[item.name] && open && (
                <div className="ml-2 mt-1 relative">
                  {/* Vertical line */}
                  <div
                    style={{
                      position: "absolute",
                      left: "8px",
                      top: 0,
                      bottom: 0,
                      width: "1px",
                      backgroundColor: "white",
                    }}
                  />
                  <div className="flex flex-col gap-1 pl-4">
                    {item.subItems.map((sub) =>
                      sub.path ? (
                        <Link
                          key={sub.name}
                          to={sub.path}
                          className={`p-2 rounded-xl block hover:bg-stone-700 ${
                            active === sub.name ? "bg-stone-700" : ""
                          }`}
                          onClick={() => setActive(sub.name)}
                        >
                          {sub.name}
                        </Link>
                      ) : (
                        <div
                          key={sub.name}
                          onClick={() => setActive(sub.name)}
                          className={`p-2 rounded-xl cursor-pointer ${
                            active === sub.name ? "bg-stone-700" : "hover:bg-stone-700"
                          }`}
                        >
                          {sub.name}
                        </div>
                      )
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
