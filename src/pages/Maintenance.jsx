import React, { useEffect, useRef, useState } from 'react';
import logo from '../assets/logo.png';

const THREE_DAYS_MS = 3 * 24 * 60 * 60 * 1000;

const formatTime = (milliseconds) => {
  const totalSeconds = Math.max(0, Math.floor(milliseconds / 1000));
  const days = Math.floor(totalSeconds / (24 * 3600));
  const hours = Math.floor((totalSeconds % (24 * 3600)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const pad = (n) => String(n).padStart(2, '0');
  return { days, hours: pad(hours), minutes: pad(minutes), seconds: pad(seconds) };
};

const STORAGE_KEY = 'maintenanceTargetTimestamp';

const getOrSetTargetTimestamp = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    const parsed = stored ? Number(stored) : NaN;
    if (!Number.isNaN(parsed)) {
      // Use existing stored timestamp even if it has already passed
      return parsed;
    }
    const fresh = Date.now() + THREE_DAYS_MS;
    localStorage.setItem(STORAGE_KEY, String(fresh));
    return fresh;
  } catch (_) {
    return Date.now() + THREE_DAYS_MS;
  }
};

const useNarrowMode = (query = '(max-width: 480px)') => {
  const [isNarrow, setIsNarrow] = useState(false);
  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const mediaQueryList = window.matchMedia(query);
    const update = (event) => setIsNarrow(event.matches);
    setIsNarrow(mediaQueryList.matches);
    if (mediaQueryList.addEventListener) {
      mediaQueryList.addEventListener('change', update);
    } else if (mediaQueryList.addListener) {
      mediaQueryList.addListener(update);
    }
    return () => {
      if (mediaQueryList.removeEventListener) {
        mediaQueryList.removeEventListener('change', update);
      } else if (mediaQueryList.removeListener) {
        mediaQueryList.removeListener(update);
      }
    };
  }, [query]);
  return isNarrow;
};

const Maintenance = () => {
  const targetRef = useRef(getOrSetTargetTimestamp());
  const [now, setNow] = useState(Date.now());
  const isNarrow = useNarrowMode();

  useEffect(() => {
    const intervalId = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(intervalId);
  }, []);

  const remaining = Math.max(0, targetRef.current - now);
  const { days, hours, minutes, seconds } = formatTime(remaining);

  return (
    <div style={styles.container}>
      <img src={logo} alt="Hack With Me logo" style={styles.logo} />
      <h1 style={styles.title}>We&rsquo;re under maintenance</h1>
      <p style={styles.subtitle}>We&rsquo;re getting things ready. Please check back soon.</p>
      <div style={styles.countdown}>
        <TimeBox label="Days" value={days} />
        <Separator hidden={isNarrow} />
        <TimeBox label="Hours" value={hours} />
        <Separator hidden={isNarrow} />
        <TimeBox label="Minutes" value={minutes} />
        <Separator hidden={isNarrow} />
        <TimeBox label="Seconds" value={seconds} />
      </div>
      <p style={styles.footer}>Time to deployment</p>
    </div>
  );
};

const TimeBox = ({ label, value }) => (
  <div style={styles.timeBox}>
    <div style={styles.timeValue}>{value}</div>
    <div style={styles.timeLabel}>{label}</div>
  </div>
);

const Separator = ({ hidden }) => (
  <div style={{ ...styles.separator, display: hidden ? 'none' : 'block' }}>:</div>
);

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: 'clamp(1rem, 4vw, 2rem)',
    background: 'linear-gradient(135deg, #0f172a 0%, #111827 100%)',
    color: '#e5e7eb'
  },
  logo: {
    width: 'clamp(80px, 20vw, 140px)',
    height: 'auto',
    marginBottom: '1rem'
  },
  title: {
    fontSize: 'clamp(1.5rem, 5vw, 2.4rem)',
    margin: '0.5rem 0',
    color: '#ffffff'
  },
  subtitle: {
    margin: '0 0 1.25rem 0',
    color: '#9ca3af'
  },
  countdown: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    columnGap: 'clamp(0.4rem, 2vw, 0.75rem)',
    rowGap: 'clamp(0.4rem, 2vw, 0.75rem)',
    marginBottom: '0.75rem'
  },
  timeBox: {
    background: 'rgba(255,255,255,0.06)',
    border: '1px solid rgba(255,255,255,0.12)',
    borderRadius: 12,
    padding: 'clamp(0.55rem, 2.5vw, 0.9rem) clamp(0.7rem, 2.8vw, 1rem)',
    minWidth: 'clamp(64px, 22vw, 110px)'
  },
  timeValue: {
    fontSize: 'clamp(1.6rem, 7vw, 2.6rem)',
    fontWeight: 700,
    color: '#ffffff'
  },
  timeLabel: {
    fontSize: 'clamp(0.7rem, 2.5vw, 0.9rem)',
    color: '#9ca3af',
    marginTop: 4
  },
  separator: {
    fontSize: 'clamp(1.6rem, 7vw, 2.6rem)',
    fontWeight: 700,
    color: '#9ca3af',
    padding: '0 0.25rem'
  },
  footer: {
    marginTop: '0.25rem',
    fontSize: 'clamp(0.8rem, 2.6vw, 0.95rem)',
    color: '#9ca3af'
  }
};

export default Maintenance;


