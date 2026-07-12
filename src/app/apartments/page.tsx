import ApartmentFilters from "@/components/apartments/ApartmentFilters";
import Pagination from "@/components/apartments/Pagintaion";
import ApartmentCard from "@/components/shared/ApartmentCard";
import { getApartments } from "@/lib/api/apartment";
import { Apartment } from "@/lib/types/apartments";

interface Props {
  searchParams: Promise<{
    search?: string;
    location?: string;
    price?: string;
    sort?: string;
    page?: string;
  }>;
}

const ApartmentsPage = async ({ searchParams }: Props) => {
  const query = await searchParams;

  const { apartments, currentPage, totalPages } = await getApartments(query);

  return (
    <section className="mx-auto max-w-7xl px-5 py-16">
      <div className="mb-12 text-center">
        <span className="rounded-full bg-[#FFF3F0] px-4 py-2 text-sm font-semibold text-[#FF5A3C]">
          Premium Listings
        </span>

        <h1 className="mt-4 text-4xl font-bold text-[#2C2C2C]">
          Explore Apartments
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-gray-500">
          Browse verified apartments with modern amenities and transparent
          pricing.
        </p>
      </div>

      <ApartmentFilters />

      {apartments.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-gray-300 py-20 text-center">
          <h2 className="text-2xl font-semibold">No apartments found</h2>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-4">
            {apartments.map((apartment: Apartment) => (
              <ApartmentCard key={apartment._id} apartment={apartment} />
            ))}
          </div>
          <Pagination currentPage={currentPage} totalPages={totalPages} />
        </>
      )}
    </section>
  );
};

export default ApartmentsPage;
