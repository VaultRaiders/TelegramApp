import { forwardRef } from "react";

import { cn } from "@/libs/utils";

export interface CardProps extends React.ButtonHTMLAttributes<HTMLDivElement> {
  neon?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ children, className, neon = false, ...props }, ref) => (
    <div
      ref={ref}
      {...props}
      className={cn(
        "cursor-pointer rounded-xl",
        neon && "animate-neon border border-primary shadow-neon",
        className,
      )}
    >
      {children}
    </div>
  ),
);
Card.displayName = "Card";

export default Card;
