"use client";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

interface StatisticsChartProps {
  totalApartments: number;
  availableApartments: number;
  averagePrice: number;
  totalLocations: number;
}

const COLORS = [
  "#FF5A3C",
  "#FF8A65",
  "#FFB74D",
  "#FFCC80",
];

const StatisticsChart = ({
  totalApartments,
  availableApartments,
  averagePrice,
  totalLocations,
}: StatisticsChartProps) => {
  const data = [
    {
      name: "Apartments",
      value: totalApartments,
    },
    {
      name: "Available",
      value: availableApartments,
    },
    {
      name: "Locations",
      value: totalLocations,
    },
    {
      name: "Avg Rent",
      value: averagePrice,
    },
  ];

  return (
    <ResponsiveContainer width="100%" height={350}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={110}
          innerRadius={60}
          paddingAngle={4}
        >
          {data.map((_, index) => (
            <Cell
              key={index}
              fill={COLORS[index % COLORS.length]}
            />
          ))}
        </Pie>

        <Tooltip />

        <Legend
          verticalAlign="bottom"
          height={36}
        />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default StatisticsChart;