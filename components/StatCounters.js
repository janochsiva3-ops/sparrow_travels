'use client';

import { useState, useEffect, useRef } from 'react';

function CounterItem({ target, suffix = '', label }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    let timer = null;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            let start = 0;
            const duration = 1800;
            const step = target / (duration / 16);
            timer = setInterval(() => {
              start = Math.min(start + step, target);
              setCount(Math.floor(start));
              if (start >= target) clearInterval(timer);
            }, 16);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (timer) clearInterval(timer);
      observer.disconnect();
    };
  }, [target]);

  return (
    <div className="stat-card" style={{ background: 'var(--bg)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }} ref={ref}>
      <span className="stat-num">{count}{suffix}</span>
      <span className="stat-lbl">{label}</span>
    </div>
  );
}

export default function StatCounters() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
      <CounterItem target={10} suffix="+" label="Years Experience" />
      <CounterItem target={500} suffix="+" label="Happy Clients" />
      <CounterItem target={9} suffix="" label="Destinations Covered" />
      <CounterItem target={100} suffix="%" label="Client Satisfaction" />
    </div>
  );
}
