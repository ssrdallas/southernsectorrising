import type { Metadata } from 'next';
import Link from 'next/link';
import { IconCheck, IconGlobe, IconPlay } from '@/components/icons/SocialIcons';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Our Impact',
  description:
    'Measurable change for frontline communities — from Shingle Mountain to international climate delegations, Southern Sector Rising delivers results.',
};

const STATS = [
  {
    number: '200,000+',
    unit: 'tons',
    label: 'Shingles removed from a Black neighborhood',
    tag: 'tag--forest',
  },
  {
    number: '150+',
    unit: 'orgs',
    label: 'Allied organizations in our coalition',
    tag: 'tag--gold',
  },
  {
    number: '6',
    unit: 'years',
    label: 'Years of frontline community organizing',
    tag: 'tag--forest',
  },
  {
    number: '100s',
    unit: 'people',
    label: 'Educated through EJ Tours',
    tag: 'tag--sky',
  },
  {
    number: '4',
    unit: 'continents',
    label: 'Reached through international delegation work',
    tag: 'tag--gold',
  },
  {
    number: '1',
    unit: 'mountain',
    label: 'Moved by community power',
    tag: 'tag--sky',
  },
];

const TIMELINE = [
  {
    year: '2019',
    event: 'Illegal Dump Discovered',
    desc: 'A 30-foot mountain of toxic construction shingles appears in the Floral Farms neighborhood of South Dallas, next to Black residential homes. Residents report health impacts immediately.',
    marker: 'start',
  },
  {
    year: '2019',
    event: 'Southern Sector Rising Founded',
    desc: 'Dr. Marsha Jackson and neighbors begin organizing. Southern Sector Rising is formally established as the campaign grows beyond a single neighborhood issue.',
    marker: 'milestone',
  },
  {
    year: '2020',
    event: 'Campaign Goes National',
    desc: 'Media coverage expands. Dr. Jackson receives the Sierra Club Environmentalist Award and SMU Women in Profiles Award. The Shingle Mountain story reaches national audiences.',
    marker: 'milestone',
  },
  {
    year: '2020–2021',
    event: 'Legal Battles & Escalation',
    desc: 'SSR pursues legal action, files complaints with TCEQ and the City of Dallas, and builds a 150+ organization coalition. Pressure mounts on regulators to act.',
    marker: 'ongoing',
  },
  {
    year: '2022',
    event: 'Shingle Mountain Removed',
    desc: 'After three years of relentless organizing, legal action, and national attention, all 200,000+ tons of shingles are removed from Floral Farms. A landmark environmental justice victory in Texas.',
    marker: 'victory',
  },
  {
    year: '2022–Present',
    event: 'Park for Floral Farms',
    desc: 'With Shingle Mountain gone, SSR advocates for the remediated site to become a public park — green space for a community that has waited decades for investment.',
    marker: 'ongoing',
  },
  {
    year: 'Ongoing',
    event: 'Global Expansion',
    desc: 'SSR represents frontline communities at international climate negotiations in Nairobi, Kenya and Rome, Italy, bringing the South Dallas story to the world stage.',
    marker: 'milestone',
  },
];

const WINS = [
  {
    tag: 'tag--forest',
    title: 'Shingle Mountain Removal',
    year: '2022',
    desc: '200,000+ tons of toxic shingles removed from the Floral Farms neighborhood — a three-year campaign and a first-of-its-kind environmental justice victory in Texas.',
    icon: <IconCheck size={18} />,
  },
  {
    tag: 'tag--sky',
    title: 'International Climate Representation',
    year: '2022–Present',
    desc: 'Southern Sector Rising delegates have represented frontline communities at UN climate negotiations in Nairobi, Kenya and Rome, Italy — bringing South Dallas to the global stage.',
    icon: <IconGlobe size={18} />,
  },
  {
    tag: 'tag--gold',
    title: 'Sandbranch Clean Water Deliveries',
    year: 'Ongoing',
    desc: 'Ongoing delivery of clean water to Sandbranch, an 87% Black freedmen\'s town in Dallas County still lacking proper municipal water infrastructure.',
    icon: <IconCheck size={18} />,
  },
  {
    tag: 'tag--forest',
    title: 'EJ Tours Program Launched',
    year: '2020',
    desc: 'A monthly Environmental Justice Tour program that has educated hundreds of students, faith leaders, policymakers, and community members on environmental racism in Dallas.',
    icon: <IconPlay size={18} />,
  },
  {
    tag: 'tag--gold',
    title: '150+ Ally Coalition Built',
    year: '2019–Present',
    desc: 'Built a coalition of over 150 allied organizations across environmental justice, labor, food sovereignty, and civil rights movements — a network that amplifies frontline voices.',
    icon: <IconCheck size={18} />,
  },
  {
    tag: 'tag--sky',
    title: '"Marsha Jackson Day" Proclaimed',
    year: 'Dallas County',
    desc: 'Dallas County officially proclaimed "Marsha Jackson Day" — recognition of Dr. Jackson\'s extraordinary leadership and lasting impact on the region.',
    icon: <IconCheck size={18} />,
  },
];

