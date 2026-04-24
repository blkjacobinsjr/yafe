import Image from "next/image";
import { ProductStage } from "@/components/product-stage";
import { Reveal } from "@/components/reveal";
import { WaitlistForm } from "@/components/waitlist-form";
import styles from "./page.module.css";

export const runtime = "nodejs";

const stageFrames = [
  {
    src: "/images/yafe-stage-front.png",
    alt: "Front view of the Yafé 001 sunglasses.",
  },
  {
    src: "/images/yafe-stage-side-1.png",
    alt: "Three-quarter view of the Yafé 001 sunglasses.",
  },
  {
    src: "/images/yafe-stage-side-2.png",
    alt: "Side view of the Yafé 001 sunglasses.",
  },
];

const specs = [
  { label: "Frame", value: "Italian acetate, tortoise" },
  { label: "Lens", value: "Mineral glass, burnt olive" },
  { label: "Hardware", value: "Satin brass, recessed" },
  { label: "Made in", value: "Cadore and Tel Aviv" },
];

export default function Home() {
  return (
    <div className={styles.page} id="top">
      <header className={styles.header}>
        <nav className={styles.nav}>
          <div className={styles.navGroup}>
            <a className={styles.navLink} href="#product">
              Collection
            </a>
            <a className={styles.navLink} href="#story">
              Journal
            </a>
            <a className={styles.navLink} href="#waitlist">
              Atelier
            </a>
          </div>

          <a href="#top" className={styles.mark}>
            YAF<span className={styles.markAccent}>É</span>
          </a>

          <div className={`${styles.navGroup} ${styles.navGroupRight}`}>
            <span className={styles.navLink}>EN / עב</span>
            <a className={styles.navLink} href="#waitlist">
              Request Access <span aria-hidden="true">→</span>
            </a>
          </div>
        </nav>
      </header>

      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroImage}>
            <Image
              src="/images/yafe-hero-wide.png"
              alt="Two models wearing Yafé sunglasses."
              fill
              priority
              sizes="100vw"
              className={styles.heroCover}
            />
            <div className={styles.heroShade} />
            <div className={styles.heroOverlay}>
              <Reveal>
                <p className={styles.heroCaps}>Maison Yafé | Summer 2026</p>
              </Reveal>
              <Reveal delay={0.08}>
                <h1 className={styles.heroWordmark}>
                  yaf<span className={styles.heroAccent}>é</span>.
                </h1>
              </Reveal>
            </div>
          </div>

          <div className={styles.heroText}>
            <Reveal className={styles.heroLeadBlock}>
              <p className={styles.definition}>
                <span className={styles.definitionHead}>
                  yafé · <span className={styles.hebrew}>יָפֶה</span>
                </span>
                <span className={styles.definitionBody}>
                  beautiful; fair of form. A quiet Hebrew for that which the
                  beholder alone can name.
                </span>
              </p>
              <p className={styles.lede}>
                A first drop of seven hundred pairs, cut from Italian acetate
                and finished by hand in a small atelier outside Tel Aviv. We
                are opening a private list.
              </p>
              <div className={styles.metaRow}>
                <span>N° 001</span>
                <span>Burnt Olive | Tortoise</span>
                <span>€1,150</span>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <WaitlistForm
                formId="hero-waitlist"
                collection="yafe-01"
                source="hero"
                label="Request the list"
                submitLabel="Enter"
                pendingLabel="Entering"
                note="Seven hundred pairs. Delivery begins June 2026."
                className={styles.heroForm}
              />
            </Reveal>
          </div>
        </section>

        <section id="product" className={styles.section}>
          <div className={styles.sectionHead}>
            <Reveal>
              <h2 className={styles.sectionTitle}>The first pair.</h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className={styles.sectionMeta}>N° 001 | Burnt Olive</p>
            </Reveal>
          </div>

          <div className={styles.productGrid}>
            <Reveal>
              <ProductStage frames={stageFrames} />
            </Reveal>

            <div className={styles.productCopy}>
              <Reveal>
                <p className={styles.productEyebrow}>The Beholder</p>
              </Reveal>
              <Reveal delay={0.05}>
                <h3 className={styles.productTitle}>
                  Rectangular, in <em>burnt olive</em>.
                </h3>
              </Reveal>
              <Reveal delay={0.1}>
                <p className={styles.productSku}>Ref. Y·001 / Tortoise</p>
              </Reveal>
              <Reveal delay={0.15}>
                <p className={styles.paragraph}>
                  Cut from a single billet of Mazzucchelli acetate, tumbled
                  seventy-two hours, polished against calfskin until the
                  surface turns almost liquid.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <p className={styles.paragraph}>
                  Mineral lenses, hand-tinted in burnt olive, soften glare
                  without draining the scene of warmth. Satin brass hardware
                  sits recessed, so the line stays clean in profile.
                </p>
              </Reveal>
              <Reveal delay={0.25}>
                <dl className={styles.specGrid}>
                  {specs.map((spec) => (
                    <div key={spec.label}>
                      <dt className={styles.specTerm}>{spec.label}</dt>
                      <dd className={styles.specDefinition}>{spec.value}</dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
              <Reveal delay={0.3}>
                <div className={styles.priceRow}>
                  <div className={styles.price}>€1,150</div>
                  <div className={styles.priceNote}>
                    Including VAT. By appointment.
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section id="story" className={`${styles.section} ${styles.storySection}`}>
          <div className={styles.sectionHead}>
            <Reveal>
              <h2 className={styles.sectionTitle}>
                On <em>seeing</em>.
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className={styles.sectionMeta}>The House | A Letter</p>
            </Reveal>
          </div>

          <div className={styles.storyGrid}>
            <div className={styles.storyCopy}>
              <Reveal>
                <p className={styles.pullQuote}>
                  &ldquo;Beauty, when it comes, arrives already <span>translated</span>.
                  We are only the tongue it borrows for the afternoon.&rdquo;
                </p>
              </Reveal>
              <Reveal delay={0.06}>
                <p className={styles.quoteAttr}>from the House letters, no. III</p>
              </Reveal>
              <Reveal delay={0.12}>
                <p className={styles.storyParagraph}>
                  Yafé began with a disagreement about what makes an object
                  beautiful. The answer became a practice: make fewer things,
                  shape them properly, and let the beholder finish the
                  sentence.
                </p>
              </Reveal>
              <Reveal delay={0.18}>
                <p className={styles.storyParagraph}>
                  Quiet luxury should not explain itself too loudly. One pair a
                  season, small numbers, no clutter, no rush. Enough presence
                  for the second glance.
                </p>
              </Reveal>
              <Reveal delay={0.24}>
                <p className={styles.signature}>The House of Yafé</p>
              </Reveal>
            </div>

            <div className={styles.storyMedia}>
              <Reveal className={styles.storyPrimary}>
                <figure className={styles.storyCard}>
                  <Image
                    src="/images/yafe-house-box.jpg"
                    alt="The Yafé presentation box and pouch."
                    fill
                    sizes="(max-width: 900px) 100vw, 48vw"
                    className={styles.storyImage}
                  />
                </figure>
              </Reveal>
              <Reveal delay={0.06}>
                <figure className={styles.storyCardSmall}>
                  <Image
                    src="/images/yafe-house-olive.jpg"
                    alt="Olive Yafé packaging."
                    fill
                    sizes="(max-width: 900px) 100vw, 24vw"
                    className={styles.storyImage}
                  />
                </figure>
              </Reveal>
              <Reveal delay={0.12}>
                <figure className={styles.storyCardSmall}>
                  <Image
                    src="/images/yafe-house-burnt-olive.jpg"
                    alt="Burnt olive Yafé packaging."
                    fill
                    sizes="(max-width: 900px) 100vw, 24vw"
                    className={styles.storyImage}
                  />
                </figure>
              </Reveal>
            </div>
          </div>
        </section>

        <section id="waitlist" className={styles.closeSection}>
          <Reveal>
            <h2 className={styles.closeTitle}>
              Beauty <em>lies</em>
              <br />
              in the beholder.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className={styles.closeCopy}>
              Seven hundred pairs. Summer 2026. The list closes when it closes.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <WaitlistForm
              formId="footer-waitlist"
              collection="yafe-01"
              source="footer"
              label=""
              submitLabel="Request Access"
              pendingLabel="Entering"
              note="Private. No newsletters. One letter, when it is time."
              centered
              className={styles.footerForm}
            />
          </Reveal>
        </section>
      </main>

      <footer className={styles.footer}>
        <span>&copy; Maison Yaf&eacute;, 2026</span>
        <span>Tel Aviv | Cadore | Paris</span>
        <span>Instagram | Contact</span>
      </footer>
    </div>
  );
}
