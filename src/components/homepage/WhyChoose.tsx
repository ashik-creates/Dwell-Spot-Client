import Image from "next/image";
import {
  FaHeadset,
  FaMapMarkedAlt,
  FaShieldAlt,
  FaWallet,
} from "react-icons/fa";

const features = [
  {
    icon: FaShieldAlt,
    title: "Verified Listings",
    description:
      "Every apartment is carefully reviewed to ensure accurate information and trusted property owners.",
  },
  {
    icon: FaMapMarkedAlt,
    title: "Prime Locations",
    description:
      "Discover apartments in the city's most desirable neighborhoods with excellent connectivity.",
  },
  {
    icon: FaWallet,
    title: "Affordable Pricing",
    description:
      "Transparent pricing with no hidden fees, helping you find homes that fit your budget.",
  },
  {
    icon: FaHeadset,
    title: "24/7 Customer Support",
    description:
      "Our dedicated support team is always available to assist you throughout your rental journey.",
  },
];

const WhyChoose = () => {
  return (
    <section className="relative overflow-hidden bg-[#F8F8F8] py-24">
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[#FF5A3C]/5 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-orange-200/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-20 px-5 lg:grid-cols-2">
        <div className="relative">
          <div className="absolute -bottom-5 -right-5 h-full w-full rounded-[36px] bg-[#FF5A3C]" />

          <Image
            src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg"
            alt="Modern Apartment"
            width={650}
            height={720}
            className="relative rounded-[32px] object-cover shadow-2xl"
          />

          <div className="absolute bottom-8 left-8 rounded-3xl bg-white px-7 py-6 shadow-2xl">
            <h3 className="text-4xl font-bold text-[#FF5A3C]">1,200+</h3>

            <p className="mt-2 text-sm font-medium text-gray-500">
              Verified Apartments
            </p>
          </div>
        </div>

        <div>
          <span className="rounded-full bg-[#FFF3F0] px-5 py-2 text-sm font-semibold text-[#FF5A3C]">
            WHY CHOOSE US
          </span>

          <h2 className="mt-6 text-4xl font-bold leading-tight text-[#2C2C2C] lg:text-5xl">
            Find Your Dream Home With Confidence
          </h2>

          <p className="mt-6 max-w-xl leading-8 text-gray-600">
            DwellSpot connects renters with premium apartments through verified
            listings, transparent pricing, trusted landlords, and personalized
            support—making your apartment search effortless and reliable.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="group rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#FF5A3C] hover:shadow-xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FFF3F0] text-[#FF5A3C] transition group-hover:bg-[#FF5A3C] group-hover:text-white">
                    <Icon size={22} />
                  </div>

                  <h3 className="mt-5 text-xl font-semibold text-[#2C2C2C]">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-gray-500">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-12 flex flex-wrap gap-10 border-t border-gray-200 pt-8">
            <div>
              <h3 className="text-3xl font-bold text-[#FF5A3C]">98%</h3>

              <p className="mt-1 text-sm text-gray-500">
                Customer Satisfaction
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-[#FF5A3C]">40+</h3>

              <p className="mt-1 text-sm text-gray-500">
                Cities Covered
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-[#FF5A3C]">24/7</h3>

              <p className="mt-1 text-sm text-gray-500">
                Support Available
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;