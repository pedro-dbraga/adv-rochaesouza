import { Link } from "react-router-dom";
import { site } from "@/config/site";
import styles from "./SiteHeader.module.css";

export function SiteHeader() {
  return (
    <header className={styles.header}>
      <div className={`rs-container ${styles.inner}`}>
        <Link to="/" className={styles.brand} aria-label={site.fullName}>
          Rocha <span>&</span> Souza
        </Link>
        <span className={styles.tag}>{site.tagline}</span>
      </div>
    </header>
  );
}
