"use client";

import { useEffect } from "react";

/* Keeps the tab title on pages where Next.js would otherwise fall back to the root default (e.g. 404). */
export default function DocumentTitle({ title }: { title: string }) {
  useEffect(() => {
    document.title = title;
  }, [title]);
  return null;
}
