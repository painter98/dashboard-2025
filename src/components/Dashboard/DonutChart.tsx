import React from "react";
import ApexCharts from "react-apexcharts";
import { ApexOptions } from "apexcharts";

const DonutChart: React.FC = () => {
  const labels:string[] = ["Direct", "Affiliate", "Sponsored", "E-mail"];
  const colors:string[] = ["#1E1E1E", "#BAEDBD", "#95A4FC", "#B1E3FF"];
  const series: number[] = [300.56, 135.18, 154.02, 48.96];

  const options: ApexOptions = {
    chart: {
      type: "donut",
    },
    labels,
    colors,
    legend: {
      show: false, 
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
          },
        },
      },
    },
    tooltip: {
      enabled: true,
      fillSeriesColor: false,
      custom: ({ series, seriesIndex, w }) => {
        const label = w.globals.labels[seriesIndex];
        const value = series[seriesIndex].toFixed(2);
        return `
          <div style="
            background: rgba(0,0,0,0.4);
            color: #fff;
            padding: 6px 10px;
            border-radius: 6px;
            font-size: 12px;
          ">
            <strong>${label}</strong>: $${value}
          </div>
        `;
      },
    },
  };

  return (
    <div className="max-w-[480px] p-6 bg-gray-light dark:bg-white/5 rounded-2xl">
      <div className="text-sm font-semibold dark:text-white">Total Sales</div>
      {/* Chart */}
      <ApexCharts options={options} series={series} type="donut" width={250} />

      {/* Custom Legend */}
      <div className="mt-6 space-y-3 ">
        {labels.map((label, i) => (
          <div key={i} className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <span
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: colors[i] }}
              ></span>
              <span className="text-gray-800 dark:text-white">{label}</span>
            </div>
            <span className="font-medium text-gray-900 dark:text-white">
              ${series[i].toFixed(2)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonutChart;
