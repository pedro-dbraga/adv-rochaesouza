import { useEffect } from "react";

interface SeoOptions {
  title: string;
  description?: string;
  canonical?: string;
}

export function useSeo({ title, description, canonical }: SeoOptions) {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = title;

    let metaDesc: HTMLMetaElement | null = null;
    let prevDesc: string | null = null;
    if (description) {
      metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement("meta");
        metaDesc.setAttribute("name", "description");
        document.head.appendChild(metaDesc);
      }
      prevDesc = metaDesc.getAttribute("content");
      metaDesc.setAttribute("content", description);
    }

    let linkCanonical: HTMLLinkElement | null = null;
    let prevCanonical: string | null = null;
    if (canonical) {
      linkCanonical = document.querySelector('link[rel="canonical"]');
      if (!linkCanonical) {
        linkCanonical = document.createElement("link");
        linkCanonical.setAttribute("rel", "canonical");
        document.head.appendChild(linkCanonical);
      }
      prevCanonical = linkCanonical.getAttribute("href");
      linkCanonical.setAttribute("href", canonical);
    }

    return () => {
      document.title = prevTitle;
      if (metaDesc && prevDesc !== null) metaDesc.setAttribute("content", prevDesc);
      if (linkCanonical && prevCanonical !== null)
        linkCanonical.setAttribute("href", prevCanonical);
    };
  }, [title, description, canonical]);
}
