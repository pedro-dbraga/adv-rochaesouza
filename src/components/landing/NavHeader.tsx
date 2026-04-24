import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import styles from "./NavHeader.module.css";
import { site, whatsappLink } from "@/config/site";

interface NavItem {
  label: string;
  href: string;
}

interface NavHeaderProps {
  items?: NavItem[];
  ctaLabel?: string;
  ctaHref?: string;
  homeHref?: string;
}

const defaultItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Problemas", href: "#problemas" },
  { label: "Fale Conosco", href: "#contato" },
];

export function NavHeader({
  items = defaultItems,
  ctaLabel = "WhatsApp",
  ctaHref,
  homeHref = "/",
}: NavHeaderProps) {
  const [open, setOpen] = useState(false);
  const finalCta = ctaHref ?? whatsappLink("Olá, gostaria de tirar uma dúvida.");

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const isExternal = (href: string) => href.startsWith("#") || href.startsWith("http");

  const renderLink = (item: NavItem, onClick?: () => void) => {
    if (isExternal(item.href)) {
      return (
        <a key={item.href} href={item.href} onClick={onClick}>
          {item.label}
        </a>
      );
    }
    return (
      <Link key={item.href} to={item.href} onClick={onClick}>
        {item.label}
      </Link>
    );
  };

  return (
    <>
      <header className={styles.header}>
        <div className={`rs-container ${styles.inner}`}>
          <Link to={homeHref} className={styles.brand} aria-label={site.fullName}>
            Rocha <span>&</span> Souza
          </Link>

          <nav className={styles.nav} aria-label="Navegação principal">
            {items.map((item) => renderLink(item))}
            <a
              className={styles.ctaNav}
              href={finalCta}
              target="_blank"
              rel="noopener noreferrer"
            >
              {ctaLabel}
            </a>
          </nav>

          <button
            type="button"
            className={styles.menuBtn}
            aria-label="Abrir menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
          >
            <Menu />
          </button>
        </div>
      </header>

      <div
        className={`${styles.backdrop} ${open ? styles.backdropOpen : ""}`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      <aside
        className={`${styles.drawer} ${open ? styles.drawerOpen : ""}`}
        aria-hidden={!open}
        aria-label="Menu de navegação"
      >
        <div className={styles.drawerHead}>
          <span className={styles.brand}>
            Rocha <span>&</span> Souza
          </span>
          <button
            type="button"
            className={styles.menuBtn}
            aria-label="Fechar menu"
            onClick={() => setOpen(false)}
          >
            <X />
          </button>
        </div>
        <nav className={styles.drawerNav} aria-label="Navegação móvel">
          {items.map((item) => renderLink(item, () => setOpen(false)))}
          <a
            className={`${styles.drawerNav && ""} ${styles.drawerCta}`}
            style={{
              display: "block",
              padding: "14px 16px",
              borderRadius: "var(--radius-md)",
              marginTop: "8px",
            }}
            href={finalCta}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
          >
            {ctaLabel}
          </a>
        </nav>
      </aside>
    </>
  );
}
