"use client";

import React from "react";
import { Category } from "@prisma/client";

import { cn } from "@/lib/utils";

import useCategoryStore from "@/store/category";

interface Props {
  className?: string;
  items: Category[];
}

export const Categories: React.FC<Props> = ({ className, items }) => {
  const categoryActiveId = useCategoryStore((state) => state.activeId);

  return (
    <div
      className={cn("inline-flex gap-1 bg-gray-50 p-1 rounded-2xl", className)}
    >
      {items.map(({ id, name }, index) => {
        return (
          <a
            href={`/#${name}`}
            key={index}
            className={cn(
              "flex items-center px-5 rounded-2xl font-bold h-11",
              id === categoryActiveId
                ? "bg-white text-primary shadow-md shadow-gray-200"
                : ""
            )}
          >
            <button>{name}</button>
          </a>
        );
      })}
    </div>
  );
};
