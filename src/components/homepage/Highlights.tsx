import Image from "next/image";
import {
  FaCheckCircle,
  FaShieldAlt,
  FaMapMarkerAlt,
  FaHome,
} from "react-icons/fa";

const highlights = [
  {
    icon: FaShieldAlt,
    title: "100% Verified Listings",
    description:
      "Every apartment is reviewed to ensure accurate information, trusted owners, and a secure rental experience.",
  },
  {
    icon: FaMapMarkerAlt,
    title: "Prime Locations",
    description:
      "Browse apartments located near universities, business districts, hospitals, shopping centers, and public transport.",
  },
  {
    icon: FaHome,
    title: "Modern Living Spaces",
    description:
      "Discover beautifully designed apartments with premium interiors and amenities for comfortable living.",
  },
];

const Highlights = () => {
  return (
    <section className="bg-[#F8F8F8] py-24">
      <div className="mx-auto max-w-7xl px-5">
        <div className="mb-16 text-center">
          <span className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-[#FF5A3C] shadow">
            HIGHLIGHTS
          </span>

          <h2 className="mt-5 text-4xl font-bold text-[#2C2C2C] lg:text-5xl">
            Everything You Need in One Place
          </h2>

          <p className="mx-auto mt-5 max-w-3xl leading-8 text-gray-500">
            DwellSpot helps you discover verified apartments with transparent
            pricing, premium amenities, and trusted property owners.
          </p>
        </div>

        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="relative">
            <Image
              src="https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg"
              alt="Apartment Interior"
              width={700}
              height={700}
              className="rounded-[32px] object-cover shadow-2xl"
            />

            <div className="absolute bottom-4 right-4 rounded-3xl bg-white p-6 shadow-xl lg:-bottom-8 lg:-right-8">
              <h3 className="text-4xl font-bold text-[#FF5A3C]">1200+</h3>
              <p className="mt-2 text-gray-500">
                Apartments Available
              </p>
            </div>
          </div>

          <div className="space-y-8">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-3xl bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="flex gap-5">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#FF5A3C] text-white">
                      <Icon size={24} />
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-[#2C2C2C]">
                        {item.title}
                      </h3>

                      <p className="mt-3 leading-7 text-gray-500">
                        {item.description}
                      </p>

                      <div className="mt-5 flex items-center gap-2 text-[#FF5A3C]">
                        <FaCheckCircle />
                        <span className="font-medium">
                          Trusted by thousands of renters
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;