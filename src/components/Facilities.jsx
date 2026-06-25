import { useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { HALLS, LUXURY_ROOMS, EVENT_EXPERIENCES } from '../data/content';
import IMAGES from '../data/images';
import './Facilities.css';

gsap.registerPlugin(ScrollTrigger);

const TABS = ['Banquet Halls', 'Luxury Rooms', 'Event Experiences'];

const EVENT_ICONS = ['💒', '💑', '🎂', '🎭', '🍽️', '🎈', '🕯️', '👨‍👩‍👧‍👦', '🎧', '🏨'];

export default function Facilities() {
  const container = useRef(null);
  const [activeTab, setActiveTab] = useState(0);

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
  }, { scope: container });

  const handleTabChange = (index) => {
    setActiveTab(index);
    // Animate new content in
    gsap.fromTo(
      '.facilities-content > *',
      { y: 30, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, duration: 0.5, stagger: 0.08, ease: 'power2.out' }
    );
  };

  return (
    <section className="facilities section" id="facilities" ref={container}>
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Our Facilities</span>
          <h2 className="section-title">World-Class Venues & Experiences</h2>
          <div className="gold-line" />
          <p className="section-desc">
            Discover our premium banquet halls, luxury rooms, and bespoke event experiences designed for perfection.
          </p>
        </div>

        <div className="facilities-tabs">
          {TABS.map((tab, i) => (
            <button
              key={tab}
              className={`facilities-tab ${activeTab === i ? 'active' : ''}`}
              onClick={() => handleTabChange(i)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="facilities-content">
          {activeTab === 0 && (
            <div className="halls-grid">
              {HALLS.map((hall, i) => (
                <div className="hall-card" key={i}>
                  <div className="hall-card-image-wrap">
                    <img
                      className="hall-card-image"
                      src={IMAGES.halls[hall.image]}
                      alt={hall.name}
                      loading="lazy"
                    />
                    <span className="hall-card-badge">{hall.capacity}</span>
                  </div>
                  <div className="hall-card-body">
                    <h3>{hall.name}</h3>
                    <p>{hall.desc}</p>
                    <div className="hall-features">
                      {hall.features.map((f, fi) => (
                        <span className="hall-feature-tag" key={fi}>{f}</span>
                      ))}
                    </div>
                    <button className="btn btn-outline" style={{ width: '100%' }}>
                      Inquire Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 1 && (
            <div className="rooms-grid">
              {LUXURY_ROOMS.map((room, i) => (
                <div className="room-card" key={i}>
                  <h3>{room.name}</h3>
                  <div className="room-card-price">{room.price}</div>
                  <div className="room-card-price-label">per night</div>
                  <div className="room-amenities">
                    {room.amenities.map((a, ai) => (
                      <div className="room-amenity" key={ai}>
                        <span className="room-amenity-check">✓</span>
                        {a}
                      </div>
                    ))}
                  </div>
                  <button className="btn btn-primary" style={{ width: '100%' }}>
                    Book Now
                  </button>
                </div>
              ))}
            </div>
          )}

          {activeTab === 2 && (
            <div className="events-grid">
              {EVENT_EXPERIENCES.map((event, i) => (
                <div className="event-pill" key={i}>
                  <span className="event-pill-icon">{EVENT_ICONS[i] || '✦'}</span>
                  {event}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
