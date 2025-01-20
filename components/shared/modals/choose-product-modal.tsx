"use client";

import React from "react";
import { useRouter } from "next/navigation";

import { cn } from "@/lib/utils";

import { Product } from "@prisma/client";

import { Dialog, DialogContent } from "@/components/ui";

interface Props {
  className?: string;
  product: Product;
}

export const ChooseProductModal: React.FC<Props> = ({ product, className }) => {
  const router = useRouter();

  return (
    <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
      <DialogContent
        className={cn(
          "p-10 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden",
          className
        )}
      >
        {product.name}
      </DialogContent>
    </Dialog>
  );
};
