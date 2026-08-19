'use client';

import { useState, useEffect } from 'react';

const TESTIMONIALS = [
  {
    stars: '★★★★★',
    text: `"Absolutely wonderful experience with Sparrow Travels! We booked their Toyota KDH van for a family tour across Colombo, Kandy, Sigiriya, and Ella. The van was exceptionally clean, comfortable, and well-maintained with icy cold AC. Driver was punctual, courteous, and drove very safely. Highly recommended!"`,
    avatar: 'SF',
    avatarBg: '#4285F4',
    name: 'Sarah Fernando',
    role: 'Google Reviewer • 5.0 ★★★★★',
  },
  {
    stars: '★★★★★',
    text: `"Outstanding van service! Available 24/7 on WhatsApp. Picked us up right on time from Colombo Bandaranaike Airport. Very affordable pricing, transparent quote with no hidden fees, and a friendly professional driver. Best travel agency in Sri Lanka!"`,
    avatar: 'DM',
    avatarBg: '#34A853',
    name: 'David Miller',
    role: 'Google Reviewer • 5.0 ★★★★★',
  },
  {
    stars: '★★★★★',
    text: `"Top-notch private tour service! Took our group across Sigiriya, Nuwara Eliya, and Jaffna. Punctual, safe driving, clean vehicle, and wonderful local insights. Sparrow Travels made our Sri Lanka trip smooth and unforgettable."`,
    avatar: 'AR',
    avatarBg: '#EA4335',
    name: 'A. Rajendran',
    role: 'Google Reviewer • 5.0 ★★★★★',
  },
];

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="testimonial-slider">
      <div
        className="testimonial-track"
        style={{ transform: `translateX(-${current * 100}%)`, transition: 'transform 0.5s ease-in-out' }}
      >
        {TESTIMONIALS.map((t, idx) => (
          <div className="testimonial-card" key={idx}>
            <div className="testimonial-stars">{t.stars}</div>
            <p className="testimonial-text">{t.text}</p>
            <div className="testimonial-author">
              <div className="testimonial-avatar" style={{ background: t.avatarBg, color: '#fff' }}>
                {t.avatar}
              </div>
              <div className="testimonial-author-info">
                <p className="name">{t.name}</p>
                <p className="role">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="slider-dots mt-3">
        {TESTIMONIALS.map((_, idx) => (
          <button
            key={idx}
            className={`dot ${current === idx ? 'active' : ''}`}
            aria-label={`Slide ${idx + 1}`}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>
    </div>
  );
}
