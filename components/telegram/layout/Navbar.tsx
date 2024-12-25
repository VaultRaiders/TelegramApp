"use client";

import { ReactNode } from "react";

import Image from "next/image";

import { Link, usePathname } from "@/i18n/routing";
import { cn } from "@/libs/utils";

const NavbarItem = ({
  icon,
  label,
  active = false,
  href = "#",
}: {
  icon: ReactNode;
  label: string;
  active?: boolean;
  href?: string;
}) => {
  return (
    <Link href={href} className={cn("text-white", active && "text-primary")}>
      <div className="relative flex w-16 flex-col items-center gap-2 whitespace-nowrap">
        <div className="relative h-11 w-11">
          <div
            className={cn(
              "absolute bottom-0 left-1/2 -translate-x-1/2 transition-all duration-300",
              active && "bottom-4 scale-[1.75]",
            )}
          >
            {icon}
          </div>
        </div>
        <div className="text-xs">{label}</div>
      </div>
    </Link>
  );
};

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div
      className="flex w-full justify-between rounded-t-[1.25rem] border-t border-primary/25 bg-gray-950/90 px-5 pb-6 pt-1 text-[#BEB7B1]"
      style={{
        fontFamily: "Luminari",
      }}
    >
      <NavbarItem
        icon={
          <div className="h-10 w-10">
            <Image
              src="/assets/nav-1.png"
              alt="nav"
              fill
              className="!static h-10 w-10"
            />
          </div>
        }
        label="Bot list"
        active={pathname === "/"}
        href="/"
      />
      <NavbarItem
        icon={
          <div className="h-10 w-10">
            <Image
              src="/assets/nav-2.png"
              alt="nav"
              fill
              className="!static h-10 w-10"
            />
          </div>
        }
        label="History"
        active={pathname.startsWith("/history")}
        href="/history"
      />
      <NavbarItem
        icon={
          <div className="h-10 w-10">
            <Image
              src="/assets/nav-3.png"
              alt="nav"
              fill
              className="!static h-10 w-10"
            />
          </div>
        }
        label="Leaderboard"
        active={pathname.startsWith("/leaderboard")}
        href="/leaderboard"
      />
      <NavbarItem
        icon={
          <div className="h-10 w-10">
            <Image
              src="/assets/nav-4.png"
              alt="nav"
              fill
              className="!static h-10 w-10"
            />
          </div>
        }
        label="Create bot"
        active={pathname.startsWith("/my-bot")}
        href="/my-bot"
      />
    </div>
  );
};

export default Navbar;
