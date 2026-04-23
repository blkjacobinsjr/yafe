import type { ReactNode } from "react";
import Image from "next/image";
import { BlurWords } from "@/components/blur-words";
import { Reveal } from "@/components/reveal";
import { WaitlistForm } from "@/components/waitlist-form";
import styles from "./page.module.css";

export const runtime = "nodejs";

const specs = [
  { label: "Finish", value: "Obsidian tortoise acetate" },
  { label: "Lens", value: "Warm amber tint" },
  { label: "Shape", value: "Structured rectangle with softened corners" },
  { label: "Included", value: "Ivory fold case and olive presentation box" },
];

const promises = [
  "Waitlist access before the public release.",
  "First notice for Drop 01 and the silhouettes that follow.",
  "A focused release, not a crowded catalog.",
];

const waitlistBenefits = [
  "Private release notes.",
  "Early access when the first batch opens.",
  "First notice on future drops.",
];

type PackagingCardProps = {
  eyebrow: string;
  title: string;
  copy: string;
  src: string;
  alt: string;
  className?: string;
  delay?: number;
};

function PackagingCard({
  eyebrow,
  title,
  copy,
  src,
  alt,
  className,
  delay = 0,
}: PackagingCardProps) {
  return (
    <Reveal
      className={[styles.packagingCard, className].filter(Boolean).join(" ")}
      delay={delay}
    >
      <div className={styles.packagingMedia}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 960px) 100vw, 40vw"
          className={styles.packagingImage}
        />
      </div>
      <div className={styles.packagingMeta}>
        <p className={styles.cardEyebrow}>{eyebrow}</p>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardCopy}>{copy}</p>
      </div>
    </Reveal>
  );
}

function ActionLabel({ children }: { children: ReactNode }) {
  return <span className={styles.actionLabel}>{children}</span>;
}

