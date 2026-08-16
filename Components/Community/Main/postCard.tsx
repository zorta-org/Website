"use client";

import { useDispatch } from "react-redux";
import type { AppDispatch } from "@/store/store";
import { likePost, type Post } from "@/store/slices/communitySlice";
import { Icon } from "@iconify/react";

export default function PostCard({ post }: { post: Post }) {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="rounded-xl border border-[#dadada57] bg-white p-4">
      <div className="flex items-center gap-3">
        <div
          style={{ backgroundColor: post.authorColor }}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[12px] font-semibold text-white"
        >
          {post.authorInitial}
        </div>

        <div className="min-w-0">
          <p className="text-[13px] font-semibold">{post.authorName}</p>
          <p className="text-[10.5px] text-[#868585]">{post.timestamp}</p>
        </div>
      </div>

      <p className="mt-3 text-[13px] leading-relaxed text-[#363636]">
        {post.body}
      </p>

      <div className="mt-3.5 flex items-center gap-5 border-t border-[#dadada57] pt-3">
        <button
          type="button"
          onClick={() => dispatch(likePost(post.id))}
          className="flex items-center gap-1.5 text-[11.5px] text-[#868585] hover:text-[#39738b] cursor-pointer"
        >
          <Icon icon="mynaui:heart" width={15} />
          {post.likes}
        </button>

        <button
          type="button"
          className="flex items-center gap-1.5 text-[11.5px] text-[#868585] hover:text-[#39738b] cursor-pointer"
        >
          <Icon icon="streamline-flex:chat-bubble-typing-oval" width={14} />
          {post.comments}
        </button>

        <button
          type="button"
          className="flex items-center gap-1.5 text-[11.5px] text-[#868585] hover:text-[#39738b] cursor-pointer"
        >
          <Icon icon="mynaui:share" width={15} />
          Share
        </button>
      </div>
    </div>
  );
}
