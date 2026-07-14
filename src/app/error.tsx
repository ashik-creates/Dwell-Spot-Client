"use client";

import Link from "next/link";

const Error = ({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) => {
  return (
    <div className="flex min-h-[80vh] items-center justify-center bg-[#F8F9FA] px-5">
      <div className="max-w-lg rounded-3xl bg-white p-10 text-center shadow-xl">
        <div className="text-7xl">⚠️</div>

        <h1 className="mt-6 text-4xl font-bold text-[#2C2C2C]">
          Something went wrong
        </h1>

        <p className="mt-5 leading-8 text-gray-500">
          {error.message ||
            "An unexpected error occurred while loading this page."}
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <button
            onClick={reset}
            className="rounded-xl bg-[#FF5A3C] px-8 py-4 font-semibold text-white transition hover:bg-[#ef4b2d]"
          >
            Try Again
          </button>

          <Link
            href="/"
            className="rounded-xl border border-[#FF5A3C] px-8 py-4 font-semibold text-[#FF5A3C] transition hover:bg-[#FF5A3C] hover:text-white"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;