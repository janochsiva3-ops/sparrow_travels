import Link from 'next/link';
import StatCounters from '@/components/StatCounters';

export const metadata = {
  title: 'About Us – Sparrow Travels Sri Lanka',
  description:
    "Learn about Sparrow Travels — Sri Lanka's trusted travel partner with 10+ years of experience, professional drivers, and exceptional customer service.",
};

export default function AboutPage() {
  return (
    <>
      {/* PAGE HERO */}
      <div className="about-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link> <span>/</span> <span>About Us</span>
          </div>
          <h1>About Sparrow Travels</h1>
          <p>A decade of exploring Sri Lanka. Built on trust, service, and a deep love for this beautiful island.</p>
        </div>
      </div>

      {/* COMPANY STORY */}
      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
            <div>
              <p className="section-label">Our Story</p>
              <h2 className="section-title">Passionate About Sri Lanka, Dedicated to You</h2>
              <div className="divider"></div>
              <p style={{ marginBottom: '1rem' }}>
                Sparrow Travels was founded with one simple mission: to provide travellers with the most comfortable, reliable, and memorable journey across the island of Sri Lanka.
              </p>
              <p style={{ marginBottom: '1rem' }}>
                Over the past decade, we have had the privilege of serving hundreds of happy clients from around the world — helping them discover the breathtaking landscapes, rich cultural heritage, and warm hospitality that Sri Lanka is famous for.
              </p>
              <p>
                From the ancient rock fortress of Sigiriya to the misty tea hills of Nuwara Eliya, from the golden beaches of Galle to the wildlife-rich Yala National Park — we know this island inside out, and we love sharing it with you.
              </p>
            </div>
            <div>
              <StatCounters />
            </div>
          </div>
        </div>
      </section>

      {/* OUR VALUES */}
      <section className="section section-alt">
        <div className="container">
          <div className="text-center mb-4">
            <p className="section-label">What We Stand For</p>
            <h2 className="section-title">Our Core Values</h2>
            <div className="divider"></div>
          </div>
          <div className="grid-2">
            <div className="value-card">
              <div className="value-icon">🧑‍✈️</div>
              <div className="value-text">
                <h4>Experienced Drivers</h4>
                <p>
                  All our drivers are licensed professionals with extensive local knowledge, courteous conduct, and years of experience navigating Sri Lanka&apos;s diverse terrain safely and efficiently.
                </p>
              </div>
            </div>
            <div className="value-card">
              <div className="value-icon">🛡️</div>
              <div className="value-text">
                <h4>Safety First</h4>
                <p>
                  Every vehicle in our fleet is regularly maintained and fully insured. We follow strict safety standards and conduct routine inspections to ensure your journey is safe at all times.
                </p>
              </div>
            </div>
            <div className="value-card">
              <div className="value-icon">💬</div>
              <div className="value-text">
                <h4>Exceptional Customer Service</h4>
                <p>
                  We are available 24/7 via WhatsApp and phone. From the moment you enquire to the end of your journey, our team is always ready to assist with any questions or concerns.
                </p>
              </div>
            </div>
            <div className="value-card">
              <div className="value-icon">🌿</div>
              <div className="value-text">
                <h4>Responsible Tourism</h4>
                <p>
                  We are committed to sustainable travel practices that respect local communities, wildlife, and the environment. We encourage our clients to travel mindfully and leave a positive impact.
                </p>
              </div>
            </div>
            <div className="value-card">
              <div className="value-icon">💰</div>
              <div className="value-text">
                <h4>Honest Pricing</h4>
                <p>
                  We believe in complete transparency. Our quotes are clear with no hidden fees. You will always know exactly what you are paying for before confirming any booking.
                </p>
              </div>
            </div>
            <div className="value-card">
              <div className="value-icon">🗺️</div>
              <div className="value-text">
                <h4>Personalised Experiences</h4>
                <p>
                  No two trips are the same. We tailor every journey to your specific interests, schedule, and budget. Tell us your dream itinerary and we will make it happen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DRIVER TEAM */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-4">
            <p className="section-label">Meet the Team</p>
            <h2 className="section-title">Professional & Friendly Drivers</h2>
            <div className="divider"></div>
            <p className="section-sub">
              Our drivers are more than just chauffeurs — they are your local guides, passionate storytellers, and dedicated companions throughout your Sri Lanka adventure.
            </p>
          </div>
          <div className="grid-3">
            <div className="card" style={{ textAlign: 'center', padding: '2rem' }}>
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'var(--bg2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem', margin: '0 auto 1rem' }}>
                👨
              </div>
              <h4>Licensed & Certified</h4>
              <p style={{ fontSize: '.88rem' }}>
                All our drivers hold valid Sri Lankan commercial driving licences and undergo thorough background checks.
              </p>
            </div>
            <div className="card" style={{ textAlign: 'center', padding: '2rem' }}>
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'var(--bg2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem', margin: '0 auto 1rem' }}>
                🌐
              </div>
              <h4>Multilingual Support</h4>
              <p style={{ fontSize: '.88rem' }}>
                Our drivers communicate fluently in English and can assist international tourists with ease throughout the journey.
              </p>
            </div>
            <div className="card" style={{ textAlign: 'center', padding: '2rem' }}>
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'var(--bg2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem', margin: '0 auto 1rem' }}>
                🏅
              </div>
              <h4>Experienced & Trained</h4>
              <p style={{ fontSize: '.88rem' }}>
                With years of experience on Sri Lankan roads, our drivers handle every type of terrain — from city highways to mountain passes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--primary)', paddingBlock: '60px' }}>
        <div className="container text-center">
          <h2 style={{ color: 'var(--white)', marginBottom: '.75rem' }}>Ready to Travel With Us?</h2>
          <p style={{ color: 'rgba(255,255,255,.75)', fontSize: '1.05rem', marginBottom: '2rem', maxWidth: '500px', marginInline: 'auto' }}>
            Join hundreds of satisfied travellers who have trusted Sparrow Travels for their Sri Lanka adventures.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/booking" className="btn btn-accent btn-lg">
              <i className="fa-solid fa-calendar-check"></i> Book Your Trip
            </Link>
            <Link href="/contact" className="btn btn-outline-white btn-lg">
              <i className="fa-solid fa-envelope"></i> Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
