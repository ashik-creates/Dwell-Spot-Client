import { getApartment } from "@/lib/api/apartment";
import Image from "next/image";
import {
  FaBath,
  FaBed,
  FaHome,
  FaMapMarkerAlt,
  FaRulerCombined,
  FaUser,
} from "react-icons/fa";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

const ApartmentDetailsPage = async ({ params }: Props) => {
  const { id } = await params;

  const apartment = await getApartment(id);

  return (
    <section className="bg-[#F8F8F8] py-12">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Image */}

          <div className="overflow-hidden rounded-3xl bg-white shadow-sm">
            <div className="relative h-[320px] md:h-[500px]">
              <Image
                src={apartment.image}
                alt={apartment.title}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Details */}

          <div>
            <span className="rounded-full bg-[#FFF3F0] px-4 py-2 text-sm font-semibold text-[#FF5A3C]">
              {apartment.status}
            </span>

            <h1 className="mt-5 text-4xl font-bold text-[#2C2C2C]">
              {apartment.title}
            </h1>

            <div className="mt-4 flex items-center gap-2 text-gray-500">
              <FaMapMarkerAlt className="text-[#FF5A3C]" />
              {apartment.location}
            </div>

            <div className="mt-8">
              <h2 className="text-5xl font-bold text-[#FF5A3C]">
                ${apartment.price}
                <span className="text-xl font-medium text-gray-500">
                  {" "}
                  / month
                </span>
              </h2>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-5 rounded-3xl bg-white p-6 shadow-sm">
              <div className="text-center">
                <FaBed className="mx-auto text-2xl text-[#FF5A3C]" />
                <h3 className="mt-3 text-2xl font-bold">
                  {apartment.bedrooms}
                </h3>
                <p className="text-sm text-gray-500">Bedrooms</p>
              </div>

              <div className="text-center">
                <FaBath className="mx-auto text-2xl text-[#FF5A3C]" />
                <h3 className="mt-3 text-2xl font-bold">
                  {apartment.bathrooms}
                </h3>
                <p className="text-sm text-gray-500">Bathrooms</p>
              </div>

              <div className="text-center">
                <FaRulerCombined className="mx-auto text-2xl text-[#FF5A3C]" />
                <h3 className="mt-3 text-2xl font-bold">
                  {apartment.size}
                </h3>
                <p className="text-sm text-gray-500">Sq Ft</p>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}

        <div className="mt-14 grid gap-8 lg:grid-cols-[2fr_1fr]">
          <div className="space-y-8">
            {/* Description */}

            <section className="rounded-3xl bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-[#2C2C2C]">
                Description
              </h2>

              <p className="mt-5 leading-8 text-gray-600">
                {apartment.description}
              </p>
            </section>

            {/* Specifications */}

            <section className="rounded-3xl bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-[#2C2C2C]">
                Specifications
              </h2>

              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <div>
                  <p className="text-sm text-gray-500">Apartment Type</p>

                  <p className="mt-1 font-semibold">
                    {apartment.type}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">Availability</p>

                  <p className="mt-1 font-semibold">
                    {apartment.status}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">Price</p>

                  <p className="mt-1 font-semibold">
                    ${apartment.price} / month
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">Location</p>

                  <p className="mt-1 font-semibold">
                    {apartment.location}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">Bedrooms</p>

                  <p className="mt-1 font-semibold">
                    {apartment.bedrooms}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">Bathrooms</p>

                  <p className="mt-1 font-semibold">
                    {apartment.bathrooms}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">Size</p>

                  <p className="mt-1 font-semibold">
                    {apartment.size} sq ft
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">Featured</p>

                  <p className="mt-1 font-semibold">
                    {apartment.featured ? "Yes" : "No"}
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}

          <aside>
            <div className="sticky top-24 rounded-3xl bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-[#2C2C2C]">
                Property Owner
              </h2>

              <div className="mt-8 flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#FF5A3C] text-white">
                  <FaUser size={24} />
                </div>

                <div>
                  <h3 className="font-semibold text-[#2C2C2C]">
                    {apartment.owner}
                  </h3>

                  <p className="text-sm text-gray-500">
                    Verified Owner
                  </p>
                </div>
              </div>

              <div className="mt-8 rounded-2xl bg-[#FFF7F4] p-5">
                <div className="flex items-center gap-3">
                  <FaHome className="text-[#FF5A3C]" />

                  <span className="font-medium">
                    Apartment listed by {apartment.owner}
                  </span>
                </div>

                <p className="mt-4 text-sm leading-7 text-gray-600">
                  DwellSpot verifies apartment listings to help renters find
                  reliable homes with confidence.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default ApartmentDetailsPage;