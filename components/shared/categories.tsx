import React from "react";

import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

const cats = [
  "Пиццы",
  "Комбо",
  "Закуски",
  "Коктели",
  "Кофе",
  "Напитки",
  "Десерты",
  "Десерты",
];

const activeIndex = 0;

export const Categories: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={cn("inline-flex gap-1 bg-gray-50 p-1 rounded-2xl", className)}
    >
      {cats.map((cat, index) => {
        return (
          <a
            key={index}
            className={cn(
              "flex items-center px-5 rounded-2xl font-bold h-11",
              index === activeIndex
                ? "bg-white text-primary shadow-md shadow-gray-200"
                : ""
            )}
          >
            <button>{cat}</button>
          </a>
        );
      })}
    </div>
  );
};
