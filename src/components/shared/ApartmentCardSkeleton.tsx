const ApartmentCardSkeleton = () => {
  return (
    <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
      <div className="h-64 animate-pulse bg-gray-200" />

      <div className="space-y-5 p-6">
        <div>
          <div className="mb-3 h-8 w-3/4 animate-pulse rounded bg-gray-200" />

          <div className="h-4 w-1/2 animate-pulse rounded bg-gray-200" />
        </div>

        <div className="space-y-2">
          <div className="h-4 animate-pulse rounded bg-gray-200" />
          <div className="h-4 w-11/12 animate-pulse rounded bg-gray-200" />
        </div>

        <div className="grid grid-cols-3 gap-4 rounded-2xl bg-[#FFF6F4] p-4">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="flex flex-col items-center gap-2"
            >
              <div className="h-6 w-6 animate-pulse rounded-full bg-gray-300" />
              <div className="h-5 w-8 animate-pulse rounded bg-gray-300" />
              <div className="h-3 w-14 animate-pulse rounded bg-gray-300" />
            </div>
          ))}
        </div>

        <div className="h-12 animate-pulse rounded-xl bg-gray-200" />
      </div>
    </div>
  );
};

export default ApartmentCardSkeleton;