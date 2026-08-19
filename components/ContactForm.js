'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSendWhatsApp = (e) => {
    e.preventDefault();
    const msg =
      `Hello Sparrow Travels! 🦅\n\n` +
      `*CONTACT ENQUIRY*\n` +
      `👤 Name: ${formData.name || '-'}\n` +
      `📞 Phone: ${formData.phone || '-'}\n` +
      `📧 Email: ${formData.email || '-'}\n` +
      `📌 Subject: ${formData.subject || '-'}\n` +
      `💬 Message: ${formData.message || '-'}`;

    window.open(`https://wa.me/94771995814?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <form id="contactForm" onSubmit={handleSendWhatsApp}>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="c-name">Your Name</label>
          <input
            type="text"
            id="c-name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="c-phone">Phone / WhatsApp</label>
          <input
            type="tel"
            id="c-phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="0771995814"
            required
          />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="c-email">Email Address</label>
        <input
          type="email"
          id="c-email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="sparrowtravels.kili@gmail.com"
        />
      </div>
      <div className="form-group">
        <label htmlFor="c-subject">Subject</label>
        <input
          type="text"
          id="c-subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="e.g. Booking enquiry, Tour information..."
        />
      </div>
      <div className="form-group">
        <label htmlFor="c-message">Message</label>
        <textarea
          id="c-message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us how we can help you..."
          required
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary btn-full">
        <i className="fa-brands fa-whatsapp"></i> Send via WhatsApp
      </button>
    </form>
  );
}
