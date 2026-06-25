import { useRef, useState, useEffect, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { TESTIMONIALS } from '../data/content';
import IMAGES from '../data/images';
import './Testimonials.css';

gsap.registerPlugin(ScrollTrigger);

export default function Testimonials() {
  const container = useRef(null);
  const [current, setCurrent] = useState(0);
  const cardRef = useRef(null);

  const animateCard = useCallback(() => {
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { autoAlpha: 0, y: 30 },
        { autoAlpha: 1, y: 0, duration: 0.5, ease: 'power2.out' }
      );
    }
  }, []);

  const goTo = useCallback((index) => {
    if (cardRef.current) {
      gsap.to(cardRef.current, {
        autoAlpha: 0,
        y: -20,
        duration: 0.3,
        ease: 'power2.in',
        onComplete: () => {
          setCurrent(index);
          animateCard();
        },
      });
    } else {
      setCurrent(index);
    }
  }, [animateCard]);

  const next = useCallback(() => {
    goTo((current + 1) % TESTIMONIALS.length);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, [current, goTo]);

  // Auto-play
  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

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

  const t = TESTIMONIALS[current];

  return (
    <section className="testimonials section" id="testimonials" ref={container}>
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Testimonials</span>
          <h2 className="section-title">Words from Our Cherished Guests</h2>
          <div className="gold-line" />
        </div>

        <div className="testimonials-carousel">
          <div className="testimonials-track">
            <div className="testimonial-card" ref={cardRef}>
              <img
                className="testimonial-avatar"
                src={IMAGES.testimonials[t.avatar]}
                alt={t.name}
                loading="lazy"
              />
              <div className="testimonial-stars">
                {Array.from({ length: t.rating }, (_, i) => (
                  <span className="testimonial-star" key={i}>★</span>
                ))}
              </div>
              <p className="testimonial-review">{t.review}</p>
              <div className="testimonial-name">{t.name}</div>
              <div className="testimonial-role">{t.role}</div>
            </div>
          </div>

          <div className="testimonials-nav">
            <button
              className="testimonials-arrow"
              onClick={prev}
              aria-label="Previous testimonial"
            >
              ←
            </button>
            <div className="testimonials-dots">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  className={`testimonials-dot ${current === i ? 'active' : ''}`}
                  onClick={() => goTo(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              className="testimonials-arrow"
              onClick={next}
              aria-label="Next testimonial"
            >
              →
            </button>
          </div>
        </div>

        {/* Google Review CTA */}
        <div className="testimonials-review-cta">
          <p className="testimonials-review-text">Had a wonderful experience? Share your review with others!</p>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--accent testimonials-review-btn"
            id="google-review-btn"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
            </svg>
            Review on Google
          </a>
        </div>
      </div>
    </section>
  );
}
