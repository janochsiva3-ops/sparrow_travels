import Link from 'next/link';
import BookingForm from '@/components/BookingForm';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Book a Trip – Northern Province Transport | Sparrow Travels Sri Lanka',
  description:
    'Book comfortable van & car transport from Northern Province Sri Lanka (Kilinochchi, Jaffna, Vavuniya, Mullaitivu, Mannar) to BIA Airport & island-wide. Instant WhatsApp confirmation.',
};

export default function BookingPage() {
  return (
    <>
      {/* PAGE HERO */}
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link> <span>/</span> <span>Booking</span>
          </div>
          <h1>Northern Province Trip Booking</h1>
          <p>
            Reliable van & car transfers from Kilinochchi, Jaffna, Vavuniya, Mullaitivu, and Mannar to BIA Airport, Colombo & Island-Wide.
          </p>
        </div>
      </div>

      {/* BOOKING FORM SECTION */}
      <section className="section" style={{ background: 'var(--bg)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 360px', gap: '3rem', alignItems: 'start' }} className="booking-layout">
            {/* Booking Form */}
            <BookingForm />

            {/* Sidebar Info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div className="card" style={{ padding: '1.75rem' }}>
                <h4 style={{ color: 'var(--primary)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '.5rem' }}>
                  <i className="fa-solid fa-shield-halved" style={{ color: 'var(--accent)' }}></i> Why Book With Us?
                </h4>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '.85rem', fontSize: '.9rem' }}>
                  <li style={{ display: 'flex', gap: '.6rem', alignItems: 'flex-start' }}>
                    <span style={{ color: 'var(--accent)', fontWeight: 'bold' }}>✓</span> 24/7 Island-Wide Airport Pickup & Drop
                  </li>
                  <li style={{ display: 'flex', gap: '.6rem', alignItems: 'flex-start' }}>
                    <span style={{ color: 'var(--accent)', fontWeight: 'bold' }}>✓</span> Toyota KDH AC Vans & Wagons
                  </li>
                  <li style={{ display: 'flex', gap: '.6rem', alignItems: 'flex-start' }}>
                    <span style={{ color: 'var(--accent)', fontWeight: 'bold' }}>✓</span> Professional, Polite & Experienced Driver
                  </li>
                  <li style={{ display: 'flex', gap: '.6rem', alignItems: 'flex-start' }}>
                    <span style={{ color: 'var(--accent)', fontWeight: 'bold' }}>✓</span> Transparent Quotes — No Hidden Charges
                  </li>
                  <li style={{ display: 'flex', gap: '.6rem', alignItems: 'flex-start' }}>
                    <span style={{ color: 'var(--accent)', fontWeight: 'bold' }}>✓</span> Instant WhatsApp Confirmation
                  </li>
                </ul>
              </div>

              <div className="card" style={{ padding: '1.75rem', background: 'var(--primary)', color: 'var(--white)' }}>
                <h4 style={{ color: 'var(--white)', marginBottom: '.5rem' }}>Prefer Direct WhatsApp?</h4>
                <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '.88rem', marginBottom: '1.25rem' }}>
                  Need an immediate response? Message our booking team on WhatsApp directly.
                </p>
                <a
                  href="https://wa.me/94771995814"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-accent btn-full"
                >
                  <i className="fa-brands fa-whatsapp"></i> WhatsApp 0771995814
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
