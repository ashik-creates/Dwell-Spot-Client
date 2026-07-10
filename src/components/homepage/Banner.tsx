import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <section className="overflow-hidden bg-[#2C2C2C]">
      <div className="grid min-h-[85vh] lg:grid-cols-[40%_60%]">
        <div className="flex items-center justify-center px-8 py-20 lg:px-16">
          <div>
            <span className="mb-5 inline-block border border-[#FF5A3C] px-4 py-2 text-sm font-medium uppercase tracking-[6px] text-[#FF5A3C]">
              Premium Living
            </span>

            <h1 className="text-5xl font-light uppercase leading-tight tracking-wide text-white md:text-6xl xl:text-7xl">
              Find Your
              <br />
              Perfect
              <br />
              Apartment
            </h1>

            <p className="mt-8 max-w-md leading-8 text-gray-300">
              Discover premium apartments and modern homes tailored to your
              lifestyle. Explore verified listings with trusted property owners
              across the city.
            </p>

            <div className="mt-10 flex gap-4">
              <Link
                href="/apartments"
                className="rounded bg-[#FF5A3C] px-8 py-4 font-semibold text-white transition hover:bg-[#ef4b2d]"
              >
                Explore Now
              </Link>

              <Link
                href="/about"
                className="rounded border border-[#FF5A3C] px-8 py-4 font-semibold text-[#FF5A3C] transition hover:bg-[#FF5A3C] hover:text-white"
              >
                Learn More
              </Link>
            </div>

            <div className="mt-16 flex gap-12">
              <div>
                <h2 className="text-3xl font-bold text-white">1.2K+</h2>
                <p className="text-gray-400">Properties</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white">850+</h2>
                <p className="text-gray-400">Happy Clients</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white">40+</h2>
                <p className="text-gray-400">Cities</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative hidden min-h-[85vh] lg:block">
          <div className="absolute left-[-8%] top-0 h-full w-[50%] overflow-hidden border-l-4 border-[#FF5A3C] [clip-path:polygon(20%_0,100%_0,82%_100%,0_100%)]">
            <Image
              src="/apartment1.jpg"
              alt="Apartment"
              fill
              priority
              className="object-cover"
            />
          </div>

          <div className="absolute left-[24%] top-0 h-full w-[50%] overflow-hidden border-l-4 border-[#FF5A3C] [clip-path:polygon(20%_0,100%_0,82%_100%,0_100%)]">
            <Image
              src="/apartment2.jpg"
              alt="Apartment"
              fill
              priority
              className="object-cover"
            />
          </div>

          <div className="absolute right-[-8%] top-0 h-full w-[50%] overflow-hidden border-l-4 border-[#FF5A3C] [clip-path:polygon(20%_0,100%_0,82%_100%,0_100%)]">
            <Image
              src="/apartment3.jpg"
              alt="Apartment"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;