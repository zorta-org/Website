import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ResourceCategory = "Docs" | "Guides" | "Templates";
export type ResourceType = "PDF" | "Video" | "Article" | "Guide";

export interface Resource {
  id: number;
  title: string;
  description: string;
  category: ResourceCategory;
  type: ResourceType;
  icon: string;
  saved: boolean;
}

interface ResourcesState {
  resources: Resource[];
}

const initialState: ResourcesState = {
  // TEMPORARY — remove when backend is connected
  resources: [
    {
      id: 1,
      title: "Getting Started with Zorta",
      description: "Everything you need to set up your first project and workspace.",
      category: "Docs",
      type: "Article",
      icon: "lucide:book-open",
      saved: false,
    },
    {
      id: 2,
      title: "API Reference",
      description: "Full endpoint documentation for the Zorta platform API.",
      category: "Docs",
      type: "PDF",
      icon: "lucide:file-text",
      saved: true,
    },
    {
      id: 3,
      title: "Building Your First Discord Bot",
      description: "A step-by-step walkthrough from setup to deployment.",
      category: "Guides",
      type: "Guide",
      icon: "lucide:compass",
      saved: false,
    },
    {
      id: 4,
      title: "Pricing Your Marketplace Listings",
      description: "How to set fair coin prices that actually sell.",
      category: "Guides",
      type: "Article",
      icon: "lucide:compass",
      saved: false,
    },
    {
      id: 5,
      title: "SaaS Landing Page Kit",
      description: "A ready-to-use Figma + code template for product pages.",
      category: "Templates",
      type: "PDF",
      icon: "lucide:layout-template",
      saved: true,
    },
    {
      id: 6,
      title: "Portfolio Starter Template",
      description: "Clean, responsive portfolio scaffold for developers.",
      category: "Templates",
      type: "Video",
      icon: "lucide:layout-template",
      saved: false,
    },
  ],
};

const resourcesSlice = createSlice({
  name: "resources",
  initialState,
  reducers: {
    toggleSaved: (state, action: PayloadAction<number>) => {
      const resource = state.resources.find((r) => r.id === action.payload);
      if (resource) resource.saved = !resource.saved;
    },
  },
});

export const { toggleSaved } = resourcesSlice.actions;
export default resourcesSlice.reducer;
