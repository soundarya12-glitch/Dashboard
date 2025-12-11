"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function StatsCard({ title, value, color, image }) {
  return (
    <Card className="bg-black p-4 rounded-xl border border-gray-800">
      <CardHeader>
        <CardTitle className="text-sm font-bold text-white">{title}</CardTitle>
      </CardHeader>

      <CardContent>
        <p className={`text-5xl font-bold ${color}`}>{value}</p>

        {image && (
          <div className="w-full h-20 overflow-hidden flex items-start mt-2">
            <img
              src={image}
              alt={title}
              className="h-full w-40 object-contain"
            />
          </div>
        )}
      </CardContent>
    </Card>
  )
}
