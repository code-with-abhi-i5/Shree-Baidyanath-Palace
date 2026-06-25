import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ABOUT_CONTENT } from '../data/content';
import IMAGES from '../data/images';
import './About.css';

gsap.registerPlugin(ScrollTrigger);

const ICONS = {
  crown: '♛',
  leaf: '🌿',
  sparkle: '✦',
};

export default function About() {
  const container = useRef(null);

  useGSAP(() => {
    gsap.fromTo('.about-image-frame',
      { x: -80, autoAlpha: 0 },
      {
        x: 0, autoAlpha: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: container.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    );

    gsap.fromTo('.about-content > *',
      { y: 50, autoAlpha: 0 },
      {
        y: 0, autoAlpha: 1,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: container.current,
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
      }
    );

    gsap.fromTo('.about-feature',
      { x: 40, autoAlpha: 0 },
      {
        x: 0, autoAlpha: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: container.current,
          start: 'top 65%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, { scope: container });

  return (
    <section className="about section" id="about" ref={container}>
      <div className="container">
        <div className="about-grid">
          <div className="about-image-wrap">
            <div className="about-image-frame">
              <div className="about-slider">
                {IMAGES.aboutSlider.map((img, i) => (
                  <img
                    key={i}
                    className="about-slider-img"
                    src={img}
                    alt={`Baidyanath Resort ${i + 1}`}
                    loading="lazy"
                  />
                ))}
              </div>
            </div>
            <div className="about-image-accent" />
          </div>

          <div className="about-content">
            <span className="section-subtitle">{ABOUT_CONTENT.subtitle}</span>
            <h2 className="section-title">{ABOUT_CONTENT.sectionTitle}</h2>
            <div className="gold-line" style={{ margin: '1.5rem 0' }} />

            {ABOUT_CONTENT.paragraphs.map((p, i) => (
              <p key={i} style={{ marginBottom: '1rem' }}>{p}</p>
            ))}

            <div className="about-features">
              {ABOUT_CONTENT.features.map((feat, i) => (
                <div className="about-feature" key={i}>
                  <div className="about-feature-icon">
                    {ICONS[feat.icon] || '✦'}
                  </div>
                  <div>
                    <h4>{feat.title}</h4>
                    <p>{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
