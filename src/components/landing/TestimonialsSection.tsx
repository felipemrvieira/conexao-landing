import { testimonials } from "@/data/landing";
import styles from "@/app/page.module.css";
import { Icon } from "./Icon";
import { SectionIntro } from "./SectionIntro";

const stars = Array.from({ length: 5 }, (_, index) => index);

export function TestimonialsSection() {
  return (
    <section className={styles.testimonials}>
      <div className={styles.container}>
        <SectionIntro title="O que as famílias dizem" />
        <div className={styles.testimonialGrid}>
          {testimonials.map((testimonial) => (
            <figure className={styles.testimonialCard} key={testimonial.author}>
              <div className={styles.stars} aria-label="5 estrelas">
                {stars.map((star) => (
                  <Icon name="star" key={star} />
                ))}
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
  );
}
