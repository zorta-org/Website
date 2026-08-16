"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "@/store/store";
import { demoAddPost } from "@/store/slices/communitySlice";
import { Icon } from "@iconify/react";

export default function PostComposer() {
  const dispatch = useDispatch<AppDispatch>();
  const [value, setValue] = useState("");

  const handlePost = () => {
    if (!value.trim()) return;
    dispatch(demoAddPost(value));
    setValue("");
  };

  return (
    <div className="rounded-xl border border-[#dadada57] bg-white p-4">
      <div className="flex items-start gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#39738b] text-[12px] font-semibold text-white">
          Y
        </div>

        <textarea
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Share something with the community..."
          rows={2}
          className="flex-1 resize-none text-[13px] outline-none placeholder:text-[#868585]"
        />
      </div>

      <div className="mt-3 flex items-center justify-between border-t border-[#dadada57] pt-3">
        <div className="flex items-center gap-3 text-[#868585]">
          <button type="button" className="flex items-center gap-1.5 text-[11.5px] hover:text-[#39738b] cursor-pointer">
            <Icon icon="mynaui:image" width={16} />
            Photo
          </button>
          <button type="button" className="flex items-center gap-1.5 text-[11.5px] hover:text-[#39738b] cursor-pointer">
            <Icon icon="mynaui:paperclip" width={16} />
            Attach
          </button>
        </div>

        <button
          type="button"
          onClick={handlePost}
          disabled={!value.trim()}
          className="rounded-full bg-[#39738b] px-5 py-2 text-[12px] font-semibold text-white hover:bg-[#2a6077] disabled:opacity-40 disabled:hover:bg-[#39738b] cursor-pointer disabled:cursor-not-allowed"
        >
          Post
        </button>
      </div>
    </div>
  );
}
