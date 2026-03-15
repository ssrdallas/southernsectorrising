import type { Metadata } from 'next';
import Link from 'next/link';
import { IconCheck, IconPin, IconGlobe } from '@/components/icons/SocialIcons';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Our Work',
  description:
    'Five pillars of justice: Environmental Justice, Climate Resilience, Food Sovereignty, Labor & Economic Justice, and Community HUBs.',
};

const PILLARS = [
  {
    number: '01',
    tag: 'tag--forest',
    tagLabel: 'Pillar One',
    title: 'Environmental Justice',
    summary:
      'Challenging the racist zoning and land-use decisions that concentrate pollution, waste facilities, and industrial hazards in Black and Brown communities.',
    details: [
      'Led the three-year campaign to remove Shingle Mountain — 200,000+ tons of toxic construction debris dumped next to a Black neighborhood in South Dallas',
      'Monthly Environmental Justice Tours that educate hundreds of residents, students, and advocates each year',
      'Policy advocacy and testimony before city, county, and state environmental agencies',
      'Legal support and documentation of illegal dumping, zoning violations, and permitting abuses',
      'Coalition building with EJ organizations across Texas and nationally',
    ],
    accentColor: 'var(--color-forest)',
  },
  {
    number: '02',
    tag: 'tag--sky',
    tagLabel: 'Pillar Two',
    title: 'Climate Resilience',
    summary:
      'Ensuring that frontline communities are not only protected from climate harm but empowered to shape the climate policies that affect their lives.',
    details: [
      'International climate delegation representation — including UN climate negotiations in Nairobi, Kenya and Rome, Italy',
      'Community climate education workshops and resilience planning',
      'Connecting Dallas frontline neighborhoods to national and international climate justice networks',
      'Advocating for equitable green infrastructure investment in underserved communities',
      'Training community members as climate advocates and spokespeople',
    ],
    accentColor: 'var(--color-sky)',
  },
  {
    number: '03',
    tag: 'tag--gold',
    tagLabel: 'Pillar Three',
    title: 'Food Sovereignty',
    summary:
      'Building community power over food systems — because healthy food access is an environmental justice issue, and food deserts are not accidents.',
    details: [
      'Community gardens and urban agriculture programs in South Dallas food deserts',
      'Food access partnerships with local growers, co-ops, and faith institutions',
      'Education on food sovereignty, soil health, and sustainable growing practices',
      'Advocacy for equitable grocery access and against predatory food environments',
      'Youth agriculture programs connecting young people to the land and to food justice',
    ],
    accentColor: 'var(--color-gold)',
  },
  {
    number: '04',
    tag: 'tag--forest',
    tagLabel: 'Pillar Four',
    title: 'Labor & Economic Justice',
    summary:
      'Fighting for fair wages, safe working conditions, and economic opportunity for workers in the communities we serve.',
    details: [
      'Worker advocacy and support for organizing campaigns',
      'Economic development programs rooted in community ownership',
      'Coalition-building with labor unions and worker centers across the Dallas area',
      'Advocacy against wage theft, unsafe conditions, and exploitation of immigrant workers',
      'Connecting environmental and labor justice — clean environment and dignified work go together',
    ],
    accentColor: 'var(--color-forest)',
  },
  {
    number: '05',
    tag: 'tag--sky',
    tagLabel: 'Pillar Five',
    title: 'Community HUBs',
    summary:
      'Creating physical and organizational spaces where community members can gather, organize, access resources, and build collective power.',
    details: [
      'Community resource centers providing information, referrals, and direct mutual aid',
      'Regular community meetings and town halls for frontline residents',
      'Mutual aid networks for emergencies, health crises, and day-to-day needs',
      'Space for grassroots organizing, training, and leadership development',
      'Connections to legal, health, environmental, and social service resources',
    ],
    accentColor: 'var(--color-sky)',
  },
];

