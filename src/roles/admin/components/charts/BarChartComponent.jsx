import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    ResponsiveContainer,
    Tooltip
} from "recharts";

const BarChartCard = ({
    title,
    subtitle,
    data,
    dataKey,
    xKey,
}) => {
    return (
        <div className="bg-white rounded-xl  p-3 w-full h-full flex flex-col">

            {/* Header */}
            <div className="flex items-center gap-3 mb-6">
                <div className="bg-purple-100 p- rounded-full">🕒</div>

                <div>
                    <h3 className="font-semibold text-lg">{title}</h3>
                    <p className="text-sm text-gray-500">{subtitle}</p>
                </div>
            </div>

            {/* Chart Container */}
            <div className="h-full">

                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data}
                        margin={{ top: 10, right: 20, left: -10, bottom: 0 }}
                    >

                        <defs >
                            <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#c4b5fd" />
                                <stop offset="100%" stopColor="#7c3aed" />
                            </linearGradient>
                        </defs>

                        <CartesianGrid strokeDasharray="4 4" vertical={false} />

                        <XAxis dataKey={xKey} />
                        <YAxis />

                        <Tooltip />

                        <Bar
                            dataKey={dataKey}
                            fill="url(#barGradient)"
                            radius={[8, 8, 0, 0]}
                            barSize={30}
                        />

                    </BarChart>
                </ResponsiveContainer>

            </div>

        </div>
    );
};

export default BarChartCard;