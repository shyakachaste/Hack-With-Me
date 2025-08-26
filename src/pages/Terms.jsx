import React from 'react';
import Footer from '../components/Footer';
import './Terms.css';

const Terms = () => {
  const effectiveDate = 'August 26, 2025';

  return (
    <>
      <section className="terms-page">
        <div className="terms-container">
          <header className="terms-header">
            <div className="terms-badge">TERMS</div>
            <h1 className="terms-title">Terms of Service</h1>
            <p className="terms-subtitle">Rules for using the Hack With Me website and participating in our events.</p>
          </header>

          <div className="terms-section">
            <h2>About Hack With Me</h2>
            <p>Hack With Me is a high‑school hackathon in Rwanda. We host a flagship 24‑hour coding event and related community activities. Our site shares event details and connects with sponsors, volunteers, and participants.</p>
          </div>

          <div className="terms-section">
            <h2>Using the website</h2>
            <ul>
              <li>Use the site lawfully and respectfully. Don’t attempt to disrupt, attack, or scrape the service.</li>
              <li>Content may change without notice. We try to keep details accurate but can’t guarantee it.</li>
              <li>Links to third‑party services (e.g., ticketing, donations) are provided for convenience. Their terms and privacy apply there.</li>
            </ul>
          </div>

          <div className="terms-section">
            <h2>Event participation</h2>
            <ul>
              <li>Participants must follow our <a className="terms-link" href="/code-of-conduct">Code of Conduct</a> and venue rules.</li>
              <li>Projects should be created during the event window. Share credit fairly and respect licenses.</li>
              <li>We may adjust schedules, formats, or rules if needed for safety or fairness.</li>
            </ul>
          </div>

          <div className="terms-section">
            <h2>Intellectual property</h2>
            <ul>
              <li>You own the work you create. By participating, you allow us to showcase projects for community highlights.</li>
              <li>Use open‑source responsibly and follow applicable licenses.</li>
            </ul>
          </div>

          <div className="terms-section">
            <h2>Media and communications</h2>
            <ul>
              <li>Photos/video may be taken during events. If you prefer not to be photographed, tell a volunteer and we’ll accommodate.</li>
              <li>We may contact you about event logistics or community updates. You can opt out where applicable.</li>
            </ul>
          </div>

          <div className="terms-section">
            <h2>Disclaimers and liability</h2>
            <ul>
              <li>The website is provided “as is.” We don’t promise uninterrupted or error‑free operation.</li>
              <li>To the extent allowed by law, Hack With Me and its organizers are not liable for indirect or incidental damages.</li>
            </ul>
          </div>

          <div className="terms-section">
            <h2>Privacy</h2>
            <p>We handle information carefully and keep data collection to a minimum. See our <a className="terms-link" href="/privacy">Privacy Policy</a> for details.</p>
          </div>

          <div className="terms-section">
            <h2>Changes</h2>
            <p>We may update these terms as our event or tools change. We’ll post the latest version here with the effective date.</p>
          </div>

          <div className="terms-section">
            <h2>Contact</h2>
            <p>Questions about these terms? Email <a className="terms-link" href="mailto:info@hackwithme.org">info@hackwithme.org</a>.</p>
          </div>

          <div className="terms-section" style={{ background: 'linear-gradient(135deg, rgba(0,48,73,0.06), rgba(0,48,73,0.12))', border: '1px solid rgba(0,48,73,0.16)' }}>
            <p style={{ margin: 0, color: 'var(--primary-color)' }}><strong>Effective date:</strong> {effectiveDate}</p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Terms;


