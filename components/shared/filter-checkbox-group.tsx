"use client";

import React from "react";

import { cn } from "@/lib/utils";

import { FilterChecboxProps, FilterCheckbox } from "./filter-checkbox";

import { Input } from "../ui";

type Item = FilterChecboxProps;

interface Props {
  title: string;
  items: Item[];
  defaultItems: Item[];
  limit?: number;
  searchInputPlaceholer?: string;
  onChange?: (values: string[]) => void;
  defaultValue?: string[];
  className?: string;
}

export const FilterCheckoxGroup: React.FC<Props> = ({
  title,
  items,
  defaultItems,
  limit = 5,
  searchInputPlaceholer = "Поиск...",
  onChange,
  defaultValue,
  className,
}) => {
  const [showAll, setShowAll] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");

  const list = showAll
    ? items.filter((item) =>
        item.text.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
      )
    : defaultItems.slice(0, limit);

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchValue(e.target.value);
  }

  return (
    <div className={cn("", className)}>
      <p className="mb-3 font-bold">{title}</p>

      {showAll && (
        <div className="mb-5">
          <Input
            onChange={handleSearch}
            placeholder={searchInputPlaceholer}
            className="bg-gray-50 border-none"
          />
        </div>
      )}

      <div className="flex flex-col gap-4 pr-2 max-h-96 overflow-auto scrollbar">
        {list.map((item, index) => (
          <FilterCheckbox
            text={item.text}
            value={item.value}
            key={index}
            checked={false}
            endAdornment={item.endAdornment}
            onCheckedChange={(bool) => console.log(bool)}
          />
        ))}
      </div>

      {items.length > limit && (
        <div className={showAll ? "border-t border-neutral-100 mt-4" : ""}>
          <button
            className="mt-3 text-primary"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Скрыть" : "+ Показать все"}
          </button>
        </div>
      )}
    </div>
  );
};
