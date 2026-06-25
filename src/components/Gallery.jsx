import { useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { GALLERY_FILTERS, GALLERY_ITEMS } from '../data/content';
import './Gallery.css';

gsap.registerPlugin(ScrollTrigger);

export default function Gallery() {
  const container = useRef(null);
  const [activeFilter, setActiveFilter] = useState('All');
  const [lightbox, setLightbox] = useState(null);

  const filtered = activeFilter === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeFilter);

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

  const handleFilter = (filter) => {
    setActiveFilter(filter);
    // Animate gallery items
    gsap.fromTo(
      '.gallery-item',
      { scale: 0.9, autoAlpha: 0 },
      { scale: 1, autoAlpha: 1, duration: 0.4, stagger: 0.05, ease: 'power2.out' }
    );
  };

  // Lock body scroll for lightbox
  useEffect(() => {
    document.body.style.overflow = lightbox !== null ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [lightbox]);

  return (
    <section className="gallery section" id="gallery" ref={container}>
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Gallery</span>
          <h2 className="section-title">Moments Captured in Elegance</h2>
          <div className="gold-line" />
        </div>

        <div className="gallery-filters">
          {GALLERY_FILTERS.map((filter) => (
            <button
              key={filter}
              className={`gallery-filter ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => handleFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="gallery-grid">
          {filtered.map((item, i) => (
            <div
              className="gallery-item"
              key={`${item.category}-${i}`}
              onClick={() => setLightbox(item)}
            >
              <img src={item.src} alt={item.alt} loading="lazy" />
              <div className="gallery-item-overlay">
                <div>
                  <span className="gallery-item-category">{item.category}</span>
                  <span className="gallery-item-label">{item.alt}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightbox && (
        <div className="gallery-lightbox" onClick={() => setLightbox(null)}>
          <button
            className="gallery-lightbox-close"
            onClick={() => setLightbox(null)}
            aria-label="Close lightbox"
          >
            ✕
          </button>
          <img src={lightbox.src.replace('w=600', 'w=1200')} alt={lightbox.alt} />
        </div>
      )}
    </section>
  );
}
