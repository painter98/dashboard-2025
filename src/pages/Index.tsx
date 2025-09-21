import DonutChart from "../components/Dashboard/DonutChart";
import GradientLineChart from "../components/Dashboard/LineChart";
import ProductsDataTable from "../components/Dashboard/ProductaDataTable";
import RevenueByLocation from "../components/Dashboard/RevenueLocationChart";
import StatsCard from "../components/Dashboard/StatsCard";
import StackedBarChart from "../components/Dashboard/StickyBarChart";

const Index = () => {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="font-semibold">eCommerce</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-7">
        {/* Stats cards and bar chart */}
        <div className="grid grid-cols-2 gap-7">
          <StatsCard
            label="Customers"
            value="3,781"
            trend="11.01%"
            upDown="rise"
            bgColor="bg-[#E3F5FF]"
            darkBgColor="dark:bg-[#E3F5FF]"
            darkText="black" // since this is a light background in dark mode
          />
          <StatsCard
            label="Orders"
            value="1,219"
            trend="-0.03%"
            upDown="fall"
          />
          <StatsCard
            label="Revenue"
            value="$695"
            trend="15.03%"
            upDown="rise"
          />
          <StatsCard
            label="Growth"
            value="30.1%"
            trend="6.08%"
            upDown="rise"
            bgColor="bg-[#E5ECF6]"
            darkBgColor="dark:bg-[#E3F5FF]"
            darkText="black"
          />
        </div>

        <StackedBarChart />
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Line chart */}
      <GradientLineChart />
      <RevenueByLocation/>
      </div>

      {/* Products table + Donut chart */}
      <div className="flex flex-col md:flex-row gap-6">
        <ProductsDataTable />
        <DonutChart />
      </div>
    </div>
  );
};

export default Index;
