import { Icon } from "@iconify/react";
import type { Developer } from "@/store/slices/developersSlice";

export default function DeveloperCard({ developer }: { developer: Developer }) {
  const {
    name,
    avatarInitial,
    avatarColor,
    role,
    skills,
    rating,
    reviews,
    available,
  } = developer;

  return (
    <div className="flex flex-col items-center gap-3 rounded-xl border border-[#dadada57] bg-white p-5 text-center hover:border-[#6aa9c1] transition-colors">
      <div className="relative">
        <div
          style={{ backgroundColor: avatarColor }}
          className="flex h-14 w-14 items-center justify-center rounded-full text-[18px] font-semibold text-white"
        >
          {avatarInitial}
        </div>
        {available && (
          <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-[#119e5b]" />
        )}
      </div>

      <div>
        <p className="text-[14px] font-semibold">{name}</p>
        <p className="text-[11px] text-[#868585]">{role}</p>
      </div>

      <div className="flex flex-wrap justify-center gap-1.5">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full bg-[#f2f2f2] px-2.5 py-1 text-[9.5px] font-medium text-[#5a5a5a]"
          >
            {skill}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-1">
        <Icon icon="material-symbols:star" width={13} className="text-[#eea82c]" />
        <span className="text-[12px] font-semibold">{rating}</span>
        <span className="text-[11px] text-[#868585]">({reviews})</span>
      </div>

      <div className="flex w-full gap-2 pt-1">
        <button
          type="button"
          className="flex-1 rounded-full border border-[#dadada57] py-2 text-[11.5px] font-semibold text-[#363636] hover:bg-[#f2f2f2] cursor-pointer"
        >
          Message
        </button>
        <button
          type="button"
          className="flex-1 rounded-full bg-[#39738b] py-2 text-[11.5px] font-semibold text-white hover:bg-[#2a6077] cursor-pointer"
        >
          Hire
        </button>
      </div>
    </div>
  );
}
