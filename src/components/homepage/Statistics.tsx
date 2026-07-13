import { getStatistics } from "@/lib/api/apartment";
import StatisticsChart from "./StatisticsChart";


const Statistics = async () => {
  const stats = await getStatistics();

  return (
    <section className="bg-[#F8F8F8] py-24">
      <div className="mx-auto max-w-7xl px-5">
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold text-[#2C2C2C]">
            Platform Statistics
          </h2>

          <p className="mt-4 text-gray-500">
            Insights from our apartment listings.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[2fr_1fr]">
          <div className="rounded-3xl bg-white p-8 shadow">
            <StatisticsChart
              totalApartments={stats.totalApartments}
              availableApartments={stats.availableApartments}
              averagePrice={stats.averagePrice}
              totalLocations={stats.totalLocations}
            />
          </div>

          <div className="grid gap-5">
            <div className="rounded-2xl bg-white p-6 shadow">
              <p className="text-gray-500">Apartments</p>
              <h3 className="mt-2 text-4xl font-bold">
                {stats.totalApartments}
              </h3>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow">
              <p className="text-gray-500">Available</p>
              <h3 className="mt-2 text-4xl font-bold text-green-600">
                {stats.availableApartments}
              </h3>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow">
              <p className="text-gray-500">Average Rent</p>
              <h3 className="mt-2 text-4xl font-bold text-[#FF5A3C]">
                ${stats.averagePrice}
              </h3>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow">
              <p className="text-gray-500">Locations</p>
              <h3 className="mt-2 text-4xl font-bold">
                {stats.totalLocations}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;