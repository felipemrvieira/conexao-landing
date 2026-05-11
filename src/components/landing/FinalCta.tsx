import styles from "@/app/page.module.css";
import { WHATSAPP_URL } from "./constants";
import { Icon } from "./Icon";

export function FinalCta() {
  return (
    <section className={styles.finalCta} id="visita">
      <div className={styles.container}>
        <h2>Venha conhecer a Escola Conexão</h2>
        <p>
          Estamos de portas abertas para receber sua família e apresentar nosso
          espaço, equipe e metodologia.
        </p>
        <a
          className={styles.primaryButton}
          href={WHATSAPP_URL}
          rel="noreferrer"
          target="_blank"
        >
          Agendar visita
          <Icon name="arrow_forward" />
        </a>
      </div>
    </section>
  );
}
