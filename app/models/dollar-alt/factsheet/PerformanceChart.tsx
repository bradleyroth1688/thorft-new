"use client";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { monthlyReturns } from "@/data/dollar-alt-performance";

// Build cumulative growth-of-$10K data
function buildGrowthData() {
  let thorValue = 10000;
  let benchValue = 10000;

  // Start with the initial point before any returns
  const data: { date: string; label: string; thor: number; bench: number }[] = [
    { date: "2005-01-31", label: "Jan 2005", thor: 10000, bench: 10000 },
  ];

  for (const m of monthlyReturns) {
    thorValue *= 1 + m.thorNet / 100;
    benchValue *= 1 + m.benchmark / 100;

    const [year, month] = m.date.split("-");
    const monthNames = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
    ];
    const monthName = monthNames[parseInt(month, 10) - 1];

    data.push({
      date: m.date,
      label: `${monthName} ${year}`,
      thor: Math.round(thorValue),
      bench: Math.round(benchValue),
    });
  }

  return data;
}

const growthData = buildGrowthData();

// Only show year labels on x-axis (Jan of each year + the final point)
function formatXAxis(date: string) {
  if (date === "2005-01-31") return "2005";
  const [year, month] = date.split("-");
  if (month === "01") return year;
  return "";
}

function formatDollar(value: number) {
  return "$" + value.toLocaleString("en-US");
}

// Custom tooltip
function CustomTooltip({ active, payload, label }: { active?: boolean; payload?: Array<{ value: number; dataKey: string; color: string }>; label?: string }) {
  if (!active || !payload?.length) return null;

  const item = growthData.find((d) => d.date === label);
  const displayLabel = item?.label || label;

  return (
    <div className="bg-navy-800 text-white rounded-lg px-4 py-3 shadow-lg border border-white/10 text-sm">
      <p className="font-semibold mb-1.5">{displayLabel}</p>
      {payload.map((entry) => (
        <p key={entry.dataKey} className="flex items-center gap-2">
          <span
            className="w-2.5 h-2.5 rounded-full inline-block"
            style={{ backgroundColor: entry.color }}
          />
          <span className="text-gray-300">
            {entry.dataKey === "thor" ? "THOR Sector 100" : "Invesco S&P 500 EW (RSP)"}:
          </span>
          <span className="font-semibold">{formatDollar(entry.value)}</span>
        </p>
      ))}
    </div>
  );
}

export default function PerformanceChart() {
  return (
    <div className="w-full h-[400px] md:h-[450px]">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={growthData}
          margin={{ top: 10, right: 10, left: 10, bottom: 0 }}
        >
          <defs>
            <linearGradient id="thorGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#C8A55A" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#C8A55A" stopOpacity={0.02} />
            </linearGradient>
            <linearGradient id="benchGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#9CA3AF" stopOpacity={0.2} />
              <stop offset="95%" stopColor="#9CA3AF" stopOpacity={0.02} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" vertical={false} />
          <XAxis
            dataKey="date"
            tickFormatter={formatXAxis}
            tick={{ fontSize: 12, fill: "#6B7280" }}
            axisLine={{ stroke: "#D1D5DB" }}
            tickLine={false}
            interval="preserveStartEnd"
            minTickGap={40}
          />
          <YAxis
            tickFormatter={formatDollar}
            tick={{ fontSize: 12, fill: "#6B7280" }}
            axisLine={false}
            tickLine={false}
            domain={["dataMin - 500", "auto"]}
            width={75}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend
            verticalAlign="top"
            height={36}
            formatter={(value: string) =>
              value === "thor" ? "THOR Sector 100 (Net)" : "Invesco S&P 500 Equal Weight ETF"
            }
            iconType="line"
          />
          <Area
            type="monotone"
            dataKey="thor"
            stroke="#C8A55A"
            strokeWidth={2.5}
            fill="url(#thorGradient)"
            dot={false}
            activeDot={{ r: 4, strokeWidth: 2, fill: "#C8A55A" }}
          />
          <Area
            type="monotone"
            dataKey="bench"
            stroke="#9CA3AF"
            strokeWidth={2}
            fill="url(#benchGradient)"
            dot={false}
            activeDot={{ r: 4, strokeWidth: 2, fill: "#9CA3AF" }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
