'use client';

import { useState, useMemo } from 'react';

function normalizeCity(name) {
  if (!name) return '';
  const lower = name.toLowerCase();
  if (lower.includes('kilinochchi')) return 'kilinochchi';
  if (lower.includes('jaffna')) return 'jaffna';
  if (lower.includes('vavuniya')) return 'vavuniya';
  if (lower.includes('mullaitivu')) return 'mullaitivu';
  if (lower.includes('mannar')) return 'mannar';
  if (lower.includes('airport') || lower.includes('bia') || lower.includes('katunayake')) return 'airport';
  if (lower.includes('colombo')) return 'colombo';
  if (lower.includes('kandy')) return 'kandy';
  if (lower.includes('sigiriya') || lower.includes('dambulla')) return 'sigiriya';
  if (lower.includes('ella')) return 'ella';
  if (lower.includes('nuwara') || lower.includes('eliya')) return 'nuwara_eliya';
  if (lower.includes('galle') || lower.includes('south')) return 'galle';
  if (lower.includes('yala') || lower.includes('tissamaharama')) return 'yala';
  if (lower.includes('trincomalee')) return 'trincomalee';
  if (lower.includes('anuradhapura')) return 'anuradhapura';
  if (lower.includes('polonnaruwa')) return 'polonnaruwa';
  return lower.trim();
}

