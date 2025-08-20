import React, { useState, useEffect } from 'react';
import { FaUsers, FaRocket, FaHandshake } from 'react-icons/fa';
import './Counting.css';

const Counting = () => {
  const [counts, setCounts] = useState({
    hackers: 0,
    projects: 0,
    prizes: 0,
    sponsors: 0
  });

  useEffect(() => {
    const finalCounts = {
      hackers: 100,
      projects: 24,
      sponsors: 10
    };
    const animateCount = (key, target, duration = 2000) => {
      const start = 0;
      const increment = target / (duration / 16);
      let current = start;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setCounts(prev => ({
          ...prev,
          [key]: Math.floor(current)
        }));
      }, 16);

      return timer;
    };

    const timers = [];
    timers.push(setTimeout(() => animateCount('hackers', finalCounts.hackers), 200));
    timers.push(setTimeout(() => animateCount('projects', finalCounts.projects), 400));
    timers.push(setTimeout(() => animateCount('sponsors', finalCounts.sponsors), 800));

    return () => {
      timers.forEach(timer => clearTimeout(timer));
    };
  }, []);

  const stats = [
    {
      key: 'hackers',
      label: 'Hackers',
      value: counts.hackers,
      suffix: '+',
      icon: FaUsers
    },
    {
      key: 'projects',
      label: 'Projects Built',
      value: counts.projects,
      suffix: '+',
      icon: FaRocket
    },
    {
      key: 'sponsors',
      label: 'Sponsors',
      value: counts.sponsors,
      suffix: '+',
      icon: FaHandshake
    }
  ];

  return (
    <section className="counting-section">
      <div className="counting-container">
        <div className="counting-header">
          <div className="counting-badge">LAST YEAR</div>
          <h2 className="counting-title">Our Amazing Numbers</h2>
          <p className="counting-subtitle">
            Here's what made our previous hackathon incredible
          </p>
        </div>

        <div className="stats-grid">
                      {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div 
                key={stat.key} 
                className="stat-card"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="stat-icon">
                  <IconComponent />
                </div>
                <div className="stat-number">
                  {stat.value.toLocaleString()}{stat.suffix}
                </div>
                <div className="stat-label">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Counting;