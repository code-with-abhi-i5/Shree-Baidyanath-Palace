import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { STATISTICS } from '../data/content';
import './Statistics.css';

gsap.registerPlugin(ScrollTrigger);

export default function Statistics() {
  const container = useRef(null);

  useGSAP(() => {
    // Animate counters when visible
    const statValues = container.current.querySelectorAll('.stat-number');

    statValues.forEach((el) => {
      const target = parseInt(el.dataset.target, 10);

      gsap.from(el, {
        textContent: 0,
        duration: 2,
        ease: 'power1.out',
        snap: { textContent: 1 },
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        onUpdate: function () {
          el.textContent = Math.ceil(parseFloat(el.textContent));
        },
      });
    });

    // Fade in stat items
    gsap.fromTo('.stat-item',
      { y: 40, autoAlpha: 0 },
      {
        y: 0, autoAlpha: 1,
        duration: 0.7,
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

  return (
    <section className="statistics section" id="statistics" ref={container}>
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Our Legacy</span>
          <h2 className="section-title">Numbers That Speak Excellence</h2>
          <div className="gold-line" />
        </div>

        <div className="statistics-grid">
          {STATISTICS.map((stat, i) => (
            <div className="stat-item" key={i}>
              <div className="stat-value">
                <span className="stat-number" data-target={stat.value}>
                  {stat.value}
                </span>
                <span>{stat.suffix}</span>
              </div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
