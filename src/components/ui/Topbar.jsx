"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, Bell, CircleQuestionMark } from "lucide-react"

export function Topbar() {
  return (
    <div className="w-full flex items-center justify-between p-4 bg-black border-b border-gray-800">

      {/* Left: Title + Search */}
      <div className="flex items-center gap-6 flex-1">
        <h1 className="text-white font-bold text-lg">All Projects</h1>

        {/* Search input with icon inside */}
        <div className="relative flex-1 max-w-lg">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <Input
            type="text"
            placeholder="Search tasks, projects, or team members..."
            className="bg-[#0e0e0e] text-white border-gray-700 pl-10 w-full"
          />
        </div>
      </div>

      {/* Right side icons */}
      <div className="flex items-center gap-4">
        <Bell className="text-gray-300" size={20} />
        <CircleQuestionMark className="text-gray-300" size={20} />
        <img
          src="/images/avatar.png"
          className="h-8 w-8 rounded-full"
          alt="user"
        />
      </div>
    </div>
  )
}
