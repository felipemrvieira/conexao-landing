import Image from "next/image";
import styles from "@/app/page.module.css";
import { SectionIntro } from "./SectionIntro";

export function AboutSection() {
  return (
    <section className={styles.about} id="sobre">
      <div className={styles.aboutContent}>
        <SectionIntro
          title="Nossa essência é o afeto"
          text="A primeira infância é uma fase decisiva. Por isso, oferecemos mais do que cuidado: criamos um ambiente rico em estímulos, vínculos e descobertas."
        />
        <Image
          alt="Professora acompanhando criança em atividade"
          height={700}
          src="https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1100&q=80"
          width={1100}
        />
        <p>
          Nosso compromisso é com o desenvolvimento integral da criança,
          respeitando sua individualidade e promovendo relações saudáveis e
          significativas.
        </p>
      </div>
    </section>
  );
}
