import Link from 'next/link';
import Image from 'next/image';
import DistrictExplorer from '@/components/DistrictExplorer';

export const metadata = {
  title: 'Tours & Destinations – Sparrow Travels Sri Lanka',
  description:
    'Discover Sri Lanka&apos;s most beautiful destinations with Sparrow Travels. Explore Sigiriya, Kandy, Ella, Galle, Yala, Jaffna and more.',
};

export default function ToursPage() {
  return (
    <>
      {/* PAGE HERO */}
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link> <span>/</span> <span>Tours & Destinations</span>
          </div>
          <h1>Tours & Destinations</h1>
          <p>Explore the wonders of Sri Lanka — from ancient kingdoms to pristine beaches and misty highlands.</p>
        </div>
      </div>

      {/* 25 DISTRICTS OF SRI LANKA EXPLORER */}
      <DistrictExplorer />

      {/* DESTINATIONS */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-4">
            <p className="section-label">9 Amazing Destinations</p>
            <h2 className="section-title">Where Would You Like to Go?</h2>
            <div className="divider"></div>
            <p className="section-sub">Each destination offers a unique experience. Let Sparrow Travels take you there in comfort and style.</p>
          </div>

          <div className="grid-3">
            {/* 1. Sigiriya */}
            <div className="tour-card">
              <div className="tour-img-wrap">
                <Image src="/images/sigiriya.png" alt="Sigiriya Rock Fortress" width={400} height={250} style={{ objectFit: 'cover' }} />
                <div className="tour-duration">⏱ 1–2 Days</div>
              </div>
              <div className="tour-body">
                <h3>🏔️ Sigiriya</h3>
                <p>The ancient rock fortress of Sigiriya, also known as the &quot;Lion&apos;s Rock,&quot; is a UNESCO World Heritage Site and one of Sri Lanka&apos;s most iconic landmarks. Climb 1,200 steps to the summit for breathtaking views.</p>
                <div className="tour-highlights">
                  <span className="tour-highlight">UNESCO Heritage</span>
                  <span className="tour-highlight">Rock Fortress</span>
                  <span className="tour-highlight">Ancient Frescoes</span>
                  <span className="tour-highlight">Lion&apos;s Gate</span>
                </div>
                <div style={{ background: 'var(--bg)', borderRadius: 'var(--radius-sm)', padding: '1rem', marginBottom: '1rem' }}>
                  <p style={{ fontSize: '.8rem', fontWeight: 700, color: 'var(--primary)', fontFamily: "'Outfit',sans-serif", marginBottom: '.5rem' }}>📋 Suggested Itinerary</p>
                  <p style={{ fontSize: '.82rem', margin: 0, lineHeight: 1.7 }}>Day 1: Depart Colombo → Visit Dambulla Cave Temple → Check in near Sigiriya. Day 2: Early morning Sigiriya Rock climb → Explore water gardens → Return.</p>
                </div>
                <Link href="/booking?destination=Sigiriya" className="btn btn-primary btn-full">Plan This Trip</Link>
              </div>
            </div>

            {/* 2. Kandy */}
            <div className="tour-card">
              <div className="tour-img-wrap">
                <Image src="/images/kandy.png" alt="Temple of the Tooth Relic, Kandy" width={400} height={250} style={{ objectFit: 'cover' }} />
                <div className="tour-duration">⏱ 1–2 Days</div>
              </div>
              <div className="tour-body">
                <h3>🛕 Kandy</h3>
                <p>The cultural capital of Sri Lanka, Kandy is home to the famous Temple of the Tooth Relic (Sri Dalada Maligawa). Set amidst lush hills, this UNESCO city offers rich Buddhist culture and beautiful scenery.</p>
                <div className="tour-highlights">
                  <span className="tour-highlight">UNESCO Heritage</span>
                  <span className="tour-highlight">Tooth Temple</span>
                  <span className="tour-highlight">Peradeniya Garden</span>
                  <span className="tour-highlight">Kandy Lake</span>
                </div>
                <div style={{ background: 'var(--bg)', borderRadius: 'var(--radius-sm)', padding: '1rem', marginBottom: '1rem' }}>
                  <p style={{ fontSize: '.8rem', fontWeight: 700, color: 'var(--primary)', fontFamily: "'Outfit',sans-serif", marginBottom: '.5rem' }}>📋 Suggested Itinerary</p>
                  <p style={{ fontSize: '.82rem', margin: 0, lineHeight: 1.7 }}>Day 1: Colombo → Peradeniya Botanical Gardens → Temple of the Tooth → Kandyan Cultural Show. Day 2: Kandy Lake walk → Gem Museum → Return or continue to Ella.</p>
                </div>
                <Link href="/booking?destination=Kandy" className="btn btn-primary btn-full">Plan This Trip</Link>
              </div>
            </div>

            {/* 3. Ella */}
            <div className="tour-card">
              <div className="tour-img-wrap">
                <Image src="/images/ella.png" alt="Ella Nine Arch Bridge" width={400} height={250} style={{ objectFit: 'cover' }} />
                <div className="tour-duration">⏱ 2–3 Days</div>
              </div>
              <div className="tour-body">
                <h3>🌿 Ella</h3>
                <p>Ella is a small town nestled in the misty hills, famous for the iconic Nine Arch Bridge, scenic train rides through tea country, and the panoramic views from Little Adam&apos;s Peak.</p>
                <div className="tour-highlights">
                  <span className="tour-highlight">Nine Arch Bridge</span>
                  <span className="tour-highlight">Tea Plantations</span>
                  <span className="tour-highlight">Little Adam&apos;s Peak</span>
                  <span className="tour-highlight">Train Rides</span>
                </div>
                <div style={{ background: 'var(--bg)', borderRadius: 'var(--radius-sm)', padding: '1rem', marginBottom: '1rem' }}>
                  <p style={{ fontSize: '.8rem', fontWeight: 700, color: 'var(--primary)', fontFamily: "'Outfit',sans-serif", marginBottom: '.5rem' }}>📋 Suggested Itinerary</p>
                  <p style={{ fontSize: '.82rem', margin: 0, lineHeight: 1.7 }}>Day 1: Kandy → Nuwara Eliya tea factory tour. Day 2: Nine Arch Bridge → Ella Rock hike. Day 3: Little Adam&apos;s Peak → Ravana Falls → Continue tour.</p>
                </div>
                <Link href="/booking?destination=Ella" className="btn btn-primary btn-full">Plan This Trip</Link>
              </div>
            </div>

            {/* 4. Nuwara Eliya */}
            <div className="tour-card">
              <div className="tour-img-wrap" style={{ background: 'linear-gradient(135deg,#2d5016,#4a7c25)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ textAlign: 'center', padding: '2rem' }}>
                  <div style={{ fontSize: '4rem', marginBottom: '.5rem' }}>🌱</div>
                  <p style={{ color: 'rgba(255,255,255,.8)', fontSize: '.9rem' }}>Nuwara Eliya</p>
                </div>
                <div className="tour-duration">⏱ 1–2 Days</div>
              </div>
              <div className="tour-body">
                <h3>🌱 Nuwara Eliya</h3>
                <p>Known as &quot;Little England,&quot; Nuwara Eliya sits at 1,868m above sea level. Famous for its lush tea estates, cool climate, colonial bungalows, and the magnificent Horton Plains National Park.</p>
                <div className="tour-highlights">
                  <span className="tour-highlight">Tea Estates</span>
                  <span className="tour-highlight">World&apos;s End</span>
                  <span className="tour-highlight">Horton Plains</span>
                  <span className="tour-highlight">Cool Climate</span>
                </div>
                <div style={{ background: 'var(--bg)', borderRadius: 'var(--radius-sm)', padding: '1rem', marginBottom: '1rem' }}>
                  <p style={{ fontSize: '.8rem', fontWeight: 700, color: 'var(--primary)', fontFamily: "'Outfit',sans-serif", marginBottom: '.5rem' }}>📋 Suggested Itinerary</p>
                  <p style={{ fontSize: '.82rem', margin: 0, lineHeight: 1.7 }}>Day 1: Colombo → Nuwara Eliya tea factory visit → Colonial bungalow lunch. Day 2: Horton Plains early morning → World&apos;s End viewpoint → Proceed to Ella.</p>
                </div>
                <Link href="/booking?destination=Nuwara Eliya" className="btn btn-primary btn-full">Plan This Trip</Link>
              </div>
            </div>

            {/* 5. Galle */}
            <div className="tour-card">
              <div className="tour-img-wrap">
                <Image src="/images/galle.png" alt="Galle Fort" width={400} height={250} style={{ objectFit: 'cover' }} />
                <div className="tour-duration">⏱ 1–2 Days</div>
              </div>
              <div className="tour-body">
                <h3>🏰 Galle</h3>
                <p>Galle Fort is a UNESCO-listed Dutch colonial fortress on the southwestern coast. Walk the ramparts, explore boutique shops, and enjoy the stunning Indian Ocean sunsets from the lighthouse.</p>
                <div className="tour-highlights">
                  <span className="tour-highlight">UNESCO Heritage</span>
                  <span className="tour-highlight">Dutch Fort</span>
                  <span className="tour-highlight">Lighthouse</span>
                  <span className="tour-highlight">Beach</span>
                </div>
                <div style={{ background: 'var(--bg)', borderRadius: 'var(--radius-sm)', padding: '1rem', marginBottom: '1rem' }}>
                  <p style={{ fontSize: '.8rem', fontWeight: 700, color: 'var(--primary)', fontFamily: "'Outfit',sans-serif", marginBottom: '.5rem' }}>📋 Suggested Itinerary</p>
                  <p style={{ fontSize: '.82rem', margin: 0, lineHeight: 1.7 }}>Day 1: Colombo → Southern Expressway → Galle Fort walk → Sunset at ramparts. Day 2: Unawatuna Beach → Sea turtle hatchery → Return or proceed south.</p>
                </div>
                <Link href="/booking?destination=Galle" className="btn btn-primary btn-full">Plan This Trip</Link>
              </div>
            </div>

            {/* 6. Yala */}
            <div className="tour-card">
              <div className="tour-img-wrap" style={{ background: 'linear-gradient(135deg,#6b4c11,#9a7020)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ textAlign: 'center', padding: '2rem' }}>
                  <div style={{ fontSize: '4rem', marginBottom: '.5rem' }}>🐆</div>
                  <p style={{ color: 'rgba(255,255,255,.8)', fontSize: '.9rem' }}>Yala National Park</p>
                </div>
                <div className="tour-duration">⏱ 1–2 Days</div>
              </div>
              <div className="tour-body">
                <h3>🐆 Yala National Park</h3>
                <p>Home to one of the world&apos;s highest density of leopards, Yala National Park is a wildlife lover&apos;s paradise. Spot elephants, crocodiles, peacocks, and sloth bears on a thrilling safari.</p>
                <div className="tour-highlights">
                  <span className="tour-highlight">Leopard Safari</span>
                  <span className="tour-highlight">Wild Elephants</span>
                  <span className="tour-highlight">Bird Watching</span>
                  <span className="tour-highlight">Jeep Safari</span>
                </div>
                <div style={{ background: 'var(--bg)', borderRadius: 'var(--radius-sm)', padding: '1rem', marginBottom: '1rem' }}>
                  <p style={{ fontSize: '.8rem', fontWeight: 700, color: 'var(--primary)', fontFamily: "'Outfit',sans-serif", marginBottom: '.5rem' }}>📋 Suggested Itinerary</p>
                  <p style={{ fontSize: '.82rem', margin: 0, lineHeight: 1.7 }}>Day 1: Galle → Tissamaharama → Check in. Day 2: Early morning Yala safari (6am) → Full day wildlife spotting → Evening return journey.</p>
                </div>
                <Link href="/booking?destination=Yala National Park" className="btn btn-primary btn-full">Plan This Trip</Link>
              </div>
            </div>

            {/* 7. Colombo */}
            <div className="tour-card">
              <div className="tour-img-wrap" style={{ background: 'linear-gradient(135deg,#1a3a5c,#244d7a)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ textAlign: 'center', padding: '2rem' }}>
                  <div style={{ fontSize: '4rem', marginBottom: '.5rem' }}>🏙️</div>
                  <p style={{ color: 'rgba(255,255,255,.8)', fontSize: '.9rem' }}>Colombo City</p>
                </div>
                <div className="tour-duration">⏱ 1 Day</div>
              </div>
              <div className="tour-body">
                <h3>🏙️ Colombo</h3>
                <p>Sri Lanka&apos;s vibrant commercial capital offers a dynamic mix of colonial landmarks, modern skyscrapers, diverse cuisine, and excellent shopping. The perfect start or end to any Sri Lanka adventure.</p>
                <div className="tour-highlights">
                  <span className="tour-highlight">Lotus Tower</span>
                  <span className="tour-highlight">Gangaramaya Temple</span>
                  <span className="tour-highlight">Pettah Market</span>
                  <span className="tour-highlight">Galle Face Green</span>
                </div>
                <div style={{ background: 'var(--bg)', borderRadius: 'var(--radius-sm)', padding: '1rem', marginBottom: '1rem' }}>
                  <p style={{ fontSize: '.8rem', fontWeight: 700, color: 'var(--primary)', fontFamily: "'Outfit',sans-serif", marginBottom: '.5rem' }}>📋 Suggested Itinerary</p>
                  <p style={{ fontSize: '.82rem', margin: 0, lineHeight: 1.7 }}>Morning: Gangaramaya Temple → Pettah Bazaar → National Museum. Afternoon: Viharamahadevi Park → Lotus Tower → Galle Face sunset stroll.</p>
                </div>
                <Link href="/booking?destination=Colombo" className="btn btn-primary btn-full">Plan This Trip</Link>
              </div>
            </div>

            {/* 8. Anuradhapura */}
            <div className="tour-card">
              <div className="tour-img-wrap" style={{ background: 'linear-gradient(135deg,#4a3520,#7a5e38)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ textAlign: 'center', padding: '2rem' }}>
                  <div style={{ fontSize: '4rem', marginBottom: '.5rem' }}>🏛️</div>
                  <p style={{ color: 'rgba(255,255,255,.8)', fontSize: '.9rem' }}>Anuradhapura</p>
                </div>
                <div className="tour-duration">⏱ 1–2 Days</div>
              </div>
              <div className="tour-body">
                <h3>🏛️ Anuradhapura</h3>
                <p>The first ancient capital of Sri Lanka, Anuradhapura is a sprawling UNESCO World Heritage Site with massive stupas, sacred Bo Tree, and remarkable ruins dating back over 2,500 years.</p>
                <div className="tour-highlights">
                  <span className="tour-highlight">UNESCO Heritage</span>
                  <span className="tour-highlight">Sacred Bo Tree</span>
                  <span className="tour-highlight">Ruwanwelisaya Stupa</span>
                  <span className="tour-highlight">Ancient Ruins</span>
                </div>
                <div style={{ background: 'var(--bg)', borderRadius: 'var(--radius-sm)', padding: '1rem', marginBottom: '1rem' }}>
                  <p style={{ fontSize: '.8rem', fontWeight: 700, color: 'var(--primary)', fontFamily: "'Outfit',sans-serif", marginBottom: '.5rem' }}>📋 Suggested Itinerary</p>
                  <p style={{ fontSize: '.82rem', margin: 0, lineHeight: 1.7 }}>Day 1: Colombo → Anuradhapura Sacred City entrance → Ruwanwelisaya → Sri Maha Bodhi. Day 2: Abhayagiri Stupa → Isurumuniya Temple → Mihintale day trip.</p>
                </div>
                <Link href="/booking?destination=Anuradhapura" className="btn btn-primary btn-full">Plan This Trip</Link>
              </div>
            </div>

            {/* 9. Jaffna */}
            <div className="tour-card">
              <div className="tour-img-wrap" style={{ background: 'linear-gradient(135deg,#5c1a1a,#8a3333)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ textAlign: 'center', padding: '2rem' }}>
                  <div style={{ fontSize: '4rem', marginBottom: '.5rem' }}>🕌</div>
                  <p style={{ color: 'rgba(255,255,255,.8)', fontSize: '.9rem' }}>Jaffna</p>
                </div>
                <div className="tour-duration">⏱ 2–3 Days</div>
              </div>
              <div className="tour-body">
                <h3>🕌 Jaffna</h3>
                <p>The cultural heart of northern Sri Lanka, Jaffna offers a unique Tamil heritage experience. Explore the ancient Dutch fort, vibrant Hindu temples, and the serene Jaffna Lagoon islands.</p>
                <div className="tour-highlights">
                  <span className="tour-highlight">Jaffna Fort</span>
                  <span className="tour-highlight">Nainativu Island</span>
                  <span className="tour-highlight">Hindu Temples</span>
                  <span className="tour-highlight">Jaffna Lagoon</span>
                </div>
                <div style={{ background: 'var(--bg)', borderRadius: 'var(--radius-sm)', padding: '1rem', marginBottom: '1rem' }}>
                  <p style={{ fontSize: '.8rem', fontWeight: 700, color: 'var(--primary)', fontFamily: "'Outfit',sans-serif", marginBottom: '.5rem' }}>📋 Suggested Itinerary</p>
                  <p style={{ fontSize: '.82rem', margin: 0, lineHeight: 1.7 }}>Day 1: Colombo → Vavuniya → Jaffna. Day 2: Jaffna Fort → Nallur Temple → Local market. Day 3: Boat to Nainativu → Casuarina Beach → Return journey.</p>
                </div>
                <Link href="/booking?destination=Jaffna" className="btn btn-primary btn-full">Plan This Trip</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--primary)', paddingBlock: '60px' }}>
        <div className="container text-center">
          <h2 style={{ color: 'var(--white)', marginBottom: '.75rem' }}>Can&apos;t Decide? Let Us Help Plan Your Trip!</h2>
          <p style={{ color: 'rgba(255,255,255,.75)', fontSize: '1.05rem', marginBottom: '2rem', maxWidth: '500px', marginInline: 'auto' }}>
            Tell us your travel dates and interests and we&apos;ll create a personalised Sri Lanka itinerary just for you.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/booking" className="btn btn-accent btn-lg"><i className="fa-solid fa-calendar-check"></i> Book Your Tour</Link>
            <a href="https://wa.me/94771995814" target="_blank" rel="noopener noreferrer" className="btn btn-outline-white btn-lg"><i className="fa-brands fa-whatsapp"></i> Chat on WhatsApp</a>
            <a href="tel:0771995814" className="btn btn-outline-white btn-lg"><i className="fa-solid fa-phone"></i> Call 0771995814</a>
          </div>
        </div>
      </section>
    </>
  );
}
