import Image from "next/image";
import Link from "next/link";
import {
  FaArrowRight,
  FaCalendarAlt,
  FaClock,
} from "react-icons/fa";

const blogs = [
  {
    id: 1,
    title: "10 Tips for First-Time Apartment Renters",
    description:
      "Learn the essential steps every renter should take before signing a lease and moving into a new apartment.",
    image:
      "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
    date: "July 10, 2026",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "How to Choose the Right Neighborhood",
    description:
      "Discover what to consider when selecting a neighborhood that matches your lifestyle and budget.",
    image:
      "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
    date: "July 8, 2026",
    readTime: "4 min read",
  },
  {
    id: 3,
    title: "Apartment Budget Planning Made Simple",
    description:
      "Create a practical monthly budget that helps you afford rent without sacrificing your financial goals.",
    image:
      "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg",
    date: "July 6, 2026",
    readTime: "6 min read",
  },
  {
    id: 4,
    title: "Studio vs One Bedroom: Which Fits You?",
    description:
      "Compare layouts, costs, and living experiences to choose the apartment type that best suits your needs.",
    image:
      "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg",
    date: "July 3, 2026",
    readTime: "5 min read",
  },
  {
    id: 5,
    title: "Small Apartment Decorating Ideas",
    description:
      "Make the most of limited space with smart decorating and storage solutions for modern apartments.",
    image:
      "https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg",
    date: "July 1, 2026",
    readTime: "7 min read",
  },
  {
    id: 6,
    title: "Questions to Ask Before Renting",
    description:
      "Don't sign a lease before asking these important questions about utilities, maintenance, and policies.",
    image:
      "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg",
    date: "June 28, 2026",
    readTime: "5 min read",
  },
];

const BlogGrid = () => {
  return (
    <section className="bg-[#F8F9FA] py-24">
      <div className="mx-auto max-w-7xl px-5">
        <div className="text-center">
          <span className="rounded-full bg-[#FFF3F0] px-4 py-2 text-sm font-semibold text-[#FF5A3C]">
            Latest Articles
          </span>

          <h2 className="mt-5 text-4xl font-bold text-[#2C2C2C] lg:text-5xl">
            Learn Something New Every Week
          </h2>

          <p className="mx-auto mt-5 max-w-3xl leading-8 text-gray-600">
            Browse our latest apartment guides, rental advice, and home living
            tips written to help renters make smarter decisions.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {blogs.map((blog) => (
            <article
              key={blog.id}
              className="group overflow-hidden rounded-3xl bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-7">
                <div className="flex items-center gap-5 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <FaCalendarAlt className="text-[#FF5A3C]" />
                    <span>{blog.date}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <FaClock className="text-[#FF5A3C]" />
                    <span>{blog.readTime}</span>
                  </div>
                </div>

                <h3 className="mt-5 text-2xl font-bold text-[#2C2C2C] transition group-hover:text-[#FF5A3C]">
                  {blog.title}
                </h3>

                <p className="mt-4 line-clamp-3 leading-7 text-gray-600">
                  {blog.description}
                </p>

              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogGrid;