import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { AMENITIES } from '../data/content';
import IMAGES from '../data/images';
import './Amenities.css';

gsap.registerPlugin(ScrollTrigger);

const ICON_MAP = {
  wifi: '📶',
  car: '🚗',
  park: '🏞️',
  tree: '🌳',
  building: '🏛️',
  playground: '🎠',
  bolt: '⚡',
  headset: '🎧',
};

export default function Amenities() {
  const container = useRef(null);

  useGSAP(() => {
    // Parallax background
    gsap.to('.amenities-bg img', {
      yPercent: 15,
      ease: 'none',
      scrollTrigger: {
        trigger: container.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });

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

    gsap.fromTo('.amenity-card',
      { y: 50, autoAlpha: 0 },
      {
        y: 0, autoAlpha: 1,
        duration: 0.6,
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
    <section className="amenities section" id="amenities" ref={container}>
      {/* Cinematic Background */}
      <div className="amenities-bg">
        <img src={IMAGES.exterior[0]} alt="Resort Amenities" loading="lazy" />
        <div className="amenities-overlay" />
      </div>

      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Amenities</span>
          <h2 className="section-title">Premium Comforts, Everywhere</h2>
          <div className="gold-line" />
          <p className="section-desc">
            Every amenity is thoughtfully curated to ensure your stay is seamless, comfortable, and truly luxurious.
          </p>
        </div>

        <div className="amenities-grid">
          {AMENITIES.map((amenity, i) => (
            <div className="amenity-card" key={i}>
              <div className="amenity-icon">
                {ICON_MAP[amenity.icon] || '✦'}
              </div>
              <h4>{amenity.title}</h4>
              <p>{amenity.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
