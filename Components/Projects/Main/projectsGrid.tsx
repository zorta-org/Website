import { Icon } from "@iconify/react";
import type { Project } from "@/store/slices/projectsSlice";
import type { ProjectFilter } from "./projectsHeader";
import ProjectCard from "./projectCard";
import NewProjectCard from "./newProjectCard";

interface ProjectsGridProps {
  projects: Project[];
  filter: ProjectFilter;
  onNewProject: () => void;
}

export default function ProjectsGrid({
  projects,
  filter,
  onNewProject,
}: ProjectsGridProps) {
  const showEmptyState = projects.length === 0 && filter === "archived";

  if (showEmptyState) {
    return (
      <div className="flex flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-[#dadada] py-20 text-center">
        <Icon icon="lucide:archive" width={24} className="text-[#868585]" />

        <p className="text-[13px] font-semibold">No archived projects</p>

        <p className="text-[11px] text-[#868585]">
          Projects you archive will show up in this tab.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}

      {filter !== "archived" && <NewProjectCard onClick={onNewProject} />}
    </div>
  );
}
