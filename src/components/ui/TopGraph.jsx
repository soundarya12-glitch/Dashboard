import {
  BarChart,
  Bar,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

export default function TopGraph({ danger }) {

  const data = [
    { name: "Mon", value: 10 },
    { name: "Tue", value: 40 },
    { name: "Wed", value: 20 },
    { name: "Thu", value: 40 },
    { name: "Fri", value: 50 },
    { name: "Sat", value: 20 },
    { name: "Sun", value: 30 },
    { name: "Mon", value: 50 },
    { name: "Tue", value: 25 },
    { name: "Wed", value: 40 },
    { name: "Thu", value: 35 },
    { name: "Fri", value: 40 },
    { name: "Sat", value: 20 },
    { name: "Sun", value: 40 },
     { name: "Fri", value: 10 },
    { name: "Sat", value: 20 },
    { name: "Sun", value: 15 },
  ]

  return (
    <div className="-pt-4 -ml-2.5 h-60 w-20">
      <ResponsiveContainer width="260%" height="40%">
        <BarChart data={data} barCategoryGap={8}>
          <Tooltip cursor={false} />
          <Bar
            dataKey="value"
            radius={[1, 1, 0, 0]}
            fill={danger ? "#ef4444" : "#c084fc"} // 🔴 / 🟣
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
