"use client";

import qs from "query-string";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { SearchIcon, X } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const Search = () => {
  const router = useRouter();
  const [value, setValue] = useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!value) return;

    const url = qs.stringifyUrl(
      {
        url: "/search",
        query: { term: value },
      },
      { skipEmptyString: true }
    );

    router.push(url);
  };

  const onClear = () => {
    setValue("");
  };

  return (
    <form
      onSubmit={onSubmit}
      className="relative w-full lg:w-[500px] flex items-center">
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search..."
        className="rounded-r-none border-r-0 rounded-l-3xl pl-5 focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0 border border-[#585858] placeholder:text-[#989898]"
      />
      {value && (
        <X
          className="absolute top-2.5 right-16 h-5 w-5 text-muted-foreground cursor-pointer hover:opacity-75 transition"
          onClick={onClear}
        />
      )}
      <Button
        type="submit"
        size="sm"
        variant="secondary"
        className="rounded-l-none rounded-r-3xl border-solid border border-[#585858] bg-[#585858] h-10 px-5 hover:bg-[#585858]">
        <SearchIcon className="h-5 w-5 text-[#999999]" />
      </Button>
    </form>
  );
};