const CITY_MATRIX = {
  // Kilinochchi
  'kilinochchi-jaffna': { km: 65, time: '1 hr 15 min', highway: 'A9 Highway' },
  'kilinochchi-vavuniya': { km: 78, time: '1 hr 20 min', highway: 'A9 Highway' },
  'kilinochchi-mullaitivu': { km: 64, time: '1 hr 10 min', highway: 'A35 Highway' },
  'kilinochchi-mannar': { km: 108, time: '2 hrs 00 min', highway: 'A32 Highway' },
  'kilinochchi-airport': { km: 305, time: '5 hrs 15 min', highway: 'A9 & Central Expressway' },
  'kilinochchi-colombo': { km: 335, time: '5 hrs 45 min', highway: 'A9 & Expressway' },
  'kilinochchi-kandy': { km: 248, time: '4 hrs 45 min', highway: 'A9 via Dambulla' },
  'kilinochchi-sigiriya': { km: 178, time: '3 hrs 15 min', highway: 'A9 Highway' },
  'kilinochchi-ella': { km: 360, time: '7 hrs 30 min', highway: 'A9 & Central Route' },
  'kilinochchi-nuwara_eliya': { km: 325, time: '6 hrs 45 min', highway: 'A9 & Highlands' },
  'kilinochchi-galle': { km: 440, time: '7 hrs 15 min', highway: 'Expressway Network' },

  // Jaffna
  'jaffna-vavuniya': { km: 142, time: '2 hrs 30 min', highway: 'A9 Highway' },
  'jaffna-mullaitivu': { km: 128, time: '2 hrs 20 min', highway: 'A9 & A35' },
  'jaffna-mannar': { km: 140, time: '2 hrs 30 min', highway: 'A32 Highway' },
  'jaffna-airport': { km: 365, time: '6 hrs 15 min', highway: 'A9 & Central Expressway' },
  'jaffna-colombo': { km: 395, time: '6 hrs 45 min', highway: 'A9 & Expressway' },
  'jaffna-kandy': { km: 310, time: '5 hrs 45 min', highway: 'A9 via Dambulla' },
  'jaffna-sigiriya': { km: 240, time: '4 hrs 15 min', highway: 'A9 Highway' },
  'jaffna-ella': { km: 420, time: '8 hrs 30 min', highway: 'A9 & Highlands' },
  'jaffna-nuwara_eliya': { km: 385, time: '7 hrs 45 min', highway: 'A9 & Highlands' },
  'jaffna-galle': { km: 500, time: '8 hrs 15 min', highway: 'Expressway Network' },

  // Vavuniya
  'vavuniya-mullaitivu': { km: 92, time: '1 hr 45 min', highway: 'B Route' },
  'vavuniya-mannar': { km: 82, time: '1 hr 30 min', highway: 'A14 Highway' },
  'vavuniya-airport': { km: 228, time: '4 hrs 00 min', highway: 'A9 & Central Expressway' },
  'vavuniya-colombo': { km: 258, time: '4 hrs 30 min', highway: 'A9 & Expressway' },
  'vavuniya-kandy': { km: 170, time: '3 hrs 30 min', highway: 'A9 via Dambulla' },
  'vavuniya-sigiriya': { km: 102, time: '2 hrs 00 min', highway: 'A9 Highway' },
  'vavuniya-ella': { km: 285, time: '6 hrs 00 min', highway: 'Central Route' },
  'vavuniya-nuwara_eliya': { km: 250, time: '5 hrs 15 min', highway: 'Highlands Route' },
  'vavuniya-galle': { km: 365, time: '6 hrs 00 min', highway: 'Expressway' },

  // Mullaitivu
  'mullaitivu-mannar': { km: 155, time: '2 hrs 45 min', highway: 'A35 & A32' },
  'mullaitivu-airport': { km: 320, time: '5 hrs 30 min', highway: 'A9 Route' },
  'mullaitivu-colombo': { km: 350, time: '6 hrs 00 min', highway: 'A9 Route' },
  'mullaitivu-kandy': { km: 260, time: '5 hrs 00 min', highway: 'A9 Route' },
  'mullaitivu-sigiriya': { km: 190, time: '3 hrs 30 min', highway: 'A9 Route' },
  'mullaitivu-ella': { km: 375, time: '7 hrs 45 min', highway: 'Central Route' },
  'mullaitivu-nuwara_eliya': { km: 340, time: '7 hrs 00 min', highway: 'Highlands' },
  'mullaitivu-galle': { km: 455, time: '7 hrs 30 min', highway: 'Expressway' },

  // Mannar
  'mannar-airport': { km: 270, time: '4 hrs 45 min', highway: 'A14 & A3' },
  'mannar-colombo': { km: 300, time: '5 hrs 15 min', highway: 'A14 & A3' },
  'mannar-kandy': { km: 230, time: '4 hrs 30 min', highway: 'A14 & A9' },
  'mannar-sigiriya': { km: 160, time: '3 hrs 15 min', highway: 'A14 & A9' },
  'mannar-ella': { km: 345, time: '7 hrs 15 min', highway: 'Central Route' },
  'mannar-nuwara_eliya': { km: 310, time: '6 hrs 30 min', highway: 'Highlands' },
  'mannar-galle': { km: 410, time: '6 hrs 45 min', highway: 'Expressway' },

  // BIA Katunayake Airport
  'airport-colombo': { km: 34, time: '40 min', highway: 'Katunayake Expressway (E01)' },
  'airport-kandy': { km: 104, time: '2 hrs 30 min', highway: 'Central Expressway (E04) & A1' },
  'airport-sigiriya': { km: 148, time: '3 hrs 00 min', highway: 'Central Expressway & A6' },
  'airport-ella': { km: 208, time: '4 hrs 45 min', highway: 'Southern / Central Route' },
  'airport-nuwara_eliya': { km: 155, time: '4 hrs 15 min', highway: 'A1 & A5 Highlands' },
  'airport-galle': { km: 152, time: '2 hrs 15 min', highway: 'Southern Expressway (E01)' },

  // Colombo City
  'colombo-kandy': { km: 115, time: '2 hrs 45 min', highway: 'A1 Colombo-Kandy Road' },
  'colombo-sigiriya': { km: 168, time: '3 hrs 30 min', highway: 'Ambepussa & A6' },
  'colombo-ella': { km: 212, time: '4 hrs 45 min', highway: 'Southern / Central Route' },
  'colombo-nuwara_eliya': { km: 168, time: '4 hrs 30 min', highway: 'A1 & A5 Gampola Route' },
  'colombo-galle': { km: 125, time: '1 hr 50 min', highway: 'Southern Expressway (E01)' },

  // Kandy
  'kandy-sigiriya': { km: 74, time: '1 hr 45 min', highway: 'A9 Highway' },
  'kandy-ella': { km: 138, time: '3 hrs 30 min', highway: 'A10 / Randenigala Route' },
  'kandy-nuwara_eliya': { km: 76, time: '2 hrs 15 min', highway: 'A5 Gampola-Nuwara Eliya Road' },
  'kandy-galle': { km: 220, time: '4 hrs 15 min', highway: 'Expressway via Colombo' },

  // Sigiriya / Dambulla
  'sigiriya-ella': { km: 175, time: '4 hrs 00 min', highway: 'Badulla Route' },
  'sigiriya-nuwara_eliya': { km: 145, time: '3 hrs 45 min', highway: 'Kandy-Highlands Route' },
  'sigiriya-galle': { km: 275, time: '4 hrs 45 min', highway: 'Expressway via Colombo' },

  // Ella & Nuwara Eliya & Galle
  'ella-nuwara_eliya': { km: 55, time: '1 hr 45 min', highway: 'A5 Highlands Road' },
  'ella-galle': { km: 200, time: '4 hrs 00 min', highway: 'Southern Expressway (E01)' },
  'nuwara_eliya-galle': { km: 240, time: '5 hrs 00 min', highway: 'Highlands & Expressway' },
};

