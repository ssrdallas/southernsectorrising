import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { IconCheck, IconGlobe, IconMail } from '@/components/icons/SocialIcons';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Allies & Partners | Southern Sector Rising',
  description:
    'SSR draws power from over 150 allied organizations across environmental justice, climate action, food sovereignty, labor rights, and international advocacy.',
};

const STATS = [
  { number: '150+', label: 'Allied Organizations' },
  { number: '4',    label: 'Movement Sectors' },
  { number: '4',    label: 'Continents Represented' },
  { number: '6+',   label: 'Years of Coalition Building' },
];

const FUNDERS = [
  { name: 'Tides Foundation',                src: '/images/partners/tides.jpg' },
  { name: 'Patagonia',                        src: '/images/partners/patagonia.jpg' },
  { name: "Women's Foundation of the South", src: '/images/partners/womens-foundation-south.png' },
  { name: 'Black Belt Community Foundation', src: '/images/partners/black-belt-community-foundation.png' },
  { name: 'Kataly Foundation',               src: '/images/partners/kataly-foundation.png' },
];

type Partner = { name: string; src: string | null };

const PARTNER_CATEGORIES: { category: string; tagClass: string; desc: string; partners: Partner[] }[] = [
  {
    category: 'Environmental Justice',
    tagClass: 'tag--forest',
    desc: 'Organizations fighting environmental racism, pollution, and toxic dumping in BIPOC and frontline communities.',
    partners: [
      { name: 'Society of Native Nations',         src: '/images/partners/society-native-nations.png' },
      { name: 'Carrizo Comecrudo Tribe of Texas',  src: '/images/partners/carrizo-comecrudo-tribe.png' },
      { name: 'Downwinders at Risk',               src: '/images/partners/downwinders.png' },
    ],
  },
  {
    category: 'Climate Action',
    tagClass: 'tag--sky',
    desc: 'Climate advocacy groups connecting the climate crisis to racial and economic equity.',
    partners: [
      { name: 'Gulf South for a Green New Deal', src: '/images/partners/gulf-south-green-new-deal.png' },
      { name: 'Sunrise Movement',                src: '/images/partners/sunrise.png' },
      { name: 'New Economy Coalition',           src: '/images/partners/new-economy-coalition.png' },
    ],
  },
  {
    category: 'Movement Partners',
    tagClass: 'tag--gold',
    desc: 'National and regional organizations advancing racial justice, Black liberation, and community power.',
    partners: [
      { name: 'Movement for Black Lives (M4BL)',             src: '/images/partners/m4bl.jpg' },
      { name: 'The Black Hive',                             src: '/images/partners/the-black-hive.jpg' },
      { name: 'Black Voters Matter',                        src: '/images/partners/black-voters-matter.png' },
      { name: 'Southern Black Girls & Women\'s Consortium', src: '/images/partners/southern-black-girls.png' },
    ],
  },
  {
    category: 'Dallas / Local Partners',
    tagClass: 'tag--forest',
    desc: 'Dallas-area organizations rooted in Southern Sector communities and local advocacy.',
    partners: [
      { name: 'Dallas Housing Coalition',       src: '/images/partners/dallas-housing-coalition.png' },
      { name: 'Texas Organizing Project (TOP)', src: '/images/partners/texas-organizing-project.png' },
      { name: 'Sandbranch D&WSC',               src: '/images/partners/sandbranch-dwsc.png' },
      { name: 'Friendship West Baptist Church', src: '/images/partners/friendshipwest.png' },
    ],
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Southern Sector Rising exemplifies the kind of intersectional, community-led organizing that the environmental justice movement needs. Their work connects the dots between local harms and global systems of oppression.",
    org: 'Environmental Justice Partner Organization',
    role: 'Executive Director',
    tagClass: 'tag--forest',
  },
  {
    quote:
      "We've been proud to stand alongside SSR in the fight for clean air and water in Southern Dallas. Dr. Jackson's leadership reminds us that frontline communities are more than helpless victims. Oftentimes, community members serve as leaders of the movement's voice.",
    org: 'National Climate Advocacy Alliance',
    role: 'Policy Director',
    tagClass: 'tag--sky',
  },
];

const COALITION_VALUES = [
  'Centering frontline and BIPOC communities',
  'Jemez Principles of Democratic Organizing',
  'Intersectional, multi-issue approach',
  'Cross-sector and cross-border solidarity',
  'Power with, not power over',
];

