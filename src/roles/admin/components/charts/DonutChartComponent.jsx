import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

const DonutChartComponent = ({
  title,
  subtitle,
  data,
}) => {

  return (
    <div className="bg-white rounded-xl  p-3 w-full h-full flex flex-col">

      {/* Header */}
      <div className="">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-sm text-gray-500">{subtitle}</p>
      </div>

      {/* Chart Container */}
      <div className="h-full">

        <ResponsiveContainer width="100%" height="100%">
          <PieChart>

            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              innerRadius={50}
              outerRadius={90}
              paddingAngle={4}
            >
              {data.map((entry, index) => (
                <Cell key={index} fill={entry.color} />
              ))}
            </Pie>

            <Tooltip />

            {/* Legend */}
            <Legend
              verticalAlign="bottom"
              align="center"
              iconType="circle"
            />

          </PieChart>
        </ResponsiveContainer>

      </div>

    </div>
  );
};

export default DonutChartComponent;