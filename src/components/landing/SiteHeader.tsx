"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { navItems } from "@/data/landing";
import styles from "@/app/page.module.css";
import { LOGO_SRC, WHATSAPP_URL } from "./constants";
import { Icon } from "./Icon";

const sectionIds = navItems.map((item) => item.href.replace("#", ""));

export function SiteHeader() {
  const [activeSection, setActiveSection] = useState(sectionIds[0]);
  const [isFloating, setIsFloating] = useState(false);

  useEffect(() => {
    function updateHeaderState() {
      setIsFloating(window.scrollY > 24);

      const viewportAnchor = 120;
      const currentSection =
        sectionIds
          .map((id) => {
          const section = document.getElementById(id);

          if (!section) {
              return null;
          }

            const rect = section.getBoundingClientRect();

            return {
              id,
              distance: Math.abs(rect.top - viewportAnchor),
              isNearViewport: rect.bottom > viewportAnchor && rect.top < window.innerHeight,
            };
          })
          .filter(
            (
              section,
            ): section is {
              id: string;
              distance: number;
              isNearViewport: boolean;
            } => Boolean(section?.isNearViewport),
          )
          .sort((current, next) => current.distance - next.distance)[0]?.id ??
        sectionIds[0];

      setActiveSection(currentSection);
    }

    updateHeaderState();
    window.addEventListener("scroll", updateHeaderState, { passive: true });
    window.addEventListener("resize", updateHeaderState);

    return () => {
      window.removeEventListener("scroll", updateHeaderState);
      window.removeEventListener("resize", updateHeaderState);
    };
  }, []);

  return (
    <header
      className={`${styles.topbar} ${isFloating ? styles.topbarFloating : ""}`}
    >
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
          {navItems.map((item) => {
            const sectionId = item.href.replace("#", "");
            const isActive = activeSection === sectionId;

            return (
              <a
                aria-current={isActive ? "page" : undefined}
                className={isActive ? styles.navLinkActive : undefined}
                href={item.href}
                key={item.href}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <a className={styles.navCta} href={WHATSAPP_URL} rel="noreferrer" target="_blank">
          Agende uma visita
        </a>

        <a
          className={styles.menuButton}
          href={WHATSAPP_URL}
          rel="noreferrer"
          target="_blank"
          aria-label="Agendar visita pelo WhatsApp"
        >
          <Icon name="menu" />
        </a>
      </div>
    </header>
  );
}
