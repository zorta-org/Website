import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Post {
  id: number;
  authorName: string;
  authorInitial: string;
  authorColor: string;
  timestamp: string;
  body: string;
  likes: number;
  comments: number;
}

export interface SuggestedPerson {
  id: number;
  name: string;
  initial: string;
  color: string;
  role: string;
}

export interface TrendingTopic {
  id: number;
  label: string;
  postCount: number;
}

interface CommunityState {
  posts: Post[];
  suggestedPeople: SuggestedPerson[];
  trendingTopics: TrendingTopic[];
}

const initialState: CommunityState = {
  // TEMPORARY — remove when backend is connected
  posts: [
    {
      id: 1,
      authorName: "Aryan Mehta",
      authorInitial: "A",
      authorColor: "#432bf6",
      timestamp: "2m ago",
      body: "Just shipped the new Discord bot template to the Bazaar — would love feedback from anyone building community tools!",
      likes: 14,
      comments: 3,
    },
    {
      id: 2,
      authorName: "Riya Kapoor",
      authorInitial: "R",
      authorColor: "#3a8cfd",
      timestamp: "1h ago",
      body: "Hit Level 20 today. The daily task streak is way more motivating than I expected it to be.",
      likes: 28,
      comments: 6,
    },
    {
      id: 3,
      authorName: "Karan Shah",
      authorInitial: "K",
      authorColor: "#119e5b",
      timestamp: "3h ago",
      body: "Looking for a frontend dev to pair on a small SaaS landing page this week — 500 coins on completion. DM me.",
      likes: 9,
      comments: 11,
    },
  ],
  suggestedPeople: [
    { id: 1, name: "Meera Nair", initial: "M", color: "#eea82c", role: "Bot Developer" },
    { id: 2, name: "Devansh Rao", initial: "D", color: "#432bf6", role: "Mobile Developer" },
    { id: 3, name: "Sanya Verma", initial: "S", color: "#3a8cfd", role: "UI/UX Designer" },
  ],
  trendingTopics: [
    { id: 1, label: "discord-bots", postCount: 42 },
    { id: 2, label: "react-tips", postCount: 31 },
    { id: 3, label: "freelance-gigs", postCount: 27 },
    { id: 4, label: "design-critique", postCount: 19 },
  ],
};

const communitySlice = createSlice({
  name: "community",
  initialState,
  reducers: {
    // TEMP ONLY — creates a local post. Real posting should go through the backend once it exists.
    demoAddPost: (state, action: PayloadAction<string>) => {
      const body = action.payload.trim();
      if (!body) return;

      const newId = state.posts.length
        ? Math.max(...state.posts.map((p) => p.id)) + 1
        : 1;

      state.posts.unshift({
        id: newId,
        authorName: "You",
        authorInitial: "Y",
        authorColor: "#39738b",
        timestamp: "Just now",
        body,
        likes: 0,
        comments: 0,
      });
    },

    likePost: (state, action: PayloadAction<number>) => {
      const post = state.posts.find((p) => p.id === action.payload);
      if (post) post.likes += 1;
    },
  },
});

export const { demoAddPost, likePost } = communitySlice.actions;
export default communitySlice.reducer;
