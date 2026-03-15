import type { Metadata } from 'next';
import Link from 'next/link';
import { IconCheck, IconGlobe, IconMail } from '@/components/icons/SocialIcons';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Allies & Partners | Southern Sector Rising',
  description:
    'SSR draws power from 150+ allied organizations across environmental justice, climate action, food sovereignty, labor rights, and international advocacy.',
};

const STATS = [
  { number: '150+', label: 'Allied Organizations' },
  { number: '4',    label: 'Movement Sectors' },
  { number: '4',    label: 'Continents Represented' },
  { number: '6+',   label: 'Years of Coalition Building' },
];

const PARTNER_CATEGORIES = [
  {
    category: 'Environmental Justice',
    tagClass: 'tag--forest',
    desc: 'Organizations fighting environmental racism, pollution, and toxic dumping in BIPOC and frontline communities.',
    partners: [
      'EJ Partner Organization 1',
      'EJ Partner Organization 2',
      'EJ Partner Organization 3',
      'EJ Partner Organization 4',
    ],
  },
  {
    category: 'Climate Action',
    tagClass: 'tag--sky',
    desc: 'Climate advocacy groups connecting the climate crisis to racial and economic equity.',
    partners: [
      'Climate Action Partner 1',
      'Climate Action Partner 2',
      'Climate Action Partner 3',
      'Climate Action Partner 4',
    ],
  },
  {
    category: 'Food & Labor',
    tagClass: 'tag--gold',
    desc: 'Allies advancing food sovereignty, fair labor conditions, and worker protections.',
    partners: [
      'Food & Labor Partner 1',
      'Food & Labor Partner 2',
      'Food & Labor Partner 3',
      'Food & Labor Partner 4',
    ],
  },
  {
    category: 'International Partners',
    tagClass: 'tag--sky',
    desc: 'Global allies connecting SSR to the international environmental and climate justice movement.',
    partners: [
      'International Partner 1',
      'International Partner 2',
      'International Partner 3',
      'International Partner 4',
    ],
  },
  {
    category: 'Dallas / Local Partners',
    tagClass: 'tag--forest',
    desc: 'Dallas-area organizations rooted in Southern Sector communities and local advocacy.',
    partners: [
      'Local Partner 1',
      'Local Partner 2',
      'Local Partner 3',
      'Local Partner 4',
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
      "We've been proud to stand alongside SSR in the fight for clean air and water in Southern Dallas. Dr. Jackson's leadership reminds us that frontline communities aren't just victims — they are the movement's leaders.",
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
            coalition of aligned organizations — local, national, and international — who
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
                from labor unions to international climate delegations — our coalition reflects
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
              Our coalition spans five sectors of the justice movement. Each category represents
              a critical dimension of the world we&rsquo;re building together.
            </p>
          </div>

          <div className={styles.categoriesStack}>
            {PARTNER_CATEGORIES.map(({ category, tagClass, desc, partners }) => (
              <div key={category} className={styles.categoryBlock}>
                <div className={styles.categoryHeader}>
                  <span className={`tag ${tagClass}`}>{category}</span>
                  <p className={styles.categoryDesc}>{desc}</p>
                </div>
                <div className={styles.logosGrid}>
                  {partners.map((name) => (
                    <div key={name} className={styles.logoPlaceholder}>
                      {/* TODO: replace with <Image src={`/images/partners/${slug}.png`} fill alt={name} /> */}
                      <span className={styles.logoText}>Partner Logo</span>
                      <span className={styles.logoName}>{name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className={styles.partnerNote}>
            Partner logos and links are being updated. Full directory coming soon.
          </p>
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
                community, or a labor union — if you are committed to environmental, racial, and
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
