import Image from "next/image";
import Link from "next/link";

const AboutHero = () => {
  return (
    <section className="bg-[#F8F9FA] py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 lg:grid-cols-2">
        <div>
          <span className="rounded-full bg-[#FFF3F0] px-4 py-2 text-sm font-semibold text-[#FF5A3C]">
            About DwellSpot
          </span>

          <h1 className="mt-6 text-5xl font-bold leading-tight text-[#2C2C2C]">
            Find Your Perfect Apartment With Confidence
          </h1>

          <p className="mt-6 max-w-xl leading-8 text-gray-600">
            DwellSpot helps renters discover verified apartments in prime
            locations with transparent pricing and trusted property owners. We
            make apartment hunting simple, secure, and enjoyable.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/apartments"
              className="rounded-xl bg-[#FF5A3C] px-8 py-4 font-semibold text-white transition hover:bg-[#ef4b2d]"
            >
              Explore Apartments
            </Link>

            <Link
              href="/contact"
              className="rounded-xl border border-[#FF5A3C] px-8 py-4 font-semibold text-[#FF5A3C] transition hover:bg-[#FF5A3C] hover:text-white"
            >
              Contact Us
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-8">
            <div>
              <h3 className="text-3xl font-bold text-[#FF5A3C]">1200+</h3>
              <p className="mt-1 text-sm text-gray-500">
                Apartments
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-[#FF5A3C]">850+</h3>
              <p className="mt-1 text-sm text-gray-500">
                Happy Renters
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-[#FF5A3C]">40+</h3>
              <p className="mt-1 text-sm text-gray-500">
                Cities
              </p>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden lg:overflow-visible">
          <div className="absolute left-0 top-0 h-48 w-48 rounded-full bg-[#FF5A3C]/10 blur-3xl lg:-left-6 lg:-top-6" />

          <Image
            src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg"
            alt="Modern Apartment"
            width={700}
            height={700}
            className="rounded-[32px] object-cover shadow-2xl"
          />

          <div className="absolute bottom-6 left-6 rounded-2xl bg-white p-5 shadow-xl">
            <h3 className="text-3xl font-bold text-[#FF5A3C]">
              Trusted
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              Apartment Rental Platform
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;