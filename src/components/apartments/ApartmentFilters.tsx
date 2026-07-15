"use client";

import { useRouter, useSearchParams } from "next/navigation";

const ApartmentFilters = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const updateQuery = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (!value) {
      params.delete(key);
    } else {
      params.set(key, value);
    }

    params.set("page", "1");

    router.push(`/apartments?${params.toString()}`);
  };

  return (
    <div className="mb-10 grid gap-4 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm md:grid-cols-4">
      <input
        type="text"
        placeholder="Search apartments..."
        defaultValue={searchParams.get("search") || ""}
        onChange={(e) => updateQuery("search", e.target.value)}
        className="rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-[#FF5A3C]"
      />

      <input
        type="text"
        placeholder="Location..."
        defaultValue={searchParams.get("location") || ""}
        onChange={(e) => updateQuery("location", e.target.value)}
        className="rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-[#FF5A3C]"
      />

      <select
        defaultValue={searchParams.get("price") || ""}
        onChange={(e) => updateQuery("price", e.target.value)}
        className="rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-[#FF5A3C]"
      >
        <option value="">All Prices</option>
        <option value="0-1000">Under $1000</option>
        <option value="1000-2000">$1000 - $2000</option>
        <option value="2000-3000">$2000 - $3000</option>
        <option value="3000+">Over $3000</option>
      </select>

      <select
        defaultValue={searchParams.get("sort") || "newest"}
        onChange={(e) => updateQuery("sort", e.target.value)}
        className="rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-[#FF5A3C]"
      >
        <option value="newest">Newest</option>
        <option value="price_asc">Price: Low → High</option>
        <option value="price_desc">Price: High → Low</option>
      </select>
    </div>
  );
};

export default ApartmentFilters;