import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaCalendarAlt, FaClock } from "react-icons/fa";

const FeaturedBlog = () => {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-5">
        <div className="mb-12 text-center">
          <span className="rounded-full bg-[#FFF3F0] px-4 py-2 text-sm font-semibold text-[#FF5A3C]">
            Featured Article
          </span>

          <h2 className="mt-5 text-4xl font-bold text-[#2C2C2C] lg:text-5xl">
            Apartment Hunting Made Easy
          </h2>

          <p className="mx-auto mt-5 max-w-3xl leading-8 text-gray-600">
            Learn practical strategies that will help you choose the perfect
            apartment while avoiding common rental mistakes.
          </p>
        </div>

        <div className="overflow-hidden rounded-[32px] bg-[#F8F9FA] shadow-lg transition hover:shadow-2xl">
          <div className="grid items-center lg:grid-cols-2">
            <div className="relative h-[350px] lg:h-full">
              <Image
                src="https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg"
                alt="Apartment Guide"
                fill
                className="object-cover"
              />
            </div>

            <div className="p-10 lg:p-14">
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <FaCalendarAlt className="text-[#FF5A3C]" />
                  <span>July 14, 2026</span>
                </div>

                <div className="flex items-center gap-2">
                  <FaClock className="text-[#FF5A3C]" />
                  <span>5 min read</span>
                </div>
              </div>

              <h3 className="mt-6 text-4xl font-bold leading-tight text-[#2C2C2C]">
                10 Essential Tips Every First-Time Apartment Renter Should Know
              </h3>

              <p className="mt-6 leading-8 text-gray-600">
                Renting your first apartment can feel overwhelming. From setting
                a realistic budget to inspecting the property before signing a
                lease, this guide covers everything you need to make confident
                decisions and avoid costly mistakes.
              </p>

              <ul className="mt-8 space-y-3 text-gray-600">
                <li>✓ Set a realistic monthly budget.</li>
                <li>✓ Inspect the apartment before renting.</li>
                <li>✓ Understand your lease agreement.</li>
                <li>✓ Research the neighborhood thoroughly.</li>
              </ul>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBlog;