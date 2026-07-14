import {
  FaHandshake,
  FaRegEye,
  FaAward,
} from "react-icons/fa";

const values = [
  {
    icon: FaHandshake,
    title: "Trust",
    description:
      "We verify every apartment listing to ensure renters can confidently choose their next home without worrying about inaccurate information.",
  },
  {
    icon: FaRegEye,
    title: "Transparency",
    description:
      "Clear pricing, honest property details, and open communication help renters make informed decisions with confidence.",
  },
  {
    icon: FaAward,
    title: "Quality",
    description:
      "We focus on showcasing well-maintained apartments and delivering a premium experience for both renters and property owners.",
  },
];

const CoreValues = () => {
  return (
    <section className="bg-[#F8F9FA] py-24">
      <div className="mx-auto max-w-7xl px-5">
        <div className="text-center">
          <span className="rounded-full bg-[#FFF3F0] px-4 py-2 text-sm font-semibold text-[#FF5A3C]">
            Our Values
          </span>

          <h2 className="mt-5 text-4xl font-bold text-[#2C2C2C] lg:text-5xl">
            What Drives DwellSpot
          </h2>

          <p className="mx-auto mt-5 max-w-3xl leading-8 text-gray-600">
            Our values define how we serve renters and property owners. They
            guide every listing, every interaction, and every experience on
            DwellSpot.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {values.map((value) => {
            const Icon = value.icon;

            return (
              <div
                key={value.title}
                className="group rounded-3xl bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#FF5A3C] text-white transition duration-300 group-hover:scale-110">
                  <Icon size={26} />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-[#2C2C2C]">
                  {value.title}
                </h3>

                <p className="mt-4 leading-8 text-gray-500">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;