'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

function BookingFormContent() {
  const searchParams = useSearchParams();
  const [tripType, setTripType] = useState('One-Way');
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    from: '',
    to: '',
    date: '',
    return_date: '',
    passengers: '1-3 Passengers',
    vehicle: 'Toyota KDH Van',
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  useEffect(() => {
    const dest = searchParams.get('destination') || searchParams.get('to');
    const pickup = searchParams.get('from');
    const veh = searchParams.get('vehicle');

    setFormData((prev) => ({
      ...prev,
      to: dest || prev.to,
      from: pickup || prev.from,
      vehicle: veh || prev.vehicle,
    }));
  }, [searchParams]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const returnDateStr = tripType === 'Return' && formData.return_date ? `\n🔙 Return Date: ${formData.return_date}` : '';
    const emailStr = formData.email ? `\n📧 Email: ${formData.email}` : '';

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
      `📞 Phone/WhatsApp: ${formData.phone || '-'}${emailStr}\n` +
      `💬 Notes: ${formData.message || 'None'}\n` +
      `━━━━━━━━━━━━━━━━\n` +
      `Please confirm price and vehicle availability. Thank you!`;

    window.open(`https://wa.me/94771995814?text=${encodeURIComponent(msg)}`, '_blank');
    setSubmitted(true);
  };

  return (
    <div id="formWrap">
      <div className="booking-page-form">
        {submitted ? (
          <div id="bookingSuccess" className="booking-success" style={{ display: 'block' }}>
            <div className="success-icon">
              <i className="fa-solid fa-check"></i>
            </div>
            <h3 style={{ marginBottom: '.5rem' }}>Booking Request Sent!</h3>
            <p style={{ marginBottom: '1.5rem' }}>
              Your transfer details have been generated and sent to our WhatsApp team. We will review your route and confirm your quote & vehicle instantly.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="https://wa.me/94771995814" target="_blank" rel="noopener noreferrer" className="btn btn-accent">
                <i className="fa-brands fa-whatsapp"></i> Chat on WhatsApp
              </a>
              <Link href="/" className="btn btn-primary">
                Back to Home
              </Link>
            </div>
          </div>
        ) : (
          <form id="bookingForm" onSubmit={handleSubmit}>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '1.25rem', color: 'var(--primary)' }}>
              <i className="fa-solid fa-route" style={{ color: 'var(--accent)', marginRight: '.4rem' }}></i>
              Book Your Ride / Airport Drop
            </h3>

            <div className="trip-type-wrapper">
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

            <div className="form-section-title">📍 Route Details</div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="b-from">Pick-up Location *</label>
                <input
                  type="text"
                  id="b-from"
                  name="from"
                  value={formData.from}
                  onChange={handleChange}
                  placeholder="e.g. Kilinochchi, Jaffna, BIA Airport..."
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="b-to">Drop-off Destination *</label>
                <input
                  type="text"
                  id="b-to"
                  name="to"
                  value={formData.to}
                  onChange={handleChange}
                  placeholder="e.g. Colombo, Kandy, Sigiriya, BIA Airport..."
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="b-date">Departure Date *</label>
                <input
                  type="date"
                  id="b-date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
              </div>

              {tripType === 'Return' && (
                <div className="form-group">
                  <label htmlFor="b-return-date">Return Date *</label>
                  <input
                    type="date"
                    id="b-return-date"
                    name="return_date"
                    value={formData.return_date}
                    onChange={handleChange}
                    required
                  />
                </div>
              )}

              <div className="form-group">
                <label htmlFor="b-passengers">Passengers *</label>
                <select
                  id="b-passengers"
                  name="passengers"
                  value={formData.passengers}
                  onChange={handleChange}
                  required
                >
                  <option value="1-3 Passengers">1-3 Passengers</option>
                  <option value="4-7 Passengers">4-7 Passengers</option>
                  <option value="8-10 Passengers">8-10 Passengers</option>
                  <option value="11-14+ Passengers">11-14+ Passengers</option>
                </select>
              </div>
            </div>

            <div className="form-section-title">🚐 Vehicle & Passenger Info</div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="b-vehicle">Preferred Vehicle *</label>
                <select
                  id="b-vehicle"
                  name="vehicle"
                  value={formData.vehicle}
                  onChange={handleChange}
                  required
                >
                  <option value="Toyota KDH Van">Toyota KDH High-Roof Van (10-14 Seats, AC)</option>
                  <option value="Budget Car (Wagon R)">Budget Car - Wagon R (1-3 Seats, AC)</option>
                  <option value="Mini Bus">Tourist Mini Bus (15-30 Seats, AC)</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="b-name">Your Full Name *</label>
                <input
                  type="text"
                  id="b-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="b-phone">Phone / WhatsApp Number *</label>
                <input
                  type="tel"
                  id="b-phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="0771995814"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="b-email">Email Address (Optional)</label>
                <input
                  type="email"
                  id="b-email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="b-message">Special Notes / Flight Number (Optional)</label>
              <textarea
                id="b-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Flight details, extra luggage requirements, pickup time..."
              ></textarea>
            </div>

            <button type="submit" className="btn btn-accent btn-full btn-lg">
              <i className="fa-brands fa-whatsapp"></i> Confirm & Send Booking via WhatsApp
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default function BookingForm() {
  return (
    <Suspense fallback={<div>Loading booking form...</div>}>
      <BookingFormContent />
    </Suspense>
  );
}
