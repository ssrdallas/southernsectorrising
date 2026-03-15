import type { Metadata } from 'next';
import Link from 'next/link';
import { IconPlay, IconMail, IconPhone } from '@/components/icons/SocialIcons';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Media | Southern Sector Rising',
  description:
    'Press coverage, documentary film, and media resources for Southern Sector Rising and Dr. Marsha Jackson\'s environmental justice work in Southern Dallas.',
};

const PRESS_ARTICLES = [
  {
    title: 'In Texas, Residents Are Dying To Breathe Clean Air',
    outlet: 'National Coverage',
    outletTag: 'tag--sky',
    type: 'Investigative',
    desc: 'National investigative reporting on the health impacts facing residents in communities like Southern Dallas — documenting the direct human cost of living near industrial pollution and illegal dumping sites.',
    href: '#',
  },
  {
    title: 'Environmental Justice in South Dallas',
    outlet: 'KERA / Dallas PBS',
    outletTag: 'tag--forest',
    type: 'Local TV',
    desc: 'Dallas Public Broadcasting\'s deep-dive into the environmental justice crisis in the Southern Sector, featuring Dr. Marsha Jackson and the community fight against Shingle Mountain.',
    href: '#',
  },
  {
    title: 'Shingle Mountain Removed After Years of Community Activism',
    outlet: 'Victory Coverage',
    outletTag: 'tag--gold',
    type: 'News',
    desc: 'Coverage of the landmark victory: the removal of the illegally-dumped shingle mountain that sat next to the Floral Farms neighborhood for years — a win driven entirely by community organizing.',
    href: '#',
  },
  {
    title: 'Dallas Activist Named Sierra Club Environmentalist of the Year',
    outlet: 'Dallas Media',
    outletTag: 'tag--forest',
    type: 'Award',
    desc: 'Recognition of Dr. Marsha Jackson\'s 2019 Sierra Club Lone Star Chapter Environmentalist of the Year award — one of several honors for her leadership in the Southern Dallas environmental justice movement.',
    href: '#',
  },
  {
    title: 'BET Documentary Shines Light on South Dallas Environmental Crisis',
    outlet: 'Entertainment & News',
    outletTag: 'tag--sky',
    type: 'Feature',
    desc: 'Coverage of BET\'s "Disrupt & Dismantle with Soledad O\'Brien" documentary feature on Shingle Mountain and Dr. Jackson\'s three-year battle — bringing national attention to environmental racism in Dallas.',
    href: '#',
  },
  {
    title: 'Marsha Jackson Day Declared by Dallas County',
    outlet: 'Dallas County',
    outletTag: 'tag--gold',
    type: 'Honor',
    desc: 'Dallas County officially declared a "Marsha Jackson Day" in recognition of Dr. Jackson\'s extraordinary contributions to environmental justice and the health and safety of Southern Dallas communities.',
    href: '#',
  },
];

