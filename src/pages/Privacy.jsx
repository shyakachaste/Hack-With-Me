import React from 'react';
import Footer from '../components/Footer';
import './Privacy.css';

const Privacy = () => {
  const effectiveDate = 'August 26, 2025';

  return (
    <>
      <section className="privacy-page">
        <div className="privacy-container">
          <header className="privacy-header">
            <div className="privacy-badge">POLICY</div>
            <h1 className="privacy-title">Privacy Policy</h1>
            <p className="privacy-subtitle">How we handle information for Hack With Me.</p>
          </header>

          <div className="privacy-section">
            <h2>Who we are</h2>
            <p>Hack With Me is one of the largest hackathons in Rwanda and across Africa, bringing students together to team up and build cool projects. In 2025, we were recognized as the biggest high school hackathon. Our goal is to make hackathons more accessible to everyone.</p>
          </div>

          <div className="privacy-section">
            <h2>What we collect</h2>
            <ul>
              <li><strong>Site basics</strong>: standard server logs (IP address, user agent) kept briefly by our hosting to keep the site reliable and secure.</li>
              <li><strong>Emails</strong>: if you contact us at <a href="mailto:info@hackwithme.org">info@hackwithme.org</a>, we receive your email address and message.</li>
              <li><strong>Donations/Sponsorship</strong>: if you donate or sponsor through third‑party platforms (e.g., Hack Club Bank), those providers process your details and share only what we need for receipts and compliance.</li>
              <li><strong>Event registration</strong>: if sign‑ups are handled through an external ticketing tool, your data is processed by that provider first. We receive only the fields required to run the event (e.g., name, email).</li>
            </ul>
          </div>

          <div className="privacy-section">
            <h2>Cookies and analytics</h2>
            <p>We do not use advertising cookies and we don’t run invasive trackers. If we use a basic visit counter, it will be minimal and only for aggregate stats. You can block cookies in your browser.</p>
          </div>

          <div className="privacy-section">
            <h2>How we use information</h2>
            <ul>
              <li>Operate the website, fix issues, and keep things secure.</li>
              <li>Run the hackathon (planning, logistics, and event communications).</li>
              <li>Respond to sponsor/partner outreach and community questions.</li>
            </ul>
          </div>

          <div className="privacy-section">
            <h2>Sharing</h2>
            <p>We don’t sell personal data. We share limited information with trusted service providers only when needed to operate the event or process donations. These providers must handle your data responsibly.</p>
          </div>

          <div className="privacy-section">
            <h2>Retention</h2>
            <p>We keep information only as long as needed for the reasons above—then delete it or anonymize it.</p>
          </div>

          <div className="privacy-section">
            <h2>Minors</h2>
            <p>Hack With Me is for students only. We limit what we collect and communicate clearly with participants and guardians when required by school or venue policy.</p>
          </div>

          <div className="privacy-section">
            <h2>Your choices</h2>
            <ul>
              <li>You can email us to request access, correction, or deletion of your information.</li>
              <li>You can block cookies in your browser settings.</li>
            </ul>
          </div>

          <div className="privacy-section">
            <h2>Contact</h2>
            <p style={{ margin: 0 }}>Questions? Email <a href="mailto:info@hackwithme.org">info@hackwithme.org</a>.</p>
          </div>

          <div className="privacy-section privacy-note">
            <p style={{ margin: 0 }}><strong>Effective date:</strong> {effectiveDate}. We may update this page as our event or tools change.</p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Privacy;


