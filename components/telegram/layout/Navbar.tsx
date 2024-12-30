"use client";

import { ReactNode } from "react";

import Image from "next/image";

import { Link } from "@/i18n/routing";
import { cn } from "@/libs/utils";

const NavbarItem = ({
  icon,
  label,
  active = false,
  href,
  onClick,
}: {
  icon: ReactNode;
  label: string;
  active?: boolean;
  href?: string;
  onClick?: () => void;
}) => {
  const content = (
    <div className="relative flex w-16 flex-col items-center gap-2 whitespace-nowrap">
      <div className="relative h-11 w-11">
        {active && (
          <div className="absolute bottom-0 left-1/2 h-20 w-28 -translate-x-1/2 rounded-full bg-black/80 blur-xl" />
        )}
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
  );

  if (!href) {
    return <button onClick={onClick}>{content}</button>;
  }

  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn("text-white", active && "text-primary")}
    >
      {content}
    </Link>
  );
};

const Navbar = ({
  tab = 0,
  setTab,
}: {
  tab?: number;
  setTab?: (_tab: number) => void;
}) => {
  return (
    <div
      className="flex w-full justify-between rounded-t-[1.25rem] border-t border-primary/25 bg-gray-950/90 px-5 pb-6 pt-1 text-[#BEB7B1] shadow-[0_-20px_20px_0_rgba(0,0,0,0.8)]"
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
        // active={pathname === "/"}
        href="?tab=0"
        active={tab === 0}
        onClick={() => setTab?.(0)}
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
        // active={pathname.startsWith("/history")}
        // href="/history"
        href="?tab=1"
        active={tab === 1}
        onClick={() => setTab?.(1)}
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
        // active={pathname.startsWith("/leaderboard")}
        // href="/leaderboard"
        href="?tab=2"
        active={tab === 2}
        onClick={() => setTab?.(2)}
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
        // active={pathname.startsWith("/my-bot")}
        // href="/my-bot"
        href="?tab=3"
        active={tab === 3}
        onClick={() => setTab?.(3)}
      />
    </div>
  );
};

export default Navbar;
