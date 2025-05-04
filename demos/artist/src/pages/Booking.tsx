import bookingImage from '../assets/booking-art.jpg'; // Optional: classic-themed image

export default function Booking() {
  return (
    <div className="container py-5">
     
      <div className="row g-4 align-items-start">
        <div className="col-md-6">
          <div className="mb-3 p-3 rounded shadow-sm" style={{ backgroundColor: 'var(--ivory)', borderLeft: '4px solid var(--gold)' }}>
            <h5 className="fw-bold" style={{ color: 'var(--muted-navy)' }}>🎼 General Inquiries</h5>
            <p className="fs-5 mb-1">For questions, compliments or thoughts.</p>
            <a className="fs-4" href="mailto:hello@mozart.art" style={{ color: 'var(--deep-burgundy)', fontWeight: '500' }}>hello@mozart.art</a>
          </div>

          <div className="mb-3 p-3 rounded shadow-sm" style={{ backgroundColor: 'var(--ivory)', borderLeft: '4px solid var(--gold)' }}>
            <h5 className="fw-bold" style={{ color: 'var(--muted-navy)' }}>🎤 Booking & Press</h5>
            <p className="fs-5 mb-1">For concerts, interviews or press kits.</p>
            <a className="fs-4" href="mailto:booking@mozart.art" style={{ color: 'var(--deep-burgundy)', fontWeight: '500' }}>booking@mozart.art</a>
          </div>

          <div className="p-3 rounded shadow-sm" style={{ backgroundColor: 'var(--ivory)', borderLeft: '4px solid var(--gold)' }}>
            <h5 className="fw-bold" style={{ color: 'var(--muted-navy)' }}>🎨 Brand Collaborations</h5>
            <p className="fs-5 mb-1">Got a creative concept or product synergy?</p>
            <a className="fs-4" href="mailto:collab@mozart.art" style={{ color: 'var(--deep-burgundy)', fontWeight: '500' }}>collab@mozart.art</a>
          </div>
        </div>

        <div className="col-md-6 text-center">
          <img
            src={bookingImage}
            alt="Booking representation"
            className="img-fluid rounded shadow"
            style={{ maxHeight: '500px', objectFit: 'cover', border: '1px solid var(--muted-navy)' }}
          />
        </div>
      </div>
    </div>
  );
}
