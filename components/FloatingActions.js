export default function FloatingActions() {
  return (
    <div className="floating-actions-wrap">
      <a href="tel:0771995814" className="floating-btn floating-btn-call" aria-label="Call 0771995814">
        <i className="fa-solid fa-phone"></i>
        <span className="tooltip">Call 0771995814</span>
      </a>
      <a href="https://wa.me/94771995814" className="floating-btn floating-btn-wa" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
        <i className="fa-brands fa-whatsapp"></i>
        <span className="tooltip">WhatsApp 24/7</span>
      </a>
    </div>
  );
}
