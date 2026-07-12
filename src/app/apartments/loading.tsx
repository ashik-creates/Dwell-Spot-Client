import ApartmentCardSkeleton from "@/components/shared/ApartmentCardSkeleton";

const Loading = () => {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16">
      <div className="mb-12 text-center">
        <div className="mx-auto h-8 w-40 animate-pulse rounded-full bg-gray-200" />

        <div className="mx-auto mt-6 h-10 w-80 animate-pulse rounded bg-gray-200" />

        <div className="mx-auto mt-4 h-5 w-[500px] max-w-full animate-pulse rounded bg-gray-200" />
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <ApartmentCardSkeleton key={index} />
        ))}
      </div>
    </section>
  );
};

export default Loading;