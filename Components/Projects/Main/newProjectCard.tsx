import { Icon } from "@iconify/react";

interface NewProjectCardProps {
  onClick: () => void;
}

export default function NewProjectCard({ onClick }: NewProjectCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex h-full min-h-[220px] cursor-pointer flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-[#dadada] transition-colors hover:border-[#6aa9c1] hover:bg-[#f9fbfc]"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#8cc3de]/30 text-[#39738b]">
        <Icon icon="mdi:plus" width={20} />
      </div>

      <p className="text-[13px] font-semibold text-[#363636]">New Project</p>
    </button>
  );
}
