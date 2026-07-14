"use server";
import { getToken } from "../getToken";
import { Apartment } from "../types/apartments";

const API = process.env.NEXT_PUBLIC_API_URL;

export const addApartment = async (
  apartment: Omit<Apartment, "_id" | "rating" | "createdAt">,
) => {
  const token = await getToken();

  const res = await fetch(`${API}/api/apartments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
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
  const token = await getToken();
  const res = await fetch(`${API}/api/apartments/${id}`, {
    method: "DELETE",
    headers: {
      "Authorization": `Bearer ${token}`
    }
  });

  if (!res.ok) {
    throw new Error("Failed to delete apartment");
  }

  return res.json();
};
