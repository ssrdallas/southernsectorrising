import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { IconGlobe, IconPin, IconCheck, IconMail } from '@/components/icons/SocialIcons';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Global Reach | Southern Sector Rising',
  description:
    'From Southern Dallas to international delegations, SSR represents frontline communities on the world stage through climate justice advocacy.',
};

const GEOGRAPHIC_LEVELS = [
  {
    level: 'Local',
    subtitle: 'Southern Dallas / Floral Farms',
    desc: 'Grounded in the communities we serve: Floral Farms, Shingle Mountain, Sandbranch, and the broader Southern Sector of Dallas.',
    tag: 'tag--forest',
    detail: 'Where we live, organize, and fight',
  },
  {
    level: 'Regional',
    subtitle: 'Texas & Southwest',
    desc: 'Building coalitions across Texas and the Southwest to address environmental racism, water access, and labor justice at scale.',
    tag: 'tag--sky',
    detail: 'Statewide coalition partner',
  },
  {
    level: 'National',
    subtitle: 'US Environmental Justice Network',
    desc: 'Connected to the national EJ movement, partnering with frontline organizations across the country to demand federal policy change.',
    tag: 'tag--gold',
    detail: '150+ national allies',
  },
  {
    level: 'International',
    subtitle: 'Kenya, Rome & Global Allies',
    desc: 'Dr. Marsha Jackson has represented SSR and the Southern Sector on international delegations, bringing our community\'s story to the world.',
    tag: 'tag--forest',
    detail: 'UN-affiliated delegations',
  },
];

const DELEGATIONS = [
  {
    country: 'Kenya',
    badge: 'Africa',
    tagClass: 'tag--forest',
    title: 'Kenya Climate Justice Delegation',
    desc: 'Dr. Marsha Jackson joined a delegation of environmental justice leaders traveling to Kenya for a UN-affiliated climate justice convening. The delegation centered the voices of frontline, BIPOC, and Global South communities most impacted by the climate crisis. These communities contribute the least to carbon emissions but suffer the most.',
    highlights: [
      'UN-affiliated climate justice convening',
      'Solidarity with Global South frontline communities',
      'Cross-continental environmental racism dialogue',
      'Building international EJ advocacy networks',
    ],
    img: '/images/global/delegation-kenya.jpg',
    imgAlt: 'Taproot Earth climate justice convening: Kenya delegation',
  },
  {
    country: 'Rome, Italy',
    badge: 'Europe',
    tagClass: 'tag--sky',
    title: 'Rome International Delegation',
    desc: 'SSR joined an international gathering in Rome, Italy, connecting global environmental justice movements and amplifying the voices of communities in the Global South and in American cities like Southern Dallas.',
    highlights: [
      'International environmental policy discussions',
      'Cross-movement relationship building',
      'Amplifying Southern Dallas on the world stage',
      'Faith and justice coalitions',
    ],
    img: '/images/global/delegation-rome.jpg',
    imgAlt: 'SSR delegation gathering: Rome, Italy',
  },
];

const GLOBAL_PARTNERS = [
  { name: 'Global South Climate Coalition', region: 'International' },
  { name: 'African Environmental Justice Alliance', region: 'Africa' },
  { name: 'European Climate Justice Network', region: 'Europe' },
  { name: 'UN Climate Justice Working Group', region: 'United Nations' },
  { name: 'Indigenous Climate Action', region: 'Global' },
  { name: 'International Pesticide Network', region: 'Global' },
];

const LOCATION_BADGES = [
  { place: 'Nairobi, Kenya', flag: 'KE' },
  { place: 'Rome, Italy', flag: 'IT' },
  { place: 'More coming...', flag: '🌐' },
];

