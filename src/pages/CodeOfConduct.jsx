import React from 'react';
import Footer from '../components/Footer';
import './CodeOfConduct.css';

const CodeOfConduct = () => {
  return (
    <>
      <section className="coc-page">
        <div className="coc-container">
          <header className="coc-header">
            <div className="coc-badge">GUIDELINES</div>
            <h1 className="coc-title">Code of Conduct</h1>
            <p className="coc-subtitle">A friendly, respectful space for everyone at Hack With Me.</p>
          </header>

          <div className="coc-section">
            <h2>Our values</h2>
            <p>Hack With Me brings high‑school students together to build, learn, and help each other. We value kindness, curiosity, and shipping real projects.</p>
          </div>

          <div className="coc-section">
            <h2>Be respectful</h2>
            <ul>
              <li>Treat everyone with respect, regardless of background or skill level.</li>
              <li>Use inclusive language and welcome new participants.</li>
              <li>Follow instructions from staff and volunteers.</li>
            </ul>
          </div>

          <div className="coc-section">
            <h2>Be inclusive</h2>
            <ul>
              <li>Encourage teammates and make space for different viewpoints.</li>
              <li>Help others learn. Share context and resources when asked.</li>
              <li>Assume good intent. Ask questions before jumping to conclusions.</li>
            </ul>
          </div>

          <div className="coc-section">
            <h2>Keep it safe</h2>
            <ul>
              <li>Follow venue rules and local laws.</li>
              <li>No harassment, discrimination, or bullying.</li>
              <li>No dangerous or illegal projects.</li>
            </ul>
          </div>

          <div className="coc-section">
            <h2>Harassment and unacceptable behavior</h2>
            <p>Harassment is not tolerated. This includes (but is not limited to):</p>
            <ul>
              <li>Offensive comments related to identity, appearance, or background.</li>
              <li>Deliberate intimidation, stalking, sustained disruption.</li>
              <li>Unwelcome sexual attention or physical contact.</li>
              <li>Encouraging self‑harm or dangerous activities.</li>
            </ul>
          </div>

          <div className="coc-section">
            <h2>Project integrity</h2>
            <ul>
              <li>Build during the event window. You can bring ideas, not completed code.</li>
              <li>Credit teammates and open‑source tools you use.</li>
              <li>Respect intellectual property and licenses.</li>
            </ul>
          </div>

          <div className="coc-section">
            <h2>Mentorship and judging</h2>
            <ul>
              <li>Mentors give guidance—not full solutions. Keep help fair and accessible.</li>
              <li>Judges aim for fairness and transparency. Conflicts of interest are disclosed.</li>
              <li>Feedback should be constructive and focused on growth.</li>
            </ul>
          </div>

          <div className="coc-section">
            <h2>Reporting</h2>
            <p>If you experience or witness a problem, reach out right away. We’ll listen and act quickly. Email <a href="mailto:info@hackwithme.org">info@hackwithme.org</a>.</p>
          </div>

          <div className="coc-section">
            <h2>Consequences</h2>
            <p>We may issue warnings or remove participants who break this code. Our goal is a safe, supportive space for everyone.</p>
          </div>

          <div className="coc-section">
            <h2>Health and safety</h2>
            <ul>
              <li>Keep aisles clear and equipment tidy. Ask before using tools you’re unfamiliar with.</li>
              <li>If you feel unwell, notify a volunteer and take a break.</li>
              <li>Follow any venue‑specific safety guidance posted on site.</li>
            </ul>
          </div>

          <div className="coc-section">
            <h2>Media and photography</h2>
            <ul>
              <li>Photos and video may be taken for community highlights.</li>
              <li>If you prefer not to be photographed, let a volunteer know and we’ll accommodate.</li>
              <li>Be mindful before posting images of others. Ask for consent.</li>
            </ul>
          </div>

          <div className="coc-section">
            <h2>Data and privacy</h2>
            <p>We minimize data collection and use it only to run the event. See our <a href="/privacy">Privacy Policy</a> for details.</p>
          </div>

          <div className="coc-section">
            <h2>Accessibility</h2>
            <ul>
              <li>We aim to provide an accessible experience. Tell us what you need—we’ll try to help.</li>
              <li>Quiet areas and breaks are encouraged. Respect others’ need for focus.</li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default CodeOfConduct;


