"use client";

import { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "@/store/store";
import DevelopersHeader, {
  type AvailabilityFilter,
} from "./developersHeader";
import DevelopersGrid from "./developersGrid";

export default function Main() {
  const developers = useSelector(
    (state: RootState) => state.developers.developers
  );

  const [search, setSearch] = useState("");
  const [availability, setAvailability] = useState<AvailabilityFilter>("all");

  const filteredDevelopers = useMemo(() => {
    const query = search.trim().toLowerCase();

    return developers.filter((dev) => {
      const matchesAvailability =
        availability === "all" || dev.available === true;

      const matchesSearch =
        query === "" ||
        dev.name.toLowerCase().includes(query) ||
        dev.skills.some((skill) => skill.toLowerCase().includes(query));

      return matchesAvailability && matchesSearch;
    });
  }, [developers, search, availability]);

  return (
    <div className="mx-auto flex w-[95%] max-w-[1450px] flex-col gap-6 py-9">
      <DevelopersHeader
        search={search}
        onSearchChange={setSearch}
        availability={availability}
        onAvailabilityChange={setAvailability}
      />
      <DevelopersGrid developers={filteredDevelopers} />
    </div>
  );
}
