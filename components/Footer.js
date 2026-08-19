import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
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
            <a href="https://wa.me/94771995814" className="social-btn" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <i className="fa-brands fa-whatsapp"></i>
            </a>
            <a href="https://www.instagram.com/sparrow.8020/" className="social-btn" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="tel:0771995814" className="social-btn" aria-label="Phone">
              <i className="fa-solid fa-phone"></i>
            </a>
            <a href="mailto:sparrowtravels.kili@gmail.com" className="social-btn" aria-label="Email">
              <i className="fa-solid fa-envelope"></i>
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h5>Pages</h5>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/vehicles">Vehicles</Link></li>
            <li><Link href="/tours">Tours</Link></li>
            <li><Link href="/#pricing">Trip Pricing</Link></li>
            <li><Link href="/booking">Book a Trip</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h5>Destinations</h5>
          <ul>
            <li><Link href="/tours">Sigiriya</Link></li>
            <li><Link href="/tours">Kandy</Link></li>
            <li><Link href="/tours">Ella</Link></li>
            <li><Link href="/tours">Galle</Link></li>
            <li><Link href="/tours">Yala</Link></li>
            <li><Link href="/tours">Jaffna</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h5>Contact Us</h5>
          <p><a href="tel:0771995814" className="footer-location-link">📞 0771995814</a></p>
          <p style={{ marginTop: '.5rem' }}><a href="https://wa.me/94771995814" target="_blank" rel="noopener noreferrer" className="footer-location-link">📱 WhatsApp: 0771995814 (24/7)</a></p>
          <p style={{ marginTop: '.5rem' }}><a href="mailto:sparrowtravels.kili@gmail.com" className="footer-location-link">📧 sparrowtravels.kili@gmail.com</a></p>
          <p style={{ marginTop: '.5rem' }}>
            <a href="https://maps.app.goo.gl/t8DpiuYnVThozSy17" target="_blank" rel="noopener noreferrer" className="footer-location-link">
              📍 Kilinochchi & Northern Province, Sri Lanka (View Map)
            </a>
          </p>
        </div>
      </div>

      <div className="footer-bottom container">
        <span>© 2025 Sparrow Travels. All rights reserved.</span>
        <span>Made with ❤️ for Sri Lanka Tourism</span>
      </div>
    </footer>
  );
}
