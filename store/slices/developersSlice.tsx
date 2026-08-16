import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Developer {
  id: number;
  name: string;
  avatarInitial: string;
  avatarColor: string;
  role: string;
  skills: string[];
  rating: number;
  reviews: number;
  available: boolean;
}

interface DevelopersState {
  developers: Developer[];
}

const initialState: DevelopersState = {
  // TEMPORARY — remove when backend is connected
  developers: [
    {
      id: 1,
      name: "Aryan Mehta",
      avatarInitial: "A",
      avatarColor: "#432bf6",
      role: "Full-Stack Developer",
      skills: ["React", "Node.js", "PostgreSQL"],
      rating: 4.9,
      reviews: 34,
      available: true,
    },
    {
      id: 2,
      name: "Riya Kapoor",
      avatarInitial: "R",
      avatarColor: "#3a8cfd",
      role: "Frontend Engineer",
      skills: ["React", "Tailwind", "Figma"],
      rating: 4.8,
      reviews: 21,
      available: true,
    },
    {
      id: 3,
      name: "Karan Shah",
      avatarInitial: "K",
      avatarColor: "#119e5b",
      role: "Backend Developer",
      skills: ["Node.js", "Redis", "Docker"],
      rating: 4.7,
      reviews: 18,
      available: false,
    },
    {
      id: 4,
      name: "Meera Nair",
      avatarInitial: "M",
      avatarColor: "#eea82c",
      role: "Bot Developer",
      skills: ["Discord.js", "Python", "API"],
      rating: 5.0,
      reviews: 12,
      available: true,
    },
    {
      id: 5,
      name: "Devansh Rao",
      avatarInitial: "D",
      avatarColor: "#432bf6",
      role: "Mobile Developer",
      skills: ["React Native", "Swift", "Firebase"],
      rating: 4.6,
      reviews: 9,
      available: false,
    },
    {
      id: 6,
      name: "Sanya Verma",
      avatarInitial: "S",
      avatarColor: "#3a8cfd",
      role: "UI/UX Designer",
      skills: ["Figma", "Design Systems"],
      rating: 4.9,
      reviews: 27,
      available: true,
    },
  ],
};

const developersSlice = createSlice({
  name: "developers",
  initialState,
  reducers: {
    // Will be useful when backend data arrives
    setDevelopers: (state, action: PayloadAction<Developer[]>) => {
      state.developers = action.payload;
    },
  },
});

export const { setDevelopers } = developersSlice.actions;
export default developersSlice.reducer;
