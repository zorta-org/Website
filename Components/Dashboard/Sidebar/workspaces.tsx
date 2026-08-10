import Image from "next/image";
import Link from "next/link";

export default function Workspaces() {
    const workspaces = [
    { id: 1, name: "My Workspace" ,logo: "/Images/Workspaces.png"},
    { id: 2, name: "Team Workspace" ,logo: "/Images/Workspaces.png"},
  ];
  
    return(
        <div>
          {/* Workspaces Header */}
          <div className="flex items-center justify-between py-2">
            <p className="text-[11px] text-[#868585]">
              Workspaces
            </p>
            <p className="text-[#868585] cursor-pointer">+</p>
          </div>
          {/* Workspaces List */}
          <ul >
            {workspaces.map((workspace) => {
              return (
                <li key={workspace.id} className="flex items-center gap-2 py-1.5 px-2 cursor-pointer hover:bg-[#8cc3de]/30  hover:text-[#39738b] rounded-md">
                  <Image src={workspace.logo} alt="Workspace" width={18} height={18} />
                  <Link href={`/app/workspaces/${workspace.id}`} className="text-[11px]">{workspace.name}</Link>
                </li>
              )
            })}
          </ul>
        </div>
    )
}