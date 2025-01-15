import React from "react";
import { notFound } from "next/navigation";
import { prisma } from "@/prisma/prisma-client";

import { cn } from "@/lib/utils";

import {
  Container,
  GroupVariants,
  PizzaImage,
  Title,
} from "@/components/shared";

interface Props {
  className?: string;
  params: { id: string };
}

export default async function Home({ className, params: { id } }: Props) {
  const product = await prisma.product.findFirst({
    where: { id: Number(id) },
    include: {
      ingredients: true,
      category: {
        include: {
          products: {
            include: {
              items: true,
            },
          },
        },
      },
      items: true,
    },
  });

  if (!product) {
    return notFound();
  }

  return (
    <Container className="flex flex-col my-10">
      <div className={cn(className, "flex flex-1")}>
        <PizzaImage name={product.name} imageUrl={product.imageUrl} size={40} />

        <div className="bg-[#f7f6f5] p-7 w-[490px]">
          <Title
            text={product.name}
            size="md"
            className="mb-1 font-extrabold"
          />

          <p className="text-gray-400">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit..
          </p>

          <div className="flex flex-col gap-4 mt-5">
            <GroupVariants
              items={[
                { name: "Маленькая", value: "1" },
                { name: "Средняя", value: "2" },
                { name: "Большая>", value: "3", disabled: true },
              ]}
              value={"1"}
            />
          </div>
        </div>
      </div>
    </Container>
  );
}