const PROJECTS = [
  {
    id: 'floral-farms',
    tag: 'Environmental Justice',
    tagClass: 'tag--forest',
    status: 'Active',
    statusClass: styles.statusActive,
    title: 'Park for Floral Farms',
    subtitle: 'Transforming a toxic site into community green space',
    body: [
      'For years, the Floral Farms neighborhood in South Dallas was home to Shingle Mountain — a 30-foot, 200,000+ ton pile of toxic construction shingles dumped illegally next to a Black residential community.',
      'After three years of organizing, legal battles, and relentless community pressure, Shingle Mountain was fully removed in 2022. The site is now remediated. But the community\'s vision does not end there.',
      'Southern Sector Rising is advocating with the City of Dallas and Dallas County to transform the remediated site into a public park — green space that Floral Farms residents have long been denied. This park would be a living symbol of community power: a mountain of harm turned into a place of healing.',
    ],
    stats: [
      { num: '200,000+', label: 'Tons removed' },
      { num: '2022', label: 'Victory year' },
      { num: '3 years', label: 'Campaign length' },
    ],
    img: 'Park for Floral Farms — Rendering',
  },
  {
    id: 'sandbranch',
    tag: 'Clean Water',
    tagClass: 'tag--sky',
    status: 'Ongoing',
    statusClass: styles.statusOngoing,
    title: 'Sandbranch Water Project',
    subtitle: 'Clean water for a freedmen\'s community still off the grid',
    body: [
      'Sandbranch is an unincorporated community in Dallas County with an 87% Black population — descendants of freed enslaved people who built this community generations ago. Despite being just outside a major American city, Sandbranch still lacks connection to the municipal water system.',
      'Residents have been hauling water or relying on wells that do not meet safe drinking water standards. This is not a rural backwater problem — it is a product of deliberate disinvestment in a Black community that the county has long ignored.',
      'Southern Sector Rising delivers clean water to Sandbranch on an ongoing basis and is a leading advocate for permanent infrastructure investment. We are not just delivering water — we are demanding that Dallas County fulfill its obligation to these residents.',
    ],
    stats: [
      { num: '87%', label: 'Black residents' },
      { num: 'Ongoing', label: 'Water deliveries' },
      { num: '1', label: 'Community that should not be forgotten' },
    ],
    img: 'Sandbranch Community — Water Delivery',
  },
  {
    id: 'ej-tours',
    tag: 'Education',
    tagClass: 'tag--gold',
    status: 'Monthly',
    statusClass: styles.statusMonthly,
    title: 'Environmental Justice Tours',
    subtitle: 'See environmental racism in Dallas — firsthand',
    body: [
      'Knowing is the first step. Southern Sector Rising leads monthly Environmental Justice Tours through South Dallas and surrounding areas, giving participants a firsthand look at the environmental conditions facing frontline communities.',
      'Tours visit sites of illegal dumping, industrial facilities located next to residential neighborhoods, areas with limited green space, and communities still fighting for clean water and air. Tour participants include students, researchers, faith communities, policymakers, and concerned citizens.',
      'These tours are not just educational — they are organizing tools. Many of our most dedicated volunteers and partners first connected with SSR through an EJ Tour. We are building an informed, activated public one tour at a time.',
    ],
    stats: [
      { num: 'Monthly', label: 'Tour frequency' },
      { num: 'Hundreds', label: 'Participants educated' },
      { num: 'All welcome', label: 'Open to public' },
    ],
    img: 'EJ Tour — South Dallas',
  },
];

