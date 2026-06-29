import type { Metadata } from 'next';
import {
  IconMail,
  IconPhone,
  IconPin,
  IconGlobe,
  IconInstagram,
  IconFacebook,
  IconTwitterX,
  IconLinkedIn,
} from '@/components/icons/SocialIcons';
import ContactForm from './ContactForm';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Southern Sector Rising. We welcome questions, partnership inquiries, media requests, and more.',
};

const SOCIAL_LINKS = [
  {
    label: 'Instagram',
    href: 'https://instagram.com/southernsectorrising',
    Icon: IconInstagram,
  },
  {
    label: 'Facebook',
    href: 'https://facebook.com/southernsectorrising',
    Icon: IconFacebook,
  },
  {
    label: 'Twitter / X',
    href: 'https://twitter.com/southernsectorrising',
    Icon: IconTwitterX,
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/company/southernsectorrising',
    Icon: IconLinkedIn,
  },
];

export default function ContactPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroBg} aria-hidden="true">
          <div className={styles.heroOverlay} />
        </div>
        <div className={`${styles.heroContent} container`}>
          <p className="eyebrow">Get in Touch</p>
          <h1 className={styles.heroTitle}>Contact Us</h1>
          <p className={styles.heroSubtitle}>We&rsquo;d Love to Hear From You</p>
          <p className={styles.heroDesc}>
            Whether you have a question, a partnership suggestion, or want to connect,
            our team is here, and we love to hear from you.
          </p>
        </div>
      </section>

      {/* ── Two-Column Contact Layout ── */}
      <section className="section section--cream">
        <div className="container">
          <div className={styles.contactGrid}>

            {/* LEFT: Contact Form */}
            <div className={styles.formColumn}>
              <h2 className={styles.colHeading}>Send Us a Message</h2>
              <p className={styles.colDesc}>
                Fill out the form below and a member of our team will get back to you
                as soon as possible.
              </p>
              <ContactForm />
            </div>

            {/* RIGHT: Contact Info */}
            <div className={styles.infoColumn}>
              <h2 className={styles.colHeading}>Our Information</h2>
              <p className={styles.colDesc}>
                Reach us via phone or email. We are headquartered in
                Dallas, Texas, serving the Southern Sector and beyond.
              </p>

              <div className={styles.infoCards}>
                <div className={styles.infoCard}>
                  <div className={styles.infoIconWrap}>
                    <IconPin size={22} className={styles.infoIcon} />
                  </div>
                  <div className={styles.infoText}>
                    <h3>Mailing Address</h3>
                    <address className={styles.infoDetail}>
                      P.O. Box 411288<br />
                      Dallas, TX 75241
                    </address>
                  </div>
                </div>

                <div className={styles.infoCard}>
                  <div className={styles.infoIconWrap}>
                    <IconPhone size={22} className={styles.infoIcon} />
                  </div>
                  <div className={styles.infoText}>
                    <h3>Phone</h3>
                    <a
                      href="tel:+19728612152"
                      className={styles.infoDetail}
                    >
                      972-861-2152
                    </a>
                  </div>
                </div>

                <div className={styles.infoCard}>
                  <div className={styles.infoIconWrap}>
                    <IconMail size={22} className={styles.infoIcon} />
                  </div>
                  <div className={styles.infoText}>
                    <h3>General Email</h3>
                    <a
                      href="mailto:info@southernsectorrising.org"
                      className={styles.infoDetail}
                    >
                      info@southernsectorrising.org
                    </a>
                  </div>
                </div>

                <div className={styles.infoCard}>
                  <div className={styles.infoIconWrap}>
                    <IconGlobe size={22} className={styles.infoIcon} />
                  </div>
                  <div className={styles.infoText}>
                    <h3>Follow Us</h3>
                    <div className={styles.socialRow}>
                      {SOCIAL_LINKS.map(({ label, href, Icon }) => (
                        <a
                          key={label}
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.socialLink}
                          aria-label={label}
                          title={label}
                        >
                          <Icon size={20} />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Media Inquiries Note */}
              <div className={styles.mediaNote}>
                <h3>Media &amp; Press Inquiries</h3>
                <p>
                  For interview requests, press releases, photo access, or speaking
                  engagements, please contact our media team directly:
                </p>
                <a
                  href="mailto:media@southernsectorrising.org"
                  className={styles.mediaEmail}
                >
                  <IconMail size={16} />
                  media@southernsectorrising.org
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Map Placeholder ── */}
      <section className="section section--sand">
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">Location</p>
            <h2 className="section-title">Based in Dallas, Texas</h2>
            <p className="section-desc">
              Southern Sector Rising operates in and around the Southern Sector
              of Dallas, serving frontline communities fighting for environmental
              and racial justice.
            </p>
          </div>
          <div className={styles.mapWrap}>
            <iframe
              title="Southern Sector Dallas, Texas"
              src="https://maps.google.com/maps?q=75241+Dallas+TX&z=13&output=embed"
              className={styles.mapIframe}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className={styles.mapCard}>
              <IconPin size={24} className={styles.mapCardPin} />
              <div>
                <strong className={styles.mapCardTitle}>Southern Sector, Dallas TX</strong>
                <p className={styles.mapCardSub}>
                  Serving Floral Farms, Sandbranch, and communities across the Southern Sector
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
