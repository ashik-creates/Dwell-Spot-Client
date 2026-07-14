import StatisticsChart from "../homepage/StatisticsChart";

const Achievements = () => {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-5">
        <div className="text-center">
          <span className="rounded-full bg-[#FFF3F0] px-4 py-2 text-sm font-semibold text-[#FF5A3C]">
            Our Achievements
          </span>

          <h2 className="mt-5 text-4xl font-bold text-[#2C2C2C] lg:text-5xl">
            Growing Every Day
          </h2>

          <p className="mx-auto mt-5 max-w-3xl leading-8 text-gray-600">
            Thousands of renters trust DwellSpot to discover quality apartments
            across multiple cities. Our growth reflects our commitment to
            providing a reliable and transparent rental experience.
          </p>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-[40%_60%]">
          <div className="space-y-6">
            <div className="rounded-3xl border border-gray-200 bg-[#FAFAFA] p-8">
              <h3 className="text-5xl font-bold text-[#FF5A3C]">
                1,200+
              </h3>

              <p className="mt-2 text-lg font-semibold text-[#2C2C2C]">
                Verified Apartments
              </p>

              <p className="mt-3 leading-7 text-gray-500">
                Carefully reviewed listings from trusted property owners.
              </p>
            </div>

            <div className="rounded-3xl border border-gray-200 bg-[#FAFAFA] p-8">
              <h3 className="text-5xl font-bold text-[#FF5A3C]">
                850+
              </h3>

              <p className="mt-2 text-lg font-semibold text-[#2C2C2C]">
                Happy Renters
              </p>

              <p className="mt-3 leading-7 text-gray-500">
                Successfully connected with their ideal apartment.
              </p>
            </div>

            <div className="rounded-3xl border border-gray-200 bg-[#FAFAFA] p-8">
              <h3 className="text-5xl font-bold text-[#FF5A3C]">
                40+
              </h3>

              <p className="mt-2 text-lg font-semibold text-[#2C2C2C]">
                Cities Covered
              </p>

              <p className="mt-3 leading-7 text-gray-500">
                Expanding our network to serve renters nationwide.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-[#FAFAFA] p-8">
            <StatisticsChart
              totalApartments={1200}
              availableApartments={980}
              averagePrice={1800}
              totalLocations={40}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;