import Image from "next/image";
import styles from "@/app/page.module.css";
import { LOGO_SRC, WHATSAPP_URL } from "./constants";
import { Icon } from "./Icon";

const usefulLinks = [
  { label: "Sobre nós", href: "#sobre" },
  { label: "Nossa proposta", href: "#proposta" },
  { label: "Ambientes", href: "#espacos" },
  { label: "Aplicativo", href: "#aplicativo" },
];

const contactItems = [
  { icon: "phone", label: "(81) 98955-6059" },
  { icon: "mail", label: "contato@escolaconexao.com.br" },
  {
    icon: "location_on",
    label:
      "Av. Pres. Castelo Branco, 5870 - Candeias, Jaboatão dos Guararapes - PE, 54440-050",
  },
];

const legalLinks = [
  { label: "Políticas de Privacidade", href: "#" },
  { label: "Termos de Uso", href: "#" },
];

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerShell}>
        <div className={styles.footerBrand}>
          <a className={styles.footerLogo} href="#inicio">
            <Image
              alt="Escola Conexão"
              className={styles.footerLogoImage}
              height={58}
              src={LOGO_SRC}
              width={95}
            />
          </a>
          <p>
            Escola Conexão: educação infantil que une afeto, segurança e
            desenvolvimento integral.
          </p>
        </div>

        <div className={styles.footerColumn}>
          <h4>Links úteis</h4>
          <nav aria-label="Links úteis do rodapé">
            {usefulLinks.map((link) => (
              <a href={link.href} key={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className={styles.footerColumn}>
          <h4>Contato</h4>
          <ul className={styles.footerContactList}>
            {contactItems.map((item) => (
              <li key={item.label}>
                <Icon name={item.icon} />
                <span>{item.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.footerColumn}>
          <h4>Redes sociais</h4>
          <div className={styles.footerSocials}>
            <a href="#" aria-label="Instagram da Escola Conexão">
              <Icon name="photo_library" />
            </a>
            <a
              href={WHATSAPP_URL}
              rel="noreferrer"
              target="_blank"
              aria-label="Contato da Escola Conexão pelo WhatsApp"
            >
              <Icon name="mail" />
            </a>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>© 2026 Escola Conexão. Todos os direitos reservados.</p>
        <nav aria-label="Links legais">
          {legalLinks.map((link) => (
            <a href={link.href} key={link.label}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
