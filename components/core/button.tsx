import { forwardRef } from "react";

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

export default Button;
