import { useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { RESORT_INFO } from '../data/content';
import './Contact.css';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const container = useRef(null);
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', eventType: '', message: '',
  });

  useGSAP(() => {
    gsap.fromTo('.section-header > *',
      { y: 40, autoAlpha: 0 },
      {
        y: 0, autoAlpha: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: container.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    );

    gsap.fromTo('.contact-form',
      { x: -60, autoAlpha: 0 },
      {
        x: 0, autoAlpha: 1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: container.current,
          start: 'top 65%',
          toggleActions: 'play none none none',
        },
      }
    );

    gsap.fromTo('.contact-info-card, .contact-map',
      { x: 60, autoAlpha: 0 },
      {
        x: 0, autoAlpha: 1,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: container.current,
          start: 'top 65%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, { scope: container });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      alert("Web3Forms access key is missing! Please set it in your .env file.");
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          ...formData,
        }),
      });
      const result = await response.json();
      if (result.success) {
        alert("Thank you for your inquiry! We will get back to you shortly.");
        setFormData({ name: '', email: '', phone: '', eventType: '', message: '' });
      } else {
        alert("Something went wrong! Please try again later.");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong! Please try again later.");
    }
  };

  return (
    <section className="contact section" id="contact" ref={container}>
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Get in Touch</span>
          <h2 className="section-title">We&rsquo;d Love to Hear from You</h2>
          <div className="gold-line" />
          <p className="section-desc">
            Have a question or ready to book your celebration? Reach out and our team will craft the perfect experience for you.
          </p>
        </div>

        <div className="contact-grid">
          <form className="contact-form" onSubmit={handleSubmit}>
            <h3>Send an Inquiry</h3>
            <p>Fill out the form and our team will respond within 24 hours.</p>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label" htmlFor="contact-name">Full Name</label>
                <input
                  className="form-input"
                  id="contact-name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="contact-email">Email</label>
                <input
                  className="form-input"
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label" htmlFor="contact-phone">Phone</label>
                <input
                  className="form-input"
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="contact-event">Event Type</label>
                <select
                  className="form-select"
                  id="contact-event"
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                >
                  <option value="">Select event type</option>
                  <option value="wedding">Wedding</option>
                  <option value="anniversary">Anniversary</option>
                  <option value="birthday">Birthday</option>
                  <option value="corporate">Corporate Event</option>
                  <option value="room">Room Booking</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="contact-message">Message</label>
              <textarea
                className="form-textarea"
                id="contact-message"
                name="message"
                placeholder="Tell us about your celebration..."
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="btn btn-primary contact-submit">
              Send Inquiry
            </button>
          </form>

          <div className="contact-info">
            <div className="contact-info-card">
              <div className="contact-info-icon">📞</div>
              <div>
                <h4>Phone</h4>
                <p><a href={`tel:${RESORT_INFO.phone.replace(/\s/g, '')}`}>{RESORT_INFO.phone}</a></p>
                <p><a href={`tel:${RESORT_INFO.phone2.replace(/\s/g, '')}`}>{RESORT_INFO.phone2}</a></p>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-info-icon">✉️</div>
              <div>
                <h4>Email</h4>
                <p><a href={`mailto:${RESORT_INFO.email}`}>{RESORT_INFO.email}</a></p>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-info-icon">📍</div>
              <div>
                <h4>Address</h4>
                <p>{RESORT_INFO.address}</p>
              </div>
            </div>

            <div className="contact-map">
              <iframe
                src={RESORT_INFO.mapEmbed}
                title="Baidyanath Resort Location"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
