"use client";

import React from "react";

import { cn } from "@/lib/utils";

import { FilterChecboxProps, FilterCheckbox } from "./filter-checkbox";

import { Input, Skeleton } from "../ui";

type Item = FilterChecboxProps;

interface Props {
  title: string;
  items: Item[];
  defaultItems: Item[];
  limit?: number;
  searchInputPlaceholer?: string;
  onClickCheckbox?: (id: string) => void;
  defaultValue?: string[];
  className?: string;
  name: string;
  selectedIds: Set<string>;
}

export const FilterCheckoxGroup: React.FC<Props> = ({
  title,
  name,
  items,
  defaultItems,
  limit = 5,
  searchInputPlaceholer = "Поиск...",
  onClickCheckbox,
  defaultValue,
  selectedIds,
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

  if (items.length === 0) {
    return (
      <div className={cn("", className)}>
        <p className="mb-3 font-bold">{title}</p>

        {new Array(limit).fill(0).map((_, index) => (
          <Skeleton
            key={index}
            className="bg-gray-100 mb-3 rounded-[8px] h-6"
          />
        ))}

        <Skeleton className="bg-gray-100 rounded-[8px] w-28 h-6" />
      </div>
    );
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
            name={name}
            text={item.text}
            value={item.value}
            key={index}
            checked={selectedIds?.has(item.value)}
            endAdornment={item.endAdornment}
            onCheckedChange={() => onClickCheckbox?.(item.value)}
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
