'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsMobileOpen(false);

  const isActive = (path) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} id="navbar">
        <div className="container nav-inner">
          <Link href="/" className="nav-logo" onClick={closeMenu}>
            <Image
              src="/images/logo.png"
              alt="Sparrow Travels Logo"
              width={44}
              height={44}
              className="nav-logo-img"
            />
            Sparrow <span className="accent">Travels</span>
          </Link>

          <ul className="nav-links">
            <li>
              <Link href="/" className={isActive('/') ? 'active' : ''}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/vehicles" className={isActive('/vehicles') ? 'active' : ''}>
                Vehicles
              </Link>
            </li>
            <li>
              <Link href="/tours" className={isActive('/tours') ? 'active' : ''}>
                Tours
              </Link>
            </li>
            <li>
              <Link href="/about" className={isActive('/about') ? 'active' : ''}>
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className={isActive('/contact') ? 'active' : ''}>
                Contact
              </Link>
            </li>
          </ul>

          <Link href="/booking" className={`btn btn-accent nav-cta ${isActive('/booking') ? 'active' : ''}`}>
            Book a Trip
          </Link>

          <button
            className="nav-hamburger"
            id="hamburger"
            aria-label="Toggle menu"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div className={`mobile-menu ${isMobileOpen ? 'open' : ''}`} id="mobileMenu">
        <Link href="/" onClick={closeMenu}>Home</Link>
        <Link href="/vehicles" onClick={closeMenu}>Vehicles</Link>
        <Link href="/tours" onClick={closeMenu}>Tours & Destinations</Link>
        <Link href="/about" onClick={closeMenu}>About Us</Link>
        <Link href="/contact" onClick={closeMenu}>Contact</Link>
        <Link href="/booking" onClick={closeMenu} style={{ color: 'var(--accent)', fontWeight: 700 }}>
          📋 Book a Trip
        </Link>
      </div>
    </>
  );
}
