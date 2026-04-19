import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { IconCheck, IconGlobe } from '@/components/icons/SocialIcons';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Born from injustice, built for justice. Learn the story of Southern Sector Rising, Dr. Marsha Jackson, and the Jemez Principles that guide our work.',
};

const BOARD_MEMBERS = [
  {
    name: 'Bonnie Mathias',
    title: 'Board Member',
    img: '/images/team/bonnie-mathias.webp',
  },
  {
    name: 'Chelsi Floyd',
    title: 'Board Member',
    img: '/images/team/chelsi-floyd.webp',
  },
  {
    name: 'Danielle Ayers',
    title: 'Board Member',
    img: '/images/team/danielle-ayers.webp',
  },
  {
    name: 'Genaro Viniegra',
    title: 'Board Member',
    img: '/images/team/genaro-viniegra.webp',
  },
  {
    name: 'Sara Mokuria',
    title: 'Board Member',
    img: '/images/team/sara-mokuria.webp',
  },
];

const AWARDS = [
  { year: '2019', title: 'Sierra Club Environmentalist Award' },
  { year: '2020', title: 'SMU Women in Profiles Award' },
  { year: '2020', title: 'Juanita Craft Humanitarian Award' },
  { year: 'BET',  title: 'Disrupt & Dismantle Documentary' },
  { year: 'Dallas County', title: '"Marsha Jackson Day" Proclamation' },
];

const JEMEZ_PRINCIPLES = [
  {
    number: '01',
    title: 'Be Inclusive',
    desc: 'Environmental justice work must include all peoples, acknowledging the leadership of those most affected by environmental and economic injustice.',
  },
  {
    number: '02',
    title: 'Emphasis on Bottom-Up Organizing',
    desc: 'We prioritize grassroots organizing, ensuring that decision-making power rests with frontline community members rather than external institutions.',
  },
  {
    number: '03',
    title: 'Let People Speak for Themselves',
    desc: 'Affected communities must have the right to speak their own truths. We create space for directly impacted voices rather than speaking on their behalf.',
  },
  {
    number: '04',
    title: 'Work Together in Solidarity and Mutuality',
    desc: 'We build bridges across communities and movements, recognizing that our struggles are interconnected and that collective power is our greatest strength.',
  },
  {
    number: '05',
    title: 'Build Just Relationships Among Ourselves',
    desc: 'Justice work begins internally. We commit to equitable relationships within our organization, rooted in respect, accountability, and shared power.',
  },
  {
    number: '06',
    title: 'Commitment to Self-Transformation',
    desc: 'We acknowledge our own limitations and biases, and commit to continuous learning and growth as individuals and as an organization.',
  },
  {
    number: '07',
    title: 'Practice Nonviolence',
    desc: 'Our movement is rooted in the tradition of nonviolent resistance — using our voices, our presence, and our organizing to create lasting change.',
  },
];

const VALUES = [
  {
    tag: 'tag--forest',
    tagLabel: 'Core Principle',
    title: 'Community-Led',
    desc: 'Every campaign, program, and decision is driven by the people most directly impacted. Frontline residents are not just beneficiaries — they are leaders. We follow the community, not the other way around.',
    icon: <IconCheck size={24} />,
  },
  {
    tag: 'tag--gold',
    tagLabel: 'Core Principle',
    title: 'Coalition Power',
    desc: 'No single organization wins alone. Our strength comes from our network of 150+ allied organizations spanning environmental, labor, food justice, and civil rights movements across Dallas and beyond.',
    icon: <IconGlobe size={24} />,
  },
  {
    tag: 'tag--sky',
    tagLabel: 'Core Principle',
    title: 'Global Justice',
    desc: 'The issues facing South Dallas are not isolated — they are part of a global pattern of environmental racism. We connect local struggles to international climate policy, bringing Dallas voices to the world stage.',
    icon: <IconGlobe size={24} />,
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ── Page Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <Image src="/images/hero/hero-about.jpg" fill alt="" priority style={{ objectFit: 'cover', objectPosition: 'center 40%' }} />
        {/* Text commented out — hero image already carries text overlay from source */}
        {/* <div className={`${styles.heroContent} container`}>
          <p className="eyebrow">Our Story</p>
          <h1 className={styles.heroTitle}>About Us</h1>
          <p className={styles.heroSubtitle}>Born from injustice. Built for justice.</p>
        </div> */}
      </section>

      {/* ── Origin Story ── */}
      <section className="section section--cream">
        <div className="container">
          <div className={styles.originGrid}>
            <div className={styles.originText}>
              <div className="section-header section-header--left">
                <p className="eyebrow">The Origin</p>
                <h2 className="section-title">How a Mountain Changed Everything</h2>
              </div>
              <p className="lead">
                In 2019, the Floral Farms neighborhood in South Dallas woke up to a crisis: a 30-foot
                mountain of toxic shingles had been illegally dumped directly next to their homes.
              </p>
              <p>
                Floral Farms is a predominantly Black community — a community that had already
                endured decades of racist zoning practices that pushed industrial facilities, salvage
                yards, and waste sites into their neighborhood while wealthier, whiter areas of
                Dallas remained protected. Shingle Mountain was not an accident. It was the latest
                chapter in a long history of environmental injustice.
              </p>
              <p>
                The mountain grew to over 200,000 tons of construction debris. Residents reported
                breathing difficulties, eye irritation, and constant fear for their children&rsquo;s
                health. Government agencies moved slowly. Promises went unfulfilled.
              </p>
              <p>
                So the community organized. Led by Dr. Marsha Jackson — a resident of Floral Farms —
                neighbors joined forces, filed complaints, rallied allies, engaged media, and took
                their fight all the way to the Texas Commission on Environmental Quality, the
                City of Dallas, and beyond.
              </p>
              <p>
                After three years of relentless organizing, legal battles, and international media
                attention, Shingle Mountain was removed. All 200,000+ tons. It was a landmark
                victory — proof that frontline communities, when organized and supported, can move
                mountains. Literally.
              </p>
              <p>
                Out of that fight, <strong>Southern Sector Rising</strong> was born. What began as a
                neighborhood emergency response became a full-fledged environmental and social justice
                organization, rooted in South Dallas and reaching across the globe.
              </p>
            </div>
            <div className={styles.originVisual}>
              <div className={styles.originImgTop}>
                <Image src="/images/about/shingle-mountain.jpg" fill alt="Shingle Mountain — officials and residents atop the toxic shingle pile in Floral Farms" style={{ objectFit: 'cover', objectPosition: 'center 30%' }} />
              </div>
              <div className={styles.originImgBottom}>
                <Image src="/images/about/after-removal.jpg" fill alt="Floral Farms resident at the site during shingle mountain removal, 2021" style={{ objectFit: 'cover', objectPosition: 'center top' }} />
              </div>
              <div className={styles.originStat}>
                <span className={styles.originStatNum}>200,000+</span>
                <span className={styles.originStatLabel}>Tons of shingles removed from a Black neighborhood</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Leadership / Dr. Marsha Jackson ── */}
      <section id="leadership" className="section section--sand">
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">Our Leadership</p>
            <h2 className="section-title">Dr. Marsha Jackson</h2>
          </div>
          <div className={styles.leaderGrid}>
            <div className={styles.leaderPhoto}>
              <Image
                src="/images/team/marsha-jackson-portrait.webp"
                fill
                alt="Dr. Marsha Jackson, Founder & Executive Director of Southern Sector Rising"
                style={{ objectFit: 'cover', objectPosition: 'top' }}
                priority
              />
              <div className={styles.leaderPhotoCaption}>
                Founder &amp; Executive Director
              </div>
            </div>
            <div className={styles.leaderBio}>
              <p className="lead">
                Dr. Marsha Jackson is a South Dallas resident, community organizer, environmental
                justice advocate, and the founding force behind Southern Sector Rising.
              </p>
              <p>
                When Shingle Mountain appeared in her neighborhood, Dr. Jackson did not wait for
                someone else to act. She documented the conditions, organized her neighbors, and
                built a campaign that ultimately forced the removal of over 200,000 tons of toxic
                shingles — a first-of-its-kind environmental justice victory in Texas.
              </p>
              <p>
                Her work has taken her from Floral Farms to the United Nations climate negotiations
                in Kenya and Rome, where she has represented frontline communities on the global
                stage. She has testified before government bodies, appeared in national media, and
                earned recognition from organizations across the country.
              </p>
              <p>
                Dr. Jackson&rsquo;s leadership is rooted in the understanding that environmental
                justice is inseparable from racial justice, economic justice, and the right of
                every community to live with dignity and health.
              </p>

              <div className={styles.awardsBlock}>
                <h3 className={styles.awardsTitle}>Recognition &amp; Awards</h3>
                <ul className={styles.awardsList}>
                  {AWARDS.map(({ year, title }) => (
                    <li key={title} className={styles.awardsItem}>
                      <span className={styles.awardsCheck}>
                        <IconCheck size={16} />
                      </span>
                      <span>
                        <strong>{title}</strong>
                        <span className={styles.awardsYear}>{year}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <blockquote className={styles.leaderQuote}>
                <p>
                  &ldquo;Our community has been hurting. What we&rsquo;ve been through will
                  always be a legacy of environmental injustice — and of community power.&rdquo;
                </p>
                <cite>— Dr. Marsha Jackson, Founder &amp; Executive Director</cite>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* ── Board of Directors ── */}
      <section className="section section--white">
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">Our Team</p>
            <h2 className="section-title">Board of Directors</h2>
          </div>
          <div className={styles.boardGrid}>
            {BOARD_MEMBERS.map(({ name, title, img }) => (
              <div key={name} className={styles.boardCard}>
                <div className={styles.boardPhoto}>
                  <Image src={img} fill alt={name} style={{ objectFit: 'cover', objectPosition: 'top' }} />
                </div>
                <div className={styles.boardInfo}>
                  <h3 className={styles.boardName}>{name}</h3>
                  <p className={styles.boardTitle}>{title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Jemez Principles ── */}
      <section className="section section--forest">
        <div className="container">
          <div className="section-header light">
            <p className="eyebrow">How We Work</p>
            <h2 className="section-title" style={{ color: 'var(--color-white)' }}>
              The Jemez Principles
            </h2>
            <p className="section-desc" style={{ color: 'rgba(255,255,255,0.75)' }}>
              Southern Sector Rising operates by the seven Jemez Principles of Democratic
              Organizing Justice — a framework developed by people of color and Indigenous
              communities to guide movement-building work.
            </p>
          </div>
          <div className={styles.jemezGrid}>
            {JEMEZ_PRINCIPLES.map(({ number, title, desc }) => (
              <div key={number} className={styles.jemezCard}>
                <span className={styles.jemezNumber}>{number}</span>
                <h3 className={styles.jemezTitle}>{title}</h3>
                <p className={styles.jemezDesc}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Values ── */}
      <section className="section section--cream">
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">What Drives Us</p>
            <h2 className="section-title">Our Values</h2>
            <p className="section-desc">
              Three core values shape everything we do — from neighborhood meetings in Floral Farms
              to international climate negotiations.
            </p>
          </div>
          <div className={styles.valuesGrid}>
            {VALUES.map(({ tag, tagLabel, title, desc }) => (
              <div key={title} className={`card ${styles.valueCard}`}>
                <div className={styles.valueCardTop}>
                  <span className={`tag ${tag}`}>{tagLabel}</span>
                  <h3 className={styles.valueTitle}>{title}</h3>
                </div>
                <p className={styles.valueDesc}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={`section ${styles.ctaSection}`}>
        <div className="container">
          <div className={styles.ctaInner}>
            <div className={styles.ctaText}>
              <p className="eyebrow">Join the Movement</p>
              <h2 className={styles.ctaTitle}>Ready to Get Involved?</h2>
              <p>
                Whether you want to volunteer, donate, attend an EJ Tour, or simply learn more —
                there is a place for you in the Southern Sector Rising family.
              </p>
            </div>
            <div className={styles.ctaButtons}>
              <Link href="/get-involved" className="btn btn--gold btn--lg">
                Get Involved
              </Link>
              <Link href="/our-work" className="btn btn--outline-white btn--lg">
                See Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
