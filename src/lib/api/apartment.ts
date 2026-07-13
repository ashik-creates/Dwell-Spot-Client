import { Apartment } from "../types/apartments";

const API = process.env.NEXT_PUBLIC_API_URL;

export interface ApartmentQuery {
  search?: string;
  location?: string;
  price?: string;
  sort?: string;
  page?: string;
}

export const getApartments = async (query: ApartmentQuery) => {
  const params = new URLSearchParams();

  if (query.search) params.set("search", query.search);
  if (query.location) params.set("location", query.location);
  if (query.price) params.set("price", query.price);
  if (query.sort) params.set("sort", query.sort);
  if (query.page) params.set("page", query.page);

  const res = await fetch(
    `${API}/api/apartments?${params.toString()}`,
    {
      cache: "no-store",
    }
  );

  return res.json();
};

export const getApartment = async (id: string): Promise<Apartment> => {
  const res = await fetch(`${API}/api/apartments/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch apartment");
  }

  return res.json();
};




export const getFeaturedApartments = async (): Promise<Apartment[]> => {
  const res = await fetch(
    `${API}/api/featured-apartments`,
    {
      next: {
        revalidate: 60,
      },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch featured apartments");
  }

  return res.json();
};

interface Statistics {
  totalApartments: number;
  availableApartments: number;
  averagePrice: number;
  totalLocations: number;
}

export const getStatistics = async (): Promise<Statistics> => {
  const res = await fetch(`${API}/api/statistics`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch statistics");
  }

  return res.json();
};
