"use client";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  Tooltip,
} from "recharts";

const data = [
  { day: "Mon", hours: 2 },
  { day: "Tue", hours: 4 },
  { day: "Wed", hours: 3 },
  { day: "Thu", hours: 6 },
  { day: "Fri", hours: 5 },
  { day: "Sat", hours: 7 },
];

export default function ActivityCard() {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
      <h2 className="text-lg font-semibold mb-4">
        Weekly Activity
      </h2>

      <div className="h-52">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis
  dataKey="day"
  tick={{ fill: "#ffffff" }}
  axisLine={false}
  tickLine={false}
/>
            <Tooltip
  contentStyle={{
    background: "#111827",
    border: "1px solid #374151",
    borderRadius: "12px",
  }}
/>
            <Bar
  dataKey="hours"
  fill="#06B6D4"
  radius={[8, 8, 0, 0]}
/>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}