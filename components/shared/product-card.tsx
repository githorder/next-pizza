import React from "react";
import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";

import { Title } from "./title";
import { Button } from "../ui";
import { Plus } from "lucide-react";

export interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  className?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  imageUrl,
  className,
}) => {
  return (
    <div className={cn("group", className)}>
      <Link
        href={`/product/${id}`}
        className="flex flex-col justify-between h-full"
      >
        <div className="flex justify-center items-center bg-secondary p-6 rounded-lg h-[260px]">
          <Image
            alt={name}
            src={imageUrl}
            className="w-[215px] h-[215px] transition group-hover:translate-y-1"
            width={215}
            height={215}
          />
        </div>

        <Title size="sm" text={name} className="mt-3 mb-2 font-bold" />

        <p className="text-gray-400 text-sm">
          Томатный соус, увеличенная порция моцареллы, томаты, итальянские травы
        </p>

        <div className="flex justify-between items-center mt-4">
          <span className="text-[20px]">
            от <b>{price} ₽</b>
          </span>

          <Button variant="secondary" className="font-bold text-base">
            <Plus size={20} className="mr-1" />
            Добавить
          </Button>
        </div>
      </Link>
    </div>
  );
};
