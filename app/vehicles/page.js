import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Our Vehicles – Sparrow Travels Sri Lanka',
  description:
    "Explore Sparrow Travels' fleet of comfortable, air-conditioned vehicles in Sri Lanka: Toyota KDH Van, Budget Car (Wagon R), and Mini Bus.",
};

export default function VehiclesPage() {
  return (
    <>
      {/* PAGE HERO */}
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link> <span>/</span> <span>Vehicles</span>
          </div>
          <h1>Our Vehicle Fleet</h1>
          <p>Clean, well-maintained, air-conditioned vehicles with professional drivers for your Sri Lanka journey.</p>
        </div>
      </div>

      {/* VEHICLES SECTION */}
      <section className="section">
        <div className="container">
          {/* Info Banner */}
          <div
            style={{
              background: 'rgba(26,58,92,0.05)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-md)',
              padding: '1.25rem 1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              marginBottom: '3rem',
            }}
          >
            <span style={{ fontSize: '1.5rem' }}>ℹ️</span>
            <p style={{ margin: 0, fontSize: '.9rem', color: 'var(--text)' }}>
              All our vehicles include a <strong>friendly professional driver</strong> and <strong>air conditioning</strong>. Call <strong>0771995814</strong> or message on WhatsApp for custom quotes.
            </p>
          </div>

          <div className="grid-3">
            {/* Vehicle 1: Toyota KDH Van */}
            <div className="vehicle-card">
              <div className="vehicle-img-wrap">
                <Image
                  src="/images/vehicle_kdh.png"
                  alt="Toyota KDH Van"
                  width={400}
                  height={260}
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <div className="vehicle-body">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '.25rem' }}>
                  <h3>🚐 Toyota KDH Van</h3>
                  <span className="badge badge-green">Most Popular</span>
                </div>
                <p className="vehicle-subtitle">Air Conditioned | Professional Driver</p>
                <div className="vehicle-specs">
                  <div className="vehicle-spec"><span className="spec-icon">👥</span> 10 - 14 Seats</div>
                  <div className="vehicle-spec"><span className="spec-icon">❄️</span> Dual Air Conditioning</div>
                  <div className="vehicle-spec"><span className="spec-icon">🧳</span> Large Luggage Capacity</div>
                  <div className="vehicle-spec"><span className="spec-icon">🧑‍✈️</span> Chauffeur Included</div>
                  <div className="vehicle-spec"><span className="spec-icon">🔌</span> USB Phone Charging</div>
                  <div className="vehicle-spec"><span className="spec-icon">🎵</span> Music & Entertainment</div>
                </div>
                <div className="vehicle-price">
                  <div style={{ fontSize: '.92rem', fontWeight: 600, color: 'var(--primary)' }}>
                    <i className="fa-solid fa-tags" style={{ color: 'var(--accent)', marginRight: '.4rem' }}></i>
                    Contact us for custom best rates & itinerary offers
                  </div>
                </div>
                <Link href="/booking?vehicle=Toyota KDH Van" className="btn btn-accent btn-full">
                  <i className="fa-solid fa-calendar-check"></i> Book Toyota KDH
                </Link>
              </div>
            </div>

            {/* Vehicle 2: Budget Car (Wagon R) */}
            <div className="vehicle-card">
              <div className="vehicle-img-wrap" style={{ background: 'var(--bg2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ textAlign: 'center', padding: '2rem' }}>
                  <div style={{ fontSize: '4.5rem', marginBottom: '0.5rem' }}>🚙</div>
                  <p style={{ color: 'var(--text)', fontWeight: 700, fontSize: '0.95rem', margin: 0 }}>Suzuki Wagon R</p>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', margin: 0 }}>Budget Car</p>
                </div>
              </div>
              <div className="vehicle-body">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '.25rem' }}>
                  <h3>🚙 Budget Car (Wagon R)</h3>
                  <span className="badge badge-accent">Best Value</span>
                </div>
                <p className="vehicle-subtitle">Affordable Solo & Couple Travel | Air Conditioned</p>
                <div className="vehicle-specs">
                  <div className="vehicle-spec"><span className="spec-icon">👥</span> 1 - 3 Seats</div>
                  <div className="vehicle-spec"><span className="spec-icon">❄️</span> Air Conditioned</div>
                  <div className="vehicle-spec"><span className="spec-icon">🧳</span> Boot Luggage Storage</div>
                  <div className="vehicle-spec"><span className="spec-icon">🧑‍✈️</span> Driver Included</div>
                  <div className="vehicle-spec"><span className="spec-icon">⛽</span> Super Fuel Efficient</div>
                  <div className="vehicle-spec"><span className="spec-icon">💰</span> Affordable Pricing</div>
                </div>
                <div className="vehicle-price">
                  <div style={{ fontSize: '.92rem', fontWeight: 600, color: 'var(--primary)' }}>
                    <i className="fa-solid fa-tags" style={{ color: 'var(--accent)', marginRight: '.4rem' }}></i>
                    Contact us for custom best rates & itinerary offers
                  </div>
                </div>
                <Link href="/booking?vehicle=Budget Car (Wagon R)" className="btn btn-accent btn-full">
                  <i className="fa-solid fa-calendar-check"></i> Book Wagon R
                </Link>
              </div>
            </div>

            {/* Vehicle 3: Mini Bus */}
            <div className="vehicle-card">
              <div className="vehicle-img-wrap" style={{ background: 'var(--bg2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ textAlign: 'center', padding: '2rem' }}>
                  <div style={{ fontSize: '4.5rem', marginBottom: '0.5rem' }}>🚌</div>
                  <p style={{ color: 'var(--text)', fontWeight: 700, fontSize: '0.95rem', margin: 0 }}>Tourist Mini Bus</p>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', margin: 0 }}>Group Coach</p>
                </div>
              </div>
              <div className="vehicle-body">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '.25rem' }}>
                  <h3>🚌 Mini Bus</h3>
                  <span className="badge badge-primary">Large Groups</span>
                </div>
                <p className="vehicle-subtitle">Spacious Group Transport | Full AC & Reclining Seats</p>
                <div className="vehicle-specs">
                  <div className="vehicle-spec"><span className="spec-icon">👥</span> 15 - 30 Seats</div>
                  <div className="vehicle-spec"><span className="spec-icon">❄️</span> Full Climate Control AC</div>
                  <div className="vehicle-spec"><span className="spec-icon">🧳</span> Large Group Luggage Space</div>
                  <div className="vehicle-spec"><span className="spec-icon">🧑‍✈️</span> Experienced Tour Driver</div>
                  <div className="vehicle-spec"><span className="spec-icon">💺</span> Comfortable Reclining Seats</div>
                  <div className="vehicle-spec"><span className="spec-icon">🎵</span> PA System & Audio</div>
                </div>
                <div className="vehicle-price">
                  <div style={{ fontSize: '.92rem', fontWeight: 600, color: 'var(--primary)' }}>
                    <i className="fa-solid fa-tags" style={{ color: 'var(--accent)', marginRight: '.4rem' }}></i>
                    Contact us for custom best rates & itinerary offers
                  </div>
                </div>
                <Link href="/booking?vehicle=Mini Bus" className="btn btn-accent btn-full">
                  <i className="fa-solid fa-calendar-check"></i> Book Mini Bus
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--primary)', paddingBlock: '60px' }}>
        <div className="container text-center">
          <h2 style={{ color: 'var(--white)', marginBottom: '.75rem' }}>Need a Custom Quote or Route Plan?</h2>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.05rem', marginBottom: '2rem', maxWidth: '500px', marginInline: 'auto' }}>
            Chat with us on WhatsApp or call 0771995814 anytime. We&apos;ll assist you with custom pricing and route options.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://wa.me/94771995814" target="_blank" rel="noopener noreferrer" className="btn btn-accent btn-lg">
              <i className="fa-brands fa-whatsapp"></i> Chat on WhatsApp
            </a>
            <a href="tel:0771995814" className="btn btn-outline-white btn-lg">
              <i className="fa-solid fa-phone"></i> Call 0771995814
            </a>
            <Link href="/booking" className="btn btn-outline-white btn-lg">
              <i className="fa-solid fa-calendar-check"></i> Book Online
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
