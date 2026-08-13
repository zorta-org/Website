import DailyTasks from "./DailyTasks";
import LevelProgress from "./LevelProgress";
import QuickActions from "./QuickActions";
import Streak from "./Streak";
import Wallet from "./Wallet";


export default function RightBar() {
    return(
       <aside className="pr-4 flex flex-col gap-4">
  <Wallet />
  <LevelProgress />
  <Streak />
  <DailyTasks />
  <QuickActions />
</aside>
    )
}