import type { Metadata } from 'next';
import Link from 'next/link';
import { IconCheck } from '@/components/icons/SocialIcons';
import DonateWidget from '@/components/sections/DonateWidget';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Get Involved',
  description:
    'Donate, volunteer, join our coalition, or schedule an environmental justice tour. There are many ways to rise with Southern Sector Rising.',
};

const WAY_CARDS = [
  {
    icon: '💛',
    label: 'Donate',
    title: 'Make a Gift',
    desc: 'Your financial support fuels clean water deliveries, EJ tours, community organizing, and coalition-building work across the Southern Sector and beyond.',
    cta: 'Donate Now',
    href: '#donate',
    accent: 'gold',
  },
  {
    icon: '🤝',
    label: 'Volunteer',
    title: 'Volunteer',
    desc: 'From water deliveries in Sandbranch to event support and administrative help, there\u2019s a volunteer role that fits your skills and schedule.',
    cta: 'Sign Up to Volunteer',
    href: '#volunteer',
    accent: 'forest',
  },
  {
    icon: '🌿',
    label: 'Coalition',
    title: 'Join Our Coalition',
    desc: 'Organizations aligned with environmental justice, climate resilience, and racial equity are invited to formally join the SSR coalition of allies.',
    cta: 'Become an Ally',
    href: '/allies#join',
    accent: 'sky',
  },
  {
    icon: '🚌',
    label: 'EJ Tours',
    title: 'Schedule a Tour',
    desc: 'Bring your school, congregation, university, or civic group on an immersive environmental justice tour of Dallas\u2019s Southern Sector.',
    cta: 'Request a Tour',
    href: '#tour',
    accent: 'gold',
  },
];

const INTEREST_AREAS = [
  { id: 'interest-water',      label: 'Water deliveries (Sandbranch)' },
  { id: 'interest-tours',      label: 'EJ Tours' },
  { id: 'interest-organizing', label: 'Community organizing' },
  { id: 'interest-events',     label: 'Events' },
  { id: 'interest-admin',      label: 'Admin / Operations' },
  { id: 'interest-other',      label: 'Other' },
];

const DONATION_TIERS = ['$25', '$50', '$100', '$250', '$500', 'Custom'];

const IMPACT_ITEMS = [
  { amount: '$25',    impact: 'Provides clean water to a Sandbranch family for one month' },
  { amount: '$100',   impact: 'Sponsors one participant on an Environmental Justice Tour' },
  { amount: '$500',   impact: 'Supports a month of community organizing activities' },
  { amount: '$1,000+', impact: 'Helps sustain coalition-building and advocacy work' },
];

