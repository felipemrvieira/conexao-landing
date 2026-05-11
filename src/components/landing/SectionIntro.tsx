import styles from "@/app/page.module.css";

type SectionIntroProps = {
  eyebrow?: string;
  title: string;
  text?: string;
};

export function SectionIntro({ eyebrow, title, text }: SectionIntroProps) {
  return (
    <div className={styles.sectionIntro}>
      {eyebrow ? <p className={styles.eyebrow}>{eyebrow}</p> : null}
      <h2>{title}</h2>
      {text ? <p>{text}</p> : null}
    </div>
  );
}
