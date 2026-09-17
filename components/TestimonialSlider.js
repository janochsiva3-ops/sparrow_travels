'use client';

import { useState, useEffect } from 'react';

const TESTIMONIALS = [
  {
    stars: '★★★★★',
    text: `"Very friendly and good driving. Affordable price recharge to jaffna. Vehicles very comfortable."`,
    avatar: 'SF',
    avatarBg: '#4285F4',
    name: 'Jeyakarthik Thangavel',
    role: 'Google Reviewer • 5.0 ★★★★★',
  },
  {
    stars: '★★★★★',
    text: `"Excellent service, clean vehicle, polite driver. Safe and comfortable trip. I recommend Sparrow Travels to everyone."`,
    avatar: 'DM',
    avatarBg: '#34A853',
    name: 'Sivanesan Pavalan',
    role: 'Google Reviewer • 5.0 ★★★★★',
  },
  {
    stars: '★★★★★',
    text: `"Very good quality vehicle. Clean and easy to travel anywhere sparrow travels."`,
    avatar: 'AR',
    avatarBg: '#EA4335',
    name: 'Kps Rajeevan',
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
