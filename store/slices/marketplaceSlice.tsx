import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Product {
  id: number;
  name: string;
  seller: string;
  thumbnailColor: string;
  category: string;
  price: number;
  rating: number;
}

interface MarketplaceState {
  products: Product[];
}

const initialState: MarketplaceState = {
  // TEMPORARY — remove when backend is connected
  products: [
    {
      id: 1,
      name: "Discord Bot Template",
      seller: "DevHub",
      thumbnailColor: "#e6e1fb",
      category: "Bots",
      price: 2499,
      rating: 4.8,
    },
    {
      id: 2,
      name: "Portfolio Website",
      seller: "Aryan",
      thumbnailColor: "#dce9f8",
      category: "Templates",
      price: 1799,
      rating: 4.6,
    },
    {
      id: 3,
      name: "Admin Dashboard",
      seller: "PixelForge",
      thumbnailColor: "#dcf4e3",
      category: "Dev Tools",
      price: 2999,
      rating: 4.9,
    },
    {
      id: 4,
      name: "Logo Design Kit",
      seller: "Rahul",
      thumbnailColor: "#fdeee0",
      category: "Design",
      price: 899,
      rating: 4.7,
    },
    {
      id: 5,
      name: "SaaS Landing Page",
      seller: "Kavya",
      thumbnailColor: "#e6e1fb",
      category: "Templates",
      price: 1499,
      rating: 4.5,
    },
    {
      id: 6,
      name: "Analytics API Kit",
      seller: "DevHub",
      thumbnailColor: "#dce9f8",
      category: "Dev Tools",
      price: 3499,
      rating: 4.8,
    },
  ],
};

const marketplaceSlice = createSlice({
  name: "marketplace",
  initialState,
  reducers: {
    // Will be useful when backend data arrives
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
  },
});

export const { setProducts } = marketplaceSlice.actions;
export default marketplaceSlice.reducer;
