import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const cities = [
  {
    name: "New York",
    properties: "320+ Properties",
    image:
      "https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg",
  },
  {
    name: "Los Angeles",
    properties: "185+ Properties",
    image:
      "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg",
  },
  {
    name: "Chicago",
    properties: "140+ Properties",
    image:
      "https://images.pexels.com/photos/1823681/pexels-photo-1823681.jpeg",
  },
  {
    name: "Miami",
    properties: "210+ Properties",
    image:
      "https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg",
  },
];

const FeaturedCities = () => {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-5">
        <div className="text-center">
          <span className="rounded-full bg-[#FFF3F0] px-5 py-2 text-sm font-semibold text-[#FF5A3C]">
            FEATURED CITIES
          </span>

          <h2 className="mt-5 text-4xl font-bold text-[#2C2C2C] lg:text-5xl">
            Find Apartments In Popular Cities
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-gray-500">
            Explore thousands of verified apartments in the most popular cities
            with premium locations, modern amenities, and affordable prices.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {cities.map((city) => (
            <div
              key={city.name}
              className="group overflow-hidden rounded-3xl bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={city.image}
                  alt={city.name}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute bottom-6 left-6">
                  <h3 className="text-3xl font-bold text-white">
                    {city.name}
                  </h3>

                  <p className="mt-2 text-sm text-gray-200">
                    {city.properties}
                  </p>
                </div>
              </div>

              <div className="p-6">
                <Link
                  href="/apartments"
                  className="inline-flex items-center gap-2 font-semibold text-[#FF5A3C] transition hover:gap-3"
                >
                  Explore Apartments

                  <FaArrowRight />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCities;