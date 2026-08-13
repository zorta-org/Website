import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

export default function Marketplace() {
  const marketplaceItems = [
    {
      id: 1,
      image: "/Images/marketplace-1.png",
      name: "Discord Bot Template",
      description: "Advanced • Fully Customizable",
      price: 2499,
    },
    {
      id: 2,
      image: "/Images/marketplace-1.png",
      name: "Portfolio Website",
      description: "Modern • Responsive",
      price: 1799,
    },
    {
      id: 3,
      image: "/Images/marketplace-1.png",
      name: "Admin Dashboard",
      description: "Clean • Analytics Ready",
      price: 2999,
    },
    {
      id: 4,
      image: "/Images/marketplace-1.png",
      name: "Logo Design",
      description: "Minimal • Professional",
      price: 899,
    },
  ];

  return (
    <div className="w-full rounded-xl border border-[#dadada57] px-5 py-4 flex-1 min-w-0">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h1 className="font-semibold text-[14px]">Trending in Marketplace</h1>

        <Link
          href="/marketplace"
          className="text-[11px] text-[#39738b] hover:underline"
        >
          View all
        </Link>
      </div>

      {/* Products */}
      <div className="flex flex-col gap-3">
        {marketplaceItems.map((item) => (
          <div key={item.id} className="flex items-center gap-3">
            {/* Product image */}
            <Image
              src={item.image}
              alt={item.name}
              width={62}
              height={48}
              className="h-10 w-13.5 rounded-md object-cover shrink-0"
            />

            {/* Name + description */}
            <div className="min-w-0 flex-1">
              <p className="text-[12px] font-semibold truncate">{item.name}</p>

              <p className="text-[10px] text-[#868585] truncate">
                {item.description}
              </p>
            </div>

            {/* Price */}
            <div className="flex items-center gap-1 shrink-0">
              <Icon icon="twemoji:coin" width={14} height={14} />

              <span className="text-[12px] font-semibold text-[#c58b17]">
                {item.price.toLocaleString()}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
