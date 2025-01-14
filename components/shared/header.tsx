import Image from "next/image";
import Link from "next/link";
import React from "react";

import { cn } from "@/lib/utils";

import { Container } from "./container";
import { SearchInput } from "./search-input";
import { Button } from "../ui";

import { ArrowRight, ShoppingCart, User } from "lucide-react";

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn("border border-b", className)}>
      <Container className="flex justify-between items-center py-8">
        {/* Левая часть */}
        <Link href="/" className="flex items-center gap-4">
          <Image src="/logo.png" alt="Logo" width={35} height={35} />
          <div>
            <h1 className="font-black text-2xl uppercase">Next Pizza</h1>
            <p className="text-gray-400 text-sm leading-3">
              вкусней уже некуда
            </p>
          </div>
        </Link>

        <div className="flex-1 mx-10">
          <SearchInput />
        </div>

        {/* Правая часть */}
        <div className="flex items-center gap-3">
          <Button variant="outline" className="flex items-center gap-1">
            <User size={16} />
            Войти
          </Button>

          <div>
            <Button className="relative group">
              <b>520 ₽</b>
              <span className="bg-white/30 mx-3 w-[1px] h-full" />
              <div className="flex items-center gap-1 group-hover:opacity-0 transition duration-300">
                <ShoppingCart className="relative w-4 h-4" strokeWidth={2} />
                <b>3</b>
              </div>
              <ArrowRight
                size={20}
                className="right-5 absolute opacity-0 group-hover:opacity-100 transition -translate-x-2 group-hover:translate-x-0 duration-300"
              />
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
};
