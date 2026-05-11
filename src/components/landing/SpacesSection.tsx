import Image from "next/image";
import { spaces } from "@/data/landing";
import styles from "@/app/page.module.css";
import { SectionIntro } from "./SectionIntro";

export function SpacesSection() {
  return (
    <section className={styles.spaces} id="espacos">
      <div className={styles.container}>
        <SectionIntro
          eyebrow="Nossos espaços"
          title="Ambientes preparados para imaginar, brincar e aprender."
          text="Salas, áreas externas e cantinhos de leitura pensados para segurança, autonomia e descobertas diárias."
        />

        <div className={styles.spaceGrid}>
          {spaces.map((space) => (
            <article className={styles.spaceItem} key={space.title}>
              <div className={styles.spaceCard}>
                <Image
                  alt={space.title}
                  fill
                  sizes="(max-width: 680px) 100vw, (max-width: 980px) 50vw, 33vw"
                  src={space.image}
                />
              </div>
              <strong>{space.title}</strong>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
