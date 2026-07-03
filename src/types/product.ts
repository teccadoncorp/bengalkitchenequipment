export interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  image: string;
  features: string[];
  specifications: { [key: string]: string };
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  sort_order?: number;
}

export type CategoryType = string;
