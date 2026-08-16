import { Icon } from "@iconify/react";
import type { Product } from "@/store/slices/marketplaceSlice";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { name, seller, thumbnailColor, category, price, rating } = product;

  return (
    <div className="cursor-pointer overflow-hidden rounded-xl border border-[#dadada57] bg-white transition-colors hover:border-[#6aa9c1]">
      {/* Thumbnail */}
      <div
        style={{ backgroundColor: thumbnailColor }}
        className="h-[120px] w-full"
      />

      {/* Body */}
      <div className="flex flex-col gap-2.5 p-4">
        <div className="flex items-center justify-between gap-2">
          <span className="rounded-full bg-[#f2f2f2] px-2.5 py-1 text-[9.5px] font-semibold text-[#868585]">
            {category}
          </span>
          <div className="flex items-center gap-1">
            <Icon icon="material-symbols:star" width={12} className="text-[#eea82c]" />
            <span className="text-[11px] font-semibold text-[#363636]">
              {rating}
            </span>
          </div>
        </div>

        <p className="truncate text-[14px] font-semibold">{name}</p>
        <p className="text-[11px] text-[#868585]">by {seller}</p>

        <div className="flex items-center gap-1 pt-1">
          <Icon icon="twemoji:coin" width={14} />
          <span className="text-[13px] font-bold text-[#363636]">
            {price.toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );
}
