import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    ResponsiveContainer
} from "recharts"
import wallet from '@/assets/admin-assets/dashboard-Icons/dashboard_wallet.svg'


const AreaChartComponent = ({
    title,
    data,
    xKey,
    yKey,
    color = "#f97316",
}) => {

    return (
        <div className=" p-6 rounded-xl  w-full flex flex-col h-full">
            <div className="flex items-center gap-2 pb-3">
                <img src={wallet} className={`bg-[#F9EECA] rounded-sm p-1`}  alt="" />
                <h2 className="font-semibold  text-gray-700">
                    {title}
                </h2>
            </div>


            <div className="h-full">

                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                        data={data}
                        margin={0}
                    >

                        <defs>
                            <linearGradient id="areaColor" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor={color} stopOpacity={0.7} />
                                <stop offset="95%" stopColor={color} stopOpacity={0} />
                            </linearGradient>
                        </defs>

                        <CartesianGrid strokeDasharray="3 3" />

                        <XAxis dataKey={xKey} tickLine={false} axisLine={false} />

                        <YAxis tickLine={false} axisLine={false} />

                        <Tooltip />

                        <Area
                            type="monotone"
                            dataKey={yKey}
                            stroke={color}
                            strokeWidth={3}
                            fill="url(#areaColor)"
                        />

                    </AreaChart>
                </ResponsiveContainer>

            </div>

        </div>
    )
}

export default AreaChartComponent