const AWARDS = [
  {
    org: 'Sierra Club',
    award: 'Environmentalist Award',
    year: '2019',
    recipient: 'Dr. Marsha Jackson',
  },
  {
    org: 'SMU',
    award: 'Women in Profiles Award',
    year: '2020',
    recipient: 'Dr. Marsha Jackson',
  },
  {
    org: 'Juanita Craft Foundation',
    award: 'Humanitarian Award',
    year: '2020',
    recipient: 'Dr. Marsha Jackson',
  },
  {
    org: 'BET Networks',
    award: 'Disrupt & Dismantle Documentary',
    year: 'Featured',
    recipient: 'Southern Sector Rising',
  },
  {
    org: 'Dallas County',
    award: '"Marsha Jackson Day" Proclamation',
    year: 'Proclaimed',
    recipient: 'Dr. Marsha Jackson',
  },
];

export default function ImpactPage() {
  return (
    <>
      {/* ── Page Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        {/* TODO: replace with <Image src="/images/impact/impact-hero.jpg" fill alt="" priority /> */}
        <div className={`${styles.heroContent} container`}>
          <p className="eyebrow">Proven Results</p>
          <h1 className={styles.heroTitle}>Our Impact</h1>
          <p className={styles.heroSubtitle}>Measurable Change for Frontline Communities</p>
          <p className={styles.heroDesc}>
            Six years of organizing. One mountain moved. A coalition of 150+.
            And the work is not done.
          </p>
        </div>
      </section>

      {/* ── Stats Grid ── */}
      <section className="section section--cream">
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">By the Numbers</p>
            <h2 className="section-title">The Scale of Our Work</h2>
            <p className="section-desc">
              These numbers represent real communities, real victories, and real change.
            </p>
          </div>
          <div className={styles.statsGrid}>
            {STATS.map(({ number, unit, label, tag }) => (
              <div key={label} className={styles.statCard}>
                <span className={`tag ${tag}`}>{unit}</span>
                <span className={styles.statNum}>{number}</span>
                <p className={styles.statLabel}>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Shingle Mountain Story ── */}
      <section className="section section--sand">
        <div className="container">
          <div className={styles.storyGrid}>
            <div className={styles.storyText}>
              <div className="section-header section-header--left">
                <p className="eyebrow">Landmark Victory</p>
                <h2 className="section-title">The Shingle Mountain Story</h2>
              </div>
              <p className="lead">
                It began with a mountain. It ended with a movement.
              </p>
              <p>
                In 2019, the Floral Farms neighborhood in South Dallas became the site of one of
                the most blatant acts of environmental racism in recent Texas history. A company
                illegally dumped over 200,000 tons of construction shingles — a 30-foot mountain
                of toxic debris — directly adjacent to a Black residential neighborhood.
              </p>
              <p>
                Residents reported burning eyes, difficulty breathing, and fear for their
                children&rsquo;s health. Regulatory agencies moved slowly. The city deferred action.
                The mountain kept growing.
              </p>
              <p>
                Dr. Marsha Jackson and her neighbors organized. They documented conditions,
                filed complaints, held press conferences, built a coalition, and took their
                fight to every level of government. They did not give up. They did not accept
                excuses. They demanded justice.
              </p>
              <p>
                In 2022 — after three years of relentless community organizing, legal battles,
                national media coverage, and sustained political pressure — the last loads of
                shingles were removed. The site was remediated. The mountain was moved.
              </p>
              <p>
                It was the first victory of its kind in Texas. Proof that frontline communities,
                when organized and supported, can force accountability from institutions that
                have long ignored them.
              </p>
              <p>
                Now, Southern Sector Rising is advocating for the site to become a public park —
                a permanent testament to what community power can accomplish.
              </p>
            </div>
            <div className={styles.timeline}>
              <h3 className={styles.timelineTitle}>Timeline</h3>
              {TIMELINE.map(({ year, event, desc, marker }) => (
                <div key={event} className={`${styles.timelineItem} ${styles[`marker_${marker}`]}`}>
                  <div className={styles.timelineMarker}>
                    <span className={styles.timelineDot} />
                    <span className={styles.timelineLine} />
                  </div>
                  <div className={styles.timelineContent}>
                    <span className={styles.timelineYear}>{year}</span>
                    <h4 className={styles.timelineEvent}>{event}</h4>
                    <p className={styles.timelineDesc}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Featured Wins ── */}
      <section className="section section--cream">
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">What We've Accomplished</p>
            <h2 className="section-title">Featured Wins</h2>
            <p className="section-desc">
              Each win represents years of organizing, coalition-building, and frontline
              community leadership.
            </p>
          </div>
          <div className={styles.winsGrid}>
            {WINS.map(({ tag, title, year, desc, icon }) => (
              <div key={title} className={`card ${styles.winCard}`}>
                <div className={styles.winHeader}>
                  <span className={styles.winIcon}>{icon}</span>
                  <span className={`tag ${tag}`}>{year}</span>
                </div>
                <h3 className={styles.winTitle}>{title}</h3>
                <p className={styles.winDesc}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Quote ── */}
      <section className={`section ${styles.quoteSection}`}>
        <div className="container">
          <div className={styles.quoteWrapper}>
            <span className={styles.quoteDecor}>&ldquo;</span>
            <blockquote className={styles.quoteText}>
              BIPOC-led organizations like Southern Sector Rising are at the forefront
              of the climate justice movement.
            </blockquote>
            <cite className={styles.quoteSource}>
              — Tides Foundation
            </cite>
          </div>
        </div>
      </section>

      {/* ── Awards & Recognition ── */}
      <section className="section section--sand">
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">Recognition</p>
            <h2 className="section-title">Awards &amp; Media</h2>
            <p className="section-desc">
              Our work has been recognized by environmental organizations, universities, community
              foundations, and national media.
            </p>
          </div>
          <div className={styles.awardsGrid}>
            {AWARDS.map(({ org, award, year, recipient }) => (
              <div key={award} className={styles.awardCard}>
                <div className={styles.awardOrg}>{org}</div>
                <h3 className={styles.awardName}>{award}</h3>
                <div className={styles.awardMeta}>
                  <span className={styles.awardRecipient}>{recipient}</span>
                  <span className={`tag tag--gold ${styles.awardYear}`}>{year}</span>
                </div>
              </div>
            ))}
          </div>

          {/* BET Feature */}
          <div className={styles.mediaFeature}>
            <div className={styles.mediaFeatureImg}>
              {/* TODO: replace with <Image src="/images/media/bet-documentary.jpg" fill alt="BET Disrupt & Dismantle documentary featuring SSR" /> */}
              <div className="img-placeholder">BET Disrupt &amp; Dismantle Documentary</div>
              <div className={styles.playBtn} aria-hidden="true">
                <IconPlay size={32} />
              </div>
            </div>
            <div className={styles.mediaFeatureText}>
              <span className="tag tag--forest">National Media</span>
              <h3>Featured on BET&rsquo;s &ldquo;Disrupt &amp; Dismantle&rdquo;</h3>
              <p>
                Southern Sector Rising and Dr. Marsha Jackson were featured in BET&rsquo;s
                groundbreaking documentary series examining environmental racism and the
                communities fighting back. The feature brought national attention to the
                Shingle Mountain story and the broader struggle for environmental justice
                in South Dallas.
              </p>
              <p>
                The documentary remains one of the most powerful records of our movement —
                a testament to what community-led organizing looks like in action.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={`section ${styles.ctaSection}`}>
        <div className="container">
          <div className={styles.ctaInner}>
            <div className={styles.ctaText}>
              <p className="eyebrow">Keep the Momentum Going</p>
              <h2 className={styles.ctaTitle}>
                The Work Is Not Done
              </h2>
              <p>
                Shingle Mountain was removed. Sandbranch still needs water. Floral Farms
                deserves its park. And frontline communities around Dallas need organizing
                support, legal help, and allies who will not look away.
              </p>
              <p>
                Your support — financial, physical, or political — makes this work possible.
              </p>
            </div>
            <div className={styles.ctaButtons}>
              <Link href="/our-work" className="btn btn--gold btn--lg">
                View Our Work
              </Link>
              <Link href="/get-involved#donate" className="btn btn--outline-white btn--lg">
                Donate
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
