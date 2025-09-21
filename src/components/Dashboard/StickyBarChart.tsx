"use client";
import React from "react";
import ApexCharts from "react-apexcharts";

const StackedBarChart: React.FC = () => {
    const options: ApexCharts.ApexOptions = {
        chart: {
            type: "bar",
            height: 350,
            stacked: true,
        },
        colors: ["#A8C5DA", "#E5ECF6",],
        plotOptions: {
            bar: {
                horizontal: false,
                dataLabels: {
                    total: {
                        enabled: false,
                    },
                },
            },
        },
        stroke: {
            width: 1,
            colors: ["#fff"],
        },
        title: {
            text: "Projections vs Actuals",
        },
        xaxis: {
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        },
        yaxis: {
            title: {
                text: "Sales (Millions)",
            },
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return val + "M";
                },
            },
        },
        fill: {
            opacity: 1,
        },
        legend: {
           show:false,
        },
    };

    const series = [
        {
           
            data: [4.4, 5.5, 4.1, 3.7, 2.2, 4.3],
        },
        {
           
            data: [5.3, 3.2, 3.3, 5.2, 1.3, 4.3],
        },
    ];

    return <div className="w-full h-72 p-6 bg-gray-light dark:bg-white/5 rounded-2xl"> 
    <ApexCharts options={options} series={series} type="bar" height="100%"/>
    </div>
};

export default StackedBarChart;
