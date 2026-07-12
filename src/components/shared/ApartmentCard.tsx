import { Apartment } from "@/lib/types/apartments";
import Image from "next/image";
import Link from "next/link";
import { FaBed, FaBath, FaRulerCombined, FaMapMarkerAlt } from "react-icons/fa";

interface ApartmentCardProps {
  apartment: Apartment;
}

const ApartmentCard = ({ apartment }: ApartmentCardProps) => {
  return (
    <div className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={apartment.image}
          alt={apartment.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-110"
        />

        <div className="absolute left-4 top-4 rounded-full bg-[#FF5A3C] px-3 py-1 text-sm font-semibold text-white">
          ${apartment.price}/month
        </div>
      </div>

      <div className="space-y-5 p-6">
        <div>
          <h2 className="line-clamp-1 text-2xl font-bold text-[#2C2C2C]">
            {apartment.title}
          </h2>

          <div className="mt-2 flex items-center gap-2 text-gray-500">
            <FaMapMarkerAlt className="text-[#FF5A3C]" />
            <span className="line-clamp-1 text-sm">
              {apartment.location}
            </span>
          </div>
        </div>

        <p className="line-clamp-2 text-sm leading-7 text-gray-500">
          {apartment.description}
        </p>

        <div className="grid grid-cols-3 gap-4 rounded-2xl bg-[#FFF6F4] p-4">
          <div className="text-center">
            <FaBed className="mx-auto mb-2 text-xl text-[#FF5A3C]" />
            <p className="text-lg font-bold text-[#2C2C2C]">
              {apartment.bedrooms}
            </p>
            <span className="text-xs text-gray-500">Bedrooms</span>
          </div>

          <div className="text-center">
            <FaBath className="mx-auto mb-2 text-xl text-[#FF5A3C]" />
            <p className="text-lg font-bold text-[#2C2C2C]">
              {apartment.bathrooms}
            </p>
            <span className="text-xs text-gray-500">Bathrooms</span>
          </div>

          <div className="text-center">
            <FaRulerCombined className="mx-auto mb-2 text-xl text-[#FF5A3C]" />
            <p className="text-lg font-bold text-[#2C2C2C]">
              {apartment.size}
            </p>
            <span className="text-xs text-gray-500">sq ft</span>
          </div>
        </div>

        <Link
          href={`/apartments/${apartment._id}`}
          className="block rounded-xl bg-[#FF5A3C] py-3 text-center font-semibold text-white transition hover:bg-[#ef4b2d]"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ApartmentCard;