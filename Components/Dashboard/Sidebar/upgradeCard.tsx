import { Icon } from "@iconify/react";

export default function UpgradeCard() {

    return(
        <div className="bg-[#8cc3de]/30  rounded-xl flex flex-col gap-4 p-4 border-[#639ab4]/20 border">
            <div className="flex items-center gap-2">
                <Icon icon="pepicons-pencil:stars" className="text-[#639ab4]" width={22} />
                <p className="font-semibold text-[12px]">Go Premium</p>
            </div>
            <p className="text-[11px] text-[#868585] ">
                Unlock exclusive benefits,<br />priority support and more.
            </p>
            <button className="bg-[#639ab4] text-white text-[11px] py-2.5 px-4 justify-center w-full rounded-md hover:bg-[#5588a0] flex items-center gap-2 cursor-pointer">
                Upgrade Now <Icon icon="maki:arrow" />
            </button>
        </div>
    )
}