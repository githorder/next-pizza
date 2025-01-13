"use client";

import React from "react";
import { useIntersection } from "react-use";

import { cn } from "@/lib/utils";

import { Title } from "./title";
import { ProductCard } from "./product-card";

import useCategoryStore from "@/store/category";

interface Props {
  title: string;
  products: any[];
  categoryId: number;
  listClassname?: string;
  className?: string;
}

export const ProductsGroupList: React.FC<Props> = ({
  title,
  products,
  categoryId,
  listClassname,
  className,
}) => {
  const setCategoryActiveId = useCategoryStore((state) => state.setActiveId);

  const intersectionRef = React.useRef(null);
  const intersection = useIntersection(intersectionRef, {
    threshold: 0.4,
  });

  React.useEffect(() => {
    if (intersection?.isIntersecting) {
      setCategoryActiveId(categoryId);
    }
  }, [title, categoryId, intersection]);

  return (
    <div className={cn("", className)} ref={intersectionRef} id={title}>
      <Title text={title} size="lg" className="mb-5 font-extrabold" />

      <div className={cn("grid grid-cols-3 gap-[50px]", listClassname)}>
        {products.map(({ id, imageUrl, name, productItems }, index) => (
          <ProductCard
            key={index}
            id={id}
            imageUrl={imageUrl}
            name={name}
            price={productItems[0].price}
          />
        ))}
      </div>
    </div>
  );
};
