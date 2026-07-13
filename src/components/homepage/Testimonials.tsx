import Image from "next/image";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Software Engineer",
    image:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    rating: 5,
    review:
      "DwellSpot made apartment hunting incredibly easy. I found my dream apartment within a week, and the listing matched exactly what was advertised.",
  },
  {
    name: "Michael Brown",
    role: "Marketing Manager",
    image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    rating: 5,
    review:
      "The verified listings gave me confidence when choosing a property. The search filters were simple and very effective.",
  },
  {
    name: "Emily Davis",
    role: "Graphic Designer",
    image:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
    rating: 5,
    review:
      "Beautiful interface, fast search, and trustworthy landlords. I would definitely recommend DwellSpot to anyone looking for a new apartment.",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-5">
        <div className="text-center">
          <span className="rounded-full bg-[#FFF3F0] px-5 py-2 text-sm font-semibold text-[#FF5A3C]">
            TESTIMONIALS
          </span>

          <h2 className="mt-5 text-4xl font-bold text-[#2C2C2C] lg:text-5xl">
            What Our Clients Say
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-gray-500">
            Thousands of renters have found their perfect apartment through
            DwellSpot. Here is what some of them have to say.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="rounded-3xl border border-gray-200 bg-[#FAFAFA] p-8 transition duration-300 hover:-translate-y-2 hover:border-[#FF5A3C] hover:shadow-xl"
            >
              <div className="flex items-center gap-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={70}
                  height={70}
                  className="h-[70px] w-[70px] rounded-full object-cover"
                />

                <div>
                  <h3 className="text-xl font-semibold text-[#2C2C2C]">
                    {testimonial.name}
                  </h3>

                  <p className="text-sm text-gray-500">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              <div className="mt-6 flex gap-1 text-[#FFB800]">
                {Array.from({ length: testimonial.rating }).map((_, index) => (
                  <FaStar key={index} />
                ))}
              </div>

              <p className="mt-6 leading-8 text-gray-600">
                {testimonial.review}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;