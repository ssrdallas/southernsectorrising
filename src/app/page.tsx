import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { IconArrowDown } from '@/components/icons/SocialIcons';
import ProjectSlideshow from '@/components/sections/ProjectSlideshow';
import styles from './page.module.css';

const SANDBRANCH_IMAGES = [
].map(name => ({ src: `/images/projects/sandbranch/${name}.jpg`, alt: `Sandbranch community — ${name}` }));

export const metadata: Metadata = {
  title: 'Southern Sector Rising | Local Roots. Global Impact.',
};

const STATS = [
  { number: '150+', label: 'Allied Organizations' },
  { number: '6',    label: 'Years of Impact' },
  { number: '4',    label: 'Continents Reached' },
  { number: '1',    label: 'Mountain Moved' },
];

const PILLARS = [
  { title: 'Environmental Justice', desc: 'Fighting racist zoning, illegal dumping, and industrial pollution in BIPOC communities.', tag: 'tag--forest' },
  { title: 'Climate Resilience',    desc: 'Building community capacity to adapt and thrive amid climate change.',                   tag: 'tag--sky'    },
  { title: 'Food Sovereignty',      desc: 'Ensuring communities control their food systems and access to healthy food.',            tag: 'tag--gold'   },
  { title: 'Labor & Economic',      desc: 'Advocating for fair wages, safe conditions, and opportunity for all workers.',          tag: 'tag--forest' },
  { title: 'Community HUBs',        desc: 'Creating spaces for organizing, education, mutual aid, and connection.',                tag: 'tag--sky'    },
];

const PROJECTS = [
  {
    title:    'The Park for Floral Farms',
    tag:      'Environmental Justice',
    tagClass: 'tag--forest',
    desc:     "After winning the fight to remove Shingle Mountain, we're transforming the site into a public park.",
    href:     '/our-work#floral-farms',
    videoId:  'AnPePP0FLpM',
  },
  {
    title:    'Sandbranch Water Project',
    tag:      'Clean Water Access',
    tagClass: 'tag--sky',
    desc:     "Delivering clean water to Sandbranch, an 87% Black freedmen's town still lacking proper water infrastructure.",
    href:     '/our-work#sandbranch',
    videoId:  undefined,
    slideshow: true,
  },
  {
    title:    'Environmental Justice Tours',
    tag:      'Education',
    tagClass: 'tag--gold',
    desc:     'Educational tours highlighting Dallas communities impacted by racist zoning and environmental hazards.',
    href:     '/our-work#ej-tours',
    videoId:  'xi025eH5DMU',
  },
];

