import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { WHY_CHOOSE_US } from '../data/content';
import IMAGES from '../data/images';
import './WhyChooseUs.css';

gsap.registerPlugin(ScrollTrigger);

const ICON_MAP = {
  bed: '🛏️',
  calendar: '📅',
  mountain: '⛰️',
  utensils: '🍽️',
  heart: '❤️',
  building: '🏛️',
  crown: '👑',
  tree: '🌳',
};

export default function WhyChooseUs() {
  const container = useRef(null);

  useGSAP(() => {
    // Removed image parallax

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

    gsap.fromTo('.why-card',
      { y: 60, autoAlpha: 0 },
      {
        y: 0, autoAlpha: 1,
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

  return (
    <section className="why-choose section" id="why-choose" ref={container}>
      {/* Animated Background */}
      <div className="why-choose-bg animated-bg">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
        <div className="why-choose-overlay" />
      </div>
      
      {/* Central glowing accent */}
      <div className="why-accent" />

      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Why Choose Us</span>
          <h2 className="section-title">An Experience Beyond Compare</h2>
          <div className="gold-line" />
          <p className="section-desc">
            Every detail is meticulously crafted to ensure your celebration is nothing short of extraordinary.
          </p>
        </div>

        <div className="why-choose-grid">
          {WHY_CHOOSE_US.map((item, i) => (
            <div className="why-card" key={i}>
              <div className="why-card-icon">
                {ICON_MAP[item.icon] || '✦'}
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