export default function AlliesPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <div className={styles.heroOverlay} />
          {/* TODO: replace with <Image src="/images/allies/hero-coalition.jpg" fill alt="" /> */}
        </div>
        <div className={`${styles.heroContent} container`}>
          <p className="eyebrow">Coalition &amp; Partners</p>
          <h1 className={styles.heroTitle}>
            Allies &amp; Partners
          </h1>
          <p className={styles.heroSubtitle}>150+ Organizations. One Movement.</p>
          <p className={styles.heroDesc}>
            Southern Sector Rising has never fought alone. Our strength comes from a deep
            coalition of aligned organizations at all levels who
            believe that justice is indivisible.
          </p>
          <div className={styles.heroCta}>
            <a href="#categories" className="btn btn--gold btn--lg">View All Partners</a>
            <a href="#join" className="btn btn--outline-white btn--lg">Join the Coalition</a>
          </div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <div className={styles.statsBar} aria-label="Coalition statistics">
        <div className="container">
          <div className={styles.statsGrid}>
            {STATS.map(({ number, label }) => (
              <div key={label} className={styles.stat}>
                <span className={styles.statNum}>{number}</span>
                <span className={styles.statLabel}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Coalition Overview ── */}
      <section className="section section--cream">
        <div className="container">
          <div className={styles.overviewGrid}>
            <div className={styles.overviewText}>
              <p className="eyebrow">How We Organize</p>
              <h2>Power Comes From<br />Deep Coalitions</h2>
              <p className="lead">
                We don&rsquo;t work alone. The power behind Southern Sector Rising
                comes from the relationships we&rsquo;ve built with over 150 organizations
                who share our values and our vision.
              </p>
              <p>
                From Dallas neighborhood groups to national environmental justice networks,
                from labor unions to international climate delegations, our coalition reflects
                the breadth of the fight for a just, equitable, and livable world.
              </p>
              <p>
                We operate on the <strong>Jemez Principles of Democratic Organizing Justice</strong>,
                which means every partner relationship is grounded in respect, transparency,
                and a commitment to centering the most impacted communities.
              </p>
            </div>
            <div className={styles.coalitionValues}>
              <p className={styles.valuesHeading}>Our Coalition Is Built On:</p>
              <ul className={styles.valuesList}>
                {COALITION_VALUES.map((v) => (
                  <li key={v}>
                    <IconCheck size={16} />
                    <span>{v}</span>
                  </li>
                ))}
              </ul>
              <div className={styles.globeGraphic} aria-hidden="true">
                <IconGlobe size={64} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Partner Categories ── */}
      <section id="categories" className="section section--sand">
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">Our Partners</p>
            <h2 className="section-title">Allies Across Movements</h2>
            <p className="section-desc">
              Our coalition spans the environmental justice, climate action, and movement-building
              sectors. Each relationship is grounded in the Jemez Principles at its core.
            </p>
          </div>

          {/* Funders & Supporters */}
          <div className={styles.fundersStrip}>
            <p className={styles.fundersLabel}>Funders &amp; Supporters</p>
            <div className={styles.fundersGrid}>
              {FUNDERS.map(({ name, src }) => (
                <div key={name} className={styles.funderLogo}>
                  <Image src={src} fill alt={name} style={{ objectFit: 'contain' }} />
                </div>
              ))}
            </div>
          </div>

          <div className={styles.categoriesStack}>
            {PARTNER_CATEGORIES.map(({ category, tagClass, desc, partners }) => (
              <div key={category} className={styles.categoryBlock}>
                <div className={styles.categoryHeader}>
                  <span className={`tag ${tagClass}`}>{category}</span>
                  <p className={styles.categoryDesc}>{desc}</p>
                </div>
                <div className={styles.logosGrid}>
                  {partners.map(({ name, src }) =>
                    src ? (
                      <div key={name} className={styles.logoItem}>
                        <Image src={src} fill alt={name} style={{ objectFit: 'contain', padding: '8px' }} />
                      </div>
                    ) : (
                      <div key={name} className={styles.logoItemText}>
                        <span className={styles.logoName}>{name}</span>
                      </div>
                    )
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Join the Coalition ── */}
      <section id="join" className="section section--forest">
        <div className="container">
          <div className={styles.joinGrid}>
            <div className={styles.joinText}>
              <p className="eyebrow">Grow the Coalition</p>
              <h2 style={{ color: 'var(--color-white)' }}>Join Our Coalition</h2>
              <p style={{ color: 'rgba(255,255,255,0.8)' }}>
                Are you an organization aligned with our mission? We believe in building power
                together. Whether you&rsquo;re a grassroots group, a national nonprofit, a faith
                community, or a labor union, if you are committed to environmental, racial, and
                economic justice, we want to build with you.
              </p>
              <p style={{ color: 'rgba(255,255,255,0.8)' }}>
                Reaching out is the first step. Tell us who you are, what you&rsquo;re working on,
                and how you&rsquo;d like to connect.
              </p>
            </div>
            <div className={styles.joinActions}>
              <div className={styles.joinCard}>
                <h3>Ready to connect?</h3>
                <p>
                  Send us a message and our team will follow up within a week.
                </p>
                <Link href="/contact" className="btn btn--gold btn--lg">
                  <IconMail size={18} />
                  Contact Our Team
                </Link>
                <div className={styles.joinEmail}>
                  <span>Or email us directly:</span>
                  <a
                    href="mailto:info@southernsectorrising.org"
                    className={styles.emailLink}
                  >
                    info@southernsectorrising.org
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="section section--cream">
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">From Our Allies</p>
            <h2 className="section-title">What Partners Say</h2>
          </div>
          <div className={styles.testimonialsGrid}>
            {TESTIMONIALS.map(({ quote, org, role, tagClass }) => (
              <blockquote key={org} className={styles.testimonial}>
                <p className={styles.testimonialQuote}>
                  &ldquo;{quote}&rdquo;
                </p>
                <footer className={styles.testimonialFooter}>
                  <div className={styles.testimonialOrg}>
                    <span className={`tag ${tagClass}`}>Allied Org</span>
                    <span className={styles.testimonialOrgName}>{org}</span>
                    <span className={styles.testimonialRole}>{role}</span>
                  </div>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="section">
        <div className="container">
          <div className={styles.bottomCta}>
            <h2>One Movement. Many Fronts.</h2>
            <p className="lead">
              Every partner in our coalition brings unique expertise, community relationships,
              and power. Together, we are unstoppable.
            </p>
            <div className={styles.bottomCtaButtons}>
              <Link href="/global-reach" className="btn btn--primary btn--lg">
                See Our Global Work
              </Link>
              <Link href="/our-work" className="btn btn--outline btn--lg">
                Explore Our Programs
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