export default function Home() {
  return (
    <div className={styles.page} id="top">
      <div className={styles.announcementBar}>
        <span>First release. Waitlist now open for Yafe 01.</span>
        <a href="#waitlist">Join waitlist</a>
      </div>

      <header className={styles.header}>
        <div className={styles.headerInner}>
          <a href="#top" className={styles.wordmark}>
            YAFE
          </a>

          <nav className={styles.nav}>
            <a href="#product">Frame</a>
            <a href="#craft">Craft</a>
            <a href="#waitlist">Waitlist</a>
          </nav>

          <a href="#waitlist" className={styles.headerCta}>
            Notify me
          </a>
        </div>
      </header>

      <main className={styles.main}>
        <section className={styles.hero}>
          <Reveal className={styles.heroMediaWrap} delay={0.05}>
            <div className={styles.heroMedia}>
              <Image
                src="/images/yafe-hero.jpg"
                alt="Two models wearing Yafe sunglasses."
                fill
                priority
                sizes="100vw"
                className={styles.coverImage}
              />
              <div className={styles.heroScrim} />
              <div className={styles.heroIntro}>
                <p className={styles.eyebrow}>Drop 01</p>
                <h1 className={styles.heroTitle}>
                  <BlurWords text="Beauty, seen" className={styles.heroTitleLine} />
                  <span className={styles.heroTitleAccent}>differently.</span>
                </h1>
                <p className={styles.heroCopy}>
                  Yafe builds quiet-luxury eyewear for the second glance:
                  sculpted acetate, amber optics, and packaging restrained
                  enough to let the frame speak.
                </p>

                <div className={styles.heroActions}>
                  <a href="#waitlist" className={styles.primaryAction}>
                    <ActionLabel>Join waitlist</ActionLabel>
                  </a>
                  <a href="#product" className={styles.secondaryAction}>
                    View frame
                  </a>
                </div>
              </div>
              <div className={styles.heroCard}>
                <p className={styles.heroCardLabel}>YAFE /ya-fe/</p>
                <p className={styles.heroCardText}>
                  Beauty made complete by the eye that receives it.
                </p>
                <p className={styles.heroCardMeta}>
                  Obsidian tortoise / amber lens / first edition
                </p>
              </div>
            </div>
          </Reveal>
        </section>

        <Reveal className={styles.statementStrip}>
          <div className={styles.statementItem}>Small-batch first release</div>
          <div className={styles.statementItem}>Amber lens warmth, not glare</div>
          <div className={styles.statementItem}>
            One silhouette now, more to follow
          </div>
        </Reveal>

        <section id="product" className={styles.productSection}>
          <div className={styles.productGallery}>
            <Reveal className={styles.galleryPrimary}>
              <figure className={`${styles.mediaCard} ${styles.mediaCardLarge}`}>
                <Image
                  src="/images/yafe-front.jpg"
                  alt="Front view of Yafe 01 sunglasses."
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className={styles.mediaFigureImage}
                />
                <figcaption className={styles.mediaCaption}>Front view</figcaption>
              </figure>
            </Reveal>

            <div className={styles.gallerySecondary}>
              <Reveal>
                <figure className={`${styles.mediaCard} ${styles.mediaCardSmall}`}>
                  <Image
                    src="/images/yafe-side.jpg"
                    alt="Three-quarter view of the Yafe 01 frame."
                    fill
                    sizes="(max-width: 640px) 100vw, 28vw"
                    className={styles.mediaFigureImage}
                  />
                  <figcaption className={styles.mediaCaption}>Profile</figcaption>
                </figure>
              </Reveal>

              <Reveal delay={0.12}>
                <figure className={`${styles.mediaCard} ${styles.mediaCardSmall}`}>
                  <Image
                    src="/images/yafe-detail.jpg"
                    alt="Temple detail of the Yafe 01 frame."
                    fill
                    sizes="(max-width: 640px) 100vw, 28vw"
                    className={styles.mediaFigureImage}
                  />
                  <figcaption className={styles.mediaCaption}>Temple detail</figcaption>
                </figure>
              </Reveal>
            </div>
          </div>

          <Reveal className={styles.productPanel} delay={0.12} direction="left">
            <div className={styles.panelStatusRow}>
              <span className={styles.statusPill}>Coming soon</span>
              <span className={styles.statusPillMuted}>Waitlist live</span>
            </div>

            <p className={styles.eyebrow}>First edition</p>
            <h2 className={styles.sectionTitle}>Yafe 01 sunglasses</h2>
            <p className={styles.panelCopy}>
              A rectangular silhouette shaped with softened corners, dense dark
              tortoise acetate, and a warm amber tint that turns sharp light
              into something slower.
            </p>

            <dl className={styles.specGrid}>
              {specs.map((spec) => (
                <div key={spec.label}>
                  <dt className={styles.specTerm}>{spec.label}</dt>
                  <dd className={styles.specDefinition}>{spec.value}</dd>
                </div>
              ))}
            </dl>

            <ul className={styles.promiseList}>
              {promises.map((promise) => (
                <li key={promise} className={styles.promiseItem}>
                  <span className={styles.promiseBullet} />
                  <span>{promise}</span>
                </li>
              ))}
            </ul>

            <div className={styles.panelActions}>
              <a
                href="#waitlist"
                className={`${styles.primaryAction} ${styles.buttonWide}`}
              >
                <ActionLabel>Join waitlist</ActionLabel>
              </a>
              <a
                href="#craft"
                className={`${styles.secondaryAction} ${styles.buttonWide}`}
              >
                See craft
              </a>
            </div>

            <p className={styles.panelNote}>
              Price and release window arrive with the invite.
            </p>
          </Reveal>
        </section>

        <section id="craft" className={styles.craftSection}>
          <Reveal className={styles.craftIntro}>
            <p className={styles.eyebrow}>Craft</p>
            <h2 className={styles.sectionTitle}>
              Nothing extra. Everything considered.
            </h2>
            <p className={styles.sectionCopy}>
              Quiet luxury is restraint with conviction. The frame stays
              structured but not severe. The packaging stays tactile but never
              loud. Every surface slows the eye down instead of fighting for it.
            </p>
            <blockquote className={styles.inlineQuote}>
              Proceed as if limits to our ability did not exist.
            </blockquote>
          </Reveal>

          <div className={styles.craftGrid}>
            <PackagingCard
              eyebrow="Included"
              title="Ivory fold case"
              copy="Soft, minimal, and made to disappear into the ritual."
              src="/images/yafe-case.jpg"
              alt="Ivory Yafe fold case."
            />
            <PackagingCard
              eyebrow="Presentation"
              title="Olive reveal box"
              copy="A quieter reveal with weight, texture, and contrast."
              src="/images/yafe-box.jpg"
              alt="Olive Yafe presentation box with case and cloth."
              delay={0.1}
            />
            <PackagingCard
              eyebrow="Study"
              title="Burnt olive direction"
              copy="A more muted finish for later drops and seasonal variants."
              src="/images/yafe-burnt-olive.jpg"
              alt="Burnt olive Yafe presentation study."
              className={styles.packagingWide}
              delay={0.16}
            />
          </div>
        </section>

        <section className={styles.definitionSection}>
          <Reveal className={styles.definitionPanel}>
            <p className={styles.eyebrow}>Definition</p>
            <h2 className={styles.definitionTitle}>
              Yafe is beauty in the eye of the beholder, refined into something
              wearable.
            </h2>
            <p className={styles.sectionCopy}>
              The object matters. The eye finishes it. That is the brand, the
              frame, and the release strategy.
            </p>
          </Reveal>
        </section>

        <section id="waitlist" className={styles.waitlistSection}>
          <Reveal className={styles.waitlistCard}>
            <div className={styles.waitlistIntro}>
              <p className={styles.eyebrowLight}>Waitlist</p>
              <h2 className={`${styles.sectionTitle} ${styles.sectionTitleLight}`}>
                Join before the first release.
              </h2>
              <p className={styles.waitlistCopy}>
                Get the launch window for Drop 01, private release notes, and
                first notice when the next silhouettes arrive.
              </p>
            </div>

            <WaitlistForm />

            <ul className={styles.waitlistBenefits}>
              {waitlistBenefits.map((benefit) => (
                <li key={benefit} className={styles.waitlistBenefit}>
                  {benefit}
                </li>
              ))}
            </ul>
          </Reveal>
        </section>
      </main>

      <footer className={styles.footer}>YAFE. Quiet luxury eyewear.</footer>
    </div>
  );
}
