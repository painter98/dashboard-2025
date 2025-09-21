"use client"
import map from '../../assets/images/Map.svg';
export default function RevenueByLocation() {
  const locations = [
    { name: "New York", revenue: "72K", position: { top: "35%", left: "25%" } },
    { name: "San Francisco", revenue: "39K", position: { top: "40%", left: "15%" } },
    { name: "Sydney", revenue: "25K", position: { top: "70%", left: "85%" } },
    { name: "Singapore", revenue: "61K", position: { top: "55%", left: "75%" } },
  ]

  return (
    <div className={`p-6 bg-gray-light dark:bg-white/5 rounded-2xl min-w-[250px]`}>
      <h2 className={`text-sm font-semibold mb-6 dark:text-white text-gray-900"}`}>Revenue by Location</h2>

      {/* World Map */}
      <div className="relative mb-8 h-48 bg-transparent dark:from-gray-800 dark:to-gray-700 rounded-lg overflow-hidden">
        {/* Simplified world map SVG */}
       <img src={map} alt='map image' className='w-full h-full'/>

        {/* Location dots */}
        {locations.map((location, index) => (
          <div
            key={index}
            className="absolute w-3 h-3 bg-black dark:bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2"
            style={location.position}
          />
        ))}
      </div>

      {/* Location list */}
      <div className="space-y-4">
        {locations.map((location, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex-1">
              <div className={`text-base font-medium dark:text-white text-gray-900"}`}>{location.name}</div>
              <div className="h-1 bg-gray-200 dark:bg-gray-800 rounded-full mt-2 ">
                <div
                  className="h-full bg-[#A8C5DA] dark:bg-gray-500 rounded-full"
                  style={{ width: `${(Number.parseInt(location.revenue) / 72) * 100}%` }}
                />
              </div>
            </div>
            <div className={`text-lg font-semibold ml-4 "text-white dark:text-gray-900"}`}>
              {location.revenue}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
