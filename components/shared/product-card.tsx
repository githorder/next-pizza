import React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";

import { Title } from "./title";
import { Button } from "../ui";
import { Plus } from "lucide-react";

interface Props {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  className?: string;
}

export const ProductCard: React.FC<Props> = ({
  id,
  name,
  price,
  imageUrl,
  className,
}) => {
  return (
    <div className={cn("", className)}>
      <Link href={`product/${id}`}>
        <div className="flex justify-center items-center bg-secondary p-6 rounded-lg h-[260px]">
          <img alt={name} src={imageUrl} className="w-[215px] h-[215px]" />
        </div>

        <Title size="sm" text={name} className="mt-3 mb-1 font-bold" />

        <p className="text-gray-400 text-sm">
          Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, соус
          альфредо, чеснок
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
