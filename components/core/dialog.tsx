import { useRef, useState } from "react";

import Image from "next/image";

const Dialog = ({
  open,
  onOpenChange,
  children,
}: IChildren & {
  open: boolean;
  onOpenChange?: (_open: boolean) => void;
}) => {
  const dialogRef = useRef<HTMLDivElement>(null);
  const [openDialog, setOpenDialog] = useState<boolean>(false);

  if (open === false || (open === undefined && !openDialog)) return null;

  return (
    <dialog
      open
      onClick={(e) => {
        if (dialogRef.current.contains(e.target as Node)) return;
        if (onOpenChange) {
          onOpenChange(false);
        } else {
          setOpenDialog(false);
        }
      }}
      className="fixed left-0 top-0 z-[100] flex h-full w-full items-center justify-center bg-[#656565]/60 p-4"
    >
      <div
        ref={dialogRef}
        className="relative w-full max-w-96 overflow-hidden rounded-[1.25rem] bg-[#2B2B2B]/90 px-5 py-10"
      >
        <button
          onClick={() =>
            onOpenChange ? onOpenChange(false) : setOpenDialog(false)
          }
          className="absolute right-0 top-0 rounded-bl-md bg-[#827668] px-2.5 py-2 shadow-[-1px_2px_0_0_#67451D]"
        >
          <Image src="/assets/close.png" alt="close" width={24} height={24} />
        </button>
        {children}
      </div>
    </dialog>
  );
};

export default Dialog;
