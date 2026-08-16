import type { Project } from "@/store/slices/projectsSlice";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { name, bannerColor, tags, progress, members, activeTasks } =
    project;

  return (
    <div className="cursor-pointer overflow-hidden rounded-xl border border-[#dadada57] bg-white transition-colors hover:border-[#6aa9c1]">
      {/* Banner */}
      <div style={{ backgroundColor: bannerColor }} className="h-[130px] w-full" />

      {/* Body */}
      <div className="flex flex-col gap-3 p-4">
        <p className="truncate text-[15px] font-semibold">{name}</p>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap items-center gap-1.5">
            {tags.map((tag) => (
              <span
                key={tag.label}
                style={{
                  backgroundColor: `color-mix(in srgb, ${tag.color} 12%, transparent)`,
                  color: tag.color,
                }}
                className="rounded-full px-2.5 py-1 text-[10px] font-medium"
              >
                {tag.label}
              </span>
            ))}
          </div>
        )}

        {/* Progress */}
        <div className="flex items-center gap-2">
          <div className="h-1.25 flex-1 overflow-hidden rounded-full bg-[#f0f0f3]">
            <div
              className="h-full rounded-full bg-[#39738b] transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>

          <span className="shrink-0 text-[10px] font-medium text-[#868585]">
            {progress}%
          </span>
        </div>

        {/* Members + active tasks */}
        <div className="flex items-center justify-between">
          <div className="flex items-center -space-x-2">
            {members.map((member) => (
              <div
                key={member.id}
                style={{ backgroundColor: member.color }}
                className="flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-semibold text-white ring-2 ring-white"
              >
                {member.initial}
              </div>
            ))}
          </div>

          <p className="shrink-0 text-[10px] text-[#868585]">
            {activeTasks} active {activeTasks === 1 ? "task" : "tasks"}
          </p>
        </div>
      </div>
    </div>
  );
}
