const categories = [
  {
    title: "Apartment Tips",
    count: "18 Articles",
  },
  {
    title: "Rental Advice",
    count: "12 Articles",
  },
  {
    title: "Moving Guide",
    count: "9 Articles",
  },
  {
    title: "Budget Living",
    count: "14 Articles",
  },
  {
    title: "Interior Design",
    count: "11 Articles",
  },
  {
    title: "Lifestyle",
    count: "7 Articles",
  },
];

const BlogCategories = () => {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-5">
        <div className="text-center">
          <span className="rounded-full bg-[#FFF3F0] px-4 py-2 text-sm font-semibold text-[#FF5A3C]">
            Categories
          </span>

          <h2 className="mt-5 text-4xl font-bold text-[#2C2C2C] lg:text-5xl">
            Explore Topics
          </h2>

          <p className="mx-auto mt-5 max-w-3xl leading-8 text-gray-600">
            Browse articles by category and discover practical tips for renting,
            moving, budgeting, and creating your perfect living space.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <div
              key={category.title}
              className="group rounded-3xl border border-gray-200 bg-[#FAFAFA] p-8 text-center transition duration-300 hover:-translate-y-2 hover:border-[#FF5A3C] hover:bg-white hover:shadow-xl"
            >
              <h3 className="text-2xl font-bold text-[#2C2C2C] transition group-hover:text-[#FF5A3C]">
                {category.title}
              </h3>

              <p className="mt-3 text-gray-500">
                {category.count}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogCategories;