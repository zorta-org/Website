import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ProjectTag {
  label: string;
  color: string;
}

export interface ProjectMember {
  id: string;
  initial: string;
  color: string;
}

export interface Project {
  id: number;
  name: string;
  bannerColor: string;
  tags: ProjectTag[];
  progress: number;
  members: ProjectMember[];
  activeTasks: number;
  status: "active" | "archived";
}

interface ProjectsState {
  projects: Project[];
}

const initialState: ProjectsState = {
  // TEMPORARY — remove when backend is connected
  projects: [
    {
      id: 1,
      name: "Portfolio Website",
      bannerColor: "#dce9f8",
      tags: [
        { label: "React", color: "#3a8cfd" },
        { label: "Tailwind", color: "#432bf6" },
      ],
      progress: 72,
      members: [
        { id: "u1", initial: "A", color: "#432bf6" },
        { id: "u2", initial: "R", color: "#3a8cfd" },
        { id: "u3", initial: "K", color: "#119e5b" },
      ],
      activeTasks: 3,
      status: "active",
    },
    {
      id: 2,
      name: "Discord Bot Template",
      bannerColor: "#e6e1fb",
      tags: [
        { label: "Node.js", color: "#119e5b" },
        { label: "API", color: "#eea82c" },
      ],
      progress: 45,
      members: [
        { id: "u4", initial: "M", color: "#eea82c" },
        { id: "u5", initial: "A", color: "#432bf6" },
      ],
      activeTasks: 5,
      status: "active",
    },
    {
      id: 3,
      name: "Admin Dashboard",
      bannerColor: "#dcf4e3",
      tags: [
        { label: "Vue", color: "#432bf6" },
        { label: "Charts", color: "#3a8cfd" },
      ],
      progress: 90,
      members: [{ id: "u6", initial: "R", color: "#3a8cfd" }],
      activeTasks: 1,
      status: "active",
    },
  ],
};

const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    // TEMP ONLY — creates a placeholder project locally.
    // Real creation should go through the backend once it exists.
    demoAddProject: (state) => {
      const newId = state.projects.length
        ? Math.max(...state.projects.map((project) => project.id)) + 1
        : 1;

      state.projects.unshift({
        id: newId,
        name: `Untitled Project ${newId}`,
        bannerColor: "#eef1f5",
        tags: [],
        progress: 0,
        members: [],
        activeTasks: 0,
        status: "active",
      });
    },

    archiveProject: (state, action: PayloadAction<number>) => {
      const project = state.projects.find(
        (project) => project.id === action.payload
      );

      if (project) {
        project.status = "archived";
      }
    },

    restoreProject: (state, action: PayloadAction<number>) => {
      const project = state.projects.find(
        (project) => project.id === action.payload
      );

      if (project) {
        project.status = "active";
      }
    },

    // Will be useful when backend data arrives
    setProjects: (state, action: PayloadAction<Project[]>) => {
      state.projects = action.payload;
    },
  },
});

export const {
  demoAddProject,
  archiveProject,
  restoreProject,
  setProjects,
} = projectsSlice.actions;

export default projectsSlice.reducer;
