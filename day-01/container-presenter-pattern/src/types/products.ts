export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice: number;
  categoryId: string;
  category: string;
  imageUrl: string;
  rating: number;
  reviewCount: number;
  inStock: boolean;
  stock: number;
  brand: string;
  tags: string[];
  features: string[];
};

// Represents a product once it's in the cart
export type CartItem = Product & {
  quantity: number;
};

export type CartSummaryData = {
  totalItems: number;
  totalPrice: string; // .toFixed(2) returns a string
};

export type ProductQueryParams = {
  category: string;
  sort: string;
  filter: string;
  search: string;
};
