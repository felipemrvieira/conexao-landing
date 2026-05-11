import { highlights } from "@/data/landing";
import styles from "@/app/page.module.css";
import { Icon } from "./Icon";

export function HighlightsSection() {
  return (
    <section className={styles.highlights} aria-label="Destaques da escola">
      <div className={styles.container}>
        <div className={styles.highlightGrid}>
          {highlights.map((item) => (
            <article
              className={`${styles.highlightCard} ${styles[`tone${item.tone}`]}`}
              key={item.title}
            >
              <span className={styles.cardIcon}>
                <Icon name={item.icon} />
              </span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
