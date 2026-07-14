import Image from "next/image";
import {
  FaBullseye,
  FaEye,
  FaCheckCircle,
} from "react-icons/fa";

const OurStory = () => {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 lg:grid-cols-2">
        <div className="relative">
          <div className="absolute -bottom-6 -right-6 h-44 w-44 rounded-full bg-[#FF5A3C]/10 blur-3xl" />

          <Image
            src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg"
            alt="Luxury Apartment"
            width={700}
            height={700}
            className="rounded-[32px] object-cover shadow-2xl"
          />

          <div className="absolute bottom-6 left-6 rounded-2xl bg-white p-5 shadow-xl">
            <h3 className="text-3xl font-bold text-[#FF5A3C]">
              5+
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              Years of Excellence
            </p>
          </div>
        </div>

        <div>
          <span className="rounded-full bg-[#FFF3F0] px-4 py-2 text-sm font-semibold text-[#FF5A3C]">
            Our Story
          </span>

          <h2 className="mt-5 text-4xl font-bold text-[#2C2C2C] lg:text-5xl">
            Making Apartment Hunting Easier For Everyone
          </h2>

          <p className="mt-6 leading-8 text-gray-600">
            DwellSpot was created with a simple goal—help people find
            quality apartments without the frustration of unreliable
            listings. We connect renters with verified property owners,
            making the search process faster, safer, and more
            transparent.
          </p>

          <div className="mt-10 space-y-8">
            <div className="flex gap-5">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FF5A3C] text-white">
                <FaBullseye size={22} />
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#2C2C2C]">
                  Our Mission
                </h3>

                <p className="mt-2 leading-7 text-gray-500">
                  To provide a trusted apartment rental platform where
                  renters can easily discover verified homes with
                  complete transparency.
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FF5A3C] text-white">
                <FaEye size={22} />
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#2C2C2C]">
                  Our Vision
                </h3>

                <p className="mt-2 leading-7 text-gray-500">
                  To become the most trusted apartment marketplace by
                  offering secure, reliable, and user-friendly rental
                  experiences.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 rounded-3xl bg-[#FFF7F4] p-6">
            <div className="flex items-start gap-3">
              <FaCheckCircle className="mt-1 text-xl text-[#FF5A3C]" />

              <p className="leading-8 text-gray-600">
                Every apartment listed on DwellSpot is reviewed before
                publication, ensuring renters have access to accurate
                information and trustworthy property owners.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;