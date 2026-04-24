import { FormEvent, useState } from "react";
import styles from "./LeadForm.module.css";
import { whatsappLink } from "@/config/site";

function maskPhone(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 2) return digits;
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10)
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

interface LeadFormProps {
  defaultMessage?: string;
}

export function LeadForm({ defaultMessage }: LeadFormProps = {}) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const next: typeof errors = {};
    if (name.trim().length < 2) next.name = "Informe seu nome.";
    const digits = phone.replace(/\D/g, "");
    if (digits.length < 10) next.phone = "Informe um telefone válido com DDD.";
    setErrors(next);
    if (Object.keys(next).length) return;

    const fallback = `Olá! Meu nome é ${name.trim()}. Tenho interesse em entender se meu caso se enquadra em usucapião extrajudicial. Telefone: ${phone}.`;
    const message = defaultMessage
      ? defaultMessage.replace("{name}", name.trim()).replace("{phone}", phone)
      : fallback;
    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
  }

  return (
    <form className={styles.wrap} onSubmit={handleSubmit} noValidate>
      <p className={styles.desc}>
        Deixe seu nome e telefone e começe uma conversa pelo WhatsApp para uma análise inicial.
      </p>

      <label className={styles.field}>
        <span className={styles.label}>Nome</span>
        <input
          className={styles.input}
          type="text"
          name="name"
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Seu nome completo"
          required
        />
        {errors.name && <span className={styles.error}>{errors.name}</span>}
      </label>

      <label className={styles.field}>
        <span className={styles.label}>Telefone (WhatsApp)</span>
        <input
          className={styles.input}
          type="tel"
          name="phone"
          inputMode="numeric"
          autoComplete="tel"
          value={phone}
          onChange={(e) => setPhone(maskPhone(e.target.value))}
          placeholder="(11) 99999-9999"
          required
        />
        {errors.phone && <span className={styles.error}>{errors.phone}</span>}
      </label>

      <button type="submit" className={styles.submit}>
        Quero conversar pelo WhatsApp
      </button>
      <p className={styles.hint}>
        Atendimento jurídico personalizado. Sem promessa de resultado.
      </p>
    </form>
  );
}
