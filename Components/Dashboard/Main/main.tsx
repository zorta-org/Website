import MainHero from "./mainHero"
import QuickCards from "./quickCards"
import RecentActivity from "./recentActivity"

export default function Main(){
    return(
        <div className="flex flex-col gap-5">
            <MainHero />
            <QuickCards />
            <div className="flex w-[95%] mx-auto">
                <RecentActivity />
            </div>
        </div>
    )
}