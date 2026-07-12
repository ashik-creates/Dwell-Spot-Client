export interface Apartment {
  _id: string;
  title: string;
  description: string;
  image: string;
  location: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  size: number;
  type: string;
  status: string;
  rating: number;
  owner: string;
  featured: boolean;
}