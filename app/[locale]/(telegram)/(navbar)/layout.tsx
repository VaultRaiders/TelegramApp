import { ReactNode, Suspense } from "react";

import Script from "next/script";

import Loading from "@/components/common/Loading";
import Navbar from "@/components/telegram/layout/Navbar";

export default async function Layout({ children }: { children: ReactNode }) {
  return (
    <Suspense fallback={<Loading />}>
      <Script strategy="lazyOnload" />
      <div className="relative">
        {children}
        <div className="fixed bottom-0 left-0 right-0 z-50">
          <Navbar />
        </div>
      </div>
    </Suspense>
  );
}
