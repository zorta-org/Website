"use client";

import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "@/store/store";
import { demoAddProject } from "@/store/slices/projectsSlice";
import ProjectsHeader, { type ProjectFilter } from "./projectsHeader";
import ProjectsGrid from "./projectsGrid";

export default function Main() {
  const dispatch = useDispatch<AppDispatch>();
  const projects = useSelector(
    (state: RootState) => state.projects.projects
  );

  const [filter, setFilter] = useState<ProjectFilter>("all");

  const filteredProjects = useMemo(() => {
    if (filter === "all") return projects;
    return projects.filter((project) => project.status === filter);
  }, [projects, filter]);

  const handleNewProject = () => {
    dispatch(demoAddProject());
    setFilter("all");
  };

  return (
    <div className="mx-auto flex w-[95%] max-w-[1450px] flex-col gap-6 py-9">
      <ProjectsHeader
        filter={filter}
        onFilterChange={setFilter}
        onNewProject={handleNewProject}
      />

      <ProjectsGrid
        projects={filteredProjects}
        filter={filter}
        onNewProject={handleNewProject}
      />
    </div>
  );
}
