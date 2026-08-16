import type { SuggestedPerson } from "@/store/slices/communitySlice";

export default function SuggestedPeople({
  people,
}: {
  people: SuggestedPerson[];
}) {
  return (
    <div className="rounded-xl border border-[#dadada57] bg-white p-4">
      <p className="mb-3 text-[11px] font-semibold uppercase tracking-wide text-[#868585]">
        Suggested People
      </p>

      <div className="flex flex-col gap-3.5">
        {people.map((person) => (
          <div key={person.id} className="flex items-center gap-2.5">
            <div
              style={{ backgroundColor: person.color }}
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[11px] font-semibold text-white"
            >
              {person.initial}
            </div>

            <div className="min-w-0 flex-1">
              <p className="truncate text-[12px] font-semibold">
                {person.name}
              </p>
              <p className="truncate text-[10px] text-[#868585]">
                {person.role}
              </p>
            </div>

            <button
              type="button"
              className="shrink-0 rounded-full border border-[#dadada57] px-3 py-1 text-[10.5px] font-semibold text-[#363636] hover:bg-[#f2f2f2] cursor-pointer"
            >
              Follow
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
