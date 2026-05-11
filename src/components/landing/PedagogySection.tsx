import Image from "next/image";
import { pedagogyItems } from "@/data/landing";
import styles from "@/app/page.module.css";
import { SectionIntro } from "./SectionIntro";

export function PedagogySection() {
  return (
    <section className={styles.pedagogy} id="proposta">
      <div className={styles.container}>
        <SectionIntro
          eyebrow="Proposta pedagógica"
          title="Aprender brincando, explorando e construindo conexões."
          text="A rotina combina cuidado, intenção pedagógica e experiências concretas para cada etapa da infância."
        />

        <div className={styles.bentoGrid}>
          {pedagogyItems.map((item) => (
            <article
              className={`${styles.bentoCard} ${styles[`tone${item.tone}`]} ${
                item.featured ? styles.bentoWide : ""
              }`}
              key={item.title}
            >
              <div className={styles.bentoTop} aria-hidden="true" />
              <div className={styles.bentoImage}>
                <Image
                  alt={item.title}
                  fill
                  sizes="(max-width: 680px) 72vw, (max-width: 980px) 36vw, 18vw"
                  src={item.image}
                />
              </div>
              <div className={styles.bentoCopy}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
