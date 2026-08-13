import MainHero from "./mainHero";
import Marketplace from "./marketplace";
import QuickCards from "./quickCards";
import RecentActivity from "./recentActivity";
import Stats from "./statisitcs";

export default function Main() {
  return (
    <div className="mx-auto flex w-full max-w-[1450px] flex-col gap-5">
      <MainHero />

      <QuickCards />

      {/* Activity and marketplace stay side-by-side until mobile */}
      <div className="mx-auto flex w-[95%] flex-col gap-3 md:flex-row">
        <RecentActivity />
        <Marketplace />
      </div>

      <Stats />
    </div>
  );
}
