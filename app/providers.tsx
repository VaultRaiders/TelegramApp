// app/providers.tsx
"use client";
import { ReactNode } from "react";

import { PostHogProvider } from "posthog-js/react";

import posthog from "@/libs/posthog";

export function PHProvider({ children }: { children: ReactNode }) {
  return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
}
