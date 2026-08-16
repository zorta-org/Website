"use client";

import { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "@/store/store";
import MarketplaceHeader from "./marketplaceHeader";
import CategoryFilter, { type Category } from "./categoryFilter";
import FeaturedBanner from "./featuredBanner";
import ProductsGrid from "./productsGrid";

export default function Main() {
  const products = useSelector(
    (state: RootState) => state.marketplace.products
  );

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<Category>("All");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        category === "All" || product.category === category;
      const matchesSearch = product.name
        .toLowerCase()
        .includes(search.trim().toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [products, search, category]);

  return (
    <div className="mx-auto flex w-[95%] max-w-[1450px] flex-col gap-6 py-9">
      <MarketplaceHeader search={search} onSearchChange={setSearch} />
      <FeaturedBanner />
      <CategoryFilter active={category} onChange={setCategory} />
      <ProductsGrid products={filteredProducts} />
    </div>
  );
}
