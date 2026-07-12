import { getApartment } from "@/lib/api/apartment";
import Image from "next/image";
import Link from "next/link";
import {
  FaBed,
  FaBath,
  FaMapMarkerAlt,
  FaRulerCombined,
  FaStar,
  FaPhone,
  FaEnvelope,
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
    <section className="mx-auto max-w-7xl px-5 py-12">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="space-y-4">
          <div className="relative h-[500px] overflow-hidden rounded-3xl">
            <Image
              src={apartment.image}
              alt={apartment.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="grid grid-cols-3 gap-4">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="relative h-36 overflow-hidden rounded-2xl"
              >
                <Image
                  src={apartment.image}
                  alt={apartment.title}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

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

          <div className="mt-6 flex items-center gap-2">
            <FaStar className="text-yellow-500" />

            <span className="font-semibold">{apartment.rating}</span>

            <span className="text-gray-500">(128 Reviews)</span>
          </div>

          <div className="mt-8 text-5xl font-bold text-[#FF5A3C]">
            ${apartment.price}
            <span className="text-xl text-gray-500"> / month</span>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-4 rounded-3xl bg-[#FFF6F4] p-6">
            <div className="text-center">
              <FaBed className="mx-auto text-2xl text-[#FF5A3C]" />

              <p className="mt-2 text-2xl font-bold">
                {apartment.bedrooms}
              </p>

              <p className="text-sm text-gray-500">Bedrooms</p>
            </div>

            <div className="text-center">
              <FaBath className="mx-auto text-2xl text-[#FF5A3C]" />

              <p className="mt-2 text-2xl font-bold">
                {apartment.bathrooms}
              </p>

              <p className="text-sm text-gray-500">Bathrooms</p>
            </div>

            <div className="text-center">
              <FaRulerCombined className="mx-auto text-2xl text-[#FF5A3C]" />

              <p className="mt-2 text-2xl font-bold">
                {apartment.size}
              </p>

              <p className="text-sm text-gray-500">sq ft</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 grid gap-12 lg:grid-cols-[2fr_1fr]">
        <div className="space-y-12">
          <section>
            <h2 className="mb-6 text-3xl font-bold">
              Description
            </h2>

            <p className="leading-8 text-gray-600">
              {apartment.description}
            </p>
          </section>

          <section>
            <h2 className="mb-6 text-3xl font-bold">
              Specifications
            </h2>

            <div className="grid grid-cols-2 gap-6 rounded-3xl border p-8">
              <div>
                <p className="text-gray-500">Type</p>
                <p className="font-semibold">{apartment.type}</p>
              </div>

              <div>
                <p className="text-gray-500">Status</p>
                <p className="font-semibold">{apartment.status}</p>
              </div>

              <div>
                <p className="text-gray-500">Owner</p>
                <p className="font-semibold">{apartment.owner}</p>
              </div>

              <div>
                <p className="text-gray-500">Featured</p>
                <p className="font-semibold">
                  {apartment.featured ? "Yes" : "No"}
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-6 text-3xl font-bold">
              Reviews
            </h2>

            <div className="space-y-5">
              {[1, 2].map((item) => (
                <div
                  key={item}
                  className="rounded-3xl border p-6"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">
                      John Doe
                    </h3>

                    <span className="text-yellow-500">
                      ★★★★★
                    </span>
                  </div>

                  <p className="mt-3 text-gray-600">
                    Amazing apartment with a great location and modern
                    facilities.
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="mb-6 text-3xl font-bold">
              Related Apartments
            </h2>

            <div className="grid gap-6 md:grid-cols-2">
              {[1, 2].map((item) => (
                <Link
                  key={item}
                  href="/apartments"
                  className="rounded-3xl border p-6 transition hover:shadow-lg"
                >
                  <h3 className="font-semibold">
                    {apartment.title}
                  </h3>

                  <p className="mt-2 text-sm text-gray-500">
                    {apartment.location} • ${apartment.price}/month
                  </p>
                </Link>
              ))}
            </div>
          </section>
        </div>

        <aside>
          <div className="sticky top-28 rounded-3xl border p-8">
            <h3 className="mb-6 text-2xl font-bold">
              Owner Information
            </h3>

            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#FF5A3C] text-2xl font-bold text-white">
                {apartment.owner.charAt(0)}
              </div>

              <div>
                <h4 className="font-semibold">
                  {apartment.owner}
                </h4>

                <p className="text-sm text-gray-500">
                  Verified Owner
                </p>
              </div>
            </div>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3">
                <FaPhone className="text-[#FF5A3C]" />

                +1 234 567 890
              </div>

              <div className="flex items-center gap-3">
                <FaEnvelope className="text-[#FF5A3C]" />

                owner@email.com
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default ApartmentDetailsPage;