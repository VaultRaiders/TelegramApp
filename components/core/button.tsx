import { forwardRef } from "react";

import Image from "next/image";

import { cn } from "@/libs/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  neon?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, neon = false, ...props }, ref) => (
    <button
      ref={ref}
      {...props}
      className={cn(
        "btn btn-primary flex w-full items-center justify-center gap-2 rounded-xl font-bold text-white",
        neon && "animate-neon shadow-neon",
        className,
      )}
    >
      {children}
    </button>
  ),
);
Button.displayName = "Button";

export const GameButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, ...props }, ref) => (
    <button
      ref={ref}
      {...props}
      className={cn(
        "relative z-0 flex h-16 w-full items-center justify-center text-xl text-[#453607]",
        className,
      )}
    >
      <div className="absolute left-[18px] right-[28px] top-0 -z-10 h-full">
        <Image
          src="/assets/btn-center.png"
          alt="Button"
          fill
          className="!static h-full w-auto"
        />
      </div>
      <div className="absolute left-0 top-0 -z-10 h-full w-[20px]">
        <Image
          src="/assets/btn-left.png"
          alt="Button"
          fill
          className="!static h-full w-full object-contain"
        />
      </div>
      <div className="absolute right-0 top-0 -z-10 h-full w-[30px]">
        <Image
          src="/assets/btn-right.png"
          alt="Button"
          fill
          className="!static h-full w-full object-contain"
        />
      </div>
      {children}
    </button>
  ),
);
GameButton.displayName = "GameButton";

export default Button;