export default function GetInvolvedPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroBg} aria-hidden="true">
          <div className={styles.heroOverlay} />
        </div>
        <div className={`${styles.heroContent} container`}>
          <p className="eyebrow">Take Action</p>
          <h1 className={styles.heroTitle}>Get Involved</h1>
          <p className={styles.heroSubtitle}>There Are Many Ways to Rise With Us</p>
          <p className={styles.heroDesc}>
            Whether you give, show up, organize, or amplify \u2014 every act of solidarity
            strengthens the movement for environmental and racial justice in the Southern Sector.
          </p>
        </div>
      </section>

      {/* ── Ways to Get Involved ── */}
      <section className="section section--cream">
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">How to Help</p>
            <h2 className="section-title">Choose Your Path</h2>
            <p className="section-desc">
              No matter your resources or availability, there is a meaningful role for you
              in this work.
            </p>
          </div>
          <div className={styles.waysGrid}>
            {WAY_CARDS.map((way) => (
              <div
                key={way.label}
                className={`card ${styles.wayCard} ${styles[`wayCard--${way.accent}`]}`}
              >
                <div className={styles.wayIcon} aria-hidden="true">{way.icon}</div>
                <div className={styles.wayBody}>
                  <h3 className={styles.wayTitle}>{way.title}</h3>
                  <p className={styles.wayDesc}>{way.desc}</p>
                  <Link
                    href={way.href}
                    className={`btn ${way.accent === 'gold' ? 'btn--gold' : way.accent === 'sky' ? 'btn--outline' : 'btn--primary'}`}
                  >
                    {way.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Volunteer Form ── */}
      <section id="volunteer" className="section section--sand">
        <div className="container">
          <div className={styles.sectionInner}>
            <div className={styles.formIntro}>
              <p className="eyebrow">Volunteer</p>
              <h2>Lend Your Time &amp; Talent</h2>
              <p className="lead">
                Hands-on volunteers are the backbone of our work. Tell us about yourself
                and we\u2019ll match you with the right opportunity.
              </p>
              <ul className={styles.volunteerHighlights}>
                <li>
                  <IconCheck size={18} className={styles.checkIcon} />
                  Water deliveries to Sandbranch residents
                </li>
                <li>
                  <IconCheck size={18} className={styles.checkIcon} />
                  Environmental Justice Tour guides and support
                </li>
                <li>
                  <IconCheck size={18} className={styles.checkIcon} />
                  Community event planning and day-of help
                </li>
                <li>
                  <IconCheck size={18} className={styles.checkIcon} />
                  Administrative and communications support
                </li>
              </ul>
            </div>
            <div className={styles.formCard}>
              <form
                name="volunteer-signup"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                className={styles.form}
              >
                <input type="hidden" name="form-name" value="volunteer-signup" />
                <p style={{ display: 'none' }}><label>Don&rsquo;t fill this out: <input name="bot-field" /></label></p>
                <div className={styles.formRow2}>
                  <div className={styles.formGroup}>
                    <label htmlFor="vol-first">First Name <span aria-hidden="true">*</span></label>
                    <input
                      type="text"
                      id="vol-first"
                      name="first_name"
                      placeholder="First name"
                      required
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="vol-last">Last Name <span aria-hidden="true">*</span></label>
                    <input
                      type="text"
                      id="vol-last"
                      name="last_name"
                      placeholder="Last name"
                      required
                    />
                  </div>
                </div>
                <div className={styles.formRow2}>
                  <div className={styles.formGroup}>
                    <label htmlFor="vol-email">Email Address <span aria-hidden="true">*</span></label>
                    <input
                      type="email"
                      id="vol-email"
                      name="email"
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="vol-phone">Phone Number</label>
                    <input
                      type="tel"
                      id="vol-phone"
                      name="phone"
                      placeholder="(214) 555-0100"
                    />
                  </div>
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="vol-city">City / Zip Code <span aria-hidden="true">*</span></label>
                  <input
                    type="text"
                    id="vol-city"
                    name="city_zip"
                    placeholder="Dallas, TX or 75241"
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="vol-hear">How did you hear about us?</label>
                  <select id="vol-hear" name="how_heard">
                    <option value="">-- Select one --</option>
                    <option value="social-media">Social Media</option>
                    <option value="friend-family">Friend or Family</option>
                    <option value="news-media">News / Media</option>
                    <option value="event">Event or Tour</option>
                    <option value="search">Web Search</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <fieldset className={styles.checkboxFieldset}>
                  <legend>Areas of Interest <span className={styles.optional}>(select all that apply)</span></legend>
                  <div className={styles.checkboxGrid}>
                    {INTEREST_AREAS.map((area) => (
                      <label key={area.id} className={styles.checkboxLabel}>
                        <input
                          type="checkbox"
                          id={area.id}
                          name="interests"
                          value={area.id.replace('interest-', '')}
                        />
                        <span>{area.label}</span>
                      </label>
                    ))}
                  </div>
                </fieldset>
                <div className={styles.formGroup}>
                  <label htmlFor="vol-message">Anything else you&rsquo;d like us to know?</label>
                  <textarea
                    id="vol-message"
                    name="message"
                    rows={4}
                    placeholder="Tell us about your skills, availability, or motivation..."
                  />
                </div>
                <button type="submit" className="btn btn--gold btn--lg">
                  Submit Volunteer Application
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ── Donate Section ── */}
      <section id="donate" className={`section ${styles.donateSection}`}>
        <div className="container">
          <div className={styles.sectionInner}>
            <div className={styles.donateIntro}>
              <p className="eyebrow">Support Our Work</p>
              <h2 className={styles.donateHeading}>Make a Gift</h2>
              <p className={styles.donateSubtext}>
                Your donation funds clean water, justice education, and organizing
                that uplifts frontline communities in Dallas and beyond.
              </p>
              <ul className={styles.impactList}>
                {IMPACT_ITEMS.map((item) => (
                  <li key={item.amount} className={styles.impactItem}>
                    <IconCheck size={16} className={styles.impactCheck} />
                    <span>
                      <strong>{item.amount}</strong> &mdash; {item.impact}
                    </span>
                  </li>
                ))}
              </ul>
              <p className={styles.secureNote}>
                🔒 Secure donation powered by Stripe
              </p>
            </div>
            <div className={styles.donateWidget}>
              <DonateWidget />
            </div>
          </div>
        </div>
      </section>

      {/* ── EJ Tour Request Form ── */}
      <section id="tour" className="section section--sand">
        <div className="container">
          <div className={styles.sectionInner}>
            <div className={styles.formIntro}>
              <p className="eyebrow">Education</p>
              <h2>Schedule an Environmental Justice Tour</h2>
              <p className="lead">
                Bring your group to the frontlines of environmental justice in Dallas.
                Our EJ tours are powerful, firsthand experiences designed for schools,
                universities, faith communities, and civic organizations.
              </p>
              <ul className={styles.volunteerHighlights}>
                <li>
                  <IconCheck size={18} className={styles.checkIcon} />
                  Visit Sandbranch and Floral Farms
                </li>
                <li>
                  <IconCheck size={18} className={styles.checkIcon} />
                  Hear directly from affected community members
                </li>
                <li>
                  <IconCheck size={18} className={styles.checkIcon} />
                  Understand the history of racist zoning in Dallas
                </li>
                <li>
                  <IconCheck size={18} className={styles.checkIcon} />
                  Leave with tools for advocacy and action
                </li>
              </ul>
            </div>
            <div className={styles.formCard}>
              <form
                name="tour-request"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                className={styles.form}
              >
                <input type="hidden" name="form-name" value="tour-request" />
                <p style={{ display: 'none' }}><label>Don&rsquo;t fill this out: <input name="bot-field" /></label></p>
                <div className={styles.formGroup}>
                  <label htmlFor="tour-name">Full Name <span aria-hidden="true">*</span></label>
                  <input
                    type="text"
                    id="tour-name"
                    name="name"
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="tour-org">Organization or School</label>
                  <input
                    type="text"
                    id="tour-org"
                    name="organization"
                    placeholder="Dallas ISD, SMU, First Baptist, etc."
                  />
                </div>
                <div className={styles.formRow2}>
                  <div className={styles.formGroup}>
                    <label htmlFor="tour-email">Email Address <span aria-hidden="true">*</span></label>
                    <input
                      type="email"
                      id="tour-email"
                      name="email"
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="tour-phone">Phone Number</label>
                    <input
                      type="tel"
                      id="tour-phone"
                      name="phone"
                      placeholder="(214) 555-0100"
                    />
                  </div>
                </div>
                <div className={styles.formRow2}>
                  <div className={styles.formGroup}>
                    <label htmlFor="tour-dates">Preferred Date(s) <span aria-hidden="true">*</span></label>
                    <input
                      type="text"
                      id="tour-dates"
                      name="preferred_dates"
                      placeholder="e.g. Any Saturday in April"
                      required
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="tour-size">Group Size <span aria-hidden="true">*</span></label>
                    <input
                      type="text"
                      id="tour-size"
                      name="group_size"
                      placeholder="e.g. 15 students"
                      required
                    />
                  </div>
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="tour-message">Additional Information</label>
                  <textarea
                    id="tour-message"
                    name="message"
                    rows={4}
                    placeholder="Describe your group, any accessibility needs, or specific topics of interest..."
                  />
                </div>
                <button type="submit" className="btn btn--gold btn--lg">
                  Request a Tour
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ── Join Coalition CTA ── */}
      <section className={`section ${styles.coalitionCta}`}>
        <div className="container">
          <div className={styles.coalitionInner}>
            <div>
              <p className="eyebrow">Organizations &amp; Groups</p>
              <h2 className={styles.coalitionTitle}>Join Our Coalition</h2>
              <p className={styles.coalitionDesc}>
                Is your organization working toward environmental justice, climate resilience,
                food sovereignty, or racial equity? We\u2019d love to build together.
                SSR has a network of 150+ allied organizations across Dallas, Texas,
                the nation, and the world.
              </p>
            </div>
            <div className={styles.coalitionAction}>
              <Link href="/allies#join" className="btn btn--gold btn--lg">
                Become an Ally
              </Link>
              <Link href="/allies" className="link-arrow" style={{ color: 'rgba(255,255,255,0.8)' }}>
                See our current allies
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
