import { TrendingDown, TrendingUp } from "lucide-react";
import React from "react";
import clsx from "clsx";

interface StatsCardProps {
  value: string;
  trend: string;
  label: string;
  upDown: "rise" | "fall";
  bgColor?: string;     // Tailwind light bg class
  darkBgColor?: string; // Tailwind dark bg class
  darkText?: "white" | "black"; // control text color for dark mode
}

const StatsCard: React.FC<StatsCardProps> = ({
  value,
  trend,
  label,
  upDown,
  bgColor = "bg-[#F7F9FB]",
  darkBgColor = "dark:bg-white/5",
  darkText = "white", // default white for dark mode
}) => {
  return (
    <div
      className={clsx(
        "flex flex-col justify-center gap-2 p-6 font-semibold rounded-2xl transition-colors",
        bgColor,
        darkBgColor,
        darkText === "white" ? "dark:text-white" : "dark:text-black"
      )}
    >
      <div className="text-sm">{label}</div>
      <div className="flex flex-col lg:flex-row gap-4 justify-between">
        <div className="text-2xl">{value}</div>
        <div className="font-normal text-xs">
          {upDown === "rise" ? "+" : "-"} {trend}{" "}
          {upDown === "rise" ? (
            <TrendingUp className="inline text-gray-500 w-4 h-4" />
          ) : (
            <TrendingDown className="inline text-gray-500 w-4 h-4" />
          )}
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
