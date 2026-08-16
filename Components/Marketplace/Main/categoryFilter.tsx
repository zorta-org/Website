export type Category = "All" | "Templates" | "Bots" | "Design" | "Dev Tools";

const categories: Category[] = [
  "All",
  "Templates",
  "Bots",
  "Design",
  "Dev Tools",
];

interface CategoryFilterProps {
  active: Category;
  onChange: (category: Category) => void;
}

export default function CategoryFilter({
  active,
  onChange,
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap items-center gap-1.5">
      {categories.map((category) => {
        const isActive = active === category;

        return (
          <button
            key={category}
            type="button"
            onClick={() => onChange(category)}
            className={`rounded-full px-4 py-1.5 text-[12px] font-medium transition-colors cursor-pointer ${
              isActive
                ? "bg-[#8cc3de]/30 font-semibold text-[#39738b]"
                : "text-[#868585] hover:bg-[#f2f2f2]"
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
