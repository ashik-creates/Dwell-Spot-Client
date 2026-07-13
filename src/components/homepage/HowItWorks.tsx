import {
  FaSearch,
  FaHome,
  FaKey,
} from "react-icons/fa";

const steps = [
  {
    icon: FaSearch,
    title: "Browse Apartments",
    description:
      "Search through hundreds of verified apartment listings using location, price, and other filters.",
  },
  {
    icon: FaHome,
    title: "Choose Your Home",
    description:
      "Compare apartments, explore detailed information, and find the perfect place that matches your lifestyle.",
  },
  {
    icon: FaKey,
    title: "Move In",
    description:
      "Contact the property owner and complete your rental process with confidence and ease.",
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-[#FFF8F5] py-24">
      <div className="mx-auto max-w-7xl px-5">
        <div className="text-center">
          <span className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-[#FF5A3C] shadow">
            HOW IT WORKS
          </span>

          <h2 className="mt-5 text-4xl font-bold text-[#2C2C2C] lg:text-5xl">
            Renting Made Simple
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-gray-500">
            Find your dream apartment in just a few simple steps. Our platform
            makes searching, comparing, and renting easier than ever.
          </p>
        </div>

        <div className="relative mt-20 grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className="relative rounded-3xl bg-white p-10 text-center shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="absolute -top-5 left-1/2 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full bg-[#FF5A3C] text-lg font-bold text-white shadow-lg">
                  {index + 1}
                </div>

                <div className="mx-auto mt-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#FFF3F0] text-[#FF5A3C]">
                  <Icon size={32} />
                </div>

                <h3 className="mt-8 text-2xl font-semibold text-[#2C2C2C]">
                  {step.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-500">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;