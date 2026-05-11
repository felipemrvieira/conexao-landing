import Image from "next/image";
import styles from "@/app/page.module.css";
import { WHATSAPP_URL } from "./constants";
import { Icon } from "./Icon";

export function HeroSection() {
  return (
    <>
      <section className={styles.hero} id="inicio">
        <div className={styles.heroDecor} aria-hidden="true">
          <span className={styles.starOne}>
            <Icon name="star" />
          </span>
          <span className={styles.cloudOne}>
            <Icon name="cloud" />
          </span>
        </div>

        <div className={styles.heroGrid}>
          <div className={styles.heroCopy}>
            <p className={styles.badge}>
              <Icon name="verified" />
              Com aplicativo próprio para famílias
            </p>

            <h1>Educação infantil com afeto, cuidado e conexão</h1>
            <p>
              Na Escola Conexão, cada criança é acompanhada de perto em um
              ambiente seguro, criativo e preparado para o seu desenvolvimento
              integral.
            </p>

            <div className={styles.buttonGroup}>
              <a
                className={styles.primaryButton}
                href={WHATSAPP_URL}
                rel="noreferrer"
                target="_blank"
              >
                Agende uma visita
              </a>
              <a className={styles.secondaryButton} href="#proposta">
                Conheça nossa proposta
              </a>
            </div>
          </div>

          <div className={styles.heroMedia}>
            <div className={styles.heroBlob} />
            <Image
              alt="Crianças em atividade escolar"
              height={650}
              priority
              src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1100&q=80"
              width={900}
            />
            <div className={styles.heroCard}>
              <span>
                <Icon name="favorite" />
              </span>
              <div>
                <strong>Ambiente acolhedor</strong>
                <p>Desenvolvimento integral</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className={styles.cloudDivider} aria-hidden="true" />
    </>
  );
}
