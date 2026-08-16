import type { TrendingTopic } from "@/store/slices/communitySlice";

export default function TrendingTopics({
  topics,
}: {
  topics: TrendingTopic[];
}) {
  return (
    <div className="rounded-xl border border-[#dadada57] bg-white p-4">
      <p className="mb-3 text-[11px] font-semibold uppercase tracking-wide text-[#868585]">
        Trending Topics
      </p>

      <div className="flex flex-col gap-2.5">
        {topics.map((topic) => (
          <div
            key={topic.id}
            className="flex cursor-pointer items-center justify-between hover:text-[#39738b]"
          >
            <span className="text-[12.5px] font-medium">#{topic.label}</span>
            <span className="text-[10.5px] text-[#868585]">
              {topic.postCount} posts
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