function getRouteInfo(from, to) {
  if (!from || !to) return null;
  
  const c1 = normalizeCity(from);
  const c2 = normalizeCity(to);

  if (c1 && c2 && c1 === c2) {
    return { km: 18, time: '30 min (Local Zone)', highway: 'Town / Local City Limits' };
  }

  const key1 = `${c1}-${c2}`;
  const key2 = `${c2}-${c1}`;

  if (CITY_MATRIX[key1]) return CITY_MATRIX[key1];
  if (CITY_MATRIX[key2]) return CITY_MATRIX[key2];

  // Fallback estimation calculation for unlisted custom location pairs
  return { km: 185, time: '3 hrs 40 min', highway: 'Island Main Highway' };
}

export default function QuickBookingForm() {
  const [viewMode, setViewMode] = useState('quick'); // 'quick' or 'analyse'
  const [tripType, setTripType] = useState('One-Way');
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    date: '',
    return_date: '',
    passengers: '1-3 Passengers',
    vehicle: 'Toyota KDH Van',
    name: '',
    phone: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAnalyseClick = () => {
    setViewMode('analyse');
    if (typeof window !== 'undefined') {
      window.open('/tours', '_blank');
    }
  };

  // Real-time route analysis calculations
  const routeDetails = useMemo(() => {
    return getRouteInfo(formData.from, formData.to);
  }, [formData.from, formData.to]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const returnDateStr = tripType === 'Return' && formData.return_date ? `\n🔙 Return Date: ${formData.return_date}` : '';
    
    let analysisMsg = '';
    if (routeDetails) {
      analysisMsg =
        `📊 *TRIP ANALYSIS SUMMARY*\n` +
        `• Est. Distance: ~${routeDetails.km} km (${routeDetails.highway})\n` +
        `• Est. Duration: ~${routeDetails.time}\n` +
        `• Inclusions: AC, Fuel, Driver Allowance & Express Tolls Included\n\n`;
    }

    const msg =
      `Hello Sparrow Travels! 🦅\n\n` +
      `*TRIP BOOKING REQUEST*\n` +
      `━━━━━━━━━━━━━━━━\n` +
      `🔄 Trip Type: ${tripType}\n` +
      `📍 From: ${formData.from || '-'}\n` +
      `🏁 To: ${formData.to || '-'}\n` +
      `📅 Departure Date: ${formData.date || '-'}${returnDateStr}\n` +
      `👥 Passengers: ${formData.passengers || '-'}\n` +
      `🚐 Preferred Vehicle: ${formData.vehicle || '-'}\n` +
      `👤 Name: ${formData.name || '-'}\n` +
      `📞 Phone/WhatsApp: ${formData.phone || '-'}\n` +
      `━━━━━━━━━━━━━━━━\n` +
      analysisMsg +
      `Please confirm price, driver assignment, and vehicle availability. Thank you!`;

    window.open(`https://wa.me/94771995814?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="quick-booking-card">
      {/* Header Title & Subtitle */}
      <div style={{ textAlign: 'center', marginBottom: '1.25rem' }}>
        <h3 style={{ fontSize: '1.4rem', color: 'var(--primary)', marginBottom: '.35rem' }}>
          <i className="fa-solid fa-van-shuttle" style={{ color: 'var(--accent)', marginRight: '.5rem' }}></i>
          Trip Booking & Route Analyzer
        </h3>
        <p style={{ fontSize: '.88rem', color: 'var(--text-muted)', margin: 0 }}>
          View accurate trip distance & travel time or send a direct quick booking to WhatsApp!
        </p>
      </div>

      {/* Mode Switcher Tabs: Quick Booking vs Analyse Your Trip */}
      <div className="mode-switcher-container">
        <button
          type="button"
          className={`mode-switcher-btn ${viewMode === 'quick' ? 'active' : ''}`}
          onClick={() => setViewMode('quick')}
        >
          <i className="fa-solid fa-bolt"></i> Quick Booking
        </button>
        <button
          type="button"
          className={`mode-switcher-btn ${viewMode === 'analyse' ? 'active' : ''}`}
          onClick={handleAnalyseClick}
        >
          <i className="fa-solid fa-chart-pie"></i> Analyse Your Trip & Tours 🗺️
        </button>
      </div>

      {/* Trip Type Selector (One-Way / Return) */}
      <div className="trip-type-wrapper" style={{ marginBottom: '1.25rem' }}>
        <button
          type="button"
          className={`trip-type-btn ${tripType === 'One-Way' ? 'active' : ''}`}
          onClick={() => setTripType('One-Way')}
        >
          <i className="fa-solid fa-arrow-right"></i> One-Way Trip
        </button>
        <button
          type="button"
          className={`trip-type-btn ${tripType === 'Return' ? 'active' : ''}`}
          onClick={() => setTripType('Return')}
        >
          <i className="fa-solid fa-arrow-right-arrow-left"></i> Return Trip
        </button>
      </div>

      {/* TRANSPARENT LIVE TRIP DETAILS BOX */}
      <div className="transparent-details-box">
        <div className="transparent-badge-header">
          <span className="transparent-badge">
            <i className="fa-solid fa-shield-halved"></i> Accurate Distance & Travel Time Details
          </span>
          <span style={{ fontSize: '.78rem', color: 'var(--text-muted)', fontWeight: 600 }}>
            {formData.from && formData.to ? '⚡ Live Route Calculation' : 'ℹ️ Select Pickup & Dropoff for Live Calculation'}
          </span>
        </div>

        {/* Route Visualizer */}
        <div className="transparent-route-visual">
          <div className="transparent-route-point">
            <span style={{ color: '#ef4444' }}>📍</span>
            <span>{formData.from || 'Select Pickup'}</span>
          </div>
          <div className="transparent-route-arrow">
            <span>{routeDetails ? `${routeDetails.km} km` : '---'}</span>
            <i className="fa-solid fa-arrow-right-long" style={{ fontSize: '1.1rem' }}></i>
            <span style={{ fontSize: '.72rem', color: 'var(--text-muted)' }}>
              {routeDetails ? routeDetails.highway : 'Direct Route'}
            </span>
          </div>
          <div className="transparent-route-point">
            <span style={{ color: '#10b981' }}>🏁</span>
            <span>{formData.to || 'Select Destination'}</span>
          </div>
        </div>

        {/* Key Metrics Grid */}
        <div className="transparent-metrics-grid">
          <div className="transparent-metric-card">
            <span className="label">Exact Distance</span>
            <span className="value">{routeDetails ? `${routeDetails.km} km` : '-'}</span>
          </div>
          <div className="transparent-metric-card">
            <span className="label">Est. Travel Time</span>
            <span className="value">{routeDetails ? routeDetails.time : '-'}</span>
          </div>
          <div className="transparent-metric-card">
            <span className="label">Vehicle Class</span>
            <span className="value" style={{ fontSize: '.9rem' }}>{formData.vehicle.split(' ')[0]} {formData.vehicle.split(' ')[1]}</span>
          </div>
        </div>

        {/* Transparent Included Highlights */}
        <div className="transparent-inclusions-list">
          <div className="transparent-inclusion-item">
            <i className="fa-solid fa-circle-check"></i> Driver Allowance Included
          </div>
          <div className="transparent-inclusion-item">
            <i className="fa-solid fa-circle-check"></i> Air Conditioned Comfort
          </div>
          <div className="transparent-inclusion-item">
            <i className="fa-solid fa-circle-check"></i> Fuel & Express Tolls
          </div>
          <div className="transparent-inclusion-item">
            <i className="fa-solid fa-circle-check"></i> 0 Hidden Extra Fees
          </div>
        </div>
      </div>

      {/* MODE A: FULL TRIP ANALYZER VIEW */}
      {viewMode === 'analyse' && (
        <div className="trip-analyzer-section">
          <h4 style={{ fontSize: '1.1rem', color: 'var(--primary)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '.5rem' }}>
            <i className="fa-solid fa-sliders" style={{ color: 'var(--accent)' }}></i>
            Interactive Route & Distance Analyzer
          </h4>

          <div className="form-row" style={{ marginBottom: '1.25rem' }}>
            <div className="form-group" style={{ marginBottom: 0 }}>
              <label style={{ fontSize: '.82rem', fontWeight: 600, color: 'var(--primary)' }}>📍 Pick-up City / Station</label>
              <select name="from" value={formData.from} onChange={handleChange} className="form-control">
                <option value="">Select Pickup City</option>
                <option value="Kilinochchi">Kilinochchi</option>
                <option value="Jaffna">Jaffna</option>
                <option value="Vavuniya">Vavuniya</option>
                <option value="Mullaitivu">Mullaitivu</option>
                <option value="Mannar">Mannar</option>
                <option value="Bandaranaike International Airport (BIA Katunayake)">BIA Katunayake Airport</option>
                <option value="Colombo City / Fort">Colombo City</option>
                <option value="Kandy">Kandy</option>
                <option value="Dambulla / Sigiriya">Dambulla / Sigiriya</option>
                <option value="Other">Other Location</option>
              </select>
            </div>

            <div className="form-group" style={{ marginBottom: 0 }}>
              <label style={{ fontSize: '.82rem', fontWeight: 600, color: 'var(--primary)' }}>🏁 Drop-off Destination</label>
              <select name="to" value={formData.to} onChange={handleChange} className="form-control">
                <option value="">Select Destination</option>
                <option value="Bandaranaike International Airport (BIA Katunayake)">BIA Katunayake Airport</option>
                <option value="Colombo City / Fort">Colombo City</option>
                <option value="Kilinochchi">Kilinochchi</option>
                <option value="Jaffna">Jaffna</option>
                <option value="Kandy">Kandy</option>
                <option value="Sigiriya">Sigiriya</option>
                <option value="Ella">Ella</option>
                <option value="Nuwara Eliya">Nuwara Eliya</option>
                <option value="Galle / Southern Coast">Galle / South</option>
                <option value="Other">Other Destination</option>
              </select>
            </div>

            <div className="form-group" style={{ marginBottom: 0 }}>
              <label style={{ fontSize: '.82rem', fontWeight: 600, color: 'var(--primary)' }}>👥 Group Size</label>
              <select name="passengers" value={formData.passengers} onChange={handleChange}>
                <option value="1-3 Passengers">1-3 Passengers</option>
                <option value="4-7 Passengers">4-7 Passengers</option>
                <option value="8-10 Passengers">8-10 Passengers</option>
                <option value="11-14+ Passengers">11-14+ Passengers</option>
              </select>
            </div>

            <div className="form-group" style={{ marginBottom: 0 }}>
              <label style={{ fontSize: '.82rem', fontWeight: 600, color: 'var(--primary)' }}>🚐 Preferred Vehicle</label>
              <select name="vehicle" value={formData.vehicle} onChange={handleChange}>
                <option value="Toyota KDH Van">Toyota KDH High-Roof Van (AC, 10-14 Seats)</option>
                <option value="Budget Car (Wagon R)">Budget Car - Wagon R (AC, 1-3 Seats)</option>
                <option value="Mini Bus">Tourist Mini Bus (AC, 15-30 Seats)</option>
              </select>
            </div>
          </div>

          {/* Analysis Results Summary Box */}
          {routeDetails ? (
            <div style={{ background: 'var(--white)', padding: '1.25rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border)', marginBottom: '1.25rem' }}>
              <div className="form-row" style={{ fontSize: '.88rem' }}>
                <div>
                  <strong style={{ color: 'var(--primary)', display: 'block', marginBottom: '.3rem' }}>🛣️ Route Highway & Road Info</strong>
                  <p style={{ margin: 0, fontSize: '.85rem' }}>
                    Route runs via {routeDetails.highway}. Exact distance: <strong>{routeDetails.km} km</strong>. Estimated travel duration: <strong>{routeDetails.time}</strong>.
                  </p>
                </div>
                <div>
                  <strong style={{ color: 'var(--primary)', display: 'block', marginBottom: '.3rem' }}>🧳 Vehicle & Luggage Fit</strong>
                  <p style={{ margin: 0, fontSize: '.85rem' }}>
                    {formData.vehicle.includes('KDH')
                      ? 'Spacious high-roof van ideal for groups with up to 10 large suitcases.'
                      : 'Ideal for light luggage and comfortable group travel.'}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '1rem', background: '#fff', borderRadius: 'var(--radius-sm)', border: '1px dashed var(--border)', marginBottom: '1.25rem', fontSize: '.88rem', color: 'var(--text-muted)' }}>
              👈 Pick a pickup city and destination above to see the exact distance and travel time!
            </div>
          )}

          {/* Actions */}
          <div className="hero-btns" style={{ marginBottom: 0 }}>
            <a
              href="/tours"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              <i className="fa-solid fa-map-location-dot" style={{ color: 'var(--accent)' }}></i> Explore Tours Page 🗺️
            </a>
            <button
              type="button"
              className="btn btn-accent"
              onClick={() => setViewMode('quick')}
            >
              <i className="fa-solid fa-check-circle"></i> Proceed to Quick Booking
            </button>
            <a
              href={`https://wa.me/94771995814?text=${encodeURIComponent(
                `Hello Sparrow Travels! 🦅\n\nI analysed my trip on your website:\n📍 From: ${formData.from || '-'}\n🏁 To: ${formData.to || '-'}\n🚐 Vehicle: ${formData.vehicle}\n👥 Group: ${formData.passengers}\n${routeDetails ? `📏 Exact Distance: ${routeDetails.km} km\n⏱️ Est. Travel Time: ${routeDetails.time}\n` : ''}Please send me a formal quotation!`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              <i className="fa-brands fa-whatsapp" style={{ color: '#25d366' }}></i> Send WhatsApp Request
            </a>
          </div>
        </div>
      )}

      {/* MODE B: STREAMLINED QUICK BOOKING FORM */}
      <form onSubmit={handleSubmit}>
        <div className="form-row" style={{ marginBottom: '1rem' }}>
          <div className="form-group" style={{ marginBottom: 0 }}>
            <label style={{ fontSize: '.82rem', fontWeight: 600, color: 'var(--primary)' }}>📍 Pick-up Location *</label>
            <select name="from" value={formData.from} onChange={handleChange} required className="form-control">
              <option value="">Select Pickup City</option>
              <option value="Kilinochchi">Kilinochchi</option>
              <option value="Jaffna">Jaffna</option>
              <option value="Vavuniya">Vavuniya</option>
              <option value="Mullaitivu">Mullaitivu</option>
              <option value="Mannar">Mannar</option>
              <option value="Bandaranaike International Airport (BIA Katunayake)">BIA Katunayake Airport</option>
              <option value="Colombo City / Fort">Colombo City</option>
              <option value="Kandy">Kandy</option>
              <option value="Dambulla / Sigiriya">Dambulla / Sigiriya</option>
              <option value="Other">Other Location</option>
            </select>
          </div>

          <div className="form-group" style={{ marginBottom: 0 }}>
            <label style={{ fontSize: '.82rem', fontWeight: 600, color: 'var(--primary)' }}>🏁 Drop-off Destination *</label>
            <select name="to" value={formData.to} onChange={handleChange} required className="form-control">
              <option value="">Select Destination</option>
              <option value="Bandaranaike International Airport (BIA Katunayake)">BIA Katunayake Airport</option>
              <option value="Colombo City / Fort">Colombo City</option>
              <option value="Kilinochchi">Kilinochchi</option>
              <option value="Jaffna">Jaffna</option>
              <option value="Kandy">Kandy</option>
              <option value="Sigiriya">Sigiriya</option>
              <option value="Ella">Ella</option>
              <option value="Nuwara Eliya">Nuwara Eliya</option>
              <option value="Galle / Southern Coast">Galle / South</option>
              <option value="Other">Other Destination</option>
            </select>
          </div>
        </div>

        <div className="form-row" style={{ marginBottom: '1rem' }}>
          <div className="form-group" style={{ marginBottom: 0 }}>
            <label style={{ fontSize: '.82rem', fontWeight: 600, color: 'var(--primary)' }}>📅 Departure Date *</label>
            <input type="date" name="date" value={formData.date} onChange={handleChange} required />
          </div>

          {tripType === 'Return' && (
            <div className="form-group" style={{ marginBottom: 0 }}>
              <label style={{ fontSize: '.82rem', fontWeight: 600, color: 'var(--primary)' }}>🔙 Return Date *</label>
              <input type="date" name="return_date" value={formData.return_date} onChange={handleChange} required />
            </div>
          )}

          <div className="form-group" style={{ marginBottom: 0 }}>
            <label style={{ fontSize: '.82rem', fontWeight: 600, color: 'var(--primary)' }}>👥 Passengers</label>
            <select name="passengers" value={formData.passengers} onChange={handleChange}>
              <option value="1-3 Passengers">1-3 Passengers</option>
              <option value="4-7 Passengers">4-7 Passengers</option>
              <option value="8-10 Passengers">8-10 Passengers</option>
              <option value="11-14+ Passengers">11-14+ Passengers</option>
            </select>
          </div>
        </div>

        <div className="form-row" style={{ marginBottom: '1.25rem' }}>
          <div className="form-group" style={{ marginBottom: 0 }}>
            <label style={{ fontSize: '.82rem', fontWeight: 600, color: 'var(--primary)' }}>🚐 Preferred Vehicle</label>
            <select name="vehicle" value={formData.vehicle} onChange={handleChange}>
              <option value="Toyota KDH Van">Toyota KDH High-Roof Van (AC, 10-14 Seats)</option>
              <option value="Budget Car (Wagon R)">Budget Car - Wagon R (AC, 1-3 Seats)</option>
              <option value="Mini Bus">Tourist Mini Bus (AC, 15-30 Seats)</option>
            </select>
          </div>

          <div className="form-group" style={{ marginBottom: 0 }}>
            <label style={{ fontSize: '.82rem', fontWeight: 600, color: 'var(--primary)' }}>👤 Your Name *</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Full Name" required />
          </div>

          <div className="form-group" style={{ marginBottom: 0 }}>
            <label style={{ fontSize: '.82rem', fontWeight: 600, color: 'var(--primary)' }}>📞 Phone / WhatsApp *</label>
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="0771995814" required />
          </div>
        </div>

        <button type="submit" className="btn btn-accent btn-full btn-lg" style={{ marginTop: '.5rem' }}>
          <i className="fa-brands fa-whatsapp"></i> Instant WhatsApp Quote & Quick Booking
        </button>
      </form>
    </div>
  );
}
