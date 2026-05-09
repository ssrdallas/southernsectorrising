import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import EventsSignupForm from './EventsSignupForm';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Events',
  description:
    'Join Southern Sector Rising at upcoming events — from our annual Juneteenth celebration to monthly community organizing meetings and water delivery volunteer days.',
};

const EVENTS = [
  {
    month: 'Ongoing',
    day: null,
    tag: 'Volunteer',
    tagClass: 'tag--sky',
    title: 'Sandbranch Water Deliveries',
    desc: 'Sandbranch is an 87% Black freedmen\u2019s town in Dallas County still without a functioning public water system. Volunteers help deliver clean water directly to residents who depend on it every week.',
    cta: 'Sign Up to Volunteer',
    href: '/get-involved#volunteer',
    featured: false,
  },
  {
    month: 'Monthly',
    day: null,
    tag: 'Education',
    tagClass: 'tag--gold',
    title: 'Environmental Justice Tours',
    desc: 'Experience firsthand the communities impacted by racist zoning, illegal dumping, and industrial pollution in the Dallas Southern Sector. Tours are available for schools, universities, faith communities, and civic organizations.',
    cta: 'Schedule a Tour',
    href: '/get-involved#tour',
    featured: false,
  },
  {
    month: 'Monthly',
    day: null,
    tag: 'Community',
    tagClass: 'tag--forest',
    title: 'Community Organizing Meeting',
    desc: 'An open community meeting where residents, advocates, and allies come together to discuss ongoing campaigns, share updates, and plan action. All are welcome.',
    cta: 'Get Meeting Info',
    href: '/contact',
    featured: false,
    location: 'Dallas, TX \u2014 address provided upon RSVP',
  },
];

const PAST_EVENTS = [
  {
    title: 'Juneteenth Celebrations',
    desc: 'Each year, SSR hosts a Juneteenth celebration honoring freedom, history, and the ongoing fight for justice in the Southern Sector. Past celebrations have featured local artists, speakers, community resources, and food.',
  },
  {
    title: 'Shingle Mountain Victory Celebration',
    desc: 'After years of organizing, SSR and community partners celebrated the removal of Shingle Mountain \u2014 a 70-foot-tall illegal dump of toxic roofing shingles \u2014 from the Floral Farms neighborhood in South Dallas.',
  },
];

export default function EventsPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroBg} aria-hidden="true">
          <div className={styles.heroOverlay} />
        </div>
        <div className={`${styles.heroContent} container`}>
          <p className="eyebrow">Community &amp; Action</p>
          <h1 className={styles.heroTitle}>Events</h1>
          <p className={styles.heroSubtitle}>Join the Movement</p>
          <p className={styles.heroDesc}>
            From Juneteenth celebrations to water deliveries and environmental justice tours,
            every event is an opportunity to connect, act, and rise together.
          </p>
          <div className={styles.heroCta}>
            <a href="#featured" className="btn btn--gold btn--lg">See Upcoming Events</a>
            <a href="#stay-informed" className="btn btn--outline-white btn--lg">Get Updates</a>
          </div>
        </div>
      </section>

      {/* ── Featured Event ── */}
      <section id="featured" className={`section section--cream ${styles.featuredSection}`}>
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">Featured Event</p>
            <h2 className="section-title">Don&rsquo;t Miss This Year&rsquo;s Celebration</h2>
          </div>
          <article className={styles.featuredCard}>
            <div className={styles.featuredDate}>
              <span className={styles.featuredMonth}>June</span>
              <span className={styles.featuredDay}>20</span>
              <span className={styles.featuredYear}>2026</span>
            </div>
            <div className={styles.featuredImg}>
              <Image src="/images/events/juneteenth-2025.jpg" fill alt="Juneteenth celebration — Southern Sector Rising community event" style={{ objectFit: 'cover', objectPosition: 'center top' }} />
            </div>
            <div className={styles.featuredBody}>
              <div className={styles.featuredMeta}>
                <span className="tag tag--gold">Annual Celebration</span>
                <span className={styles.featuredLocation}>
                  Dallas, TX &mdash; Location TBA
                </span>
              </div>
              <h2 className={styles.featuredTitle}>Juneteenth 2026</h2>
              <p className={styles.featuredDesc}>
                Join Southern Sector Rising for our annual Juneteenth celebration honoring
                freedom, community, and the ongoing fight for justice. This is more than a
                commemoration \u2014 it\u2019s a call to action. Featuring local artists,
                speakers, community resources, live music, and food. All are welcome.
              </p>
              <p className={styles.featuredDesc}>
                Juneteenth marks the day in 1865 when enslaved people in Texas learned of
                their freedom. We celebrate that history while renewing our commitment to the
                environmental, economic, and racial justice work that continues today.
              </p>
              <div className={styles.featuredActions}>
                <a href="#stay-informed" className="btn btn--gold btn--lg">Get Event Updates</a>
                <Link href="/get-involved#volunteer" className="btn btn--outline btn--lg">Volunteer at This Event</Link>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* ── Events Grid ── */}
      <section className="section section--sand">
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">Ongoing &amp; Monthly</p>
            <h2 className="section-title">Ways to Show Up Year-Round</h2>
            <p className="section-desc">
              These recurring programs are the heartbeat of our organizing work.
              Jump in whenever you\u2019re ready.
            </p>
          </div>
          <div className={styles.eventsGrid}>
            {EVENTS.map((event) => (
              <article key={event.title} className={`card ${styles.eventCard}`}>
                <div className={styles.eventDateBlock}>
                  <span className={styles.eventMonth}>{event.month}</span>
                  {event.day && <span className={styles.eventDay}>{event.day}</span>}
                </div>
                <div className={styles.eventBody}>
                  <span className={`tag ${event.tagClass}`}>{event.tag}</span>
                  <h3 className={styles.eventTitle}>{event.title}</h3>
                  <p className={styles.eventDesc}>{event.desc}</p>
                  {event.location && (
                    <p className={styles.eventLocation}>
                      <span aria-hidden="true">&#128205;</span> {event.location}
                    </p>
                  )}
                  <Link href={event.href} className="btn btn--primary">
                    {event.cta}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Past Events ── */}
      <section className="section section--cream">
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">Our History</p>
            <h2 className="section-title">Past Events &amp; Milestones</h2>
            <p className="section-desc">
              Every gathering has been a step forward. Here are some of the moments
              that have shaped our movement.
            </p>
          </div>
          <div className={styles.pastGrid}>
            {PAST_EVENTS.map((item) => (
              <div key={item.title} className={styles.pastCard}>
                <div className={styles.pastAccent} aria-hidden="true" />
                <div className={styles.pastBody}>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link href="/media" className="link-arrow">See press coverage of our milestones</Link>
          </div>
        </div>
      </section>

      {/* ── Stay Informed CTA ── */}
      <section id="stay-informed" className={`section ${styles.ctaSection}`}>
        <div className="container">
          <div className={styles.ctaInner}>
            <div className={styles.ctaText}>
              <p className="eyebrow">Stay Connected</p>
              <h2 className={styles.ctaTitle}>Stay Informed</h2>
              <p>
                Sign up to receive event announcements, volunteer opportunities, and
                updates from Southern Sector Rising directly in your inbox.
              </p>
            </div>
            <div className={styles.ctaForm}>
              <EventsSignupForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
