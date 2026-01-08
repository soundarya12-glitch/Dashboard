"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, Bell, CircleQuestionMark } from "lucide-react"

export function Topbar() {
  return (
    <div className="w-full flex items-center justify-between p-4 topbar">

      {/* Left: Title + Search */}
      <div className="flex items-center gap-6 flex-1">
        <h1 className="text-white font-family: font/family/sans;font-weight: font/weight/semibold;font-style: Semi Bold;font-size: spacing/5;leading-trim: NONE;line-height: 100%;letter-spacing: -2%;vertical-align: middle;
">All Projects</h1>

        {/* Search input with icon inside */}
    
        
      </div>

      {/* Right side icons */}
      <div className="flex items-center gap-5">
       <div className="relative">
  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 w-5 h-7" />

  <Input
    type="text"
    placeholder="Search tasks, projects, or team members..."
    className="bg-[#0e0e0e] text-white border border-gray-500 pl-12 w-full md:w-[400px] rounded-xl"
  />
</div>



  {/* Notification – tablet & desktop */}
  <Bell
    className="hidden sm:block text-gray-600"
    size={20}
  />
<div className="flex items-center gap-3 sm:gap-4">
  {/* Help icon – desktop only */}
    <CircleQuestionMark
    className="hidden lg:block text-gray-600"
    size={20}
  />
  {/* Avatar – always visible */}
  <img
    src="/images/avatar.png"
    className="h-7 w-7 sm:h-8 sm:w-8 rounded-full"
    alt="user"
  />
</div>

       </div>
    </div>
  )
}
