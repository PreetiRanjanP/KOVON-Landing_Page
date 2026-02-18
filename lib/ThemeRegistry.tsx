"use client";

import { useState } from "react";
import { useServerInsertedHTML } from "next/navigation";
import { ThemeProvider } from "@mui/material/styles";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import theme from "@/lib/theme";

interface ThemeRegistryProps {
  children: React.ReactNode;
}

export default function ThemeRegistry({ children }: ThemeRegistryProps) {
  const [cache] = useState(() => {
    const c = createCache({ key: "mui" });
    c.compat = true;
    return c;
  });

  useServerInsertedHTML(() => {
    const names = Object.keys(cache.inserted);
    if (names.length === 0) return null;

    let styles = "";
    const dataNames: string[] = [];

    for (const name of names) {
      const val = cache.inserted[name];
      if (typeof val === "string") {
        dataNames.push(name);
        styles += val;
      }
    }

    if (styles === "") return null;

    // Clear the inserted cache so we don't re-inject on subsequent renders
    cache.inserted = {};

    return (
      <style
        key={cache.key}
        data-emotion={`${cache.key} ${dataNames.join(" ")}`}
        dangerouslySetInnerHTML={{ __html: styles }}
      />
    );
  });

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </CacheProvider>
  );
}
