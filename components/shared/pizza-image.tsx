import React from "react";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  imageUrl: string;
  name: string;
  size: 20 | 30 | 40;
}

export const PizzaImage: React.FC<Props> = ({
  imageUrl,
  size,
  name,
  className,
}) => {
  return (
    <div
      className={cn(
        "flex items-center justify-center flex-1 relative w-full",
        className
      )}
    >
      <img
        src={imageUrl}
        alt={name}
        className={cn(
          "relative left-2 top-2 transition-all z-10 duration-300",
          {
            "w-[300px] h-[300px]": size === 20,
            "w-[400px] h-[400px]": size === 30,
            "w-[500px] h-[500px]": size === 40,
          }
        )}
      />

      <div className="top-1/2 left-1/2 absolute border-2 border-gray-200 border-dashed rounded-full w-[450px] h-[450px] -translate-x-1/2 -translate-y-1/2" />
      <div className="top-1/2 left-1/2 absolute border-2 border-gray-100 border-dotted rounded-full w-[370px] h-[370px] -translate-x-1/2 -translate-y-1/2" />
    </div>
  );
};
