import ContentLayout from '@/common/layouts/admin-layouts/AdminLayout'
import React from 'react'
import CardsandHead from './components/CardsandHead'
import AreaChartComponent from '@/roles/admin/components/charts/AreaChartComponent'
import BarChartComponent from '@/roles/admin/components/charts/BarChartComponent'
import DonutChartComponent from '@/roles/admin/components/charts/DonutChartComponent'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import ServicesRequest from './components/ServicesRequest'
import ExpertRequest from './components/ExpertRequest'


const Dashboard = () => {

  const salesData = [
    { day: "Jan 16", value: 4200 },
    { day: "Jan 17", value: 3800 },
    { day: "Jan 18", value: 3400 },
    { day: "Jan 19", value: 4100 },
  ]

  const minutesData = [
    { day: "Mar 1", mins: 1600 },
    { day: "Mar 2", mins: 2100 },
    { day: "Mar 3", mins: 800 },
    { day: "Mar 4", mins: 1600 },
    { day: "Mar 5", mins: 1300 },
    { day: "Mar 6", mins: 2100 },
    { day: "Mar 7", mins: 1700 }
  ]

  const revenueData = [
    { name: "Onboarding", value: 13, color: "#F4A261" },
    { name: "Margin", value: 56, color: "#9B8ACD" },
    { name: "Wallet", value: 31, color: "#8AA9B7" }
  ]

  return (
    <ContentLayout>

      <CardsandHead />

      <div className=" hidden lg:grid lg:grid-cols-12 gap-5 py-3">

        <div className="lg:col-span-4 h-87.5 shadow-card rounded-lg">
          <AreaChartComponent
            title="Wallet Sales Trend"
            data={salesData}
            xKey="day"
            yKey="value"
            color="#f59e0b"
          />
        </div>

        <div className="lg:col-span-4 h-87.5 shadow-card rounded-lg">
          <BarChartComponent
            title="Minutes sold per day"
            subtitle="Total Minute Spending : 5608 mins"
            data={minutesData}
            dataKey="mins"
            xKey="day"
          />
        </div>

        <div className="lg:col-span-4 h-87.5 shadow-card rounded-lg">
          <DonutChartComponent
            title="Revenue Split"
            subtitle="Total Revenue : 154847 Rupees"
            data={revenueData}
          />
        </div>

      </div>

      {/* MOBILE CHART CAROUSEL */}
      <div className="block lg:hidden p-4 relative">

        {/* Left Shade */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-10 bg-linear-to-r from-gray-100 to-transparent z-10" />

        {/* Right Shade */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-10 bg-linear-to-l from-gray-100 to-transparent z-10" />

        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className={"py-3"}>

            {/* Area Chart */}
            <CarouselItem className="basis-[90%]">
              <div className="h-87.5 shadow-card rounded-lg bg-white p-2">
                <AreaChartComponent
                  title="Wallet Sales Trend"
                  data={salesData}
                  xKey="day"
                  yKey="value"
                  color="#f59e0b"
                />
              </div>
            </CarouselItem>

            {/* Bar Chart */}
            <CarouselItem className="basis-[90%]">
              <div className="h-87.5 shadow-card rounded-lg bg-white p-2">
                <BarChartComponent
                  title="Minutes sold per day"
                  subtitle="Total Minute Spending : 5608 mins"
                  data={minutesData}
                  dataKey="mins"
                  xKey="day"
                />
              </div>
            </CarouselItem>

            {/* Donut Chart */}
            <CarouselItem className="basis-[90%]">
              <div className="h-87.5 shadow-card rounded-lg bg-white p-2">
                <DonutChartComponent
                  title="Revenue Split"
                  subtitle="Total Revenue : 154847 Rupees"
                  data={revenueData}
                />
              </div>
            </CarouselItem>

          </CarouselContent>

          {/* Bottom Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-2">
            <CarouselPrevious className="static translate-y-0" />
            <CarouselNext className="static translate-y-0" />
          </div>

        </Carousel>
      </div>


      <div className="flex flex-col lg:flex-row gap-4 py-3 items-stretch">

        {/* Left Section */}
        <div className="w-full lg:w-[65%]">
          <ServicesRequest />
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-[35%]">
          <ExpertRequest />
        </div>

      </div>


    </ContentLayout>
  )
}

export default Dashboard