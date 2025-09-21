"use client"

import Chart from "react-apexcharts"

export default function RevenueChart() {
  const chartOptions = {
    chart: {
      type: "line" as const,
      height: 400,
      background: "transparent",
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    theme: {
      mode: "dark" as const,
    },
    colors: ["#A8C5DA", "#808080", "#808080"],
    stroke: {
      curve: "smooth" as const,
      width: 3,
      dashArray: [0, 8, 0],
    },
    grid: {
      borderColor: "#374151",
      strokeDashArray: 0.5,
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      labels: {
        style: {
          colors: "#9ca3af",
          fontSize: "12px",
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      min: 0,
      max: 30000000,
      tickAmount: 6,
      labels: {
        style: {
          colors: "#9ca3af",
          fontSize: "12px",
        },
        formatter: (value: number) => {
          if (value >= 1000000) {
            return (value / 1000000).toFixed(0) + "M"
          }
          return value.toString()
        },
      },
    },
    legend: {
      show: false,
    },
    tooltip: {
      theme: "dark",
      style: {
        fontSize: "12px",
      },
      y: {
        formatter: (value: number) => "$" + value.toLocaleString(),
      },
    },
    dataLabels: {
      enabled: false,
    },
  }

  const chartSeries = [
    {
      name: "Current Week",
      data: [12000000, 18000000, 15000000, 10000000, 14000000, 22000000],
    },
    {
      name: "Previous Week (First Half)",
      data: [10000000, 16000000, 14000000, null, null, null],
    },
    {
      name: "Previous Week (Second Half)",
      data: [null, null, 14000000, 16000000, 18000000, 20000000],
    },
  ]

  return (
    <div className="p-6 bg-gray-light rounded-2xl dark:bg-gray-900 border-gray-700 w-full">
      {/* Header with legend */}
      <div className="mb-6 flex flex-col lg:flex-row gap-6 lg:gap-10 items-center">
        <h2 className="text-sm font-semibold text-black dark:text-white">Revenue</h2>
        <div className="h-6 w-0 border border-black/20 hidden lg:block"></div>
        <div className="flex flex-row md:flex-col lg:flex-row items-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-gray-300"></div>
            <span className="text-black dark:text-gray-300">Current Week</span>
            <span className="text-white font-semibold">$58,211</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#808080]"></div>
            <span className="text-black dark:text-gray-300">Previous Week</span>
            <span className="text-white font-semibold">$68,768</span>
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="h-[400px]">
        <Chart options={chartOptions} series={chartSeries} type="line" height="100%" />
      </div>
    </div>
  )
}
