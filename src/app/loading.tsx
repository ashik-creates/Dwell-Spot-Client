const Loading = () => {
  return (
    <div className="bg-[#F8F9FA] py-16">
      <div className="mx-auto max-w-7xl px-5">
        <div className="mb-10">
          <div className="h-10 w-72 animate-pulse rounded-lg bg-gray-200" />

          <div className="mt-4 h-5 w-96 animate-pulse rounded-lg bg-gray-200" />
        </div>

        <div className="mb-10 rounded-3xl bg-white p-6 shadow-sm">
          <div className="grid gap-4 md:grid-cols-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="h-12 animate-pulse rounded-xl bg-gray-200"
              />
            ))}
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-3xl bg-white shadow-sm"
            >
              <div className="h-64 animate-pulse bg-gray-200" />

              <div className="space-y-4 p-6">
                <div className="h-7 w-3/4 animate-pulse rounded bg-gray-200" />

                <div className="h-4 w-full animate-pulse rounded bg-gray-200" />
                <div className="h-4 w-5/6 animate-pulse rounded bg-gray-200" />

                <div className="flex gap-3 pt-2">
                  <div className="h-8 w-20 animate-pulse rounded-full bg-gray-200" />
                  <div className="h-8 w-20 animate-pulse rounded-full bg-gray-200" />
                </div>

                <div className="pt-4">
                  <div className="h-12 w-full animate-pulse rounded-xl bg-gray-200" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Loading;