import { Icon } from "@iconify/react";
import type { Product } from "@/store/slices/marketplaceSlice";
import ProductCard from "./productCard";

interface ProductsGridProps {
  products: Product[];
}

export default function ProductsGrid({ products }: ProductsGridProps) {
  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-[#dadada] py-20 text-center">
        <Icon icon="icon-park-outline:shop" width={24} className="text-[#868585]" />
        <p className="text-[13px] font-semibold">No products found</p>
        <p className="text-[11px] text-[#868585]">
          Try a different category or search term.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
