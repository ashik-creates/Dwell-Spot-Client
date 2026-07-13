import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <section className="relative overflow-hidden bg-[#2C2C2C]">
      <div className="grid min-h-[68vh] lg:grid-cols-[42%_58%]">
        <div className="flex items-center px-6 py-16 lg:px-16">
          <div className="max-w-xl">
            <span className="mb-5 inline-block rounded-full border border-[#FF5A3C]/60 bg-[#FF5A3C]/10 px-5 py-2 text-xs font-semibold uppercase tracking-[5px] text-[#FF5A3C]">
              Premium Living
            </span>

            <h1 className="text-5xl font-light uppercase leading-tight tracking-wide text-white md:text-6xl">
              Find Your
              <br />
              Perfect
              <br />
              Apartment
            </h1>

            <p className="mt-7 max-w-lg text-base leading-8 text-gray-300">
              Discover beautifully designed apartments in prime locations.
              Browse verified listings, compare prices, and find a place you will
              love to call home.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/apartments"
                className="rounded-xl bg-[#FF5A3C] px-8 py-4 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#ef4b2d]"
              >
                Explore Apartments
              </Link>

              <Link
                href="/about"
                className="rounded-xl border border-[#FF5A3C] px-8 py-4 font-semibold text-[#FF5A3C] transition duration-300 hover:bg-[#FF5A3C] hover:text-white"
              >
                Learn More
              </Link>
            </div>

            <div className="mt-14 flex flex-wrap gap-10">
              <div>
                <h3 className="text-3xl font-bold text-white">1,200+</h3>
                <p className="mt-1 text-sm text-gray-400">
                  Verified Apartments
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-white">850+</h3>
                <p className="mt-1 text-sm text-gray-400">
                  Happy Residents
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-white">40+</h3>
                <p className="mt-1 text-sm text-gray-400">
                  Prime Locations
                </p>
              </div>
            </div>

            <div className="mt-10 flex items-center gap-3">
              <span className="h-2 w-8 rounded-full bg-[#FF5A3C]" />
              <span className="h-2 w-2 rounded-full bg-gray-500" />
              <span className="h-2 w-2 rounded-full bg-gray-500" />
            </div>
          </div>
        </div>

        <div className="relative hidden min-h-[68vh] lg:block">
          <div className="absolute left-[-8%] top-0 h-full w-[50%] overflow-hidden border-l-4 border-[#FF5A3C] [clip-path:polygon(20%_0,100%_0,82%_100%,0_100%)] animate-[float_7s_ease-in-out_infinite]">
            <Image
              src="/apartment1.jpg"
              alt="Apartment"
              fill
              priority
              className="object-cover transition duration-700 hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
          </div>

          <div className="absolute left-[24%] top-0 h-full w-[50%] overflow-hidden border-l-4 border-[#FF5A3C] [clip-path:polygon(20%_0,100%_0,82%_100%,0_100%)] animate-[float_7s_ease-in-out_1s_infinite]">
            <Image
              src="/apartment2.jpg"
              alt="Apartment"
              fill
              priority
              className="object-cover transition duration-700 hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
          </div>

          <div className="absolute right-[-8%] top-0 h-full w-[50%] overflow-hidden border-l-4 border-[#FF5A3C] [clip-path:polygon(20%_0,100%_0,82%_100%,0_100%)] animate-[float_7s_ease-in-out_2s_infinite]">
            <Image
              src="/apartment3.jpg"
              alt="Apartment"
              fill
              priority
              className="object-cover transition duration-700 hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center">
          <span className="mb-2 text-[11px] uppercase tracking-[4px] text-gray-400">
            Scroll
          </span>

          <div className="flex h-12 w-7 justify-center rounded-full border border-gray-500">
            <span className="mt-2 h-2 w-2 animate-bounce rounded-full bg-[#FF5A3C]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;