export default function MediaPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <div className={styles.heroOverlay} />
          {/* TODO: replace with <Image src="/images/media/hero-media.jpg" fill alt="" /> */}
        </div>
        <div className={`${styles.heroContent} container`}>
          <p className="eyebrow">Press &amp; Media</p>
          <h1 className={styles.heroTitle}>Media</h1>
          <p className={styles.heroSubtitle}>Our Story, Told</p>
          <p className={styles.heroDesc}>
            From national documentaries to local investigative reporting, the story of
            Southern Sector Rising and Dr. Marsha Jackson has been covered by journalists,
            filmmakers, and broadcasters across the country.
          </p>
          <div className={styles.heroCta}>
            <a href="#featured" className="btn btn--gold btn--lg">
              <IconPlay size={18} />
              Featured Films
            </a>
            <a href="#press" className="btn btn--outline-white btn--lg">Press Coverage</a>
          </div>
        </div>
      </section>

      {/* ── Featured Media ── */}
      <section id="featured" className="section section--cream">
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">Film &amp; Documentary</p>
            <h2 className="section-title">Watch Our Story</h2>
            <p className="section-desc">
              The fight against Shingle Mountain captured the attention of national documentary
              filmmakers and broadcast networks.
            </p>
          </div>

          {/* BET — Primary Featured Card */}
          <div className={styles.featuredCard}>
            <div className={styles.featuredMedia}>
              {/* TODO: replace with <Image src="/images/media/bet-documentary.jpg" fill alt="BET Disrupt & Dismantle" /> */}
              <div className={`img-placeholder ${styles.featuredImgPlaceholder}`}>
                BET Documentary — Disrupt &amp; Dismantle
              </div>
              <div className={styles.featuredOverlay}>
                <button className={styles.playBtn} aria-label="Play BET documentary">
                  <IconPlay size={32} />
                </button>
              </div>
              <span className={`tag tag--sky ${styles.sourceBadge}`}>BET</span>
            </div>
            <div className={styles.featuredBody}>
              <div className={styles.featuredMeta}>
                <span className="tag tag--sky">Documentary</span>
                <span className={styles.featuredNetwork}>BET Network</span>
              </div>
              <h2 className={styles.featuredTitle}>
                Disrupt &amp; Dismantle with Soledad O&rsquo;Brien
              </h2>
              <p className="lead">
                National documentary featuring Dr. Marsha Jackson&rsquo;s three-year fight
                against Shingle Mountain — a powerful portrait of community-led environmental
                justice activism in Southern Dallas.
              </p>
              <p>
                Hosted by award-winning journalist Soledad O&rsquo;Brien, the BET documentary
                brought the story of Floral Farms and the illegal shingle dump to a national
                audience — exposing the environmental racism that has long plagued Southern
                Dallas and celebrating the community victory that ended it.
              </p>
              <div className={styles.featuredActions}>
                <a
                  href="https://www.bet.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--primary"
                >
                  <IconPlay size={16} />
                  Watch on BET
                </a>
                <Link href="/our-work#floral-farms" className="link-arrow">
                  Read about the Shingle Mountain victory
                </Link>
              </div>
            </div>
          </div>

          {/* Marsha Moves Mountains */}
          <div className={styles.secondaryFilmsGrid}>
            <div className={`card ${styles.filmCard}`}>
              <div className={styles.filmCardMedia}>
                {/* TODO: replace with <Image src="/images/media/marsha-moves-mountains.jpg" fill alt="Marsha Moves Mountains documentary" /> */}
                <div className={`img-placeholder ${styles.filmImgPlaceholder}`}>
                  Marsha Moves Mountains — Documentary
                </div>
                <div className={styles.filmOverlay}>
                  <button className={styles.playBtnSm} aria-label="Play Marsha Moves Mountains">
                    <IconPlay size={22} />
                  </button>
                </div>
                <span className={`tag tag--gold ${styles.filmSourceBadge}`}>Documentary</span>
              </div>
              <div className={styles.filmCardBody}>
                <h3>Marsha Moves Mountains</h3>
                <p>
                  A documentary portrait of Dr. Marsha Jackson and the community movement
                  that transformed a toxic dumping site into a symbol of grassroots power
                  and environmental victory.
                </p>
                <a href="#" className="link-arrow">Watch film</a>
              </div>
            </div>

            <div className={`card ${styles.filmCard}`}>
              <div className={styles.filmCardMedia}>
                {/* TODO: replace with <Image src="/images/media/kera-documentary.jpg" fill alt="KERA Environmental Justice documentary" /> */}
                <div className={`img-placeholder ${styles.filmImgPlaceholder}`}>
                  KERA — Environmental Justice in South Dallas
                </div>
                <div className={styles.filmOverlay}>
                  <button className={styles.playBtnSm} aria-label="Play KERA documentary">
                    <IconPlay size={22} />
                  </button>
                </div>
                <span className={`tag tag--forest ${styles.filmSourceBadge}`}>KERA / PBS</span>
              </div>
              <div className={styles.filmCardBody}>
                <h3>Environmental Justice in South Dallas</h3>
                <p>
                  KERA (Dallas PBS) documentary examining the environmental justice crisis in
                  the Southern Sector — from Shingle Mountain to Sandbranch, featuring
                  community voices and Dr. Jackson&rsquo;s leadership.
                </p>
                <a href="https://www.kera.org" target="_blank" rel="noopener noreferrer" className="link-arrow">
                  Watch on KERA
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Press Coverage ── */}
      <section id="press" className="section section--sand">
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">In the News</p>
            <h2 className="section-title">Press Coverage</h2>
            <p className="section-desc">
              From investigative reporting to victory announcements — here is how the press
              has covered Southern Sector Rising and the fight for environmental justice
              in Southern Dallas.
            </p>
          </div>
          <div className={styles.pressGrid}>
            {PRESS_ARTICLES.map(({ title, outlet, outletTag, type, desc }) => (
              <article key={title} className={`card ${styles.pressCard}`}>
                <div className={styles.pressCardHeader}>
                  <span className={`tag ${outletTag}`}>{outlet}</span>
                  <span className={styles.pressType}>{type}</span>
                </div>
                <h3 className={styles.pressTitle}>{title}</h3>
                <p className={styles.pressDesc}>{desc}</p>
                <a href="#" className="link-arrow">Read article</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Press Contact ── */}
      <section className="section section--forest">
        <div className="container">
          <div className={styles.pressContact}>
            <div className={styles.pressContactText}>
              <p className="eyebrow">Media Inquiries</p>
              <h2 style={{ color: 'var(--color-white)' }}>Press Contact</h2>
              <p style={{ color: 'rgba(255,255,255,0.8)' }}>
                Journalists, documentary filmmakers, and media producers — we welcome your
                inquiries. Dr. Marsha Jackson is available for interviews, commentary, and
                on-camera participation.
              </p>
              <p style={{ color: 'rgba(255,255,255,0.8)' }}>
                Please reach out via email or phone to arrange media coverage or request
                press materials.
              </p>
            </div>
            <div className={styles.pressContactCard}>
              <h3>Get in Touch</h3>
              <div className={styles.contactItem}>
                <IconMail size={18} />
                <a href="mailto:media@southernsectorrising.org" className={styles.contactLink}>
                  media@southernsectorrising.org
                </a>
              </div>
              <div className={styles.contactItem}>
                <IconPhone size={18} />
                <a href="tel:+12145550000" className={styles.contactLink}>
                  (214) 555-0000
                </a>
              </div>
              <div className={styles.pressKitCta}>
                <p>Download our press kit for background, bio, and high-resolution photos.</p>
                <Link href="/contact" className="btn btn--gold">
                  Request Press Kit
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="section section--cream">
        <div className="container">
          <div className={styles.bottomCta}>
            <div className={styles.bottomCtaText}>
              <p className="eyebrow">Tell the Story</p>
              <h2>Help Amplify the Movement</h2>
              <p>
                Share our story, link to our media, and help us reach more people who need
                to hear about environmental justice in Southern Dallas.
              </p>
            </div>
            <div className={styles.bottomCtaButtons}>
              <Link href="/contact" className="btn btn--primary btn--lg">
                <IconMail size={18} />
                Contact for Media
              </Link>
              <Link href="/our-work" className="btn btn--outline btn--lg">
                Learn About Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
