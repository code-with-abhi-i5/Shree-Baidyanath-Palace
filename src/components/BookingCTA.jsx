import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { BOOKING_CTA, RESORT_INFO } from '../data/content';
import IMAGES from '../data/images';
import './BookingCTA.css';

gsap.registerPlugin(ScrollTrigger);

export default function BookingCTA() {
  const container = useRef(null);

  useGSAP(() => {
    gsap.fromTo('.booking-cta-content > *',
      { y: 50, autoAlpha: 0 },
      {
        y: 0, autoAlpha: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: container.current,
          start: 'top 70%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, { scope: container });

  return (
    <section className="booking-cta" ref={container}>
      <div className="booking-cta-bg">
        <img src={IMAGES.bookingCta} alt="Resort view" loading="lazy" />
        <div className="booking-cta-overlay" />
      </div>

      <div className="booking-particle" />
      <div className="booking-particle" />
      <div className="booking-particle" />
      <div className="booking-particle" />
      <div className="booking-particle" />
      <div className="booking-particle" />

      <div className="container">
        <div className="booking-cta-content">
          <h2>{BOOKING_CTA.headline}</h2>
          <p>{BOOKING_CTA.subtext}</p>
          <div className="booking-cta-buttons">
            <button className="btn btn-primary" id="cta-book-now">
              {BOOKING_CTA.buttons.book}
            </button>
            <a href={`tel:${RESORT_INFO.phone}`} className="btn btn-call">
              📞 {BOOKING_CTA.buttons.call}
            </a>
            <a
              href={`https://wa.me/${RESORT_INFO.whatsapp}?text=Hi, I would like to inquire about your resort services.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              💬 {BOOKING_CTA.buttons.whatsapp}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
