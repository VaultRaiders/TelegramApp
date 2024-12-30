"use client";

import * as React from "react";

import * as SliderPrimitive from "@radix-ui/react-slider";

import { cn } from "@/libs/utils";

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex w-full touch-none select-none items-center",
      className,
    )}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full border border-[#9C9082] bg-gradient-to-r from-[#827668]/30 via-[#665D4F]/30 to-[#827668]/30">
      <SliderPrimitive.Range className="absolute h-full bg-gradient-to-r from-[#67451D] via-[#B8770F] to-[#67451D]" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="focus-visible:ring-ring block h-3.5 w-3.5 rounded-full border border-[#9C9082] bg-gradient-to-r from-[#827668] via-[#665D4F] to-[#827668] transition-colors focus-visible:outline-none focus-visible:ring-0 disabled:pointer-events-none disabled:opacity-50" />
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
