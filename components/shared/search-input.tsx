"use client";

import Link from "next/link";
import React from "react";
import { useDebounce } from "react-use";
import { Product } from "@prisma/client";

import { cn } from "@/lib/utils";

import { Api } from "@/services/api-client";

import { Search } from "lucide-react";

interface Props {
  className?: string;
}

export const SearchInput: React.FC<Props> = ({ className }) => {
  const [products, setProducts] = React.useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [focused, setFocused] = React.useState(false);

  useDebounce(
    () => {
      Api.products.search(searchQuery).then((items) => setProducts(items));
    },
    300,
    [searchQuery]
  );

  function handleClickProduct() {
    setFocused(false);
    setSearchQuery("");
    setProducts([]);
  }

  return (
    <>
      {focused && (
        <div
          className="z-20 fixed inset-0 bg-black/50"
          onClick={() => setFocused(false)}
        />
      )}

      <div
        className={cn(
          "flex rounded-2xl flex-1 justify-between relative h-11 z-20",
          className
        )}
      >
        <Search className="top-1/2 left-3 absolute h-5 text-gray-400 translate-y-[-50%]" />
        <input
          className="bg-gray-100 pl-11 rounded-2xl w-full outline-none"
          type="text"
          placeholder="Найти пиццу..."
          onFocus={() => setFocused(true)}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        {products.length > 0 && (
          <div
            className={cn(
              "absolute w-full bg-white rounded-xl py-2 top-14 shadow-md transition-all duration-200 invisible opacity-0 z-30",
              focused && "visible opacity-100 top-12"
            )}
          >
            {products.map((product) => (
              <Link
                onClick={handleClickProduct}
                key={product.id}
                className="flex items-center gap-3 hover:bg-primary/10 px-3 py-2 w-full"
                href={`/product/${product.id}`}
              >
                <img
                  className="rounded-sm w-8 h-8"
                  src={product.imageUrl}
                  alt={product.name}
                />
                <span className="font-medium">{product.name}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
