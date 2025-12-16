"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { UserCircle } from "lucide-react"
export default function Sidebar() {
  const [open, setOpen] = useState(true)
  const [active, setActive] = useState("Dashboard")
  const [dropdownOpen, setDropdownOpen] = useState({}) // track which dropdowns are open
  const toggleDropdown = (name) => {
    setDropdownOpen((prev) => ({ ...prev, [name]: !prev[name] }))
  }
  const sidebarItems = [
    { name: "Dashboard", icon: "/images/homesmile.png" },
    { name: "Calendar", icon: "/images/calendar.png" },
    {
      name: "Projects",
      icon: "/images/chart.png",
      subItems: ["All Projects", "Active Projects", "Complete Projects"],
    },
    {
      name: "Reports",
      icon: "/images/filetext.png",
      subItems: ["Sales Performance", "Budget Summary"],
    },
    {
      name: "Teams",
      icon: "/images/users.png",
      subItems: ["Members", "Roles & Permissions", "Work Assignments"],
    },
    {
      name: "Settings",
      icon: "/images/cogfour.png",
      subItems: ["Profile", "System Preferences"],
    },
    { name: "Help", icon: "/images/questioncircle.png" },
    { name: "Feedback", icon: "/images/confetti.png" },
  ]
  return (
    <div className={`ml-3 sidebar`}>
      <div className={`bg-black text-white text-sm p-2 h-full transition-all duration-300 ${open ? "w-64" : "w-20"}`}>
        {/* User Info */}
        <Button
          variant="ghost"
          className="mb-6 text-white flex items-center gap-2"
          onClick={() => setOpen(!open)}
        >
          <UserCircle size={25} />
          {open && <span className="font-bold text-lg">Magfrai</span>}
        </Button>
        <div className="space-y-2">
          {sidebarItems.map((item) => (
            <div key={item.name}>
              {/* Parent Item */}
              <div
                onClick={() =>
                  item.subItems ? toggleDropdown(item.name) : setActive(item.name)
                }
                className={`flex items-center gap-2 p-2 rounded-xl cursor-pointer transition ${
                  active === item.name ? "bg-gray-700" : "hover:bg-gray-800"
                }`}
              >
                <img src={item.icon} alt={item.name} className="w-5 h-5" />
                {open && <span>{item.name}</span>}
              </div>
              {/* Sub-Items Dropdown */}
              {item.subItems && dropdownOpen[item.name] && open && (
                <div className="ml-6 flex flex-col gap-1 relative">
                  {/* Vertical line */}
                  <span className="absolute left-1 top-0 h-full border-l border-gray-600 -ml-3"></span>
                  {item.subItems.map((sub) => (
                    <div
                      key={sub}
                      onClick={() => setActive(sub)}
                      className={`flex items-center gap-2 p-2 rounded-xl cursor-pointer transition ${
                        active === sub ? "bg-gray-700" : "hover:bg-gray-800"
                      }`}
                    >
                      <span>{sub}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
