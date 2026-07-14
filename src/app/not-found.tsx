import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex min-h-[80vh] items-center justify-center bg-[#F8F9FA] px-5">
      <div className="max-w-xl text-center">
        <h1 className="text-8xl font-extrabold text-[#FF5A3C]">
          404
        </h1>

        <h2 className="mt-6 text-4xl font-bold text-[#2C2C2C]">
          Page Not Found
        </h2>

        <p className="mt-5 leading-8 text-gray-500">
          The page you are looking for does not exist or may have been
          moved. Explore our apartments and discover your next home.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="rounded-xl bg-[#FF5A3C] px-8 py-4 font-semibold text-white transition hover:bg-[#ef4b2d]"
          >
            Back to Home
          </Link>

          <Link
            href="/apartments"
            className="rounded-xl border border-[#FF5A3C] px-8 py-4 font-semibold text-[#FF5A3C] transition hover:bg-[#FF5A3C] hover:text-white"
          >
            Browse Apartments
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;