export default function HomePage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <div className={styles.heroOverlay} />
          {/* TODO: replace with <Image src="/images/hero/hero-main.jpg" fill alt="" /> once photos arrive */}
        </div>
        <div className={`${styles.heroContent} container`}>
          <p className="eyebrow">Environmental Justice Since 2019</p>
          <h1 className={styles.heroTitle}>
            From One Community&rsquo;s Fight<br />
            <span className={styles.heroHighlight}>To a Global Movement</span>
          </h1>
          <p className={styles.heroDesc}>
            We center the perspectives of frontline communities by combating environmental
            injustices across Dallas and beyond.
          </p>
          <div className={styles.heroCta}>
            <Link href="/our-work" className="btn btn--gold btn--lg">Explore Our Work</Link>
            <Link href="/get-involved#donate" className="btn btn--outline-white btn--lg">Support the Movement</Link>
          </div>
        </div>
        <div className={styles.scrollHint} aria-hidden="true">
          <span>Scroll to learn more</span>
          <IconArrowDown size={20} />
        </div>
      </section>

      <section className={styles.statsBar} aria-label="Key statistics">
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
      </section>

      <section className="section section--cream">
        <div className="container">
          <div className={styles.aboutGrid}>
            <div className={styles.aboutText}>
              <p className="eyebrow">Our Story</p>
              <h2>Born from Injustice.<br />Built for Justice.</h2>
              <p className="lead">
                Southern Sector Rising emerged in 2019 when a mountain of toxic shingles was
                illegally dumped next to a Black neighborhood in South Dallas.
                We organized. We fought. We won.
              </p>
              <p>
                What started as a battle against Shingle Mountain has grown into a network of{' '}
            <strong>150+ allies</strong> across Dallas, Texas, the nation, and the world, as we opering on the{' '}
                <strong>Jemez Principles of Democratic Organizing Justice</strong>.
              </p>
              <Link href="/about" className="link-arrow" style={{ marginTop: '1.5rem', display: 'inline-flex' }}>
                Read our full story
              </Link>
            </div>
            <div className={styles.founderCard}>
              <div className={styles.founderImg}>
                <Image
                  src="/images/team/marsha-jackson.jpeg"
                  fill
                  alt="Dr. Marsha Jackson, Founder & Executive Director"
                  style={{ objectFit: 'cover', objectPosition: 'top' }}
                />
              </div>
              <div className={styles.founderInfo}>
                <h3>Dr. Marsha Jackson</h3>
                <p className={styles.founderTitle}>Founder &amp; Executive Director</p>
                <ul className={styles.accolades}>
                  <li>Sierra Club Environmentalist Award 2019</li>
                  <li>SMU Women in Profiles Award 2020</li>
                  <li>Juanita Craft Humanitarian Award 2020</li>
                  <li>Featured in BET&rsquo;s &ldquo;Disrupt &amp; Dismantle&rdquo;</li>
                  <li>&ldquo;Marsha Jackson Day&rdquo; — Dallas County</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--sand">
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">Event Highlights</p>
            <h2 className="section-title">Sandbranch Mini-Documentaries</h2>
          </div>
          <div className={styles.eventHighlightsCard}>
            <div className={styles.eventHighlightsText}>
              <Link href="/media#juneteenth-freedom-day" className="link-arrow">
                <h3>2026 Juneteenth Freedom Day</h3>
              </Link>
              <p>
                Southern Sector Rising speaks with community residents and advocates for the Sandbranch community to hear their voices and perspectives. If viewing on mobile, launch video in new tab.
              </p>
              <Link href="/media#juneteenth-freedom-day" className={styles.eventHighlightsLink}>
                Click here to view media
              </Link>
            </div>
            <div>
              <Link href="/media#juneteenth-freedom-day" className={styles.eventHighlightsMedia} aria-label="View the Sandbranch mini-documentary on the media page">
                <iframe
                  src="https://drive.google.com/file/d/1K3TpN5XRc4bG31ZlkuIIXybTMgbvAarY/preview"
                  title="2026 Juneteenth Freedom Day"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              </Link>
              <Link href="/media#juneteenth-freedom-day" className={styles.eventHighlightsMedia} aria-label="View the additional Sandbranch mini-documentary on the media page" style={{ marginTop: '1rem' }}>
                <iframe
                  src="https://drive.google.com/file/d/1Eu62L1bjTZ7oHC7-3eIWnGZGq2eRCS7V/preview"
                  title="2026 Juneteenth Freedom Day — Additional Video"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">Our Work</p>
            <h2 className="section-title">Five Pillars of Justice</h2>
            <p className="section-desc">
              Our integrated approach addresses the interconnected challenges facing frontline communities.
            </p>
          </div>
          <div className={styles.pillarsGrid}>
            {PILLARS.map(({ title, desc, tag }) => (
              <div key={title} className={styles.pillarCard}>
                <span className={`tag ${tag}`}>{title}</span>
                <p>{desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link href="/our-work" className="btn btn--primary">See All Programs</Link>
          </div>
        </div>
      </section>

      <section className="section section--sand">
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">Current Focus</p>
            <h2 className="section-title">Active Projects</h2>
          </div>
          <div className={styles.projectsGrid}>
            {PROJECTS.map(({ title, tag, tagClass, desc, href, videoId, slideshow }) => (
              <article key={title} className={`card ${styles.projectCard}`}>
                <div className={styles.projectImg}>
                  {slideshow ? (
                    <ProjectSlideshow images={SANDBRANCH_IMAGES} />
                  ) : videoId ? (
                    <iframe
                      src={`https://www.youtube.com/embed/${videoId}`}
                      title={title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none' }}
                    />
                  ) : (
                    <div className="img-placeholder">{title}</div>
                  )}
                </div>
                <div className={styles.projectBody}>
                  <span className={`tag ${tagClass}`}>{tag}</span>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                  <Link href={href} className="link-arrow">Learn more</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`section ${styles.globalTeaser}`}>
        <div className="container">
          <div className="section-header light">
            <p className="eyebrow">Beyond Borders</p>
            <h2 className="section-title" style={{ color: 'var(--color-white)' }}>
              From Dallas to the World
            </h2>
            <p className="section-desc" style={{ color: 'rgba(255,255,255,0.75)' }}>
              Environmental justice is a global fight. SSR represents frontline communities on the international stage. </p>
              </div>
          </div>
          <div className={styles.reachGrid}>
            
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link href="/global-reach" className="btn btn--outline-white">Our International Work</Link>
          </div>
        </div>
      </section>

      <section className="section section--cream">
        <div className="container">
          <div className={styles.donateCta}>
            <div className={styles.donateText}>
              <p className="eyebrow">Support the Movement</p>
              <h2>Invest in Environmental Justice</h2>
              <p>Your contribution directly supports frontline communities fighting for clean air, clean water, and climate justice.</p>
              <ul className={styles.donateImpact}>
                <li><strong>$25</strong> — water to a Sandbranch family for a month</li>
                <li><strong>$100</strong> — sponsors an EJ Tour participant</li>
                <li><strong>$500</strong> — supports community organizing</li>
                <li><strong>$1,000+</strong> — sustains coalition-building work</li>
              </ul>
            </div>
            <div className={styles.donateCtas}>
              <Link href="/get-involved#donate" className="btn btn--gold btn--lg">Donate Now</Link>
              <Link href="/get-involved#volunteer" className="btn btn--outline btn--lg">Volunteer</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--forest">
        <div className="container" style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}>
          <blockquote className={styles.quote}>
            &ldquo;BIPOC-led organizations like Southern Sector Rising are at the forefront
            of the climate justice movement.&rdquo;
          </blockquote>
          <cite className={styles.quoteSource}>— Tides Foundation</cite>
          <div style={{ marginTop: '2rem' }}>
            <Link href="/media" className="btn btn--outline-white">See Press Coverage</Link>
          </div>
        </div>
      </section>
    </>
  );
}
