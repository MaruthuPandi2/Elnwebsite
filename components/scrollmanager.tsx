// components/ScrollProvider.tsx
"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    // Scroll to top when the pathname changes
    window.scrollTo(0, 0);
  }, [pathname]);

  return <>{children}</>;
}
