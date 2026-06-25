import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { SERVICES } from '../data/content';
import IMAGES from '../data/images';
import './Services.css';

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const container = useRef(null);

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

    gsap.fromTo('.service-card',
      { y: 80, autoAlpha: 0, scale: 0.95 },
      {
        y: 0, autoAlpha: 1, scale: 1,
        duration: 0.7,
        stagger: 0.08,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: container.current,
          start: 'top 65%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, { scope: container });

  return (
    <section className="services section" id="services" ref={container}>
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Our Services</span>
          <h2 className="section-title">Crafting Unforgettable Experiences</h2>
          <div className="gold-line" />
          <p className="section-desc">
            From dream weddings to luxury stays, every service is designed to exceed expectations and create lasting memories.
          </p>
        </div>

        <div className="services-grid">
          {SERVICES.map((service, i) => (
            <div className="service-card" key={service.id}>
              <img
                className="service-card-image"
                src={IMAGES.services[service.id]}
                alt={service.title}
                loading="lazy"
              />
              <div className="service-card-overlay" />
              <div className="service-card-content">
                <div className="service-card-number">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3>{service.title}</h3>
                <p className="service-card-desc">{service.desc}</p>
                <span className="service-card-cta">
                  {service.cta} <span className="service-card-cta-arrow">→</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
