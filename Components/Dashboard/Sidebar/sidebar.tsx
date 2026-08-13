import Workspaces from "./workspaces";
import SidebarNav from "./sidebarNav";
import UpgradeCard from "./upgradeCard";

export default function Sidebar() {
  
  return (
    /*Parent Container Div*/
    <div className="m-5">
      {/* Navigation and Logo */}
      <SidebarNav />
      {/*Workspaces and Upgrade AD*/}
      <div className="flex flex-col gap-15">
        {/* Workspaces Section */}
        <Workspaces />
        {/* Upgrade Ad */}
        <UpgradeCard />
      </div>
    </div>
  );
}
