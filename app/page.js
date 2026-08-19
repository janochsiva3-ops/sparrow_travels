import Link from 'next/link';
import Image from 'next/image';
import TestimonialSlider from '@/components/TestimonialSlider';
import QuickBookingForm from '@/components/QuickBookingForm';

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-bg" style={{ backgroundImage: "url('/images/hero.png')" }}></div>
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: '3rem' }}>
            {/* Left: Content */}
            <div className="hero-content" style={{ padding: 0 }}>
              <p className="section-label" style={{ color: 'var(--accent-lt)' }}>
                Sri Lanka&apos;s Trusted Travel Partner
              </p>
              <h1>
                Explore Sri Lanka <span>Your Way</span>
              </h1>
              <p className="hero-tagline">
                We provide reliable and comfortable van services in Sri Lanka. Our services include airport pickup and drop, private tours, and long-distance travel across Sri Lanka. We focus on safety, punctuality, and affordable pricing. Our van is clean, well-maintained, and suitable for families and groups. Available 24/7 with friendly and professional service.
              </p>
              <div className="hero-btns">
                <Link href="/booking" className="btn btn-accent btn-lg">
                  <i className="fa-solid fa-calendar-check"></i> Book Your Trip
                </Link>
                <Link href="/tours" className="btn btn-outline-white btn-lg">
                  <i className="fa-solid fa-map-location-dot"></i> Explore Tours
                </Link>
              </div>
              <div className="hero-stats">
                <div className="hero-stat">
                  <span className="num">500+</span>
                  <span className="lbl">Happy Clients</span>
                </div>
                <div className="hero-stat">
                  <span className="num">9+</span>
                  <span className="lbl">Destinations</span>
                </div>
                <div className="hero-stat">
                  <span className="num">10+</span>
                  <span className="lbl">Years Experience</span>
                </div>
              </div>
            </div>

            {/* Right: Logo Showcase Card */}
            <div>
              <div className="hero-logo-card">
                <div className="hero-logo-img-wrapper">
                  <Image
                    src="/images/logo.png"
                    alt="Sparrow Travels Eagle Logo"
                    width={120}
                    height={120}
                    style={{ height: 'auto', width: 'auto', margin: '0 auto', display: 'block' }}
                  />
                </div>
                <h3>Sparrow Travels Sri Lanka</h3>
                <p>Reliable & Comfortable Van Services Island-Wide</p>
                <div className="hero-logo-features">
                  <span className="hero-logo-tag">⚡ 24/7 Service</span>
                  <span className="hero-logo-tag">🚐 Toyota KDH Van</span>
                  <span className="hero-logo-tag">⭐ 5.0 Google Rated</span>
                  <a
                    href="https://maps.app.goo.gl/t8DpiuYnVThozSy17"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hero-logo-tag"
                    style={{ textDecoration: 'none' }}
                  >
                    <i className="fa-solid fa-location-dot"></i> Kilinochchi & Island-Wide
                  </a>
                </div>
                <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <a
                    href="https://wa.me/94771995814"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-accent"
                  >
                    <i className="fa-brands fa-whatsapp"></i> WhatsApp 0771995814
                  </a>
                  <a href="tel:0771995814" className="btn btn-outline-white">
                    <i className="fa-solid fa-phone"></i> Call 0771995814
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK BOOKING SECTION */}
      <section className="section" style={{ background: 'var(--bg2)', paddingBlock: '60px' }}>
        <div className="container">
          <QuickBookingForm />
        </div>
      </section>

      {/* POPULAR DESTINATIONS */}
      <section className="section" id="destinations">
        <div className="container">
          <div className="text-center mb-4">
            <p className="section-label">Where Would You Like to Go?</p>
            <h2 className="section-title">Popular Destinations</h2>
            <div className="divider"></div>
            <p className="section-sub">
              From misty mountains to golden beaches, Sri Lanka has it all. Discover our most loved destinations.
            </p>
          </div>

          <div className="dest-grid">
            <div className="dest-card">
              <Image src="/images/sigiriya.png" alt="Sigiriya" width={400} height={300} style={{ objectFit: 'cover' }} />
              <div className="dest-overlay">
                <h3>Sigiriya</h3>
                <p>The 8th Wonder of the World</p>
              </div>
            </div>
            <div className="dest-card">
              <Image src="/images/ella.png" alt="Ella" width={400} height={300} style={{ objectFit: 'cover' }} />
              <div className="dest-overlay">
                <h3>Ella</h3>
                <p>Scenic hills & Nine Arch Bridge</p>
              </div>
            </div>
            <div className="dest-card">
              <Image src="/images/kandy.png" alt="Kandy" width={400} height={300} style={{ objectFit: 'cover' }} />
              <div className="dest-overlay">
                <h3>Kandy</h3>
                <p>Cultural capital of Sri Lanka</p>
              </div>
            </div>
            <div className="dest-card">
              <Image src="/images/galle.png" alt="Galle" width={400} height={300} style={{ objectFit: 'cover' }} />
              <div className="dest-overlay">
                <h3>Galle</h3>
                <p>Historic Dutch colonial fort</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-4">
            <Link href="/tours" className="btn btn-outline">
              View All Destinations <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section section-alt" id="why-us">
        <div className="container">
          <div className="text-center mb-4">
            <p className="section-label">Why Sparrow Travels?</p>
            <h2 className="section-title">Your Journey, Our Priority</h2>
            <div className="divider"></div>
          </div>

          <div className="grid-4">
            <div className="feature-card">
              <div className="feature-icon">🚐</div>
              <h4>Modern Fleet</h4>
              <p>Well-maintained, air-conditioned vehicles for maximum comfort on every journey.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🧭</div>
              <h4>Expert Drivers</h4>
              <p>Experienced, licensed drivers with deep local knowledge and professional etiquette.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💰</div>
              <h4>Best Prices</h4>
              <p>Transparent pricing with no hidden charges. Competitive rates for all budgets.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🛡️</div>
              <h4>Safe & Reliable</h4>
              <p>Your safety is our top priority. All vehicles are insured and regularly serviced.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h4>24/7 Support</h4>
              <p>Round-the-clock customer support via WhatsApp, phone, or email — always available.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h4>Quick Booking</h4>
              <p>Simple, fast booking process via WhatsApp. Confirmed within minutes.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🗺️</div>
              <h4>Custom Itineraries</h4>
              <p>Personalised tour packages tailored to your schedule and interests.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⭐</div>
              <h4>Trusted Service</h4>
              <p>500+ happy clients and counting. We take pride in every 5-star experience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* VEHICLES PREVIEW */}
      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: '3rem' }}>
            <div>
              <p className="section-label">Our Fleet</p>
              <h2 className="section-title">Comfortable Vehicles for Every Group</h2>
              <div className="divider"></div>
              <p className="section-sub" style={{ marginBottom: '1.5rem' }}>
                Whether you are travelling solo or with a large group, we have the perfect vehicle for you. All our vehicles are air-conditioned and driven by professional chauffeurs.
              </p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '.75rem', marginBottom: '2rem' }}>
                <li style={{ display: 'flex', gap: '.75rem', alignItems: 'center', fontSize: '.95rem', color: 'var(--text-muted)' }}>
                  <span style={{ color: 'var(--accent)', fontSize: '1.1rem' }}>✓</span> Air-conditioned comfort
                </li>
                <li style={{ display: 'flex', gap: '.75rem', alignItems: 'center', fontSize: '.95rem', color: 'var(--text-muted)' }}>
                  <span style={{ color: 'var(--accent)', fontSize: '1.1rem' }}>✓</span> Driver included in all bookings
                </li>
                <li style={{ display: 'flex', gap: '.75rem', alignItems: 'center', fontSize: '.95rem', color: 'var(--text-muted)' }}>
                  <span style={{ color: 'var(--accent)', fontSize: '1.1rem' }}>✓</span> Vehicles for 2 to 14+ passengers
                </li>
                <li style={{ display: 'flex', gap: '.75rem', alignItems: 'center', fontSize: '.95rem', color: 'var(--text-muted)' }}>
                  <span style={{ color: 'var(--accent)', fontSize: '1.1rem' }}>✓</span> Transparent pricing — no hidden fees
                </li>
              </ul>
              <Link href="/vehicles" className="btn btn-primary">
                See All Vehicles <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
            <div>
              <div className="vehicle-card">
                <div className="vehicle-img-wrap">
                  <Image
                    src="/images/vehicle_kdh.png"
                    alt="Toyota KDH Van"
                    width={500}
                    height={300}
                    style={{ objectFit: 'contain' }}
                  />
                </div>
                <div className="vehicle-body">
                  <h3>🚐 Toyota KDH Van</h3>
                  <p className="vehicle-subtitle">Our most popular choice for group tours</p>
                  <div className="vehicle-specs">
                    <div className="vehicle-spec">
                      <span className="spec-icon">👥</span> 10 Seats
                    </div>
                    <div className="vehicle-spec">
                      <span className="spec-icon">❄️</span> Air Conditioned
                    </div>
                    <div className="vehicle-spec">
                      <span className="spec-icon">🧳</span> Large Luggage
                    </div>
                    <div className="vehicle-spec">
                      <span className="spec-icon">🧑‍✈️</span> Driver Included
                    </div>
                  </div>
                  <div className="vehicle-price">
                    <div style={{ fontSize: '.92rem', fontWeight: 600, color: 'var(--primary)' }}>
                      <i className="fa-solid fa-tags" style={{ color: 'var(--accent)', marginRight: '.4rem' }}></i>
                      Contact us for custom best rates & itinerary offers
                    </div>
                  </div>
                  <Link href="/booking" className="btn btn-accent btn-full">
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CUSTOMER REVIEWS */}
      <section className="section section-alt" id="reviews">
        <div className="container">
          <div className="text-center mb-4">

            <p className="section-label">Verified Client Feedback</p>
            <h2 className="section-title">Google Maps Customer Reviews</h2>
            <div className="divider"></div>
            <p className="section-sub">Read authentic reviews from travellers who toured Sri Lanka with Sparrow Travels.</p>
          </div>

          <TestimonialSlider />

          <div className="text-center mt-4">
            <a
              href="https://maps.app.goo.gl/t8DpiuYnVThozSy17"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              <i className="fa-solid fa-map-location-dot" style={{ color: 'var(--accent)' }}></i> View All Reviews on Google Maps
            </a>
          </div>
        </div>
      </section>

      {/* TRIP PRICING SECTION */}
      <section className="section" id="pricing">
        <div className="container">
          <div className="text-center mb-4">
            <p className="section-label">Transparent & Affordable</p>
            <h2 className="section-title">Trip Pricing & Popular Routes</h2>
            <div className="divider"></div>
            <p className="section-sub">
              Competitive rates with no hidden charges. All vehicle bookings include driver allowance, air-conditioned comfort, and 24/7 support.
            </p>
          </div>

          {/* Route Package Cards */}
          <div className="grid-3 mb-4">
            <div className="pricing-card">
              <div>
                <span className="badge badge-accent mb-2">Airport Transfer</span>
                <h3 className="pricing-route-title">✈️ Kilinochchi / Jaffna ⇄ BIA Airport</h3>
                <p className="pricing-route-subtitle">Direct drop & pickup from Northern towns to Katunayake Airport</p>
                <div className="pricing-amount">Custom <span>/ transfer</span></div>
                <div className="pricing-usd">Toyota KDH Van / Wagon R</div>
                <ul className="pricing-features-list">
                  <li><i className="fa-solid fa-check"></i> Kilinochchi, Jaffna, Vavuniya, Mannar</li>
                  <li><i className="fa-solid fa-check"></i> Flight Delay Tracking & 24/7 Pickups</li>
                  <li><i className="fa-solid fa-check"></i> Professional Driver & Highway Fees</li>
                  <li><i className="fa-solid fa-check"></i> Spacious Luggage & AC Comfort</li>
                </ul>
              </div>
              <Link
                href="/booking?from=Kilinochchi&to=Bandaranaike+International+Airport+(BIA+Katunayake)"
                className="btn btn-primary btn-full"
              >
                Book This Route
              </Link>
            </div>

            <div className="pricing-card featured">
              <div>
                <span className="badge badge-green mb-2">Long Distance</span>
                <h3 className="pricing-route-title">🚐 Northern Province ⇄ Colombo</h3>
                <p className="pricing-route-subtitle">Private long-distance transfers & family trips</p>
                <div className="pricing-amount">Custom <span>/ trip</span></div>
                <div className="pricing-usd">Toyota KDH Van</div>
                <ul className="pricing-features-list">
                  <li><i className="fa-solid fa-check"></i> Door-to-Door Pickup in Northern Districts</li>
                  <li><i className="fa-solid fa-check"></i> 08–10 Passenger Capacity</li>
                  <li><i className="fa-solid fa-check"></i> Flexible Refreshment & Meal Stops</li>
                  <li><i className="fa-solid fa-check"></i> Safe, Experienced Driver</li>
                </ul>
              </div>
              <Link href="/booking?from=Jaffna&to=Colombo+City+/+Fort" className="btn btn-accent btn-full">
                Book This Trip
              </Link>
            </div>

            <div className="pricing-card">
              <div>
                <span className="badge badge-primary mb-2">Custom Island Tour</span>
                <h3 className="pricing-route-title">🌿 Northern Towns ⇄ Kandy & South</h3>
                <p className="pricing-route-subtitle">Multi-day tours & custom trips island-wide</p>
                <div className="pricing-amount">Custom <span>/ day quote</span></div>
                <div className="pricing-usd">Toyota KDH Van/ Mini Bus</div>
                <ul className="pricing-features-list">
                  <li><i className="fa-solid fa-check"></i> Custom Itinerary Assistance</li>
                  <li><i className="fa-solid fa-check"></i> Family & Group Friendly Vans</li>
                  <li><i className="fa-solid fa-check"></i> Driver Accommodation Included</li>
                  <li><i className="fa-solid fa-check"></i> Clean, Well-Maintained Vehicle</li>
                </ul>
              </div>
              <Link href="/booking" className="btn btn-primary btn-full">
                Request Custom Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section style={{ background: 'var(--primary)', paddingBlock: '60px' }}>
        <div className="container text-center">
          <h2 style={{ color: 'var(--white)', marginBottom: '.75rem' }}>Ready to Explore Sri Lanka?</h2>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.05rem', marginBottom: '2rem', maxWidth: '540px', marginInline: 'auto' }}>
            Book your trip today and let Sparrow Travels take care of everything. Fast confirmation via WhatsApp.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/booking" className="btn btn-accent btn-lg">
              <i className="fa-solid fa-calendar-check"></i> Book Your Trip Now
            </Link>
            <a href="https://wa.me/94771995814" target="_blank" rel="noopener noreferrer" className="btn btn-outline-white btn-lg">
              <i className="fa-brands fa-whatsapp"></i> Chat on WhatsApp
            </a>
            <a href="tel:0771995814" className="btn btn-outline-white btn-lg">
              <i className="fa-solid fa-phone"></i> Call 0771995814
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
