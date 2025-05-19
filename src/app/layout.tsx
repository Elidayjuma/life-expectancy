"use client";
import "jsvectormap/dist/jsvectormap.css";
import "flatpickr/dist/flatpickr.min.css";
import "@/css/satoshi.css";
import "@/css/style.css";
import "@/css/global.css";
import React, { useState, useEffect } from "react";
import Loader from "@/components/common/Loader";
import Script from "next/script";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState<boolean>(true);

  // const pathname = usePathname();

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <div className="dark:bg-boxdark-2 dark:text-bodydark">
          <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2092375407734215"
            crossOrigin="anonymous"></script>
          {loading ? <Loader /> : children}
          <Script defer data-domain="lifeguage.elidayjuma.com" src="https://analytics.elidayjuma.com/js/script.outbound-links.js" />
        </div>
      </body>
    </html>
  );
}
