"use client";

import { useSelector } from "react-redux";
import type { RootState } from "@/store/store";
import PostComposer from "./postComposer";
import PostCard from "./postCard";
import TrendingTopics from "./trendingTopics";
import SuggestedPeople from "./suggestedPeople";

export default function Main() {
  const { posts, trendingTopics, suggestedPeople } = useSelector(
    (state: RootState) => state.community
  );

  return (
    <div className="mx-auto w-[95%] max-w-[1450px] py-9">
      <h1 className="mb-6 text-[26px] font-bold">Community</h1>

      <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
        {/* Feed */}
        <div className="flex min-w-0 flex-1 flex-col gap-4">
          <PostComposer />
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>

        {/* Right rail */}
        <div className="flex w-full flex-col gap-4 lg:w-[300px] lg:shrink-0">
          <TrendingTopics topics={trendingTopics} />
          <SuggestedPeople people={suggestedPeople} />
        </div>
      </div>
    </div>
  );
}
