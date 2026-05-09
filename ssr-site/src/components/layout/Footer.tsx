import Link from 'next/link';
import LogoIcon from '@/components/icons/LogoIcon';
import { IconInstagram, IconFacebook, IconTwitterX, IconLinkedIn } from '@/components/icons/SocialIcons';
import NewsletterForm from './NewsletterForm';
import styles from './Footer.module.css';

const SOCIAL = [
  { label: 'Instagram', href: 'https://www.instagram.com/southernsectorrising',         Icon: IconInstagram },
  { label: 'Facebook',  href: 'https://www.facebook.com/southernsectorrising',           Icon: IconFacebook  },
  { label: 'X',         href: 'https://twitter.com/SSRising_Org',                        Icon: IconTwitterX  },
  { label: 'LinkedIn',  href: 'https://www.linkedin.com/company/southern-sector-rising', Icon: IconLinkedIn  },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>

          {/* Brand column */}
          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>
              <LogoIcon size={36} />
              <span>Southern Sector Rising</span>
            </Link>
            <p className={styles.mission}>
              Fighting environmental, economic, and racial inequities through education,
              coalition building, policy advocacy, and mutual aid.
            </p>
            <div className={styles.social}>
              {SOCIAL.map(({ label, href, Icon }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                   aria-label={label} className={styles.socialIcon}>
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Organization links */}
          <div className={styles.col}>
            <h4>Organization</h4>
            <ul>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/about#leadership">Leadership</Link></li>
              <li><Link href="/impact">Impact Reports</Link></li>
              <li><Link href="/media">Press &amp; Media</Link></li>
            </ul>
          </div>

          {/* Work links */}
          <div className={styles.col}>
            <h4>Our Work</h4>
            <ul>
              <li><Link href="/our-work">Programs</Link></li>
              <li><Link href="/global-reach">International Work</Link></li>
              <li><Link href="/allies">Our Allies</Link></li>
              <li><Link href="/impact">Our Impact</Link></li>
            </ul>
          </div>

          {/* Get involved links */}
          <div className={styles.col}>
            <h4>Get Involved</h4>
            <ul>
              <li><Link href="/get-involved#donate">Donate</Link></li>
              <li><Link href="/get-involved#volunteer">Volunteer</Link></li>
              <li><Link href="/events">Events</Link></li>
              <li><Link href="/allies#join">Join Our Coalition</Link></li>
            </ul>
          </div>

          {/* Contact + newsletter */}
          <div className={styles.contactCol}>
            <h4>Contact</h4>
            <address className={styles.address}>
              <p>P.O. Box 411288<br />Dallas, TX 75241</p>
              <p><a href="tel:9728612152">972-861-2152</a></p>
              <p><a href="mailto:info@southernsectorrising.org">info@southernsectorrising.org</a></p>
            </address>
            <div className={styles.newsletter}>
              <h4>Stay Updated</h4>
              <NewsletterForm />
            </div>
          </div>

        </div>

        <div className={styles.bottom}>
          <p>© {new Date().getFullYear()} Southern Sector Rising. All rights reserved.</p>
          <p className={styles.credit}>Designed by Chisom Oge Nwike</p>
        </div>
      </div>
    </footer>
  );
}
