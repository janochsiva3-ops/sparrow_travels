import Link from 'next/link';
import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'Contact Us – Sparrow Travels Sri Lanka',
  description:
    'Contact Sparrow Travels via WhatsApp, phone, email, or Facebook. We are available 24/7 to help plan your perfect Sri Lanka trip.',
};

export default function ContactPage() {
  return (
    <>
      {/* PAGE HERO */}
      <div className="contact-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link> <span>/</span> <span>Contact</span>
          </div>
          <h1>Get in Touch</h1>
          <p>We are available 24/7. Reach us via WhatsApp or Phone for the fastest response — we typically reply within minutes.</p>
        </div>
      </div>

      {/* CONTACT CHANNELS */}
      <section className="section">
        <div className="container">
          {/* Quick Contact Cards */}
          <div className="grid-4 mb-4">
            <a
              href="https://wa.me/94771995814"
              target="_blank"
              rel="noopener noreferrer"
              className="card"
              style={{ padding: '1.75rem', textAlign: 'center', textDecoration: 'none', display: 'block' }}
            >
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  background: '#f0fdf4',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.6rem',
                  margin: '0 auto 1rem',
                  color: '#25d366',
                }}
              >
                <i className="fa-brands fa-whatsapp"></i>
              </div>
              <h4>WhatsApp</h4>
              <p style={{ fontSize: '.85rem', marginBottom: '.5rem' }}>Fastest way to reach us</p>
              <span style={{ fontSize: '.88rem', fontWeight: 600, color: 'var(--primary)' }}>0771995814</span>
            </a>

            <a
              href="tel:0771995814"
              className="card"
              style={{ padding: '1.75rem', textAlign: 'center', textDecoration: 'none', display: 'block' }}
            >
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  background: 'rgba(26,58,92,.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.6rem',
                  margin: '0 auto 1rem',
                  color: 'var(--primary)',
                }}
              >
                <i className="fa-solid fa-phone"></i>
              </div>
              <h4>Voice Call</h4>
              <p style={{ fontSize: '.85rem', marginBottom: '.5rem' }}>Call us anytime 24/7</p>
              <span style={{ fontSize: '.88rem', fontWeight: 600, color: 'var(--primary)' }}>0771995814</span>
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="card"
              style={{ padding: '1.75rem', textAlign: 'center', textDecoration: 'none', display: 'block' }}
            >
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  background: 'rgba(24,119,242,.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.6rem',
                  margin: '0 auto 1rem',
                  color: '#1877f2',
                }}
              >
                <i className="fa-brands fa-facebook-f"></i>
              </div>
              <h4>Facebook</h4>
              <p style={{ fontSize: '.85rem', marginBottom: '.5rem' }}>Find us on Facebook</p>
              <span style={{ fontSize: '.88rem', fontWeight: 600, color: '#1877f2' }}>Sparrow Travels</span>
            </a>

            <a
              href="mailto:sparrowtravels.kili@gmail.com"
              className="card"
              style={{ padding: '1.75rem', textAlign: 'center', textDecoration: 'none', display: 'block' }}
            >
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  background: 'rgba(200,150,12,.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.6rem',
                  margin: '0 auto 1rem',
                  color: 'var(--accent)',
                }}
              >
                <i className="fa-solid fa-envelope"></i>
              </div>
              <h4>Email</h4>
              <p style={{ fontSize: '.85rem', marginBottom: '.5rem' }}>Send us a message</p>
              <span style={{ fontSize: '.82rem', fontWeight: 600, color: 'var(--primary)', wordBreak: 'break-all' }}>
                sparrowtravels.kili@gmail.com
              </span>
            </a>
          </div>

          {/* Contact Form + Map */}
          <div className="contact-grid">
            {/* Left: Contact Form */}
            <div>
              <p className="section-label">Send a Message</p>
              <h2 className="section-title" style={{ fontSize: '1.75rem' }}>
                We&apos;d Love to Hear From You
              </h2>
              <div className="divider"></div>
              <p style={{ marginBottom: '2rem' }}>
                Have a question about our services, destinations, or want to discuss a custom tour package? Send us a message and we will get back to you as soon as possible.
              </p>

              <ContactForm />
            </div>

            {/* Right: Map + Info */}
            <div>
              <p className="section-label">Our Location</p>
              <h2 className="section-title" style={{ fontSize: '1.75rem' }}>
                Find Us in Sri Lanka
              </h2>
              <div className="divider"></div>

              <div style={{ marginBottom: '1.5rem' }}>
                <a href="https://wa.me/94771995814" target="_blank" rel="noopener noreferrer" className="contact-info-card">
                  <div className="contact-info-icon" style={{ background: '#f0fdf4', color: '#25d366' }}>
                    <i className="fa-brands fa-whatsapp"></i>
                  </div>
                  <div className="contact-info-text">
                    <h4>WhatsApp (Fastest)</h4>
                    <p>0771995814</p>
                  </div>
                </a>
                <a href="tel:0771995814" className="contact-info-card">
                  <div className="contact-info-icon">
                    <i className="fa-solid fa-phone"></i>
                  </div>
                  <div className="contact-info-text">
                    <h4>Voice Call</h4>
                    <p>0771995814</p>
                  </div>
                </a>
                <a href="mailto:sparrowtravels.kili@gmail.com" className="contact-info-card">
                  <div className="contact-info-icon">
                    <i className="fa-solid fa-envelope"></i>
                  </div>
                  <div className="contact-info-text">
                    <h4>Email</h4>
                    <p>sparrowtravels.kili@gmail.com</p>
                  </div>
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="contact-info-card">
                  <div className="contact-info-icon" style={{ color: '#1877f2' }}>
                    <i className="fa-brands fa-facebook-f"></i>
                  </div>
                  <div className="contact-info-text">
                    <h4>Facebook</h4>
                    <p>Sparrow Travels Sri Lanka</p>
                  </div>
                </a>
                <a href="https://www.instagram.com/sparrow.8020/" target="_blank" rel="noopener noreferrer" className="contact-info-card">
                  <div className="contact-info-icon" style={{ color: '#e1306c' }}>
                    <i className="fa-brands fa-instagram"></i>
                  </div>
                  <div className="contact-info-text">
                    <h4>Instagram</h4>
                    <p>sparrow.8020</p>
                  </div>
                </a>
                <a href="https://maps.app.goo.gl/t8DpiuYnVThozSy17" target="_blank" rel="noopener noreferrer" className="contact-info-card">
                  <div className="contact-info-icon" style={{ color: 'var(--accent)' }}>
                    <i className="fa-solid fa-location-dot"></i>
                  </div>
                  <div className="contact-info-text">
                    <h4>Location</h4>
                    <p>Kilinochchi & Northern Province, Sri Lanka (Click to Open Map 📍)</p>
                  </div>
                </a>
              </div>

              {/* Google Maps iframe */}
              <div className="map-wrap">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15746.70676006087!2d80.39091203792044!3d9.36185112344643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afe950032aa2353%3A0x62b6b19a7625a24b!2sSparrow%20Travels!5e0!3m2!1sen!2slk!4v1786297249630!5m2!1sen!2slk"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section-alt">
        <div className="container">
          <div className="text-center mb-4">
            <p className="section-label">Quick Answers</p>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <div className="divider"></div>
          </div>
          <div className="grid-2">
            <div className="card">
              <div className="card-body">
                <h4 style={{ marginBottom: '.5rem' }}>⏰ What are your operating hours?</h4>
                <p style={{ fontSize: '.9rem' }}>We are available 24/7 via WhatsApp and phone calls at 0771995814.</p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h4 style={{ marginBottom: '.5rem' }}>⚡ How quickly do you respond?</h4>
                <p style={{ fontSize: '.9rem' }}>WhatsApp messages and phone calls are answered immediately or within minutes.</p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h4 style={{ marginBottom: '.5rem' }}>💳 How do I confirm a booking?</h4>
                <p style={{ fontSize: '.9rem' }}>
                  Simply fill in our booking form or message us on WhatsApp at 0771995814. We will discuss the details and confirm your booking. No upfront payment required to enquire.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h4 style={{ marginBottom: '.5rem' }}>🌍 Do you serve international tourists?</h4>
                <p style={{ fontSize: '.9rem' }}>
                  Absolutely! We specialise in serving international tourists. Our team speaks English and we are experienced in handling tourists from all over the world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
