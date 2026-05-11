import Image from "next/image";
import { appFeatures } from "@/data/landing";
import styles from "@/app/page.module.css";
import { LOGO_SRC } from "./constants";
import { Icon } from "./Icon";
import { SectionIntro } from "./SectionIntro";

function PhoneMockup() {
  return (
    <div className={styles.phoneMockup} aria-label="Prévia do aplicativo Conexão">
      <div className={styles.phoneScreen}>
        <div className={styles.phoneHeader}>
          <Image
            alt="Escola Conexão"
            className={styles.appLogoImage}
            height={32}
            src={LOGO_SRC}
            width={52}
          />
          <strong>App Conexão</strong>
        </div>
        <div className={styles.phoneContent}>
          <div className={styles.phonePanel}>
            <strong>Rotina de hoje</strong>
            <p>Lanche, atividade de arte e parque.</p>
          </div>
          <div className={styles.phonePanelAlt}>
            <strong>Novo comunicado</strong>
            <p>Reunião de pais na próxima semana.</p>
          </div>
          <div className={styles.photoPreview}>
            <Image
              alt="Atividade infantil registrada no aplicativo"
              fill
              sizes="260px"
              src="https://images.unsplash.com/photo-1544776193-32d404ae608a?auto=format&fit=crop&w=700&q=80"
            />
            <span>Fotos do dia</span>
          </div>
        </div>
        <div className={styles.phoneTabs}>
          <Icon name="home" />
          <Icon name="calendar_month" />
          <Icon name="chat" />
          <Icon name="notifications" />
        </div>
      </div>
    </div>
  );
}

export function AppSection() {
  return (
    <section className={styles.appSection} id="aplicativo">
      <div className={styles.appGrid}>
        <PhoneMockup />

        <div className={styles.appCopy}>
          <SectionIntro
            title="Um aplicativo próprio para aproximar escola e família"
            text="Uma solução exclusiva para acompanhar cada passo do desenvolvimento do seu filho com segurança, clareza e transparência."
          />

          <div className={styles.featureGrid}>
            {appFeatures.map((feature) => (
              <div className={styles.featureItem} key={feature.label}>
                <span>
                  <Icon name={feature.icon} />
                </span>
                <strong>{feature.label}</strong>
              </div>
            ))}
          </div>

          <div className={styles.storeButtons} aria-label="Baixar aplicativo">
            <a href="#" aria-label="Baixar na App Store">
              <Icon name="apple" />
              <span>
                <small>Baixar na</small>
                App Store
              </span>
            </a>
            <a href="#" aria-label="Baixar no Google Play">
              <Icon name="android" />
              <span>
                <small>Disponível no</small>
                Google Play
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
