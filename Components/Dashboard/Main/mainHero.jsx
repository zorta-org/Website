import Image from "next/image";
import { Icon } from "@iconify/react";

export default function MainHero() {
  return (
    <div className="w-[95%] shrink-0 relative mx-auto">
        {/* Hero Image */}
      <Image
        src="/Images/hero_Zorta.png"
        width={1600}
        height={900}
        alt="Zorta Hero"
        className="w-full h-auto object-contain rounded-xl border border-[#f3e9ff] "
      />
      <div className="flex flex-col gap-3 absolute  top-[20%] left-[6%] ">
        <h2 className="text-[#5e6270] text-[clamp(0.5rem,1.2vw,1rem)]s">BUILD. CONNECT. GROW.</h2>
        <h1 className="text-[clamp(1.2rem,3vw,2.25rem)] font-bold">
          Welcome to <span className="text-[#9260f7]">Zorta</span>
        </h1>
        <p className="text-[clamp(0.55rem,1.1vw,0.875rem)]s text-[#363636]">
          The all-in-one platform for developers, <br /> creators and innovators
          to build the future together.
        </p>
        <div className="flex  gap-[clamp(0.4rem,1vw,1rem)]">
          <button className="flex items-center gap-1 rounded-lg border border-[#39738b] bg-[#39738b] px-[clamp(0.5rem,1.2vw,1rem)] py-[clamp(0.4rem,0.8vw,0.75rem)] text-[clamp(0.5rem,0.8vw,0.75rem)] text-white font-semibold hover:border-[#2a6077] cursor-pointer">
            Explore Platform
            <Icon
              icon="clarity:arrow-line"
              className="rotate-90 ml-1  text-[clamp(0.7rem,1vw,1rem)]"
            />
          </button>
          <button className="flex items-center gap-2 rounded-lg border border-[#c7c7c7] px-[clamp(0.5rem,1.2vw,1rem)] py-[clamp(0.4rem,0.8vw,0.75rem)] text-[clamp(0.5rem,0.8vw,0.75rem)] hover:border-[#6aa9c1] cursor-pointer">
            <Icon
              icon="bx:up-arrow"
              className="rotate-90 ml-1  text-[clamp(0.7rem,1vw,1rem)]"
            />
            Watch Tour
          </button>
        </div>
      </div>
    </div>
  );
}
