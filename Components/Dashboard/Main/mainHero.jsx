import Image from "next/image";
import { Icon } from "@iconify/react";

export default function MainHero() {
  return (
    <div className="relative mx-auto w-[95%] shrink-0 overflow-hidden rounded-xl">
      <Image
        src="/Images/hero_Zorta.png"
        width={1600}
        height={900}
        alt="Zorta Hero"
        className="h-auto w-full rounded-xl border border-[#f3e9ff] object-cover"
      />

      {/* Hero content */}
      <div
        className="
          absolute
          left-[6%]
          top-[20%]
          flex
          flex-col
          gap-3

          max-[767px]:left-[5%]
          max-[767px]:top-[12%]
          max-[767px]:gap-1.5
        "
      >
        <h2
          className="
            text-[#5e6270]
            text-[clamp(0.55rem,1.2vw,1rem)]
            max-[767px]:text-[clamp(0.4rem,2vw,0.65rem)]
          "
        >
          BUILD. CONNECT. GROW.
        </h2>

        <h1
          className="
            font-bold
            text-[clamp(1.15rem,3vw,2.25rem)]
            max-[767px]:text-[clamp(0.9rem,5vw,1.5rem)]
          "
        >
          Welcome to <span className="text-[#9260f7]">Zorta</span>
        </h1>

        <p
          className="
            max-w-[90%]
            text-[#363636]
            text-[clamp(0.6rem,1.1vw,0.875rem)]
            max-[767px]:max-w-[55%]
            max-[767px]:text-[clamp(0.4rem,2vw,0.6rem)]
          "
        >
          The all-in-one platform for developers,
          <br className="max-[767px]:hidden" />
          creators and innovators to build the future together.
        </p>

        <div
          className="
            flex
            gap-[clamp(0.4rem,1vw,1rem)]

            max-[767px]:gap-1.5
          "
        >
          <button
            type="button"
            className="
              flex
              items-center
              gap-1
              rounded-lg
              border
              border-[#39738b]
              bg-[#39738b]
              px-[clamp(0.5rem,1.2vw,1rem)]
              py-[clamp(0.4rem,0.8vw,0.75rem)]
              text-[clamp(0.5rem,0.8vw,0.75rem)]
              font-semibold
              text-white
              hover:border-[#2a6077]
              cursor-pointer

              max-[767px]:rounded-md
              max-[767px]:px-2
              max-[767px]:py-1
              max-[767px]:text-[0.45rem]
            "
          >
            Explore Platform
            <Icon
              icon="clarity:arrow-line"
              className="
                rotate-90
                ml-1
                text-[clamp(0.7rem,1vw,1rem)]
                max-[767px]:text-[0.6rem]
              "
            />
          </button>

          <button
            type="button"
            className="
              flex
              items-center
              gap-2
              rounded-lg
              border
              border-[#c7c7c7]
              px-[clamp(0.5rem,1.2vw,1rem)]
              py-[clamp(0.4rem,0.8vw,0.75rem)]
              text-[clamp(0.5rem,0.8vw,0.75rem)]
              hover:border-[#6aa9c1]
              cursor-pointer

              max-[767px]:gap-1
              max-[767px]:rounded-md
              max-[767px]:px-2
              max-[767px]:py-1
              max-[767px]:text-[0.45rem]
            "
          >
            <Icon
              icon="bx:up-arrow"
              className="
                rotate-90
                ml-1
                text-[clamp(0.7rem,1vw,1rem)]
                max-[767px]:text-[0.6rem]
              "
            />
            Watch Tour
          </button>
        </div>
      </div>
    </div>
  );
}
