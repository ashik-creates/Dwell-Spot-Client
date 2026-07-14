import Link from "next/link";

const BlogHero = () => {
  return (
    <section className="bg-[#F8F9FA] py-20">
      <div className="mx-auto max-w-5xl px-5 text-center">
        <span className="rounded-full bg-[#FFF3F0] px-4 py-2 text-sm font-semibold text-[#FF5A3C]">
          Our Blog
        </span>

        <h1 className="mt-6 text-5xl font-bold leading-tight text-[#2C2C2C] lg:text-6xl">
          Insights, Tips & Apartment Living Guides
        </h1>

        <p className="mx-auto mt-6 max-w-3xl leading-8 text-gray-600">
          Discover expert advice on apartment hunting, rental tips, home
          organization, and everything you need to make smarter housing
          decisions. Stay informed with practical guides from DwellSpot.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/apartments"
            className="rounded-xl bg-[#FF5A3C] px-8 py-4 font-semibold text-white transition hover:bg-[#ef4b2d]"
          >
            Explore Apartments
          </Link>

          <Link
            href="/about"
            className="rounded-xl border border-[#FF5A3C] px-8 py-4 font-semibold text-[#FF5A3C] transition hover:bg-[#FF5A3C] hover:text-white"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogHero;