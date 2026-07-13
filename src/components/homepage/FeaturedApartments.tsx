import Link from "next/link";
import ApartmentCard from "../shared/ApartmentCard";
import { getFeaturedApartments } from "@/lib/api/apartment";

const FeaturedApartments = async () => {
  const apartments = await getFeaturedApartments();

  return (
    <section className="bg-[#FAFAFA] py-24">
      <div className="mx-auto max-w-7xl px-5">
        <div className="flex items-end justify-between">
          <div>
            <span className="rounded-full bg-[#FFF3F0] px-4 py-2 text-sm font-semibold text-[#FF5A3C]">
              Featured Listings
            </span>

            <h2 className="mt-5 text-4xl font-bold text-[#2C2C2C]">
              Handpicked Apartments
            </h2>

            <p className="mt-4 max-w-2xl text-gray-500">
              Explore our most popular apartments selected for their premium
              locations, modern amenities, and outstanding customer ratings.
            </p>
          </div>

          <Link
            href="/apartments"
            className="hidden rounded-xl border border-[#FF5A3C] px-6 py-3 font-semibold text-[#FF5A3C] transition hover:bg-[#FF5A3C] hover:text-white lg:block"
          >
            View All
          </Link>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {apartments.map((apartment) => (
            <ApartmentCard
              key={apartment._id}
              apartment={apartment}
            />
          ))}
        </div>

        <div className="mt-10 text-center lg:hidden">
          <Link
            href="/apartments"
            className="rounded-xl bg-[#FF5A3C] px-7 py-3 font-semibold text-white transition hover:bg-[#ef4b2d]"
          >
            View All Apartments
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedApartments;