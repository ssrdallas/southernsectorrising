import type { Metadata } from 'next';
import Link from 'next/link';
import { IconPlay, IconMail, IconPhone } from '@/components/icons/SocialIcons';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Media | Southern Sector Rising',
  description:
    'Press coveragee, documentary film, and media resources for Southern Sector Rising and Dr. Marsha Jackson\'s environmental justice work in Southern Dallas.',
};

const EVENT_HIGHLIGHTS_VIDEO_EMBED_URL = 'https://drive.google.com/file/d/1K3TpN5XRc4bG31ZlkuIIXybTMgbvAarY/preview';
const EVENT_HIGHLIGHTS_VIDEO_EMBED_URL_2 = 'https://drive.google.com/file/d/1Eu62L1bjTZ7oHC7-3eIWnGZGq2eRCS7V/preview';

const buildExternalSearchUrl = (query: string) =>
  `https://www.google.com/search?q=${encodeURIComponent(query)}`;

const PRESS_ARTICLES = [
  {
    title: 'The Woman Who Fought to Tear Down Shingle Mountain is Celebrated at Museum Exhibit',
    outlet: 'Dallas Museum of Art',
    outletTag: 'tag--gold',
    type: 'Feature',
    desc: 'For her installation at the Dallas Museum of Art, artist Ari Brielle chose to highlight Floral Farms resident Marsha Jackson and her fight to remove Shingle Mountain.',
    href: 'https://www.keranews.org/arts-culture/2022-02-24/dallas-woman-who-fought-to-tear-down-shingle-mountain-is-celebrated-in-museum-exhibit',
  },
  {
    title: 'In Texas, Residents Are Dying To Breathe Clean Air',
    outlet: 'National Coverage',
    outletTag: 'tag--sky',
    type: 'Investigative',
    desc: 'National investigative reporting on the health impacts residents are facing in communities like Southern Dallas, documenting the direct human cost of living near industrial pollution and illegal dumping sites.',
    href: 'https://earthjustice.org/action/texas-residents-deserve-to-breathe-clean-air',
  },
  {
    title: 'Shingle Mountain Removed After Years of Community Activism',
    outlet: 'Victory Coverage',
    outletTag: 'tag--gold',
    type: 'News',
    desc: 'Coverage of the landmark victory: the removal of the illegally-dumped shingle mountain that sat next to the Floral Farms neighborhood for years. This is a win driven entirely by community organizing.',
    href: 'https://www.nbcdfw.com/news/local/shingle-mountain-removed-from-southern-dallas-neighborhood-neighbors-say/2566074/',
  },
  {
    title: 'Dallas Activist Named Sierra Club Environmentalist of the Year',
    outlet: 'Dallas Media',
    outletTag: 'tag--forest',
    type: 'Award',
    desc: 'Recognition of Dr. Marsha Jackson\'s 2019 Sierra Club Lone Star Chapter Environmentalist of the Year award. This is one of several honors for her leadership in the Southern Dallas environmental justice movement.',
    href: 'https://canvasrebel.com/meet-marsha-jackson/',
  },
  {
    title: 'BET Documentary Shines Light on South Dallas Environmental Crisis',
    outlet: 'Entertainment & News',
    outletTag: 'tag--sky',
    type: 'Feature',
    desc: 'Coverage of BET\'s "Disrupt & Dismantle with Soledad O\'Brien" documentary feature on Shingle Mountain and Dr. Jackson\'s three-year battle, bringing national attention to environmental racism in Dallas.',
    href: 'https://www.bet.com/phoenix-awards/video/sm9asm/disrupt-dismantle-disrupt-and-dismantle-tackles-shingle-mountain',
  },
  {
    title: 'Marsha Jackson Day Declared by Dallas County',
    outlet: 'Dallas County',
    outletTag: 'tag--gold',
    type: 'Honor',
    desc: 'Dallas County officially declared a "Marsha Jackson Day" in recognition of Dr. Jackson\'s extraordinary contributions to environmental justice and the health and safety of Southern Dallas communities.',
    href: 'https://www.hksinc.com/our-news/articles/dallas-activist-marsha-jackson-honored-as-mountain-mover/',
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
              <iframe
                src="https://www.youtube.com/embed/DZdpZe5f9ys"
                title="Disrupt & Dismantle with Soledad O'Brien — BET Documentary"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none' }}
              />
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
                against Shingle Mountain, a powerful portrait of community-led environmental
                justice activism in Southern Dallas.
              </p>
              <p>
                Hosted by award-winning journalist Soledad O&rsquo;Brien, the BET documentary
                brought the story of Floral Farms and the illegal shingle dump to a national
                audience, exposing the environmental racism that has long plagued Southern
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

          {/* Secondary Films Grid */}
          <div className={styles.secondaryFilmsGrid}>
            <div className={`card ${styles.filmCard}`}>
              <div className={styles.filmCardMedia}>
                <iframe
                  src="https://www.youtube.com/embed/dNhlB9EEysY"
                  title="Environmental Justice -vs- Shingle Mountain"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none' }}
                />
                <span className={`tag tag--gold ${styles.filmSourceBadge}`}>Documentary</span>
              </div>
              <div className={styles.filmCardBody}>
                <h3>Environmental Justice -vs- Shingle Mountain</h3>
                <p>
                  A documentary portrait of Dr. Marsha Jackson and the years-long community
                  battle against the illegal shingle dump, a symbol of environmental racism
                  in Southern Dallas.
                </p>
                <a
                  href="https://www.youtube.com/watch?v=dNhlB9EEysY"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-arrow"
                >Watch on YouTube</a>
              </div>
            </div>

            <div className={`card ${styles.filmCard}`}>
              <div className={styles.filmCardMedia}>
                <iframe
                  src="https://www.youtube.com/embed/mjc7CIi_ujc"
                  title="In Texas, These Residents Are Dying To Breathe Clean Air"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none' }}
                />
                <span className={`tag tag--sky ${styles.filmSourceBadge}`}>Investigative</span>
              </div>
              <div className={styles.filmCardBody}>
                <h3>In Texas, Residents Are Dying to Breathe Clean Air</h3>
                <p>
                  National investigative coverage of the health crisis facing residents of
                  the Southern Sector, documenting the direct human cost of racist zoning
                  and illegal toxic dumping.
                </p>
                <a
                  href="https://www.youtube.com/watch?v=mjc7CIi_ujc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-arrow"
                >Watch on YouTube</a>
              </div>
            </div>

            <div className={`card ${styles.filmCard}`}>
              <div className={styles.filmCardMedia}>
                <iframe
                  src="https://www.youtube.com/embed/5QmhmBOAwwE"
                  title="Toxic Shingle Mountain — Blue Star Recycling's Environmental Crisis"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none' }}
                />
                <span className={`tag tag--forest ${styles.filmSourceBadge}`}>2019</span>
              </div>
              <div className={styles.filmCardBody}>
                <h3>Toxic Shingle Mountain: Blue Star Recycling&rsquo;s Crisis</h3>
                <p>
                  The original 2019 reporting that brought the Shingle Mountain crisis to
                  light, exposing how Blue Star Recycling created a toxic mountain of
                  asphalt shingles next to a South Dallas neighborhood.
                </p>
                <a
                  href="https://www.youtube.com/watch?v=5QmhmBOAwwE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-arrow"
                >Watch on YouTube</a>
              </div>
            </div>

            <div className={`card ${styles.filmCard}`}>
              <div className={styles.filmCardMedia}>
                <iframe
                  src="https://www.youtube.com/embed/-pRsbiZcL-o"
                  title="Shingle Mountain Removal Begins"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none' }}
                />
                <span className={`tag tag--gold ${styles.filmSourceBadge}`}>Victory</span>
              </div>
              <div className={styles.filmCardBody}>
                <h3>Shingle Mountain Removal Begins</h3>
                <p>
                  Workers begin removing the shingles that accumulated over three years,
                  marking the start of the community victory Dr. Jackson and Floral Farms
                  residents fought years to achieve.
                </p>
                <a
                  href="https://www.youtube.com/watch?v=-pRsbiZcL-o"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-arrow"
                >Watch on YouTube</a>
              </div>
            </div>
          </div>
          {/* EJ Symposium 2022 */}
          <div className={styles.ejSymposiumWrap}>
            <p className={styles.ejSymposiumLabel}>Community Programming</p>
            <h3 className={styles.ejSymposiumTitle}>Environmental Justice Symposium 2022</h3>
            <div className={styles.ejSymposiumVideo}>
              <iframe
                src="https://www.youtube.com/embed/xi025eH5DMU"
                title="Environmental Justice Symposium 2022 — Southern Sector Rising"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none' }}
              />
            </div>
          </div>

          <div id="juneteenth-freedom-day" className={styles.ejSymposiumWrap}>
            <p className={styles.ejSymposiumLabel}>Event Highlights</p>
            <h3 className={styles.ejSymposiumTitle}>2026 Juneteenth Freedom Day</h3>
            <p className={styles.ejSymposiumDesc}>
              Southern Sector Rising speaks with community residents and advocates for the Sandbranch community to hear their voices and perspectives.
            </p>
            <div className={styles.ejSymposiumVideo}>
              <iframe
                src={EVENT_HIGHLIGHTS_VIDEO_EMBED_URL}
                title="2026 Juneteenth Freedom Day — Southern Sector Rising"
                allow="autoplay; encrypted-media"
                allowFullScreen
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none' }}
              />
            </div>
            <div className={styles.ejSymposiumVideo} style={{ marginTop: '1.5rem' }}>
              <iframe
                src={EVENT_HIGHLIGHTS_VIDEO_EMBED_URL_2}
                title="2026 Juneteenth Freedom Day — Southern Sector Rising — Additional Video"
                allow="autoplay; encrypted-media"
                allowFullScreen
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none' }}
              />
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
              From investigative reporting to victory announcements, here is how the press
              has covered Southern Sector Rising and the fight for environmental justice
              in Southern Dallas.
            </p>
          </div>
          <div className={styles.pressGrid}>
            {PRESS_ARTICLES.map(({ title, outlet, outletTag, type, desc, href }) => (
              <article key={title} className={`card ${styles.pressCard}`}>
                <div className={styles.pressCardHeader}>
                  <span className={`tag ${outletTag}`}>{outlet}</span>
                  <span className={styles.pressType}>{type}</span>
                </div>
                <h3 className={styles.pressTitle}>{title}</h3>
                <p className={styles.pressDesc}>{desc}</p>
                <a href={href} target="_blank" rel="noopener noreferrer" className="link-arrow">Read article</a>
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
                Journalists, documentary filmmakers, and media producers, we welcome your
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
                <a href="mailto:info@southernsectorrising.org" className={styles.contactLink}>
                  info@southernsectorrising.org
                </a>
              </div>
              <div className={styles.contactItem}>
                <IconPhone size={18} />
                <a href="tel:+19728612152" className={styles.contactLink}>
                  (972) 861-2152
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
