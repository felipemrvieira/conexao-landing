import Image from "next/image";
import {
  ArrowRight,
  Bell,
  CalendarDays,
  Camera,
  CheckCircle2,
  Cloud,
  Heart,
  History,
  HomeIcon,
  Megaphone,
  Menu,
  MessageCircle,
  Smartphone,
  Palette,
  Puzzle,
  Sparkles,
  Star,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import {
  appFeatures,
  highlights,
  navItems,
  pedagogyItems,
  spaces,
  testimonials,
} from "@/data/landing";
import styles from "./page.module.css";

const LOGO_SRC = "/escola-conexao-logo.png?v=20260511-1122";

const icons: Record<string, LucideIcon> = {
  arrow_forward: ArrowRight,
  auto_awesome: Sparkles,
  calendar_month: CalendarDays,
  campaign: Megaphone,
  chat: MessageCircle,
  cloud: Cloud,
  draw: Palette,
  extension: Puzzle,
  family_restroom: Users,
  favorite: Heart,
  forum: MessageCircle,
  history: History,
  home: HomeIcon,
  menu: Menu,
  notifications: Bell,
  photo_library: Camera,
  schedule: CalendarDays,
  smartphone: Smartphone,
  star: Star,
  verified: CheckCircle2,
  volunteer_activism: Heart,
};

function Icon({ name }: { name: string }) {
  const IconComponent = icons[name] ?? Sparkles;

  return (
    <IconComponent aria-hidden="true" focusable="false" strokeWidth={2.25} />
  );
}

function SectionIntro({
  eyebrow,
  title,
  text,
}: {
  eyebrow?: string;
  title: string;
  text?: string;
}) {
  return (
    <div className={styles.sectionIntro}>
      {eyebrow ? <p className={styles.eyebrow}>{eyebrow}</p> : null}
      <h2>{title}</h2>
      {text ? <p>{text}</p> : null}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <header className={styles.topbar}>
        <div className={styles.navShell}>
          <a className={styles.logo} href="#inicio" aria-label="Escola Conexão">
            <Image
              alt="Escola Conexão"
              className={styles.logoImage}
              height={64}
              priority
              src={LOGO_SRC}
              width={104}
            />
          </a>

          <nav className={styles.navLinks} aria-label="Navegação principal">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <a className={styles.navCta} href="#visita">
            Agende uma visita
          </a>

          <a className={styles.menuButton} href="#visita" aria-label="Agendar visita">
            <Icon name="menu" />
          </a>
        </div>
      </header>

      <main>
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
                <a className={styles.primaryButton} href="#visita">
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

        <section className={styles.highlights} aria-label="Destaques da escola">
          <div className={styles.container}>
            <div className={styles.highlightGrid}>
              {highlights.map((item) => (
                <article
                  className={`${styles.highlightCard} ${
                    styles[`tone${item.tone}`]
                  }`}
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

        <section className={styles.appSection} id="aplicativo">
          <div className={styles.appGrid}>
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
            </div>
          </div>
        </section>

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
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <span aria-hidden="true">
                    <Icon name="auto_awesome" />
                  </span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.spaces} id="espacos">
          <div className={styles.container}>
            <SectionIntro
              eyebrow="Nossos espaços"
              title="Ambientes preparados para imaginar, brincar e aprender."
              text="Salas, áreas externas e cantinhos de leitura pensados para segurança, autonomia e descobertas diárias."
            />

            <div className={styles.spaceGrid}>
              {spaces.map((space) => (
                <article className={styles.spaceCard} key={space.title}>
                  <Image
                    alt={space.title}
                    fill
                    sizes="(max-width: 680px) 100vw, (max-width: 980px) 50vw, 33vw"
                    src={space.image}
                  />
                  <strong>{space.title}</strong>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.testimonials}>
          <div className={styles.container}>
            <SectionIntro title="O que as famílias dizem" />
            <div className={styles.testimonialGrid}>
              {testimonials.map((testimonial) => (
                <figure className={styles.testimonialCard} key={testimonial.author}>
                  <div className={styles.stars} aria-label="5 estrelas">
                    <Icon name="star" />
                    <Icon name="star" />
                    <Icon name="star" />
                    <Icon name="star" />
                    <Icon name="star" />
                  </div>
                  <blockquote>{testimonial.quote}</blockquote>
                  <figcaption>
                    <strong>{testimonial.author}</strong>
                    <span>{testimonial.role}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.finalCta} id="visita">
          <div className={styles.container}>
            <h2>Venha conhecer a Escola Conexão</h2>
            <p>
              Estamos de portas abertas para receber sua família e apresentar
              nosso espaço, equipe e metodologia.
            </p>
            <a className={styles.primaryButton} href="mailto:contato@escolaconexao.com.br">
              Agendar visita
              <Icon name="arrow_forward" />
            </a>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerShell}>
          <div>
            <a className={styles.footerLogo} href="#inicio">
              <Image
                alt="Escola Conexão"
                className={styles.footerLogoImage}
                height={58}
                src={LOGO_SRC}
                width={95}
              />
            </a>
            <p>© 2026 Escola Conexão. Educação infantil com afeto e conexão.</p>
          </div>

          <nav aria-label="Links do rodapé">
            <a href="#sobre">Sobre</a>
            <a href="#proposta">Proposta</a>
            <a href="#aplicativo">Aplicativo</a>
            <a href="#visita">Contato</a>
          </nav>
        </div>
      </footer>
    </>
  );
}
