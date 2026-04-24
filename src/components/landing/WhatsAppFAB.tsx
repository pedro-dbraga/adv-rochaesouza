import styles from "./WhatsAppFAB.module.css";
import { whatsappLink } from "@/config/site";
import wttlogo from "../../assets/logowtapp.png"
export function WhatsAppFAB() {
  return (
    <a
      className={styles.fab}
      href={whatsappLink("Olá! Vim pelo site e gostaria de tirar uma dúvida.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Abrir conversa no WhatsApp"
    >
      <img src={wttlogo} alt="" height={36} width={36}/>
    </a>
  );
}