export default function OurWorkPage() {
  return (
    <>
      {/* ── Page Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        {/* TODO: replace with <Image src="/images/our-work/work-hero.jpg" fill alt="" priority /> */}
        <div className={`${styles.heroContent} container`}>
          <p className="eyebrow">What We Do</p>
          <h1 className={styles.heroTitle}>Our Work</h1>
          <p className={styles.heroSubtitle}>Five Pillars of Justice</p>
          <p className={styles.heroDesc}>
            An integrated, community-led approach to the interconnected crises facing
            South Dallas and frontline communities everywhere.
          </p>
        </div>
      </section>

      {/* ── Intro ── */}
      <section className="section section--cream">
        <div className="container">
          <div className={styles.introGrid}>
            <div>
              <p className="eyebrow">Our Approach</p>
              <h2>Justice Is Not Single-Issue</h2>
              <p className="lead">
                Southern Sector Rising operates across five interconnected pillars because the
                challenges facing frontline communities are never simple, and the solutions must
                not be either.
              </p>
            </div>
            <div className={styles.introBody}>
              <p>
                Environmental injustice does not exist in isolation. Toxic dumps appear in Black
                neighborhoods because of racist zoning. Zoning reflects economic disinvestment.
                Disinvestment is maintained by political exclusion. Political exclusion is
                reinforced by inadequate education and lack of resources.
              </p>
              <p>
                Our five pillars — Environmental Justice, Climate Resilience, Food Sovereignty,
                Labor &amp; Economic Justice, and Community HUBs — address these challenges as
                the integrated system they are. This is not charity. This is structural change,
                led by the people who know what is needed most.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Five Pillars ── */}
      <section className="section section--sand">
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">Our Framework</p>
            <h2 className="section-title">Five Pillars of Justice</h2>
            <p className="section-desc">
              Each pillar represents a domain where frontline communities face systemic harm —
              and where community-led organizing can create lasting change.
            </p>
          </div>
          <div className={styles.pillarsStack}>
            {PILLARS.map(({ number, tag, tagLabel, title, summary, details, accentColor }) => (
              <div key={number} className={styles.pillarRow} style={{ '--pillar-accent': accentColor } as React.CSSProperties}>
                <div className={styles.pillarLeft}>
                  <span className={styles.pillarNumber}>{number}</span>
                  <span className={`tag ${tag}`}>{tagLabel}</span>
                  <h3 className={styles.pillarTitle}>{title}</h3>
                  <p className={styles.pillarSummary}>{summary}</p>
                </div>
                <div className={styles.pillarRight}>
                  <ul className={styles.pillarDetails}>
                    {details.map((item) => (
                      <li key={item} className={styles.pillarDetailItem}>
                        <span className={styles.pillarCheck}>
                          <IconCheck size={14} />
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Active Projects ── */}
      <section className="section section--cream">
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">Current Focus</p>
            <h2 className="section-title">Active Projects</h2>
            <p className="section-desc">
              Three campaigns at the heart of our current work — each rooted in a
              specific community need and connected to our broader mission.
            </p>
          </div>

          <div className={styles.projectsStack}>
            {PROJECTS.map(({ id, tag, tagClass, status, statusClass, title, subtitle, body, stats, img }) => (
              <article key={id} id={id} className={styles.projectBlock}>
                <div className={styles.projectMedia}>
                  {/* TODO: replace with <Image src={`/images/projects/${id}.jpg`} fill alt={title} /> */}
                  <div className="img-placeholder">{img}</div>
                  <div className={styles.projectMediaTags}>
                    <span className={`tag ${tagClass}`}>{tag}</span>
                    <span className={`tag ${statusClass}`}>{status}</span>
                  </div>
                </div>
                <div className={styles.projectContent}>
                  <div className={styles.projectHeader}>
                    <div>
                      <h3 className={styles.projectTitle}>{title}</h3>
                      <p className={styles.projectSubtitle}>{subtitle}</p>
                    </div>
                    <span className={styles.projectPin}>
                      <IconPin size={18} />
                      South Dallas, TX
                    </span>
                  </div>
                  {body.map((para, i) => (
                    <p key={i} className={styles.projectBody}>{para}</p>
                  ))}
                  <div className={styles.projectStats}>
                    {stats.map(({ num, label }) => (
                      <div key={label} className={styles.projectStat}>
                        <span className={styles.projectStatNum}>{num}</span>
                        <span className={styles.projectStatLabel}>{label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Global Reach ── */}
      <section className={`section ${styles.globalSection}`}>
        <div className="container">
          <div className={styles.globalInner}>
            <div className={styles.globalText}>
              <p className="eyebrow">Beyond Dallas</p>
              <h2 className={styles.globalTitle}>Our Reach Is Global</h2>
              <p>
                Environmental justice is a global fight. Southern Sector Rising has taken the
                voices of Dallas frontline communities to international stages — including
                UN climate negotiations in Nairobi, Kenya and Rome, Italy.
              </p>
              <p>
                We connect local struggles to international frameworks, bring global perspective
                back to our communities, and build bridges across the climate justice movement
                from South Dallas to the world.
              </p>
              <div className={styles.globalStats}>
                <div className={styles.globalStat}>
                  <IconGlobe size={20} className={styles.globalIcon} />
                  <span>Kenya — UN Climate Delegation</span>
                </div>
                <div className={styles.globalStat}>
                  <IconGlobe size={20} className={styles.globalIcon} />
                  <span>Rome, Italy — Climate Summit</span>
                </div>
                <div className={styles.globalStat}>
                  <IconGlobe size={20} className={styles.globalIcon} />
                  <span>150+ Allied Organizations Worldwide</span>
                </div>
              </div>
            </div>
            <div className={styles.globalVisual}>
              {/* TODO: replace with <Image src="/images/global/delegation-kenya.jpg" fill alt="SSR delegation in Kenya" /> */}
              <div className="img-placeholder">SSR International Delegation</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Support CTA ── */}
      <section className="section section--sand">
        <div className="container">
          <div className={styles.cta}>
            <div className={styles.ctaText}>
              <p className="eyebrow">Get Involved</p>
              <h2 className={styles.ctaTitle}>Want to Support Our Work?</h2>
              <p>
                Your contribution — whether time, money, or advocacy — directly fuels frontline
                community organizing across Dallas and beyond.
              </p>
            </div>
            <div className={styles.ctaButtons}>
              <Link href="/get-involved#donate" className="btn btn--gold btn--lg">
                Donate
              </Link>
              <Link href="/get-involved#volunteer" className="btn btn--primary btn--lg">
                Volunteer
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
