import React from "react";

import { cn } from "@/libs/utils";

export type IBuilderListItemProps = {
  icon?: React.ReactNode;
  label?: string;
  active?: boolean;
  onClick?: () => void;
};

const BuilderListItem = ({ icon, active, onClick }: IBuilderListItemProps) => {
  return (
    <div className="flex h-24 items-center">
      <div
        onClick={onClick}
        className={cn(
          "cursor-pointer items-center justify-center rounded-lg border border-transparent bg-primary/5 p-3 text-center transition-all duration-300",
          active && "border-primary p-4",
        )}
      >
        {icon && <div className="mx-auto flex justify-center">{icon}</div>}
      </div>
    </div>
  );
};

export default BuilderListItem;
