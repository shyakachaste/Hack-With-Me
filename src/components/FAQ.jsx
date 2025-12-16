
import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is Hack With Me?",
      answer: "Hack With Me is one of the largest hackathons in Rwanda and across Africa, bringing students together to team up and build cool projects. "
    },
    {
      question: "Who can participate?",
      answer: "Hack With Me is open to all students, regardless of their coding experience. Whether you're a beginner or an experienced programmer, you're welcome to join and learn with others."
    },
    {
      question: "Do I need to have a team or project idea?",
      answer: "No! Even if you don't have a team or a specific project idea, you can still participate. We provide mentors and workshops to help you form teams and develop amazing projects during the event."
    },
    {
      question: "What should I bring to the hackathon?",
      answer: "Bring your laptop, charger, and any personal items you might need for the 24-hour event. We'll provide food, drinks, and a great workspace for you to code in."
    },
    {
      question: "Is there any cost to participate?",
      answer: "No, Hack With Me is completely free to attend! We believe in making hackathons accessible to everyone, so there are no registration fees."
    },
    {
      question: "What kind of projects can I build?",
      answer: "You can build anything you want! Web applications, mobile apps, games, hardware projects, or any creative tech solution. The choice is yours, and our mentors will be there to help you bring your ideas to life."
    },
    {
      question: "Will there be prizes?",
      answer: "Yes! We have exciting prizes for various categories including best overall project, most innovative solution, best beginner project, and more. Everyone who participates also receives swag and certificates."
    },
    {
      question: "How can I stay updated about the next edition?",
      answer: "Join our Discord community and follow us on our social media channels for regular updates and behind-the-scenes content."
    }
  ];

  return (
    <section className="faq-section" id="faq">
      <div className="faq-container">
        <div className="faq-header">
          <div className="faq-badge">FAQ</div>
          <h2 className="faq-title">Frequently Asked Questions</h2>
          <p className="faq-subtitle">
            Got questions? We've got answers! Here are some of the most common questions about Hack With Me.
          </p>
        </div>

        <div className="faq-content">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <button 
                className="faq-question"
                onClick={() => toggleAccordion(index)}
              >
                <span>{faq.question}</span>
                <span className={`faq-icon ${openIndex === index ? 'open' : ''}`}>+</span>
              </button>
              <div className={`faq-answer ${openIndex === index ? 'open' : ''}`}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;