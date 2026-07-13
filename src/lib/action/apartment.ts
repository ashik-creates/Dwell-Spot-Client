import { Apartment } from "../types/apartments";

const API = process.env.NEXT_PUBLIC_API_URL;

export const addApartment = async (
  apartment: Omit<Apartment, "_id" | "rating" | "createdAt">,
) => {
  const res = await fetch(`${API}/api/apartments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(apartment),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Failed to add apartment.");
  }

  return data;
};

export const deleteApartment = async (id: string) => {
  const res = await fetch(`${API}/api/apartments/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    throw new Error("Failed to delete apartment");
  }

  return res.json();
};
