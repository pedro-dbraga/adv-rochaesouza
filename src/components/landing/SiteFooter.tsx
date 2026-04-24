import styles from "./SiteFooter.module.css";
import { site } from "@/config/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <>
      <div className={styles.ethics}>
        <div className="rs-container">{site.ethicsNotice}</div>
      </div>

      <footer className={styles.footer}>
        <div className={`rs-container ${styles.card}`}>
          <div className={styles.brandWrap}>
            <div className={styles.brand}>
              Rocha <span>&</span> Souza
            </div>
            <span className={styles.brandTag}>Advogados · {site.oab}</span>
          </div>

          <div className={styles.divider} aria-hidden="true" />

          <div className={styles.contacts}>
            <div>
              <span className={styles.contactLabel}>WhatsApp</span>
              <a
                href={`https://wa.me/${site.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {site.whatsappDisplay}
              </a>
            </div>
            <div>
              <span className={styles.contactLabel}>E-mail</span>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </div>
            <div>
              <span className={styles.contactLabel}>Atuação</span>
              {site.regions}
            </div>
          </div>
        </div>

        <div className="rs-container">
          <div className={styles.bottom}>
            © {year} {site.fullName}. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </>
  );
}
