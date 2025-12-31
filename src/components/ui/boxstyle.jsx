import React from 'react'
   import { X } from "lucide-react";
  export default function Boxstyle() {
  return (
    <div>
   

<button
  onClick={() => toggleFavourite(item.id)}
  className="
    w-6 h-6
    flex items-center justify-center
    border border-gray-600
    rounded-md
    text-gray-400
    hover:text-white
    hover:bg-red-600
    hover:border-red-600
    transition
  "
>
  <X size={14} />
</button>

    </div>
  )
}





