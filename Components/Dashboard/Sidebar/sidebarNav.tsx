"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

export default function SidebarNav() {
    const pathname = usePathname();
    const navItems = [
    { name: "Dashboard", href: "/", icon: "griddy-icons:home" },
    { name: "Projects", href: "/projects", icon: "oui:nav-dashboards" },
    {
      name: "Marketplace",
      href: "/marketplace",
      icon: "icon-park-outline:shop",
    },
    { name: "Tasks", href: "/tasks", icon: "jam:task-list" },
    { name: "Developers", href: "/developers", icon: "mage:users" },
    { name: "Community", href: "/community", icon: "mynaui:users-group" },
    { name: "Resources", href: "/resources", icon: "lucide:folder" },
    {
      name: "Rewards",
      href: "/rewards",
      icon: "material-symbols:award-star-outline-rounded",
    },
    { name: "Premium", href: "/premium", icon: "hugeicons:shield-02" },
  ];
    return(
        <div className="flex flex-col gap-4 items-center border-b border-[#dadada]/30 pb-4">
        <Image
          className="cursor-pointer mb-2"
          src="/Images/Zorta_Logo.png"
          alt="Zorta Logo"
          width={110}
          height={100}
        />
        <nav className="w-full">
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`flex items-center gap-2 rounded-md px-4 py-2.25 text-[12px] font-Inter font-semibold transition-colors ${
                      isActive
                        ? "bg-[#8cc3de]/30 text-[#39738b]"
                        : "text-black hover:bg-[#8cc3de]/30 hover:text-[#39738b]"
                    }`}
                  >
                    <Icon icon={item.icon} width={14} />
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    )
}