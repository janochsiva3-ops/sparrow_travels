import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="section" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
      <div className="container">
        <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>404</div>
        <h2 style={{ marginBottom: '1rem' }}>Page Not Found</h2>
        <p style={{ marginBottom: '2rem' }}>
          Sorry, the page you are looking for does not exist or has been moved.
        </p>
        <Link href="/" className="btn btn-accent btn-lg">
          <i className="fa-solid fa-house"></i> Return to Home
        </Link>
      </div>
    </div>
  );
}
