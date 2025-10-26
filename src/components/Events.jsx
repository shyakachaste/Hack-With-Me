import React from 'react';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import './Events.css';
import hackwithme2025 from '../assets/events/hackwithme_2025.png';

const events = [
  {
    id: 1,
    title: 'Hack With Me 2025',
    description: '100 high schoolers joined Hack With Me 2025, a 2-day hackathon themed “Code for Impact.” ',
    date: 'August 16-17, 2025',
    location: 'ULK, Gisozi',
    status: 'completed',
    image: hackwithme2025,
    participants: '100+ Participated',
    link: 'https://www.hackwithme2025.com/',
  },
];

const Events = () => {
  const getStatusText = (status) => {
    switch (status) {
      case 'upcoming':
        return 'Coming Soon';
      case 'completed':
        return 'Past Event';
      case 'ongoing':
        return 'Live Now';
      default:
        return status;
    }
  };

  return (
    <section className="events-section" id="events">
      <div className="events-container">
        <header className="events-header">
          <div className="events-badge">EVENTS</div>
          <p className="events-subtitle">
            Explore our past editions and upcoming events. 
          </p>
        </header>

        <div className="events-grid">
          {events.map((event) => (
            <div key={event.id} className="event-card">
              <div className="event-image-wrapper">
                <img src={event.image} alt={event.title} className="event-image" />
                <span className={`event-status status-${event.status}`}>
                  {getStatusText(event.status)}
                </span>
              </div>
              
              <div className="event-content">
                <h3 className="event-title">{event.title}</h3>
                <p className="event-description">{event.description}</p>
                
                <div className="event-details">
                  <div className="event-detail">
                    <FaCalendarAlt className="event-icon" />
                    <span>{event.date}</span>
                  </div>
                  <div className="event-detail">
                    <FaMapMarkerAlt className="event-icon" />
                    <span>{event.location}</span>
                  </div>
                </div>

                <div className="event-footer">
                  <span className="event-participants">{event.participants}</span>
                  <a href={event.link} className="event-link" target="_blank" rel="noopener noreferrer">
                    Learn More →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;