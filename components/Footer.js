'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const [openSections, setOpenSections] = useState({
    pages: false,
    destinations: false,
    contact: false,
  });

  const toggleSection = (sectionKey) => {
    setOpenSections((prev) => ({
      ...prev,
      [sectionKey]: !prev[sectionKey],
    }));
  };

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <div className="logo" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Image
              src="/images/logo.png"
              alt="Sparrow Travels Logo"
              width={40}
              height={40}
              style={{ height: '40px', width: 'auto', borderRadius: 0, background: 'transparent' }}
            />
            <span>
              Sparrow <span style={{ color: 'var(--accent-lt)' }}>Travels</span>
            </span>
          </div>
          <p style={{ marginTop: '0.75rem' }}>
            We provide reliable and comfortable van services in Sri Lanka. Airport pickup and drop, private tours, and long-distance travel. Available 24/7.
          </p>
          <div className="footer-social">
            <a href="https://wa.me/94754013974" className="social-btn" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <i className="fa-brands fa-whatsapp"></i>
            </a>
            <a href="https://www.facebook.com/profile.php?id=61577481892059&mibextid=wwXIfr" className="social-btn" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="https://www.instagram.com/sparrow.8020/" className="social-btn" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="tel:0754013974" className="social-btn" aria-label="Phone">
              <i className="fa-solid fa-phone"></i>
            </a>
            <a href="mailto:sparrowtravels.kili@gmail.com" className="social-btn" aria-label="Email">
              <i className="fa-solid fa-envelope"></i>
            </a>
          </div>
        </div>

        <div className={`footer-col ${openSections.pages ? 'open' : ''}`}>
          <h5
            className="footer-heading"
            onClick={() => toggleSection('pages')}
            role="button"
            tabIndex={0}
            aria-expanded={openSections.pages}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleSection('pages');
              }
            }}
          >
            <span>Pages</span>
            <i className="fa-solid fa-chevron-down accordion-icon" aria-hidden="true"></i>
          </h5>
          <div className="footer-col-content">
            <ul className="footer-col-content-inner">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/vehicles">Vehicles</Link></li>
              <li><Link href="/tours">Tours</Link></li>
              <li><Link href="/#pricing">Trip Pricing</Link></li>
              <li><Link href="/booking">Book a Trip</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className={`footer-col ${openSections.destinations ? 'open' : ''}`}>
          <h5
            className="footer-heading"
            onClick={() => toggleSection('destinations')}
            role="button"
            tabIndex={0}
            aria-expanded={openSections.destinations}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleSection('destinations');
              }
            }}
          >
            <span>Destinations</span>
            <i className="fa-solid fa-chevron-down accordion-icon" aria-hidden="true"></i>
          </h5>
          <div className="footer-col-content">
            <ul className="footer-col-content-inner">
              <li><Link href="/tours">Sigiriya</Link></li>
              <li><Link href="/tours">Kandy</Link></li>
              <li><Link href="/tours">Ella</Link></li>
              <li><Link href="/tours">Galle</Link></li>
              <li><Link href="/tours">Yala</Link></li>
              <li><Link href="/tours">Jaffna</Link></li>
            </ul>
          </div>
        </div>

        <div className={`footer-col ${openSections.contact ? 'open' : ''}`}>
          <h5
            className="footer-heading"
            onClick={() => toggleSection('contact')}
            role="button"
            tabIndex={0}
            aria-expanded={openSections.contact}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleSection('contact');
              }
            }}
          >
            <span>Contact Us</span>
            <i className="fa-solid fa-chevron-down accordion-icon" aria-hidden="true"></i>
          </h5>
          <div className="footer-col-content">
            <div className="footer-col-content-inner">
              <p><a href="tel:0754013974" className="footer-location-link">📞 0754013974</a></p>
              <p style={{ marginTop: '.5rem' }}><a href="https://wa.me/94754013974" target="_blank" rel="noopener noreferrer" className="footer-location-link">📱 WhatsApp: 0754013974 (24/7)</a></p>
              <p style={{ marginTop: '.5rem' }}><a href="mailto:sparrowtravels.kili@gmail.com" className="footer-location-link">📧 sparrowtravels.kili@gmail.com</a></p>
              <p style={{ marginTop: '.5rem' }}>
                <a href="https://maps.app.goo.gl/t8DpiuYnVThozSy17" target="_blank" rel="noopener noreferrer" className="footer-location-link">
                  📍 Kilinochchi & Northern Province, Sri Lanka (View Map)
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom container">
        <span>© 2025 Sparrow Travels. All rights reserved.</span>
        <span>Made with ❤️ for Sri Lanka Tourism</span>
      </div>
    </footer>
  );
}
