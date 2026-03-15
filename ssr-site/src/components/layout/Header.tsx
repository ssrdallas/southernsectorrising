'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import LogoIcon from '@/components/icons/LogoIcon';
import styles from './Header.module.css';

const NAV_LINKS = [
  { href: '/about',        label: 'About' },
  { href: '/our-work',     label: 'Our Work' },
  { href: '/impact',       label: 'Impact' },
  { href: '/global-reach', label: 'Global Reach' },
  { href: '/allies',       label: 'Allies' },
  { href: '/media',        label: 'Media' },
  { href: '/events',       label: 'Events' },
  { href: '/contact',      label: 'Contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // close menu on route change
  useEffect(() => setMenuOpen(false), [pathname]);

  return (
    <>
      <div className="announcement-bar">
        Dr. Marsha Jackson represents SSR as delegate in{' '}
        <a href="/global-reach">Kenya & Rome</a> for global climate justice
      </div>

      <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
        <nav className={styles.nav}>
          {/* Logo */}
          <Link href="/" className={styles.logo}>
            <span className={styles.logoIcon}>
              <LogoIcon size={40} />
            </span>
            <span className={styles.logoText}>
              <span className={styles.logoMain}>Southern Sector Rising</span>
              <span className={styles.logoSub}>Local Roots. Global Impact.</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <ul className={styles.navLinks}>
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`${styles.navLink} ${pathname.startsWith(href) ? styles.active : ''}`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <Link href="/get-involved#donate" className="btn btn--gold btn--sm">
            Donate
          </Link>

          {/* Mobile hamburger */}
          <button
            className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span /><span /><span />
          </button>
        </nav>

        {/* Mobile drawer */}
        <div className={`${styles.drawer} ${menuOpen ? styles.drawerOpen : ''}`}>
          <ul>
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className={styles.drawerLink}>{label}</Link>
              </li>
            ))}
            <li>
              <Link href="/get-involved#donate" className={`btn btn--gold ${styles.drawerDonate}`}>
                Donate
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}