export default function GlobalReachPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <div className={styles.heroOverlay} />
          {/* TODO: replace with <Image src="/images/global/hero-globe.jpg" fill alt="" /> */}
        </div>
        <div className={`${styles.heroContent} container`}>
          <p className="eyebrow">Beyond Borders</p>
          <h1 className={styles.heroTitle}>
            Global Reach
          </h1>
          <p className={styles.heroSubtitle}>From Dallas to the World</p>
          <p className={styles.heroDesc}>
            Dr. Marsha Jackson and Southern Sector Rising carry the stories of frontline
            communities in Southern Dallas to international delegations, UN-affiliated convenings,
            and the global environmental justice stage.
          </p>
          <div className={styles.heroMeta}>
            <span className={styles.heroMetaItem}>
              <IconGlobe size={16} />
              4 Continents Reached
            </span>
            <span className={styles.heroMetaItem}>
              <IconPin size={16} />
              Southern Dallas — Our Home Base
            </span>
          </div>
        </div>
      </section>

      {/* ── Geographic Scale ── */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">Our Reach</p>
            <h2 className="section-title">Four Levels of Impact</h2>
            <p className="section-desc">
              Southern Sector Rising operates simultaneously at every scale. From our neighborhood
              blocks to the global stage, we understand that justice at any level requires justice at all levels.
            </p>
          </div>
          <div className={styles.levelsGrid}>
            {GEOGRAPHIC_LEVELS.map(({ level, subtitle, desc, tag, detail }, i) => (
              <div key={level} className={styles.levelCard}>
                <div className={styles.levelNumber}>{String(i + 1).padStart(2, '0')}</div>
                <span className={`tag ${tag}`}>{level}</span>
                <h3 className={styles.levelTitle}>{subtitle}</h3>
                <p className={styles.levelDesc}>{desc}</p>
                <p className={styles.levelDetail}>
                  <IconCheck size={14} />
                  {detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── International Delegations ── */}
      <section className="section section--sand">
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">International Delegations</p>
            <h2 className="section-title">Dr. Marsha Jackson on the World Stage</h2>
            <p className="section-desc">
              When our community&rsquo;s story travels internationally, it builds power and creates solidarity.
            </p>
          </div>

          <blockquote className={styles.globalQuote}>
            <p>
              &ldquo;Our community&rsquo;s fight is connected to the global fight for
              environmental and climate justice.&rdquo;
            </p>
            <cite>— Dr. Marsha Jackson, Founder &amp; Executive Director, Southern Sector Rising</cite>
          </blockquote>

          <div className={styles.delegationsGrid}>
            {DELEGATIONS.map(({ country, badge, tagClass, title, desc, highlights, img, imgAlt }) => (
              <article key={country} className={`card ${styles.delegationCard}`}>
                <div className={styles.delegationImg}>
                  <Image src={img} fill alt={imgAlt} style={{ objectFit: 'cover' }} />
                  <span className={`tag ${tagClass} ${styles.delegationBadge}`}>{badge}</span>
                </div>
                <div className={styles.delegationBody}>
                  <div className={styles.delegationLocation}>
                    <IconPin size={16} />
                    <span>{country}</span>
                  </div>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                  <ul className={styles.delegationHighlights}>
                    {highlights.map((h) => (
                      <li key={h}>
                        <IconCheck size={14} />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Global Partners ── */}
      <section className="section section--cream">
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">Global Partners</p>
            <h2 className="section-title">International Allies</h2>
            <p className="section-desc">
              SSR builds bridges with organizations across the globe who share our commitment
              to frontline communities, environmental justice, and climate equity.
            </p>
          </div>
          <div className={styles.partnersGrid}>
            {GLOBAL_PARTNERS.map(({ name, region }) => (
              <div key={name} className={styles.partnerCard}>
                <div className={styles.partnerLogo}>
                  {/* TODO: replace with <Image src={`/images/partners/${slug}.png`} fill alt={name} /> */}
                  <IconGlobe size={28} />
                </div>
                <div className={styles.partnerInfo}>
                  <span className="tag tag--sky">{region}</span>
                  <p className={styles.partnerName}>{name}</p>
                </div>
              </div>
            ))}
          </div>
          <p className={styles.partnersNote}>
            Partner list is representative. Full partner directory coming soon.
          </p>
        </div>
      </section>

      {/* ── Why Global Work Matters ── */}
      <section className="section section--forest">
        <div className="container">
          <div className={styles.whyGlobal}>
            <div className={styles.whyGlobalText}>
              <p className="eyebrow">Why It Matters</p>
              <h2 style={{ color: 'var(--color-white)' }}>Local Roots, Global Stakes</h2>
              <p>
                The illegal dumping of a shingle mountain in Southern Dallas is not an isolated
                incident. This is one of the many stories indicating a global pattern of environmental racism in which
                polluting industries locate their worst practices in communities with the least
                political power. These communities are disproportionately Black, Brown, Indigenous,
                and poor.
              </p>
              <p>
                That same pattern plays out in communities across Latin America, Africa, and
                Southeast Asia. The chemicals that flow into Floral Farms are part of the same
                system that dumps industrial waste in communities in Kenya or drives climate
                displacement in the Pacific Islands.
              </p>
              <p>
                When Dr. Marsha Jackson stands in Rome or Nairobi and tells the story of
                Southern Dallas, she is saying: <em>your fight and our fight are the same fight.</em>
                Solidarity across borders is how movements win.
              </p>
            </div>
            <div className={styles.whyGlobalAside}>
              <div className={styles.whyGlobalStat}>
                <span className={styles.whyNum}>4</span>
                <span className={styles.whyLabel}>Continents where SSR has built relationships</span>
              </div>
              <div className={styles.whyGlobalStat}>
                <span className={styles.whyNum}>2+</span>
                <span className={styles.whyLabel}>International delegations attended</span>
              </div>
              <div className={styles.whyGlobalStat}>
                <span className={styles.whyNum}>150+</span>
                <span className={styles.whyLabel}>Allied organizations globally</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Location Badges ── */}
      <section className="section section--sand">
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">Where We&rsquo;ve Been</p>
            <h2 className="section-title">SSR on the Map</h2>
          </div>
          <div className={styles.locationBadges}>
            {LOCATION_BADGES.map(({ place, flag }) => (
              <div key={place} className={styles.locationBadge}>
                <span className={styles.locationFlag}>{flag}</span>
                <span className={styles.locationName}>
                  <IconPin size={14} />
                  {place}
                </span>
              </div>
            ))}
          </div>
          <p className={styles.locationNote}>
            And always home: <strong>Southern Dallas, Texas, USA</strong>
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section">
        <div className="container">
          <div className={styles.ctaBlock}>
            <div className={styles.ctaText}>
              <p className="eyebrow">Get Involved</p>
              <h2>Connect With Our Work</h2>
              <p className="lead">
                Whether you&rsquo;re a community member, researcher, journalist, or
                international partner, we want to hear from you.
              </p>
            </div>
            <div className={styles.ctaButtons}>
              <Link href="/our-work" className="btn btn--primary btn--lg">
                Learn About Our Local Work
              </Link>
              <Link href="/contact" className="btn btn--outline btn--lg">
                <IconMail size={18} />
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
