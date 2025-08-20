import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import './TeamSection.css';
import image1 from '../assets/team/chaste.jpg';
import image2 from '../assets/team/bonheur.jpg';


const teamMembers = [
  {
    name: 'Shyaka Chaste',
    role: 'Founder & Lead organizer',
    linkedin: 'https://www.linkedin.com/in/shyakachaste',
    img: image1,
  },
  {
    name: 'Bonheur Iraguha',
    role: 'Lead organizer',
    linkedin: 'https://www.linkedin.com/in/bonheur-iraguha-150894256/',
    img: image2,
  },
  
];

const TeamSection = () => {
  return (
    <div className="team-section" id="team">
      <div className="team-badge">TEAM</div>
      <div className="team-container">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <div className="team-img-wrapper">
              <img src={member.img} alt={member.name} className="team-img" />
            </div>
            <h3 className="team-name">{member.name}</h3>
            <p className="team-role">{member.role}</p>
            <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="linkedin">
              <FaLinkedin />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;